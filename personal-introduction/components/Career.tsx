import Section from "./Section";
import Reveal from "./Reveal";
import { profile } from "@/data/profile";

export default function Career() {
  const { status, experience, skills, achievements, interests } = profile.career;

  return (
    <Section id="career" number="03" title="Career">
      <Reveal>
        <p className="max-w-2xl font-serif text-2xl leading-snug md:text-[1.75rem]">{status}</p>
      </Reveal>

      <div className="mt-16 grid gap-14 md:grid-cols-8">
        <div className="md:col-span-5">
          <h3 className="text-sm text-muted">Experience</h3>
          <ul className="mt-4 divide-y divide-line border-t border-line">
            {experience.map((job, i) => (
              <Reveal as="li" key={job.role} delay={i * 0.06} className="py-6">
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                  <h4 className="font-serif text-xl">{job.role}</h4>
                  <p className="text-sm tabular-nums text-muted">{job.years}</p>
                </div>
                <p className="mt-0.5 text-graphite">{job.organisation}</p>
                <p className="mt-3 leading-relaxed text-muted">{job.summary}</p>
              </Reveal>
            ))}
          </ul>
        </div>

        <div className="space-y-12 md:col-span-3">
          <Reveal>
            <h3 className="text-sm text-muted">Skills</h3>
            <div className="mt-4 space-y-5 border-t border-line pt-5">
              {skills.map(({ group, items }) => (
                <div key={group}>
                  <p className="font-medium">{group}</p>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-full border border-line px-3 py-1 text-sm text-graphite transition-colors hover:border-ink"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h3 className="text-sm text-muted">Achievements</h3>
            <ul className="mt-4 space-y-3 border-t border-line pt-5">
              {achievements.map((a) => (
                <li key={a} className="leading-snug">
                  {a}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <h3 className="text-sm text-muted">Drawn to</h3>
            <p className="mt-4 border-t border-line pt-5 font-serif text-lg italic">
              {interests.join(", ")}
            </p>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
