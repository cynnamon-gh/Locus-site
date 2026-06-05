import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { SiteNav } from "@/components/SiteNav";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Meet the residents — Locus",
  description:
    "The people (and cat) of Locus, an EA-adjacent group house in West Philadelphia.",
};

const residents: {
  name: string;
  role: string;
  bio: string;
  initial: string;
  photo?: { src: string; alt: string };
}[] = [
  {
    name: "Cynthia",
    role: "Resident",
    bio: "ML engineer by day. Board game collector and host of the biweekly game nights, plant-forward cook, cat fosterer, and frequently off at a concert.",
    initial: "C",
  },
  {
    name: "Jaime",
    role: "Resident",
    bio: "Resident Tech Czar — the projector, the sound bar, and the secondary wifi access point all exist because he researched and set them up. Owner of Steve and Steve's biggest fan. Found at punk and metal shows, making art at home and on the street, and deep in philosophy and theory.",
    initial: "J",
  },
  {
    name: "Alice",
    role: "Resident",
    bio: "Also answers to Slice. Takes pride in her EA work in biosecurity, is the reason there is a growing Magic: The Gathering cube in the living room, and is a lover of Shakespeare.",
    initial: "A",
  },
  {
    name: "Steve",
    role: "House cat",
    bio: "Senior House Cat. Duties include sunbeam quality assurance, supervising the weekly house dinner from a respectful distance, and greeting guests — on his terms. Hypoallergenic he is not.",
    initial: "S",
    photo: {
      src: "/images/residents/steve.jpg",
      alt: "Steve, an orange tabby cat",
    },
  },
];

export default function ResidentsPage() {
  return (
    <>
      <SiteNav />
      <main className="px-5 pb-20 pt-28 md:px-8 md:pb-28 md:pt-36">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Residents" title="Who lives at Locus" />
          <Reveal delay={0.08}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              Three humans, one cat, usually a foster cat passing through
              (currently March, a short-term resident), and{" "}
              <Link
                href="/room"
                className="font-medium text-accent underline-offset-4 hover:underline"
              >
                one open room
              </Link>{" "}
              that could be yours. Each of us cooks a vegetarian dinner for
              the house once a week, and the kettle is usually on.
            </p>
          </Reveal>

          <ul className="mt-12 grid gap-6 sm:grid-cols-2">
            {residents.map((person, i) => (
              <Reveal key={person.name} delay={i * 0.07} className="h-full">
                <li className="flex h-full flex-col rounded-lg border border-border bg-surface p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                  <div className="flex items-center gap-4">
                    <div className="relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-full bg-accent">
                      {person.photo ? (
                        <Image
                          src={person.photo.src}
                          alt={person.photo.alt}
                          fill
                          sizes="64px"
                          className="object-cover"
                        />
                      ) : (
                        <span className="font-display text-3xl font-medium text-cream">
                          {person.initial}
                        </span>
                      )}
                    </div>
                    <div>
                      <h2 className="font-display text-2xl font-medium text-foreground">
                        {person.name}
                      </h2>
                      <p className="text-sm font-medium uppercase tracking-wider text-terracotta">
                        {person.role}
                      </p>
                    </div>
                  </div>
                  <p className="mt-5 text-base leading-relaxed text-muted">
                    {person.bio}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.1}>
            <div className="mt-14 rounded-xl border border-accent/20 bg-surface p-8 text-center md:p-10">
              <h2 className="font-display text-2xl font-medium text-foreground md:text-3xl">
                The fifth chair at dinner is empty
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-lg text-muted">
                One room is open. If this sounds like your scene, say so —
                worst case, we have a nice chat.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <Link
                  href="/room"
                  className="inline-flex min-h-12 items-center justify-center rounded-md bg-accent px-6 text-base font-medium text-cream transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:shadow-accent/25 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                >
                  See the room
                </Link>
                <a
                  href="/#contact"
                  className="inline-flex min-h-12 items-center justify-center rounded-md border border-accent/30 px-6 text-base font-medium text-accent transition-colors hover:bg-accent/5"
                >
                  Say hello
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </main>
      <Footer />
    </>
  );
}
