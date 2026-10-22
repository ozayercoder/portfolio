import Image from "next/image";
import { Reveal } from "./Reveal";
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  MapPinIcon,
  XIcon,
} from "./Icons";
import { CopyEmailButton } from "./CopyEmailButton";
import { gmailComposeHref, siteConfig, socials } from "@/data/portfolio";
import cartoon from "@/assets/cartoon.jpg";

const socialIcons = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  x: XIcon,
  mail: MailIcon,
} as const;

export function Contact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden py-24 md:py-32"
    >
      {/* ambient glow */}
      <div
        aria-hidden
        className="absolute bottom-0 left-1/2 h-72 w-2xl max-w-full -translate-x-1/2 rounded-full bg-violet-600/15 blur-3xl"
      />

      <div className="container-site relative grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        {/* ── Copy + actions ── */}
        <div className="text-center lg:text-start">
          <Reveal>
            <p className="font-mono text-sm tracking-widest text-accent-bright/90 uppercase">
              {`05 // What's next?`}
            </p>
            <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-ink sm:text-5xl md:text-6xl">
              Let&apos;s build something{" "}
              <span className="text-gradient">great</span> together.
            </h2>
            <p className="mt-5 leading-relaxed text-ink-mid md:text-lg lg:max-w-xl">
              Whether you have a role in mind, a project to kick off, or just
              want to talk shop — my inbox is always open.
            </p>
          </Reveal>

          {/* Email actions: mail app / Gmail compose / copy */}
          <Reveal delay={150}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <a
                href={gmailComposeHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <MailIcon className="size-4" />
                Say hello
              </a>

              <CopyEmailButton />
            </div>
            <p className="mt-3 font-mono text-xs tracking-wider text-ink-muted lg:text-start">
              No mail app? Gmail opens in your browser — or copy the address.
            </p>
          </Reveal>

          <Reveal delay={250}>
            <div className="mt-12 flex flex-col items-center justify-center gap-5 md:flex-row md:gap-10 lg:justify-start lg:gap-8">
              <p className="font-mono flex items-center gap-2 text-xs tracking-wider text-ink-muted uppercase">
                <MapPinIcon className="size-4 shrink-0 text-violet-400" />
                {siteConfig.location}
              </p>
              <p className="font-mono flex items-center gap-2 text-xs tracking-wider whitespace-nowrap text-emerald-300/90 uppercase">
                <span className="relative flex size-2 shrink-0">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
                </span>
                {siteConfig.availability}
              </p>
            </div>

            <div className="mt-6 flex items-center justify-center gap-3 lg:justify-start">
              {socials.map((social) => {
                const Icon = socialIcons[social.icon];
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="rounded-full border border-line-strong p-3 text-ink-mid transition hover:border-violet-400/40 hover:text-accent-bright"
                  >
                    <Icon className="size-4.5" />
                  </a>
                );
              })}
            </div>
          </Reveal>
        </div>

        {/* ── Cartoon avatar ── */}
        <Reveal
          delay={250}
          className="relative mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-none lg:justify-self-center"
        >
          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-6 rounded-t-full rounded-b-3xl bg-linear-to-tr from-violet-600/25 via-fuchsia-500/15 to-sky-500/25 blur-2xl"
            />
            <Image
              src={cartoon}
              alt={`Cartoon avatar of ${siteConfig.name} giving a thumbs up`}
              className="relative h-auto w-full rounded-t-full rounded-b-3xl border border-line-strong shadow-2xl shadow-violet-950/40"
            />
          </div>

          <div
            aria-hidden
            className="animate-float absolute -top-3 right-0 rounded-xl border border-line-strong bg-surface-glass px-3.5 py-2 font-mono text-xs text-ink-soft shadow-lg backdrop-blur"
          >
            New projects <span className="text-emerald-400">✓</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
