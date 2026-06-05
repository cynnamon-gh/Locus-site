import { RENT_PLACEHOLDER } from "@/lib/constants";
import { Reveal } from "./motion/Reveal";
import { SectionHeading } from "./SectionHeading";

export function Living() {
  return (
    <section
      id="living"
      className="scroll-mt-24 border-t border-border bg-surface px-5 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Living here" title="One room open" />
        <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <Reveal delay={0.08}>
            <div className="space-y-5 text-lg leading-relaxed text-muted">
              <p>
                Locus has four bedrooms. Three are currently occupied; we are
                looking for one additional resident who fits the house culture
                — thoughtful, community-minded, and comfortable sharing space
                with others doing meaningful work.
              </p>
              <p>
                Rent is not finalized yet. The figure below is a placeholder
                until we settle numbers with the household.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.18}>
            <aside className="rounded-xl border border-accent/20 bg-parchment p-8 shadow-sm">
              <dl className="space-y-6">
                <div>
                  <dt className="text-sm font-medium uppercase tracking-wider text-muted">
                    Bedrooms
                  </dt>
                  <dd className="mt-1 font-display text-3xl text-foreground">
                    4 total · 3 filled
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium uppercase tracking-wider text-muted">
                    Available
                  </dt>
                  <dd className="mt-1 font-display text-3xl text-accent">
                    1 room
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium uppercase tracking-wider text-muted">
                    Rent (placeholder)
                  </dt>
                  <dd className="mt-1 font-display text-3xl text-foreground">
                    {RENT_PLACEHOLDER}
                    <span className="text-lg text-muted"> / month</span>
                  </dd>
                </div>
              </dl>
              <a
                href="#contact"
                className="mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-md bg-accent text-base font-medium text-cream transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:shadow-accent/25 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                Ask about the open room
              </a>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
