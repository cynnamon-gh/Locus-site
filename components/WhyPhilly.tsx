import { Reveal } from "./motion/Reveal";
import { SectionHeading } from "./SectionHeading";

export function WhyPhilly() {
  return (
    <section
      id="philadelphia"
      className="scroll-mt-24 px-5 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="Place" title="Why Philadelphia" />
        <Reveal delay={0.06}>
          <p className="mt-4 text-sm italic text-muted">
            Draft placeholder — we will refine this copy as Locus grows.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted">
            <p>
              Philadelphia sits between major East Coast hubs without the same
              pressure on housing costs. For people in EA and adjacent worlds,
              that can mean a sustainable place to live while staying connected
              to research, nonprofits, and visiting collaborators who pass
              through the region.
            </p>
            <p>
              West Philly in particular has a long tradition of communal
              houses, student and faculty energy from nearby universities, and
              a walkable neighborhood rhythm that supports both focused work
              and casual encounters. It is a good city for hosting a guest for
              a week, running a small salon, or simply having room to think.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <blockquote className="my-10 border-l-2 border-terracotta pl-6">
            <p className="font-display text-2xl font-medium italic leading-snug tracking-tight text-foreground md:text-3xl">
              Not a replacement for other hubs — another locus on the map.
            </p>
          </blockquote>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="text-lg leading-relaxed text-muted">
            We chose Philadelphia for Locus because we want a physical anchor
            on the East Coast that feels welcoming to the communities we care
            about.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
