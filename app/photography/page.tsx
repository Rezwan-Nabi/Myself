import Image from "next/image";
import Link from "next/link";
import { profile } from "@/data/profile";

const photographs = [
  {
    ...profile.gallery[0],
    title: "Light before the evening",
    description:
      "I like photographing the coast when the day is almost over. The softer light makes ordinary details feel calm and deliberate.",
  },
  {
    ...profile.gallery[1],
    title: "Quiet landscapes",
    description:
      "Mist changes the shape of a landscape. This frame is one of my reminders to slow down and notice what is usually hidden.",
  },
  {
    ...profile.gallery[3],
    title: "The last warm light",
    description:
      "Sunset photography is mostly about patience. I wait for a simple composition, then let the changing light do the work.",
  },
  {
    ...profile.gallery[4],
    title: "Details with a history",
    description:
      "Old buildings are full of textures, patterns and traces of the people who used them. I enjoy finding those small stories.",
  },
];

export default function PhotographyPage() {
  return (
    <main id="main">
      <header className="mx-auto max-w-7xl px-6 pb-16 pt-8 md:px-10 md:pb-24 md:pt-12 lg:px-16">
        <Link
          href="/#interests"
          className="text-sm text-muted transition-colors hover:text-ink"
        >
          ← Back to interests
        </Link>
        <p className="mt-20 font-serif text-lg italic text-muted">Photography</p>
        <h1 className="mt-3 max-w-4xl font-serif text-5xl leading-[1.05] tracking-tight md:text-7xl">
          Finding stories in light, place and ordinary moments.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted">
          Photography gives me a reason to look more carefully. I enjoy quiet
          landscapes, changing light and the small details that make a place
          memorable.
        </p>
      </header>

      <section
        aria-labelledby="photography-gallery-title"
        className="border-t border-line"
      >
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24 lg:px-16">
          <h2
            id="photography-gallery-title"
            className="font-serif text-3xl tracking-tight md:text-4xl"
          >
            Selected photographs
          </h2>
          <div className="mt-10 grid gap-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16">
            {photographs.map((photo) => (
              <article key={photo.src} className="mx-auto w-full max-w-md">
                <div className="overflow-hidden bg-wash">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={photo.width}
                    height={photo.height}
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="h-auto w-full"
                  />
                </div>
                <h3 className="mt-5 font-serif text-2xl">{photo.title}</h3>
                <p className="mt-2 max-w-lg leading-relaxed text-muted">
                  {photo.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
