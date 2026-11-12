import Section from "./Section";
import Reveal from "./Reveal";
import Icon from "./Icon";
import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";

export default function Contact() {
  const { closing, links } = profile.contact;

  return (
    <Section id="contact" number="08" title="Contact">
      <Reveal>
        <p className="max-w-2xl font-serif text-3xl leading-[1.25] md:text-[2.5rem]">{closing}</p>
      </Reveal>

      <Reveal delay={0.1}>
        <ul className="mt-14 divide-y divide-line border-y border-line">
          {links.map((link) => {
            const content = (
              <>
                <Icon name={link.icon} className="size-5 shrink-0 text-muted" />
                <span className="w-24 shrink-0 text-sm text-muted">{link.label}</span>
                <span className="min-w-0 flex-1 truncate md:text-lg">{link.value}</span>
                {link.href && (
                  <ArrowUpRight
                    className="size-5 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                )}
              </>
            );
            const external = link.href?.startsWith("http");
            return (
              <li key={link.label}>
                {link.href ? (
                  <a
                    href={link.href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group flex items-center gap-4 py-5 transition-colors hover:bg-wash md:gap-6 md:px-4"
                  >
                    {content}
                    {external && <span className="sr-only">(opens in a new tab)</span>}
                  </a>
                ) : (
                  <div className="flex items-center gap-4 py-5 md:gap-6 md:px-4">{content}</div>
                )}
              </li>
            );
          })}
        </ul>
      </Reveal>
    </Section>
  );
}
