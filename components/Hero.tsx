"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { CALENDAR_URL } from "@/lib/constants";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.14, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: EASE },
  },
};

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  // Subtle parallax: the house recedes a touch as you scroll past it.
  // The image is painted at first frame — only transform is animated.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const veil = useTransform(scrollYProgress, [0, 1], [0, 0.35]);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative min-h-[92svh] overflow-hidden pt-16 md:min-h-[94svh] md:pt-[4.25rem]"
    >
      <motion.div
        className="absolute inset-[-8%] grain-overlay"
        style={reduceMotion ? undefined : { y: imageY }}
      >
        <Image
          src="/images/hero/hero.jpg"
          alt="Locus house exterior in West Philadelphia"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-umber/85 via-umber/35 to-umber/20" />
      </motion.div>
      {/* Deepens slightly as the hero scrolls away, easing the handoff */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-umber"
        style={reduceMotion ? { opacity: 0 } : { opacity: veil }}
      />

      <motion.div
        variants={reduceMotion ? undefined : container}
        initial={reduceMotion ? false : "hidden"}
        animate={reduceMotion ? undefined : "show"}
        className="relative mx-auto flex min-h-[calc(92svh-4rem)] max-w-6xl flex-col justify-end px-5 pb-16 md:min-h-[calc(94svh-4.25rem)] md:px-8 md:pb-20 lg:flex-row lg:items-end lg:justify-between lg:gap-12"
      >
        <div className="min-w-0 max-w-2xl lg:pb-6">
          <motion.p
            variants={item}
            className="mb-3 flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-cream/80"
          >
            <span aria-hidden className="h-px w-10 bg-terracotta/90" />
            West Philadelphia
          </motion.p>
          <motion.h1
            variants={item}
            className="font-display text-[clamp(3.25rem,8vw,6rem)] font-medium leading-[1.02] tracking-tight text-cream"
          >
            Locus
          </motion.h1>
          <motion.p
            variants={item}
            className="mt-5 max-w-xl text-[clamp(1rem,1.4vw,1.25rem)] leading-relaxed text-cream/90"
          >
            A group house in West Philadelphia that hosts events for the
            Effective Altruism, rationalist, and post-rationalist communities.
            Come to something on the calendar — or come live here.
          </motion.p>
        </div>

        <motion.div
          variants={item}
          className="mt-8 flex shrink-0 flex-col gap-3 sm:flex-row lg:mt-0 lg:flex-col lg:items-stretch lg:pb-6"
        >
          <a
            href={CALENDAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-cream px-6 text-base font-medium text-umber transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-umber/30 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
          >
            Follow our calendar
            <span
              aria-hidden
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            >
              →
            </span>
          </a>
          <Link
            href="/live"
            className="inline-flex min-h-12 items-center justify-center rounded-md border border-cream/40 bg-cream/10 px-6 text-base font-medium text-cream backdrop-blur-sm transition-all duration-300 hover:border-cream/70 hover:bg-cream/20"
          >
            Live here
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      {!reduceMotion && (
        <motion.div
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 md:block"
        >
          <div className="scroll-cue h-12 w-px bg-gradient-to-b from-cream/0 via-cream/70 to-cream/0" />
        </motion.div>
      )}
    </section>
  );
}
