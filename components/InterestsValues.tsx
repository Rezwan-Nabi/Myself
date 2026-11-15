import Section from "./Section";
import Reveal from "./Reveal";
import Icon from "./Icon";
import { profile } from "@/data/profile";
import Link from "next/link";

export default function InterestsValues() {
  const { hobbies, values, lifestyle } = profile.interests;

  return (
    <Section
      id="interests"
      number="05"
      title="Interests & values"
      lede="What fills my weekends, and the principles I try to work and live by."
    >
      <h3 className="text-sm text-muted">Interests</h3>
      <ul className="mt-4 grid grid-cols-2 border-l border-t border-line md:grid-cols-3">
        {hobbies.map((hobby, i) => (
          <Reveal
            as="li"
            key={hobby.title}
            delay={(i % 3) * 0.06}
            className="group border-b border-r border-line p-5 transition-colors duration-300 hover:bg-wash md:p-7"
          >
            {["Photography", "Travel", "Gardening"].includes(hobby.title) ? (
              <Link
                href={`/${hobby.title.toLowerCase()}`}
                className="block focus-visible:outline-offset-4"
              >
                <Icon
                  name={hobby.icon}
                  className="size-6 transition-transform duration-300 group-hover:-translate-y-0.5"
                />
                <p className="mt-8 font-serif text-xl">{hobby.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {hobby.text}
                </p>
              </Link>
            ) : (
              <>
                <Icon
                  name={hobby.icon}
                  className="size-6 transition-transform duration-300 group-hover:-translate-y-0.5"
                />
                <p className="mt-8 font-serif text-xl">{hobby.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {hobby.text}
                </p>
              </>
            )}
          </Reveal>
        ))}
      </ul>

      <h3 className="mt-16 text-sm text-muted">Values</h3>
      <dl className="mt-4 grid gap-x-12 border-t border-line sm:grid-cols-2">
        {values.map((value, i) => (
          <Reveal key={value.title} delay={(i % 2) * 0.06} className="border-b border-line py-6">
            <dt className="font-serif text-2xl">{value.title}</dt>
            <dd className="mt-2 leading-relaxed text-muted">{value.text}</dd>
          </Reveal>
        ))}
      </dl>

      <Reveal className="mt-12 flex flex-wrap items-center gap-x-3 gap-y-3">
        <h3 className="mr-2 text-sm text-muted">Day to day</h3>
        <ul className="contents">
          {lifestyle.map((item) => (
            <li key={item} className="rounded-full bg-wash px-4 py-1.5 text-sm">
              {item}
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
