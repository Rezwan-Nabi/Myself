"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Section from "./Section";
import Reveal from "./Reveal";
import { profile } from "@/data/profile";

const photos = profile.gallery;

export default function Gallery() {
  const [index, setIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState(0);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);

  const open = (i: number, trigger: HTMLButtonElement) => {
    triggerRef.current = trigger;
    setDirection(0);
    setIndex(i);
  };

  const close = useCallback(() => {
    setIndex(null);
    triggerRef.current?.focus();
  }, []);

  const step = useCallback((delta: number) => {
    setDirection(delta);
    setIndex((i) => (i === null ? i : (i + delta + photos.length) % photos.length));
  }, []);

  const isOpen = index !== null;

  // Keyboard controls, scroll lock and a simple focus trap while open.
  useEffect(() => {
    if (!isOpen) return;
    closeRef.current?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
      else if (e.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>("button");
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, close, step]);

  const current = index === null ? null : photos[index];

  return (
    <Section
      id="gallery"
      number="07"
      title="Photo gallery"
      lede="A few places and moments that matter to me. Select a photo to see it larger."
    >
      <ul className="columns-1 gap-4 sm:columns-2 xl:columns-3">
        {photos.map((photo, i) => (
          <Reveal as="li" key={photo.src} delay={(i % 3) * 0.06} className="mb-4 break-inside-avoid">
            <button
              type="button"
              onClick={(e) => open(i, e.currentTarget)}
              className="group block w-full text-left"
              aria-label={`Enlarge photo: ${photo.alt}`}
            >
              <span className="block overflow-hidden bg-wash">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  sizes="(min-width: 1280px) 25vw, (min-width: 640px) 40vw, 100vw"
                  className="h-auto w-full transition duration-700 ease-out group-hover:scale-[1.03] group-hover:opacity-90"
                />
              </span>
              {photo.caption && (
                <span className="mt-2.5 block text-sm leading-snug text-muted">{photo.caption}</span>
              )}
            </button>
          </Reveal>
        ))}
      </ul>

      <AnimatePresence>
        {current && index !== null && (
          <motion.div
            ref={dialogRef}
            key="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label="Photo viewer"
            className="fixed inset-0 z-[60] flex flex-col bg-ink/95 text-paper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.target === e.currentTarget && close()}
          >
            <div className="flex items-center justify-between px-5 py-4 md:px-8">
              <p className="text-sm tabular-nums text-paper/70" aria-live="polite">
                {index + 1} of {photos.length}
              </p>
              <button
                ref={closeRef}
                type="button"
                onClick={close}
                aria-label="Close photo viewer"
                className="inline-flex size-11 items-center justify-center rounded-full transition-colors hover:bg-paper/10 focus-visible:outline-paper"
              >
                <X className="size-5" />
              </button>
            </div>

            <div
              className="relative flex min-h-0 flex-1 items-center justify-center px-4 md:px-20"
              onClick={(e) => e.target === e.currentTarget && close()}
            >
              <AnimatePresence mode="popLayout" initial={false} custom={direction}>
                <motion.figure
                  key={current.src}
                  custom={direction}
                  initial={{ opacity: 0, x: direction * 40, scale: direction === 0 ? 0.96 : 1 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: direction * -40 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="flex max-h-full flex-col items-center"
                >
                  <Image
                    src={current.src}
                    alt={current.alt}
                    width={current.width}
                    height={current.height}
                    sizes="90vw"
                    className="h-auto max-h-[72svh] w-auto max-w-full object-contain"
                  />
                  {current.caption && (
                    <figcaption className="mt-4 max-w-xl text-center text-sm leading-relaxed text-paper/80">
                      {current.caption}
                    </figcaption>
                  )}
                </motion.figure>
              </AnimatePresence>

              <button
                type="button"
                onClick={() => step(-1)}
                aria-label="Previous photo"
                className="absolute left-2 top-1/2 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full transition-colors hover:bg-paper/10 focus-visible:outline-paper md:left-6"
              >
                <ChevronLeft className="size-6" />
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                aria-label="Next photo"
                className="absolute right-2 top-1/2 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full transition-colors hover:bg-paper/10 focus-visible:outline-paper md:right-6"
              >
                <ChevronRight className="size-6" />
              </button>
            </div>
            <div className="h-6 md:h-10" />
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
