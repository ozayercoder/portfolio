import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { experience } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="container-site lg:max-w-4xl">
        <SectionHeading
          index="04"
          title="Experience"
          description="Where I've worked, studied, and picked up the fundamentals."
        />

        <ol className="relative space-y-10 border-l border-line-strong pl-7 md:pl-9">
          {experience.map((item, i) => (
            <li key={item.role} className="relative">
              {/* timeline node */}
              <span
                aria-hidden
                className={`absolute top-1.5 -left-7.25 size-3 rounded-full border-2 border-base md:-left-9.25 ${
                  i === 0
                    ? "bg-violet-400 shadow-[0_0_12px_rgba(167,139,250,0.7)]"
                    : "bg-ink-faint"
                }`}
              />
              <Reveal delay={i * 120}>
                <p className="font-mono text-xs tracking-widest text-ink-muted uppercase">
                  {item.period}
                  <span
                    className={`ml-3 rounded-full px-2 py-0.5 text-[0.65rem] tracking-wider ${
                      item.type === "work"
                        ? "bg-violet-500/15 text-accent-bright"
                        : "bg-sky-500/15 text-info"
                    }`}
                  >
                    {item.type === "work" ? "Work" : "Education"}
                  </span>
                </p>
                <h3 className="font-display mt-2 text-lg font-semibold text-ink md:text-xl">
                  {item.role}
                </h3>
                <p className="mt-0.5 text-sm text-ink-mid">{item.org}</p>
                <ul className="mt-3 space-y-2">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2.5 text-sm leading-relaxed text-ink-muted"
                    >
                      <span
                        aria-hidden
                        className="mt-2 size-1 shrink-0 rounded-full bg-violet-400/70"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <li key={tag} className="chip font-mono text-[0.7rem]">
                      {tag}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
