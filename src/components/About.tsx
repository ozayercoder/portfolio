import Image from "next/image";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import {
  ArrowUpRightIcon,
  DownloadIcon,
  MapPinIcon,
  MailIcon,
  MonitorIcon,
  ServerIcon,
} from "./Icons";
import { aboutParagraphs, mailtoHref, siteConfig, stats } from "@/data/portfolio";
import profilePhoto from "@/assets/hero-pic.png";

type QuickFact = {
  icon: typeof MapPinIcon;
  label: string;
  value: string;
  href?: string;
};

const quickFacts: QuickFact[] = [
  {
    icon: MapPinIcon,
    label: "Based in",
    value: `${siteConfig.location} · ${siteConfig.timezone}`,
  },
  { icon: MonitorIcon, label: "Focus", value: "Frontend-heavy full stack" },
  { icon: ServerIcon, label: "Backend", value: "Node.js · REST · SQL" },
  {
    icon: MailIcon,
    label: "Email",
    value: siteConfig.email,
    href: mailtoHref,
  },
];

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="container-site">
        <SectionHeading
          index="01"
          title="About me"
          description="A quick look at who I am, how I work, and what I'm after."
        />

        <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          {/* Photo card */}
          <Reveal className="relative mx-auto w-full max-w-md">
            <div className="rounded-3xl bg-linear-to-b from-violet-400/40 via-white/8 to-sky-400/30 p-1">
              <Image
                src={profilePhoto}
                alt={`Professional photo of ${siteConfig.name}`}
                className="h-auto w-full rounded-[1.35rem]"
                placeholder="blur"
              />
            </div>
            <p className="font-mono mt-4 text-center text-xs tracking-widest text-zinc-500 uppercase">
              Software Engineer · {siteConfig.name}
            </p>
          </Reveal>

          {/* Bio + facts */}
          <div>
            <div className="bio">
              {aboutParagraphs.map((paragraph, i) => (
                <Reveal key={i} delay={i * 100}>
                  <p className="mb-4 text-base leading-relaxed text-zinc-400 md:text-[1.05rem]">
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={200}>
              <dl className="mt-8 grid gap-x-8 gap-y-5 sm:grid-cols-2">
                {quickFacts.map((fact) => (
                  <div key={fact.label} className="flex items-start gap-3">
                    <span className="mt-0.5 rounded-lg border border-white/10 bg-white/5 p-2 text-violet-300">
                      <fact.icon className="size-4" />
                    </span>
                    <div>
                      <dt className="font-mono text-[0.65rem] tracking-widest text-zinc-500 uppercase">
                        {fact.label}
                      </dt>
                      <dd className="mt-0.5 text-sm text-zinc-300">
                        {fact.href ? (
                          <a
                            href={fact.href}
                            className="transition-colors hover:text-violet-300"
                          >
                            {fact.value}
                          </a>
                        ) : (
                          fact.value
                        )}
                      </dd>
                    </div>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href={siteConfig.resumeUrl} className="btn-primary" target="_blank" download>
                  <DownloadIcon className="size-4" />
                  Download résumé
                </a>
                <a href="#contact" className="btn-ghost">
                  Contact me
                  <ArrowUpRightIcon className="size-4" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Stats */}
        <dl className="mt-16 grid grid-cols-2 gap-4 md:mt-24 md:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 100}>
              <div className="card h-full px-6 py-7 text-center">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-gradient text-3xl font-bold md:text-4xl">
                  {stat.value}
                </dd>
                <dd className="mt-2 text-sm text-zinc-400">{stat.label}</dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
