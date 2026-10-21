"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { gmailComposeHref, navLinks, siteConfig } from "@/data/portfolio";
import { CloseIcon, MenuIcon } from "./Icons";
import logo from "@/assets/Ozayer-removebg-preview.png";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);

  // Track which section is in view for the scroll indicator
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-35% 0px -60% 0px" },
    );

    for (const link of navLinks) {
      const section = document.getElementById(link.id);
      if (section) observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  // Compact shadow once the page is scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = (id: string) =>
    [
      "relative transition-colors duration-200",
      active === id ? "text-zinc-50" : "text-zinc-400 hover:text-zinc-100",
    ].join(" ");

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open
          ? "border-white/5 bg-[#05060d]/85 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="container-site flex h-16 items-center justify-between md:h-18">
        <a
          href="#top"
          className="group flex items-center gap-2.5"
          aria-label="Back to top"
        >
          <Image
            src={logo}
            alt=""
            width={28}
            height={28}
            className="transition-transform duration-300 group-hover:rotate-6"
            // The source logo is black-on-transparent; invert it for the dark theme
            style={{ filter: "invert(1)" }}
            priority
          />
          <span className="font-display text-lg font-semibold tracking-tight text-zinc-50">
            {siteConfig.name}
            <span className="text-violet-400">.</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={linkClass(link.id)}
            >
              {link.label}
              {active === link.id && (
                <span
                  aria-hidden
                  className="absolute -bottom-1.5 left-0 h-px w-full bg-linear-to-r from-violet-400 to-sky-400"
                />
              )}
            </a>
          ))}
          <a
            href={gmailComposeHref}
            className="rounded-full border border-violet-400/40 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-200 transition hover:bg-violet-500/20 hover:text-zinc-50"
          >
            Hire me
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-zinc-300 transition hover:bg-white/5 hover:text-zinc-50 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <CloseIcon className="size-6" />
          ) : (
            <MenuIcon className="size-6" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`overflow-hidden md:hidden ${
          open ? "max-h-96 border-b border-white/5" : "max-h-0"
        } bg-[#05060d]/95 backdrop-blur-md transition-[max-height] duration-300 ease-out`}
      >
        <div className="container-site flex flex-col gap-1 py-4">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setOpen(false)}
              className={`rounded-lg px-3 py-2.5 text-base transition hover:bg-white/5 ${
                active === link.id
                  ? "text-zinc-50"
                  : "text-zinc-400 hover:text-zinc-100"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href={gmailComposeHref}
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full border border-violet-400/40 bg-violet-500/10 px-4 py-2.5 text-center text-sm font-medium text-violet-200 transition hover:bg-violet-500/20 hover:text-zinc-50"
          >
            Hire me
          </a>
        </div>
      </div>
    </header>
  );
}
