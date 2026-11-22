"use client";

import { useEffect, useState } from "react";

/** sessionStorage flag — written when the intro finishes, read pre-paint and on mount. */
const STORAGE_KEY = "intro-seen";

/** The CSS timeline is 3.5s; unmount just after the final fade completes. */
const UNMOUNT_MS = 3600;

/**
 * The overlay reaches full opacity at 13% of the 3.5s timeline (455ms).
 * The static cover stays underneath until just after that, so the page is
 * never visible through the still-transparent overlay. Must stay in sync
 * with the 13% keyframe of `intro-overlay` in globals.css.
 */
const ENTRANCE_MS = 500;

/**
 * Cinematic logo reveal, shown once per browser session.
 *
 * - Server render and first client render are always `null` — browser APIs
 *   are only touched inside `useEffect`, so there is no hydration mismatch.
 * - A tiny inline script in the root layout paints a static charcoal cover
 *   (`html.intro-pending`) before first paint; this component takes over
 *   with the animated overlay and removes that class only once the overlay
 *   has faded in to full opacity, so the site never flashes through.
 * - Repeat visits and `prefers-reduced-motion` skip everything entirely.
 * - The logo itself is the existing site logo (byte-identical to
 *   `favicon.ico`); its alpha channel masks a purple gradient in CSS —
 *   no filters, no recoloured asset files.
 */
export function IntroAnimation() {
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const root = document.documentElement;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let seen = false;
    try {
      seen = sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      // Storage unavailable (private mode) — play the intro anyway.
    }

    if (reducedMotion || seen) {
      root.classList.remove("intro-pending");
      return;
    }

    root.classList.add("intro-lock");

    // Reveal the overlay from an animation frame (not the effect body) so
    // server render and first client render both stay `null`.
    const raf1 = requestAnimationFrame(() => setPlaying(true));

    const finish = () => {
      setPlaying(false);
      root.classList.remove("intro-lock", "intro-pending");
      try {
        sessionStorage.setItem(STORAGE_KEY, "1");
      } catch {
        // Storage unavailable — intro will simply play again next visit.
      }
    };

    const timer = window.setTimeout(finish, UNMOUNT_MS);

    // Cleanup on unmount: never leave the page scroll-locked.
    // `intro-pending` is deliberately left alone here — React's Strict Mode
    // double-invokes effects in dev, which would drop the cover before the
    // intro starts. If the component ever unmounts mid-intro, the 6s CSS
    // failsafe on the cover releases the page on its own.
    return () => {
      cancelAnimationFrame(raf1);
      window.clearTimeout(timer);
      root.classList.remove("intro-lock");
    };
  }, []);

  // Hand off from the static cover to the animated overlay only once the
  // overlay has faded in to full opacity — dropping it earlier (the old
  // double-rAF handoff) revealed the site through the transparent overlay.
  useEffect(() => {
    if (!playing) return;
    const timer = window.setTimeout(() => {
      document.documentElement.classList.remove("intro-pending");
    }, ENTRANCE_MS);
    return () => window.clearTimeout(timer);
  }, [playing]);

  if (!playing) return null;

  return (
    <div className="intro-overlay" role="presentation" aria-hidden="true">
      <div className="intro-stage">
        <div className="intro-halo" />
        <div className="intro-ring intro-ring-inner" />
        <div className="intro-ring intro-ring-outer" />
        <div className="intro-logo">
          <span className="intro-sweep" />
        </div>
      </div>
    </div>
  );
}
