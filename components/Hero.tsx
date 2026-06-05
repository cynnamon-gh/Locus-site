import Image from "next/image";
import { CALENDAR_URL } from "@/lib/constants";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[88vh] overflow-hidden pt-16 md:min-h-[92vh] md:pt-[4.25rem]"
    >
      <div className="absolute inset-0 grain-overlay">
        <Image
          src="/images/hero/hero.jpg"
          alt="Locus house exterior in West Philadelphia"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-umber/85 via-umber/35 to-umber/20" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(88vh-4rem)] max-w-6xl flex-col justify-end px-5 pb-28 md:min-h-[calc(92vh-4.25rem)] md:px-8 md:pb-24 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
        <div className="max-w-2xl lg:pb-8">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-cream/80">
            West Philadelphia
          </p>
          <h1 className="font-display text-5xl font-medium leading-[1.05] tracking-tight text-cream md:text-6xl lg:text-7xl">
            Locus
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-cream/90 md:text-xl">
            A group house and community space for people working on what
            matters — Effective Altruism and adjacent communities, thinking
            together in Philadelphia.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:flex-col lg:items-stretch lg:pb-8">
          <a
            href="#living"
            className="inline-flex min-h-12 items-center justify-center rounded-md bg-cream px-6 text-base font-medium text-umber transition-opacity hover:opacity-90"
          >
            One room available
          </a>
          <a
            href={CALENDAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-md border border-cream/40 bg-cream/10 px-6 text-base font-medium text-cream backdrop-blur-sm transition-colors hover:bg-cream/20"
          >
            Follow our calendar
          </a>
        </div>
      </div>
    </section>
  );
}
