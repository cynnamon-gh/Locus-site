import Link from "next/link";
import { Reveal } from "./motion/Reveal";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-t border-border bg-surface px-5 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="About" title="What is Locus?" />
        <Reveal delay={0.1}>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted">
            <p className="drop-cap">
              Locus is a home base for people who care deeply about improving
              the world — especially those connected to Effective Altruism and
              nearby intellectual communities. It is both a residence and a
              gathering place: somewhere to live near collaborators, host
              small events, and keep good conversations going. The name is a
              small pun — a <em>locus</em> is a center point, and the house
              sits on Locust Street.
            </p>
            <p>
              We are building the house intentionally — art on the walls,
              board games within reach, seating arranged for real discussion,
              and space for guests passing through Philadelphia. We keep a few
              communal norms, the favorite being that each resident cooks one
              vegetarian dinner for the house every week. And we want Locus to
              be useful to the broader EA community: we are actively looking
              to host EA events here — talks, dinners, coworking days, reading
              groups.
            </p>
            <p>
              Curious who lives here?{" "}
              <Link
                href="/residents"
                className="font-medium text-accent underline-offset-4 hover:underline"
              >
                Meet the residents
              </Link>
              , or browse{" "}
              <Link
                href="/photos"
                className="font-medium text-accent underline-offset-4 hover:underline"
              >
                photos of the house
              </Link>
              .
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
