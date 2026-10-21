import Image from "next/image";
import { ArrowUpIcon } from "./Icons";
import { siteConfig } from "@/data/portfolio";
import logo from "@/assets/Ozayer-removebg-preview.png";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-8">
      <div className="container-site flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2 text-sm text-zinc-500">
          <Image
            src={logo}
            alt=""
            width={18}
            height={18}
            style={{ filter: "invert(1)" }}
          />
          <span>
            © {year} {siteConfig.name}. All rights reserved.
          </span>
        </div>

        <p className="font-mono text-xs tracking-wider text-zinc-600 uppercase">
          Built with Next.js · Tailwind CSS
        </p>

        <a
          href="#top"
          aria-label="Back to top"
          className="rounded-full border border-white/10 p-2.5 text-zinc-400 transition hover:border-violet-400/40 hover:text-violet-300"
        >
          <ArrowUpIcon className="size-4" />
        </a>
      </div>
    </footer>
  );
}
