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
              Locus is a group house for people in Effective Altruism and
              adjacent communities — a place to live near collaborators, host
              events, and argue productively at dinner. The name is a pun: a{" "}
              <em>locus</em> is a center point, and the house is on Locust
              Street. We are not sorry.
            </p>
            <p>
              The house is set up deliberately: art on the walls, board games
              within reach, seating arranged so conversations actually
              happen, and a guest room for people passing through
              Philadelphia. House norms are few but load-bearing — the main
              one is that each resident cooks one vegetarian dinner for the
              house every week. We also want Locus to be useful to the
              broader EA community: if you are organizing a talk, dinner,
              coworking day, or reading group and need a venue, we would like
              to host it.
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
