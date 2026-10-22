import Image from "next/image";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { ArrowUpRightIcon, GitHubIcon } from "./Icons";
import { projects, socials, type Project } from "@/data/portfolio";

// Reuse the GitHub profile already defined in the data file.
const githubProfileUrl = socials.find(
  (social) => social.icon === "github",
)?.url;

/** GitHub / live-demo buttons shared by every project card. */
function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex shrink-0 items-center gap-1">
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title} on GitHub`}
          className="rounded-lg p-2 text-ink-mid transition hover:bg-overlay hover:text-ink"
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
          className="rounded-lg p-2 text-ink-mid transition hover:bg-overlay hover:text-ink"
        >
          <ArrowUpRightIcon className="size-4.5" />
        </a>
      )}
    </div>
  );
}

/** Standard card — screenshot on top, details below. */
function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-overlay-soft transition duration-300 hover:border-violet-400/30 hover:bg-overlay">
      {/* Screenshot */}
      <div className="relative aspect-[1.94] w-full overflow-hidden border-b border-line bg-surface">
        <Image
          src={project.image}
          alt={`Screenshot of the ${project.title} project`}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          placeholder="blur"
          className="object-cover transition duration-700 ease-out group-hover:scale-[1.05]"
        />
      </div>

      {/* Details */}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex items-center justify-between gap-3">
          <span className="font-mono text-xs tracking-widest text-ink-muted">
            {String(index + 1).padStart(2, "0")}
          </span>
          <ProjectLinks project={project} />
        </div>

        <h3 className="font-display text-xl font-semibold text-ink">
          {project.title}
          <span className="mx-2 text-ink-faint" aria-hidden>
            /
          </span>
          <span className=" font-normal text-ink-mid">
            {project.subtitle}
          </span>
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-mid">
          {project.description}
        </p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li key={tag} className="chip font-mono text-[0.7rem]">
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

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
              <ProjectCard project={project} index={i} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <div className="mt-10 text-center">
            <a
              href={githubProfileUrl}
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
