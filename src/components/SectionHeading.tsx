import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  /** mono index label, e.g. "01" */
  index: string;
  title: string;
  description?: string;
};

export function SectionHeading({ index, title, description }: SectionHeadingProps) {
  return (
    <Reveal className="mb-12 md:mb-16">
      <p className="font-mono text-sm tracking-widest text-violet-300/90 uppercase">
        {`${index} //`}
      </p>
      <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
