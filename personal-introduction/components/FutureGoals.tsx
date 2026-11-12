import Section from "./Section";
import Reveal from "./Reveal";
import { profile } from "@/data/profile";

function GoalList({ title, items }: { title: string; items: string[] }) {
  return (
    <Reveal>
      <h3 className="text-sm text-muted">{title}</h3>
      <ul className="mt-4 divide-y divide-line border-y border-line">
        {items.map((item) => (
          <li key={item} className="py-4 leading-snug">
            {item}
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

export default function FutureGoals() {
  const { personal, professional, horizons } = profile.goals;

  return (
    <Section id="goals" number="06" title="Future goals">
      <div className="grid gap-12 sm:grid-cols-2">
        <GoalList title="Personal aspirations" items={personal} />
        <GoalList title="Professional goals" items={professional} />
      </div>

      {/* Long-term goals laid out along a line, nearest first. */}
      <div className="mt-20">
        <h3 className="text-sm text-muted">Looking ahead</h3>
        <ol className="relative mt-8 grid gap-10 md:grid-cols-3 md:gap-8">
          <span
            aria-hidden="true"
            className="absolute bottom-0 left-[4px] top-0 w-px bg-line md:bottom-auto md:left-0 md:right-0 md:top-[4px] md:h-px md:w-auto"
          />
          {horizons.map((h, i) => (
            <Reveal as="li" key={h.when} delay={i * 0.12} className="relative pl-8 md:pl-0 md:pt-10">
              <span
                aria-hidden="true"
                className={`absolute left-0 top-1.5 size-[9px] rounded-full border border-ink md:top-0 ${
                  i === horizons.length - 1 ? "bg-ink" : "bg-paper"
                }`}
              />
              <p className="font-serif text-lg italic text-muted">{h.when}</p>
              <p className="mt-3 font-serif text-2xl leading-snug">{h.goal}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
