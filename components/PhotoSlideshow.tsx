"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import type { Photo } from "@/lib/photos";

export function PhotoSlideshow({ photos }: { photos: Photo[] }) {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const photo = photos[index];

  const go = useCallback(
    (delta: number) =>
      setIndex((i) => (i + delta + photos.length) % photos.length),
    [photos.length],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  return (
    <figure aria-label="House photo slideshow">
      {/* Main frame */}
      <div className="relative aspect-[3/2] overflow-hidden rounded-xl border border-border bg-umber/5">
        <AnimatePresence initial={false} mode="popLayout">
          <motion.div
            key={photo.src}
            className="absolute inset-0"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              priority={index === 0}
              sizes="(min-width: 1152px) 1152px, 100vw"
              className="object-contain"
            />
          </motion.div>
        </AnimatePresence>

        {/* Prev / next */}
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous photo"
          className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-parchment/90 text-foreground backdrop-blur-sm transition-colors hover:bg-parchment"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next photo"
          className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-parchment/90 text-foreground backdrop-blur-sm transition-colors hover:bg-parchment"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <figcaption className="mt-3 flex items-baseline justify-between gap-4 text-sm text-muted">
        <span>{photo.caption}</span>
        <span className="tabular-nums">
          {index + 1} / {photos.length}
        </span>
      </figcaption>

      {/* Thumbnail strip */}
      <div
        className="mt-4 flex gap-2 overflow-x-auto pb-2"
        role="listbox"
        aria-label="Jump to photo"
      >
        {photos.map((p, i) => (
          <button
            key={p.src}
            type="button"
            role="option"
            aria-selected={i === index}
            aria-label={`Photo ${i + 1}: ${p.caption}`}
            onClick={() => setIndex(i)}
            className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-md border transition-opacity ${
              i === index
                ? "border-accent opacity-100"
                : "border-border opacity-55 hover:opacity-85"
            }`}
          >
            <Image
              src={p.src}
              alt=""
              fill
              sizes="96px"
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </figure>
  );
}
