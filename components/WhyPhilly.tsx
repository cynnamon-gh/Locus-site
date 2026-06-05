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
        <Reveal delay={0.1}>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted">
            <p>
              The case for Philadelphia: it sits between New York and DC and
              costs dramatically less than either. For people in EA and
              adjacent worlds, that means staying on the East Coast circuit
              without rent eating your runway.
            </p>
            <p>
              West Philly specifically has a long tradition of communal
              houses, university energy from Penn and Drexel, and a walkable
              neighborhood rhythm. It is a good place to host a guest for a
              week, run a small salon, or think.
            </p>
            <p>
              Locus is in University City, close to Penn&apos;s campus.
              Within a short walk: multiple grocery stores (nearest one six
              minutes away), a movie theater, a lot of restaurants, and Clark
              Park — farmers markets, community events, respectable dog
              density.
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
            We put Locus here because the East Coast needed another anchor
            point, and Philadelphia made it affordable to build one.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
