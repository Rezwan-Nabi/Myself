"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { profile, sections, type SectionId } from "@/data/profile";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<SectionId | null>(null);

  // Show a hairline under the bar once the page has scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the link for the section currently in view.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id as SectionId);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Close the mobile menu with Escape, and when resizing up to desktop.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 bg-paper/90 backdrop-blur-md transition-[border-color] duration-300 ${
        scrolled || open ? "border-b border-line" : "border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-10"
      >
        <a href="#top" className="font-serif text-xl tracking-tight">
          Rezwan
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {sections.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={active === id ? "location" : undefined}
                className={`relative py-1 text-sm transition-colors hover:text-ink ${
                  active === id ? "text-ink" : "text-muted"
                }`}
              >
                {label}
                {active === id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-0 -bottom-0.5 h-px bg-accent"
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="-mr-2 inline-flex size-10 items-center justify-center lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden lg:hidden"
          >
            <ul className="mx-auto max-w-7xl px-6 pb-8 pt-2 md:px-10">
              {sections.map(({ id, number, label }, i) => (
                <motion.li
                  key={id}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i + 0.05 }}
                  className="border-b border-line last:border-0"
                >
                  <a
                    href={`#${id}`}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-4 py-3.5"
                  >
                    <span className="w-6 font-serif text-sm italic text-muted">{number}</span>
                    <span className="font-serif text-2xl">{label}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
