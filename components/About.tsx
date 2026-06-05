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
              gathering place: somewhere to live near collaborators, host small
              events, and keep good conversations going.
            </p>
            <p>
              We are building the house intentionally — art on the walls, board
              games within reach, seating arranged for real discussion, and
              space for guests who pass through Philadelphia. More detail about
              our mission and programming will land here as the community takes
              shape.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
