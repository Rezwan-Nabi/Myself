import Section from "./Section";
import Reveal from "./Reveal";
import { profile } from "@/data/profile";

export default function Education() {
  return (
    <Section
      id="education"
      number="02"
      title="Education"
      lede="From a school computer lab in Chattogram to a final-year thesis in Dhaka."
    >
      <ol className="relative border-l border-line">
        {profile.education.map((item, i) => (
          <Reveal as="li" key={item.qualification} delay={i * 0.08} className="relative pb-14 pl-8 last:pb-0 md:pl-12">
            <span
              aria-hidden="true"
              className={`absolute -left-[5px] top-2 size-[9px] rounded-full border border-ink ${
                item.current ? "bg-ink" : "bg-paper"
              }`}
            />
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <p className="text-sm tabular-nums text-muted">{item.years}</p>
              <span
                className={`rounded-full border px-2.5 py-0.5 text-xs ${
                  item.current ? "border-ink bg-ink text-paper" : "border-line text-muted"
                }`}
              >
                {item.status}
              </span>
            </div>
            <h3 className="mt-3 font-serif text-2xl leading-snug md:text-[1.75rem]">
              {item.qualification}
            </h3>
            <p className="mt-1 text-graphite">{item.institution}</p>
            {item.note && <p className="mt-3 max-w-xl leading-relaxed text-muted">{item.note}</p>}
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
