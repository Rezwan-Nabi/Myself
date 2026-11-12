"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const { firstName, lastName, greeting, intro, photo } = profile.hero;

  return (
    <section
      id="top"
      aria-label="Introduction"
      className="relative overflow-hidden px-6 py-16 md:px-10 md:py-24 lg:px-16 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:44px_44px] opacity-40" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
        <div>
          <motion.p
            className="mt-8 font-mono text-sm text-muted"
            initial={false}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {greeting}
          </motion.p>

          <motion.h1
            className="mt-3 max-w-none whitespace-nowrap text-[clamp(2rem,7vw,5.5rem)] font-normal leading-[0.95] tracking-[-0.06em]"
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease }}
          >
            <span className="text-white">{firstName} {lastName}</span>
          </motion.h1>

        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease }}
        >
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-graphite">{intro}</p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-paper transition-all hover:bg-accent2 hover:shadow-[0_0_28px_rgb(242_163_59_/_0.35)]"
            >
              Get In Touch
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="relative mx-auto w-full max-w-md rounded-3xl border border-ink/10 bg-wash p-3 shadow-[0_16px_40px_rgba(0,0,0,0.5)]"
        initial={false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.25, ease }}
      >
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-paper">
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            priority
            sizes="(min-width: 1024px) 35vw, 90vw"
            className="object-cover"
          />
        </div>
      </motion.div>
      </div>
    </section>
  );
}
