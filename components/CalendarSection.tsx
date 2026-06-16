import Link from "next/link";
import { CALENDAR_URL } from "@/lib/constants";
import { Reveal } from "./motion/Reveal";
import { SectionHeading } from "./SectionHeading";

export function CalendarSection() {
  return (
    <section
      id="calendar"
      className="scroll-mt-24 border-t border-border bg-surface px-5 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeading
          eyebrow="Events"
          title="Follow our calendar"
          className="[&_h2]:text-center [&_p]:justify-center"
        />
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Public events, open houses, and community gatherings show up on our
            shared Google Calendar. Subscribe to see what is coming up.
          </p>
          <a
            href={CALENDAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex min-h-12 items-center justify-center rounded-md bg-accent px-8 text-base font-medium text-cream transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:shadow-accent/25 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
          >
            Open Google Calendar
          </a>
          <p className="mt-8 text-base text-muted">
            Have a question, or want to host something here?{" "}
            <Link
              href="/contact"
              className="font-medium text-accent underline-offset-4 hover:underline"
            >
              Contact us
            </Link>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
