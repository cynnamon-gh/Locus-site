import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { PhotoSlideshow } from "@/components/PhotoSlideshow";
import { SectionHeading } from "@/components/SectionHeading";
import { SiteNav } from "@/components/SiteNav";
import { Reveal } from "@/components/motion/Reveal";
import {
  DRIVE_FOLDER_URL,
  POOLMONEY_URL,
  RENT,
  SUPERNUCLEAR_FINANCE_GUIDE_URL,
  VIDEO_TOUR_URL,
} from "@/lib/constants";
import { PHOTOS } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Live here — Locus",
  description:
    "One room is open at Locus, a group house in West Philadelphia for the EA, rationalist, and post-rationalist communities. $1,125/month plus shared utilities, in-house laundry, dishwasher, and good housemates.",
};

const utilities = [
  {
    name: "Electricity",
    detail: "Variable by season; split equally among housemates.",
  },
  {
    name: "Internet",
    detail: "$60/month for the whole house, split equally.",
  },
  {
    name: "Water, garbage & gas",
    detail: "$60/month combined for all three, split equally.",
  },
];

const included = [
  "Washer & dryer in-house",
  "Dishwasher",
  "Very high ceilings",
  "Big backyard (fire pit in the works)",
  "Front porch",
  "Projector for talks & movie nights",
  "Shared office & guest room",
  "Lots of books and art",
];

export default function LivePage() {
  return (
    <>
      <SiteNav />
      <main className="px-5 pb-20 pt-28 md:px-8 md:pb-28 md:pt-36">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Live here" title="The open room" />
          <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-start">
            <Reveal delay={0.08}>
              <div className="space-y-5 text-lg leading-relaxed text-muted">
                <p>
                  Locus has five bedrooms, and this one is open. Hardwood
                  floors, big windows, a closet, and a built-in shelving nook.
                  In the realtor&apos;s staging it fit a bed on one side and a
                  desk on the other. That furniture was theirs, not ours, so
                  the room comes unfurnished, but the geometry checks out.
                </p>
                <p>
                  The fifth bedroom stays free as a shared office and guest
                  room, so your visitors do not cost you floor space. Each
                  resident cooks one vegetarian dinner for the house each week,
                  and you would too.
                </p>
                <p>
                  Location: University City, close to Penn&apos;s campus.
                  Multiple grocery stores within a short walk (nearest: six
                  minutes), a movie theater, plenty of restaurants, and Clark
                  Park and the Woodlands down the street. Street parking is
                  almost always open within less than a block, and it is about
                  a ten-minute walk to both the trolley and the subway (the L).
                </p>
                <p>
                  We host events for the Effective Altruism, rationalist, and
                  post-rationalist communities, like talks, game nights, and
                  dinners.{" "}
                  <Link
                    href="/residents"
                    className="font-medium text-accent underline-offset-4 hover:underline"
                  >
                    Meet the residents
                  </Link>{" "}
                  to see who you would be living with.
                </p>
                <p>
                  We chose an old house on purpose. The Victorian style won us
                  over the greige of new construction, and we feel like we have
                  more freedom here and more of a connection to the place. The
                  very high ceilings, the hardwood, the porch, and the backyard
                  sealed it.
                </p>
                <p>
                  If intentional coliving and community sound like your thing,
                  and you want to live in a beautiful Victorian townhome in the
                  greatest city in the world, send us a ping. We are happy to be
                  flexible on move-in timing, lease length, and other
                  accommodations, so just ask. Even if you are not sure yet, we
                  are glad to talk it through.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.18}>
              <aside className="rounded-xl border border-accent/20 bg-surface p-8 shadow-sm">
                <dl className="space-y-6">
                  <div>
                    <dt className="text-sm font-medium uppercase tracking-wider text-muted">
                      Rent
                    </dt>
                    <dd className="mt-1 font-display text-3xl text-foreground">
                      {RENT}
                      <span className="text-lg text-muted"> / month</span>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium uppercase tracking-wider text-muted">
                      Utilities, split equally
                    </dt>
                    <dd className="mt-3">
                      <ul className="space-y-3 text-base text-muted">
                        {utilities.map((u) => (
                          <li key={u.name}>
                            <span className="font-medium text-foreground">
                              {u.name}:
                            </span>{" "}
                            {u.detail}
                          </li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                </dl>
                <Link
                  href="/contact"
                  className="mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-md bg-accent text-base font-medium text-cream transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:shadow-accent/25 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                >
                  Ask about the room
                </Link>
              </aside>
            </Reveal>
          </div>

          {/* What's included */}
          <div className="mt-16 max-w-3xl">
            <h2 className="font-display text-2xl font-medium text-foreground">
              What&apos;s in the house
            </h2>
            <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-3 text-base text-muted sm:grid-cols-2">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-base text-muted">
              The house also has cats (hi, Steve), worth knowing if you are
              allergic.
            </p>
          </div>

          {/* Photos */}
          <div className="mt-20">
            <SectionHeading eyebrow="Photos" title="Every room" />
            <Reveal delay={0.08}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
                Every photo we have, from the realtor&apos;s tour and our own
                first walkthrough. Anything with furniture in it is the
                realtor&apos;s staging, not our actual stuff. Arrow keys work.
              </p>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="mt-10">
                <PhotoSlideshow photos={PHOTOS} />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href={VIDEO_TOUR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center rounded-md bg-accent px-6 text-base font-medium text-cream transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:shadow-accent/25 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                >
                  Watch the video walkthrough
                </a>
                <a
                  href={DRIVE_FOLDER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center rounded-md border border-accent/30 px-6 text-base font-medium text-accent transition-colors hover:bg-accent/5"
                >
                  Browse the full Drive folder
                </a>
              </div>
            </Reveal>
          </div>

          {/* How we share costs */}
          <div className="mt-20 max-w-3xl">
            <SectionHeading eyebrow="Logistics" title="How we split costs" />
            <Reveal delay={0.1}>
              <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted">
                <p>
                  Rent and utilities are simple: everything splits equally.
                  For shared purchases like furniture, kitchen gear, and the
                  eventual fire pit, we follow Supernuclear&apos;s{" "}
                  <a
                    href={SUPERNUCLEAR_FINANCE_GUIDE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-accent underline-offset-4 hover:underline"
                  >
                    guide to managing finances in a coliving house
                  </a>{" "}
                  and pool money with{" "}
                  <a
                    href={POOLMONEY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-accent underline-offset-4 hover:underline"
                  >
                    Pool
                  </a>
                  , built by the team behind Braid, the app the guide
                  recommends. The system&apos;s virtues: no one fronts money
                  alone, nothing is hidden, and nobody has to be the house
                  accountant.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
