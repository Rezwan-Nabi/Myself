import Section from "./Section";
import Reveal from "./Reveal";
import { profile } from "@/data/profile";

export default function FamilyBackground() {
  const { introduction, members } = profile.family;
  const shown = members.filter((m) => m.approved);

  return (
    <Section id="family" number="04" title="Family background">
      <Reveal>
        <p className="max-w-2xl text-lg leading-[1.75] text-graphite">{introduction}</p>
      </Reveal>

      {shown.length > 0 && (
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {shown.map((member, i) => (
            <Reveal
              as="li"
              key={member.relation}
              delay={i * 0.08}
              className="group border border-line p-7 transition-colors duration-300 hover:border-ink"
            >
              <p className="text-sm text-muted">{member.relation}</p>
              <h3 className="mt-6 font-serif text-2xl">{member.title}</h3>
              <p className="mt-3 leading-relaxed text-muted transition-colors duration-300 group-hover:text-graphite">
                {member.description}
              </p>
            </Reveal>
          ))}
        </ul>
      )}
    </Section>
  );
}
