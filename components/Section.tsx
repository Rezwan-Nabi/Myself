import Reveal from "./Reveal";

type SectionProps = {
  id: string;
  number: string;
  title: string;
  lede?: string;
  children: React.ReactNode;
  className?: string;
};

/**
 * Shared section layout: a chapter heading in the left column (sticky on
 * desktop) and the section's content in the right column. Stacks on mobile.
 */
export default function Section({ id, number, title, lede, children, className = "" }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`border-t border-line ${className}`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-16 gap-y-10 px-6 py-20 md:px-10 md:py-28 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <p className="font-serif text-lg italic text-muted" aria-hidden="true">
              {number}
            </p>
            <h2
              id={`${id}-title`}
              className="mt-2 font-serif text-4xl leading-[1.1] tracking-tight md:text-5xl"
            >
              {title}
            </h2>
            {lede && <p className="mt-5 max-w-sm leading-relaxed text-muted">{lede}</p>}
          </div>
        </Reveal>
        <div className="lg:col-span-8">{children}</div>
      </div>
    </section>
  );
}
