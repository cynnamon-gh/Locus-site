"use client";

import { useState } from "react";
import { NAV_SECTIONS } from "@/lib/constants";

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/80 bg-parchment/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-[4.25rem] md:px-8">
        <a
          href="#top"
          className="font-display text-xl font-medium tracking-tight text-foreground md:text-2xl"
        >
          Locus
        </a>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Primary"
        >
          {NAV_SECTIONS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
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
            {NAV_SECTIONS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="block min-h-11 py-3 text-base text-foreground"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
