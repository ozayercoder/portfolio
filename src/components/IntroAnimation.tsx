"use client";

import { useEffect, useState } from "react";

/** sessionStorage flag — written when the intro finishes, read pre-paint and on mount. */
const STORAGE_KEY = "intro-seen";

/** The CSS timeline is 2.2s; unmount just after the final fade completes. */
const UNMOUNT_MS = 2300;

/**
 * Cinematic logo reveal, shown once per browser session.
 *
 * - Server render and first client render are always `null` — browser APIs
 *   are only touched inside `useEffect`, so there is no hydration mismatch.
 * - A tiny inline script in the root layout paints a static charcoal cover
 *   (`html.intro-pending`) before first paint; this component takes over
 *   with the animated overlay and removes that class only after the
 *   overlay has actually painted (double rAF), so nothing ever flashes.
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

    // Reveal the overlay from an animation frame (not the effect body), then
    // drop the static cover only once the overlay has definitely painted —
    // both share the same background colour, so the swap is invisible.
    let raf2 = 0;
    let raf3 = 0;
    const raf1 = requestAnimationFrame(() => {
      setPlaying(true);
      raf2 = requestAnimationFrame(() => {
        raf3 = requestAnimationFrame(() => {
          root.classList.remove("intro-pending");
        });
      });
    });

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

    // Cleanup on unmount: never leave the page scroll-locked or covered.
    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
      cancelAnimationFrame(raf3);
      window.clearTimeout(timer);
      root.classList.remove("intro-lock", "intro-pending");
    };
  }, []);

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
