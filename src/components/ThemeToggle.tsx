
"use client";

import { MoonIcon, SunIcon } from "./Icons";

const STORAGE_KEY = "theme";

export function ThemeToggle() {
  const toggleTheme = () => {
    const root = document.documentElement;
    const isLight = root.classList.contains("light");
    const nextTheme = isLight ? "dark" : "light";

    root.classList.toggle("light", nextTheme === "light");

    try {
      localStorage.setItem(STORAGE_KEY, nextTheme);
    } catch {
      // Theme still applies for this visit.
    }
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="inline-flex items-center justify-center rounded-xl border border-line p-2 text-ink-mid transition hover:border-violet-400/40 hover:text-accent-bright"
    >
      <SunIcon className="size-4.5 dark-theme-icon" />
      <MoonIcon className="size-4.5 light-theme-icon" />
    </button>
  );
}
