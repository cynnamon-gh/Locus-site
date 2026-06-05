import Link from "next/link";
import { RENT } from "@/lib/constants";
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
                Locus has five bedrooms and two baths. Three bedrooms are
                occupied, one is a shared office and guest room, and one is
                open. We are looking for someone thoughtful and
                community-minded who wants to live with people who take ideas
                seriously.
              </p>
              <p>
                The room has its own page: photos, the utilities math, and
                how we split costs. You can also{" "}
                <Link
                  href="/residents"
                  className="font-medium text-accent underline-offset-4 hover:underline"
                >
                  meet the residents
                </Link>{" "}
                first — recommended, since you would be living with us.
              </p>
              <p>
                Just passing through Philadelphia? We host short-term stays
                too —{" "}
                <a
                  href="#contact"
                  className="font-medium text-accent underline-offset-4 hover:underline"
                >
                  send a request
                </a>
                .
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.18}>
            <aside className="rounded-xl border border-accent/20 bg-parchment p-8 shadow-sm">
              <dl className="space-y-6">
                <div>
                  <dt className="text-sm font-medium uppercase tracking-wider text-muted">
                    The house
                  </dt>
                  <dd className="mt-1 font-display text-3xl text-foreground">
                    5 bed · 2 bath
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
                    Rent
                  </dt>
                  <dd className="mt-1 font-display text-3xl text-foreground">
                    {RENT}
                    <span className="text-lg text-muted">
                      {" "}
                      / month + utilities
                    </span>
                  </dd>
                </div>
              </dl>
              <Link
                href="/room"
                className="mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-md bg-accent text-base font-medium text-cream transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:shadow-accent/25 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                See the room
              </Link>
              <a
                href="#contact"
                className="mt-3 inline-flex min-h-12 w-full items-center justify-center rounded-md border border-accent/30 text-base font-medium text-accent transition-colors hover:bg-accent/5"
              >
                Ask about it
              </a>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
