import Image from "next/image";
import Link from "next/link";
import { profile } from "@/data/profile";

const places = [
  {
    ...profile.gallery[0],
    title: "Following the coast",
    description:
      "The coast always gives me room to breathe. I enjoy walking without a strict plan and letting the changing horizon decide where I stop.",
  },
  {
    ...profile.gallery[1],
    title: "A slower morning",
    description:
      "Some of my favorite trips begin early, before the roads get busy. Misty hills and quiet paths make even a short journey feel expansive.",
  },
  {
    ...profile.gallery[3],
    title: "Chasing the light",
    description:
      "Travel teaches me to pay attention to small transitions: the last light on the water, a turn in the road or a town settling into evening.",
  },
  {
    ...profile.gallery[5],
    title: "Returning home",
    description:
      "The best journeys are also about coming back. Shared meals and familiar faces are part of what makes every trip meaningful.",
  },
];

export default function TravelPage() {
  return (
    <main id="main">
      <header className="mx-auto max-w-7xl px-6 pb-16 pt-8 md:px-10 md:pb-24 md:pt-12 lg:px-16">
        <Link href="/#interests" className="text-sm text-muted transition-colors hover:text-ink">
          ← Back to interests
        </Link>
        <p className="mt-20 font-serif text-lg italic text-muted">Travel</p>
        <h1 className="mt-3 max-w-4xl font-serif text-5xl leading-[1.05] tracking-tight md:text-7xl">
          Small roads, new views and stories worth bringing home.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted">
          I travel to notice how people live, eat and move through different
          places. I prefer unhurried trips, local streets and time to wander.
        </p>
      </header>

      <section aria-labelledby="travel-gallery-title" className="border-t border-line">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24 lg:px-16">
          <h2 id="travel-gallery-title" className="font-serif text-3xl tracking-tight md:text-4xl">
            Travel memories
          </h2>
          <div className="mt-10 grid gap-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16">
            {places.map((place) => (
              <article key={place.src} className="mx-auto w-full max-w-md">
                <div className="overflow-hidden bg-wash">
                  <Image
                    src={place.src}
                    alt={place.alt}
                    width={place.width}
                    height={place.height}
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="h-auto w-full"
                  />
                </div>
                <h3 className="mt-5 font-serif text-2xl">{place.title}</h3>
                <p className="mt-2 max-w-lg leading-relaxed text-muted">{place.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
