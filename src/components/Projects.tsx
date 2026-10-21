import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { ArrowUpRightIcon, FolderIcon, GitHubIcon } from "./Icons";
import { projects } from "@/data/portfolio";

export function Projects() {
  return (
    <section id="projects" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="container-site">
        <SectionHeading
          index="03"
          title="Selected projects"
          description="A few things I've designed, built and shipped — each taught me something new."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={(i % 2) * 120}>
              <article className="card group relative flex h-full flex-col transition duration-300 hover:border-violet-400/30 hover:bg-white/5">
                <div className="mb-6 flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <span className="rounded-lg border border-white/10 bg-white/5 p-2.5 text-violet-300 transition group-hover:text-violet-200">
                      <FolderIcon className="size-5" />
                    </span>
                    <span className="font-mono text-xs tracking-widest text-zinc-500">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="flex items-center gap-1">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} on GitHub`}
                        className="rounded-lg p-2 text-zinc-400 transition hover:bg-white/5 hover:text-zinc-100"
                      >
                        <GitHubIcon className="size-4.5" />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} live demo`}
                        className="rounded-lg p-2 text-zinc-400 transition hover:bg-white/5 hover:text-zinc-100"
                      >
                        <ArrowUpRightIcon className="size-4.5" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="font-display text-xl font-semibold text-zinc-50">
                  {project.title}
                  <span className="mx-2 text-zinc-600" aria-hidden>/</span>
                  <span className="text-base font-normal text-zinc-400">
                    {project.subtitle}
                  </span>
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">
                  {project.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li key={tag} className="chip font-mono text-[0.7rem]">
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <div className="mt-10 text-center">
            <a
              // TODO: point this at your real GitHub profile
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <GitHubIcon className="size-4" />
              See more on GitHub
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
