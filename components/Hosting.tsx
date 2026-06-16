import Link from "next/link";
import { Reveal } from "./motion/Reveal";
import { SectionHeading } from "./SectionHeading";

const kinds = [
  {
    title: "Talks",
    description:
      "Teach the room something. “Here’s what far-UV is and why it’s the future of disease control.” Bring slides — we have a projector.",
  },
  {
    title: "Community events",
    description:
      "Get people together around a shared goal. A coworking session where everyone burns down their to-do list, or a documentary night with a real discussion after.",
  },
  {
    title: "On the calendar",
    description:
      "Pick a date, tell us what you need, and it goes on the shared calendar for the community to find and show up to.",
  },
];

export function Hosting() {
  return (
    <section
      id="host"
      className="scroll-mt-24 border-t border-border px-5 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Your turn" title="Host something here" />
        <Reveal delay={0.08}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            The space is open to the community. If there is something you want
            to run, we will help you put it on and bring people.
          </p>
        </Reveal>

        <ul className="mt-12 grid gap-6 sm:grid-cols-3">
          {kinds.map((kind, i) => (
            <Reveal key={kind.title} delay={i * 0.07} className="h-full">
              <li className="h-full rounded-lg border border-border bg-surface p-6 shadow-sm">
                <h3 className="font-display text-xl font-medium text-foreground">
                  {kind.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-muted">
                  {kind.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={0.1}>
          <div className="mt-10 rounded-xl border border-accent/20 bg-parchment p-8">
            <h3 className="font-display text-xl font-medium text-foreground">
              How much space we have
            </h3>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
              The living room seats about twelve, if everyone is cozy. The
              backyard is still being built out — in theory it could hold more,
              but it is not ready yet. Tell us what you are planning and we will
              sort out the room.{" "}
              <Link
                href="/contact"
                className="font-medium text-accent underline-offset-4 hover:underline"
              >
                Contact us for details
              </Link>
              .
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
