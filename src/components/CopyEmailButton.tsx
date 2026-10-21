"use client";

import { useState } from "react";
import { CheckIcon, CopyIcon } from "./Icons";
import { siteConfig } from "@/data/portfolio";

/**
 * Email CTA button that copies the address to the clipboard,
 * showing a checkmark confirmation for a second and a half.
 */
export function CopyEmailButton() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard unavailable (e.g. permissions) — do nothing visible
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-live="polite"
      className="btn-ghost font-mono"
    >
      {copied ? (
        <>
          <CheckIcon className="size-4 text-emerald-400" />
          Copied to clipboard
        </>
      ) : (
        <>
          <CopyIcon className="size-4" />
          {siteConfig.email}
        </>
      )}
    </button>
  );
}
