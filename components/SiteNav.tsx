"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion, useScroll } from "motion/react";
import { NAV_LINKS } from "@/lib/constants";

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const reduceMotion = useReducedMotion();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/80 bg-parchment/90 backdrop-blur-md">
      {/* Reading-progress hairline */}
      {!reduceMotion && (
        <motion.div
          aria-hidden
          className="absolute inset-x-0 bottom-[-1px] h-[2px] origin-left bg-gradient-to-r from-terracotta to-accent"
          style={{ scaleX: scrollYProgress }}
        />
      )}
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-[4.25rem] md:px-8">
        <Link
          href="/"
          className="font-display text-xl font-medium tracking-tight text-foreground md:text-2xl"
        >
          Locus
        </Link>

        <nav
          className="hidden items-center gap-6 md:flex lg:gap-8"
          aria-label="Primary"
        >
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-md border border-border bg-surface text-foreground md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <>
                <path d="M4 7h16M4 12h16M4 17h16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-border bg-parchment px-5 py-4 md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block min-h-11 py-3 text-base text-foreground"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
