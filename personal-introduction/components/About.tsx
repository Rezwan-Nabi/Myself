import Section from "./Section";
import Reveal from "./Reveal";
import { profile } from "@/data/profile";

export default function About() {
  const { biography, facts, personality } = profile.about;

  return (
    <Section id="about" number="01" title="About me">
      <div className="grid gap-12 md:grid-cols-8">
        <Reveal className="space-y-5 text-lg leading-[1.75] text-graphite md:col-span-5">
          {biography.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-3">
          <dl className="divide-y divide-line border-y border-line">
            {facts.map(({ label, value }) => (
              <div key={label} className="py-3.5">
                <dt className="text-sm text-muted">{label}</dt>
                <dd className="mt-0.5">{value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <figure className="mt-16 border-l border-ink pl-6 md:mt-20 md:pl-10">
          <blockquote className="max-w-2xl font-serif text-2xl leading-snug md:text-[2rem]">
            {personality}
          </blockquote>
          <figcaption className="mt-4 text-sm text-muted">How my friends describe me</figcaption>
        </figure>
      </Reveal>
    </Section>
  );
}
