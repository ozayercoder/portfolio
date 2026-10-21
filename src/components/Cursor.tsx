"use client";

import { useEffect, useRef } from "react";

/** Elements that make the cursor ring expand. */
const INTERACTIVE =
  'a, button, [role="button"], input, textarea, select, label, summary';

const DOT_SIZE = 8;
const RING_SIZE = 40;

/**
 * Custom cursor: a small dot that tracks the pointer instantly plus a
 * larger ring that follows with an easing lag. The ring expands over
 * links/buttons and squashes on click.
 *
 * Desktop-only — touch devices keep their native behaviour, and the
 * effect is skipped entirely under `prefers-reduced-motion`. Position
 * updates are applied through refs inside a rAF loop, so there are no
 * re-renders at 60fps.
 */
export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!finePointer.matches || reducedMotion.matches) return;

    // Hide the native cursor while the custom one is active
    document.documentElement.classList.add("custom-cursor");

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let ringScale = 1;
    let dotScale = 1;
    let hovering = false;
    let pressed = false;
    let frame = 0;

    const onPointerMove = (event: PointerEvent) => {
      // Touch "pointermove" events (e.g. tap-drag) shouldn't reveal the cursor
      if (event.pointerType === "touch") return;
      mouseX = event.clientX;
      mouseY = event.clientY;
      dot.style.opacity = "1";
      ring.style.opacity = "1";
    };

    const onPointerOver = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target : null;
      hovering = Boolean(target?.closest(INTERACTIVE));
    };

    const onPointerDown = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      pressed = true;
    };
    const onPointerUp = () => {
      pressed = false;
    };

    const onMouseLeave = () => {
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };

    const loop = () => {
      // Ring follows the pointer with a lerp for the trailing feel,
      // and scales smoothly towards its target size.
      const targetScale = pressed ? 0.7 : hovering ? 1.8 : 1;
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ringScale += (targetScale - ringScale) * 0.2;
      dotScale += ((pressed ? 0.6 : hovering ? 0.45 : 1) - dotScale) * 0.25;

      dot.style.transform = `translate3d(${
        mouseX - DOT_SIZE / 2
      }px, ${mouseY - DOT_SIZE / 2}px, 0) scale(${dotScale.toFixed(3)})`;
      ring.style.transform = `translate3d(${
        ringX - RING_SIZE / 2
      }px, ${ringY - RING_SIZE / 2}px, 0) scale(${ringScale.toFixed(3)})`;

      frame = requestAnimationFrame(loop);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerover", onPointerOver, { passive: true });
    window.addEventListener("pointerdown", onPointerDown, { passive: true });
    window.addEventListener("pointerup", onPointerUp, { passive: true });
    document.documentElement.addEventListener("mouseleave", onMouseLeave);

    frame = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerover", onPointerOver);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
      document.documentElement.removeEventListener("mouseleave", onMouseLeave);
      document.documentElement.classList.remove("custom-cursor");
    };
  }, []);

  return (
    <>
      <div aria-hidden className="cursor-dot" ref={dotRef} />
      <div aria-hidden className="cursor-ring" ref={ringRef} />
    </>
  );
}
