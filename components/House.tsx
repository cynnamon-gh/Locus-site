import { SectionHeading } from "./SectionHeading";

const amenities = [
  {
    title: "Projector",
    description: "For talks, movies, and working through ideas together.",
  },
  {
    title: "Lots of art",
    description: "The space is curated to feel lived-in and inspiring.",
  },
  {
    title: "Board games",
    description: "A shelf ready for strategy nights and casual play.",
  },
  {
    title: "Intentional seating",
    description: "Layouts designed for conversation, not just screens.",
  },
  {
    title: "Guest room",
    description: "Small but functional and private for visitors.",
  },
  {
    title: "Cats",
    description: "The house has cats — worth knowing if you are allergic.",
  },
];

export function House() {
  return (
    <section
      id="house"
      className="scroll-mt-24 px-5 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="The house" title="Inside Locus" />
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          Four bedrooms, shared common spaces, and amenities chosen for people
          who like hosting friends and taking ideas seriously.
        </p>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {amenities.map((item) => (
            <li
              key={item.title}
              className="rounded-lg border border-border bg-surface p-6 shadow-sm"
            >
              <h3 className="font-display text-xl font-medium text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-muted">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
