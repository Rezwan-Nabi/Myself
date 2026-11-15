import Image from "next/image";
import Link from "next/link";
import { profile } from "@/data/profile";

const gardenMoments = [
  {
    ...profile.gallery[2],
    title: "A little space to grow",
    description:
      "Gardening starts with making room for something living. Even a small corner can become a quiet place to care for plants and reset.",
  },
  {
    ...profile.gallery[1],
    title: "Learning from seasons",
    description:
      "Plants reward patience. I enjoy noticing small changes each week and learning what each plant needs instead of rushing the process.",
  },
  {
    ...profile.gallery[4],
    title: "Textures and details",
    description:
      "Leaves, soil, bark and old pots all have their own textures. Gardening makes me look closely at details I would normally miss.",
  },
  {
    ...profile.gallery[3],
    title: "Time outdoors",
    description:
      "A few minutes outside can change the pace of a whole day. Watering, pruning and tending plants is a simple way to be present.",
  },
];

export default function GardeningPage() {
  return (
    <main id="main">
      <header className="mx-auto max-w-7xl px-6 pb-16 pt-8 md:px-10 md:pb-24 md:pt-12 lg:px-16">
        <Link href="/#interests" className="text-sm text-muted transition-colors hover:text-ink">
          ← Back to interests
        </Link>
        <p className="mt-20 font-serif text-lg italic text-muted">Gardening</p>
        <h1 className="mt-3 max-w-4xl font-serif text-5xl leading-[1.05] tracking-tight md:text-7xl">
          Growing something slowly, one ordinary day at a time.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted">
          Gardening gives me a slower rhythm outside of work. I enjoy caring
          for herbs and plants, learning from the seasons and watching small
          efforts become visible growth.
        </p>
      </header>

      <section aria-labelledby="gardening-gallery-title" className="border-t border-line">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24 lg:px-16">
          <h2 id="gardening-gallery-title" className="font-serif text-3xl tracking-tight md:text-4xl">
            Garden moments
          </h2>
          <div className="mt-10 grid gap-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16">
            {gardenMoments.map((moment) => (
              <article key={moment.src} className="mx-auto w-full max-w-md">
                <div className="overflow-hidden bg-wash">
                  <Image
                    src={moment.src}
                    alt={moment.alt}
                    width={moment.width}
                    height={moment.height}
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="h-auto w-full"
                  />
                </div>
                <h3 className="mt-5 font-serif text-2xl">{moment.title}</h3>
                <p className="mt-2 max-w-lg leading-relaxed text-muted">{moment.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
