import type { ReactNode } from "react";
import { Reveal } from "./motion/Reveal";
import { SectionHeading } from "./SectionHeading";

function Icon({ children }: { children: ReactNode }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {children}
    </svg>
  );
}

const amenities = [
  {
    title: "Projector",
    description: "For talks, movies, and working through ideas together.",
    icon: (
      <Icon>
        <rect x="2.5" y="8" width="15" height="9" rx="2" />
        <circle cx="10" cy="12.5" r="2.5" />
        <path d="M17.5 11l4-2.5M17.5 14l4 2.5M17.5 12.5H22" />
      </Icon>
    ),
  },
  {
    title: "Lots of art",
    description: "The space is curated to feel lived-in and inspiring.",
    icon: (
      <Icon>
        <rect x="3.5" y="4.5" width="17" height="13" rx="1" />
        <path d="M3.5 14l4.5-4.5 4 4 3-3 5.5 4" />
        <circle cx="15.5" cy="8.5" r="1.25" />
        <path d="M9 20.5h6" />
      </Icon>
    ),
  },
  {
    title: "Board games",
    description: "A shelf ready for strategy nights and casual play.",
    icon: (
      <Icon>
        <rect x="4" y="4" width="16" height="16" rx="3" />
        <circle cx="9" cy="9" r="1" fill="currentColor" stroke="none" />
        <circle cx="15" cy="9" r="1" fill="currentColor" stroke="none" />
        <circle cx="9" cy="15" r="1" fill="currentColor" stroke="none" />
        <circle cx="15" cy="15" r="1" fill="currentColor" stroke="none" />
        <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
      </Icon>
    ),
  },
  {
    title: "Intentional seating",
    description: "Layouts designed for conversation, not just screens.",
    icon: (
      <Icon>
        <path d="M5.5 11V6.5a2 2 0 012-2h9a2 2 0 012 2V11" />
        <path d="M4 11a2 2 0 012 2v1.5h12V13a2 2 0 014 0c0 1.5-1 2.5-2 3v3.5h-2V18H6v1.5H4V16c-1-.5-2-1.5-2-3a2 2 0 012-2z" />
      </Icon>
    ),
  },
  {
    title: "Office & guest room",
    description:
      "A fifth bedroom kept free as a shared office — and a room for your guests. Feel free to host.",
    icon: (
      <Icon>
        <path d="M3 18.5v-8M3 14h18v4.5" />
        <path d="M3 10.5h7a4 4 0 014 4" />
        <circle cx="6.5" cy="12" r="1.5" />
      </Icon>
    ),
  },
  {
    title: "Lots of books",
    description: "Shelves all over the house. Borrow freely.",
    icon: (
      <Icon>
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
      </Icon>
    ),
  },
  {
    title: "Huge backyard",
    description:
      "Big for the city — a fire pit and seating area are in the works.",
    icon: (
      <Icon>
        <path d="M12 3c2.5 3 5 5.5 5 9a5 5 0 01-10 0c0-3.5 2.5-6 5-9z" />
        <path d="M12 13c1 1.2 2 2.2 2 3.6a2 2 0 01-4 0c0-1.4 1-2.4 2-3.6z" />
        <path d="M4 21h16" />
      </Icon>
    ),
  },
  {
    title: "Front porch",
    description: "Super cute. Made for slow mornings and long evenings.",
    icon: (
      <Icon>
        <path d="M2.5 10L12 3.5 21.5 10" />
        <path d="M4.5 10v10.5M19.5 10v10.5M4.5 14h15" />
        <path d="M8.5 14v6.5M12 14v6.5M15.5 14v6.5" />
      </Icon>
    ),
  },
  {
    title: "Cats",
    description:
      "The house has cats (hi, Steve) — worth knowing if you are allergic.",
    icon: (
      <Icon>
        <path d="M5 9.5L4.5 4l3.5 2.5h8L19.5 4 19 9.5a7 7 0 01.5 3c0 4-3.5 6.5-7.5 6.5S4.5 16.5 4.5 12.5a7 7 0 01.5-3z" />
        <circle cx="9" cy="11.5" r="0.4" fill="currentColor" />
        <circle cx="15" cy="11.5" r="0.4" fill="currentColor" />
        <path d="M12 14v.5M10.5 15.5c.5.5 1 .7 1.5.7s1-.2 1.5-.7" />
      </Icon>
    ),
  },
];

export function House() {
  return (
    <section id="house" className="scroll-mt-24 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="The house" title="Inside Locus" />
        <Reveal delay={0.08}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            Five bedrooms, two baths, shared common spaces, and amenities
            chosen for people who like hosting friends and taking ideas
            seriously — with a generally friendly, open-door policy.
          </p>
        </Reveal>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {amenities.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.07} className="h-full">
              <li className="group h-full rounded-lg border border-border bg-surface p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                <div className="text-accent transition-colors duration-300 group-hover:text-terracotta">
                  {item.icon}
                </div>
                <h3 className="mt-4 font-display text-xl font-medium text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-muted">
                  {item.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
