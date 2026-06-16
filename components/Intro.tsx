import Link from "next/link";
import { Reveal } from "./motion/Reveal";
import { SectionHeading } from "./SectionHeading";

export function Intro() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-t border-border bg-surface px-5 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="About" title="A group house that hosts" />
        <Reveal delay={0.1}>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted">
            <p className="drop-cap">
              Locus is a group house in West Philadelphia. We host events, such
              as talks, dinners, game nights, and coworking, for the Effective
              Altruism, rationalist, and post-rationalist communities in
              Philadelphia. Public events go on our{" "}
              <a
                href="#calendar"
                className="font-medium text-accent underline-offset-4 hover:underline"
              >
                calendar
              </a>
              , and if you are organizing something and need a venue,{" "}
              <Link
                href="/contact"
                className="font-medium text-accent underline-offset-4 hover:underline"
              >
                get in touch
              </Link>
              .
            </p>
            <p>
              Cynthia and Jaime founded Locus as its master tenants and moved
              in in April 2026, to give these communities another anchor on the
              East Coast. Philadelphia sits between New York and DC at a
              fraction of the rent, which made it the place to build one. A{" "}
              <em>locus</em> is the place where something happens, or the point
              you act from. The house also sits on Locust Street.
            </p>
            <p>
              Curious who lives here? {" "}
              <Link
                href="/residents"
                className="font-medium text-accent underline-offset-4 hover:underline"
              >
                Meet the residents
              </Link>
              , or read about{" "}
              <Link
                href="/live"
                className="font-medium text-accent underline-offset-4 hover:underline"
              >
                living at Locus
              </Link>
              .
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
