import Image from "next/image";
import { Reveal } from "./Reveal";
import {
  ArrowUpRightIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  MapPinIcon,
  XIcon,
} from "./Icons";
import { heroTech, siteConfig, socials } from "@/data/portfolio";
import portrait from "@/assets/FLRsL.jpg";

const socialIcons = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  x: XIcon,
  mail: MailIcon,
} as const;

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
    >
      {/* Background */}
      <div aria-hidden className="bg-grid bg-grid-fade absolute inset-0" />

      <div
        aria-hidden
        className="absolute -top-32 left-1/2 h-105 w-3xl max-w-full -translate-x-1/2 rounded-full bg-violet-600/18 blur-3xl"
      />

      <div
        aria-hidden
        className="absolute top-40 -right-40 h-96 w-96 rounded-full bg-sky-500/12 blur-3xl"
      />

      {/* Main layout */}
      <div className="container-site relative grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Left: Introduction */}
        <div className="order-1 min-w-0">
          <Reveal>
            <p className="font-mono text-sm tracking-widest text-accent-bright/90 uppercase">
              {"// "}
              {siteConfig.role}
            </p>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="font-display mt-4 text-4xl font-bold tracking-tight text-ink sm:text-6xl lg:text-7xl">
              Hi, I&apos;m {siteConfig.name}{" "}
              <span className="text-gradient">{siteConfig.tagline}</span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-6 max-w-xl  leading-relaxed text-ink-mid md:text-lg">
              I design and build complete web products — from pixel-perfect
              front ends in React &amp; Next.js to dependable APIs in Node.
              Currently looking for a team where I can ship, learn, and grow.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#projects" className="btn-primary">
                View my work
                <ArrowUpRightIcon className="size-4" />
              </a>

              <a href="#contact" className="btn-ghost">
                Get in touch
              </a>

              <div className="flex items-center gap-2">
                {socials
                  .filter((social) => social.icon !== "mail")
                  .map((social) => {
                    const Icon = socialIcons[social.icon];

                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                        className="rounded-full border border-line-strong p-2.5 text-ink-mid transition hover:border-violet-400/40 hover:text-accent-bright"
                      >
                        <Icon className="size-4.5" />
                      </a>
                    );
                  })}
              </div>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <p className="font-mono mt-10 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs tracking-wider text-ink-muted uppercase">
              {heroTech.map((tech, index) => (
                <span key={tech} className="flex items-center gap-2">
                  {index > 0 && (
                    <span aria-hidden className="text-violet-400/60">
                      ·
                    </span>
                  )}
                  {tech}
                </span>
              ))}
            </p>
          </Reveal>
        </div>

        {/* Right: Portrait */}
        <Reveal
          delay={250}
          className="order-2 relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          {/* Open to work badge */}
          <div
            aria-hidden
            className="animate-float absolute -top-4 -right-2 z-10 rounded-xl border border-line-strong bg-surface-glass px-3.5 py-2 font-mono text-xs text-ink-soft shadow-lg backdrop-blur"
          >
            <span className="text-emerald-400">●</span> Open to work
          </div>

          {/* Portrait and glow */}
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-6 rounded-full bg-linear-to-tr from-violet-600/25 via-fuchsia-500/12 to-sky-500/25 blur-2xl"
            />

            <Image
              src={portrait}
              alt={`Portrait of ${siteConfig.name}`}
              width={1024}
              height={1024}
              priority
              className="relative h-auto w-full rounded-2xl border border-line-strong shadow-2xl shadow-violet-950/40"
            />
          </div>

          {/* Location badge */}
          <div
            aria-hidden
            className="animate-float-delayed absolute -bottom-4 left-2 flex items-center gap-2 rounded-xl border border-line-strong bg-surface-glass px-3.5 py-2 font-mono text-xs text-ink-soft shadow-lg backdrop-blur"
          >
            <MapPinIcon className="size-3.5 text-violet-400" />
            {siteConfig.location}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
