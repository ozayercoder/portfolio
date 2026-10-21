import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { MonitorIcon, ServerIcon, WrenchIcon } from "./Icons";
import { skillGroups } from "@/data/portfolio";

const groupIcons = {
  frontend: MonitorIcon,
  backend: ServerIcon,
  tools: WrenchIcon,
} as const;

export function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-24 py-24 md:py-32">
      {/* ambient glow */}
      <div
        aria-hidden
        className="absolute top-1/3 -left-48 h-96 w-96 rounded-full bg-violet-600/10 blur-3xl"
      />

      <div className="container-site relative">
        <SectionHeading
          index="02"
          title="Skills & stack"
          description="The technologies I reach for when building products end to end."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {skillGroups.map((group, i) => {
            const Icon = groupIcons[group.name];
            return (
              <Reveal key={group.title} delay={i * 120}>
                <article className="card group h-full">
                  <div className="mb-5 flex size-11 items-center justify-center rounded-xl border border-violet-400/25 bg-violet-500/12 text-violet-300 transition group-hover:border-violet-400/50">
                    <Icon className="size-5.5" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-zinc-50">
                    {group.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-zinc-500">
                    {group.blurb}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <li
                        key={skill}
                        className="chip transition hover:border-violet-400/40 hover:text-violet-200"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
