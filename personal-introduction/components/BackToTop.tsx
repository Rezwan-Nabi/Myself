"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

/** Floating button that appears once the hero has scrolled out of view. */
export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.9);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="#top"
          aria-label="Back to top"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-5 right-5 z-40 inline-flex size-12 items-center justify-center rounded-full bg-accent text-paper shadow-[0_6px_20px_-6px_rgba(0,0,0,0.35)] transition-colors hover:bg-accent2 md:bottom-8 md:right-8"
        >
          <ArrowUp className="size-5" aria-hidden="true" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
