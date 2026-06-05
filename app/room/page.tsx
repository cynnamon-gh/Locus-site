import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
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
import { ROOM_PHOTOS } from "@/lib/photos";

export const metadata: Metadata = {
  title: "The open room — Locus",
  description:
    "One room is open at Locus, an EA-adjacent group house in West Philadelphia. $1,125/month plus shared utilities, hardwood floors, built-in shelving, and good housemates.",
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

export default function RoomPage() {
  return (
    <>
      <SiteNav />
      <main className="px-5 pb-20 pt-28 md:px-8 md:pb-28 md:pt-36">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="The open room" title="One room, waiting" />
          <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-start">
            <Reveal delay={0.08}>
              <div className="space-y-5 text-lg leading-relaxed text-muted">
                <p>
                  Locus is a five-bedroom, two-bath house, and one bedroom is
                  open. It has hardwood floors, big windows, a closet,{" "}
                  <em>and</em> a built-in shelving nook — the realtor staged
                  it with a bed on one side and a desk nook on the other, and
                  it comfortably fits both.
                </p>
                <p>
                  A fifth bedroom is kept free as a shared office and guest
                  room, so your visitors have somewhere to stay. The house
                  comes with a huge-for-the-city backyard (fire pit and
                  seating area in the works), a super cute front porch, a
                  projector, lots of art, lots of books — and housemates who
                  each cook one vegetarian dinner for the house every week.
                </p>
                <p>
                  We are connected to Effective Altruism and adjacent
                  communities, and we like hosting — EA events, game nights,
                  good dinners. You can{" "}
                  <Link
                    href="/residents"
                    className="font-medium text-accent underline-offset-4 hover:underline"
                  >
                    meet the residents
                  </Link>{" "}
                  to see who you would be living with.
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
                <a
                  href="/#contact"
                  className="mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-md bg-accent text-base font-medium text-cream transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:shadow-accent/25 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                >
                  Ask about the room
                </a>
              </aside>
            </Reveal>
          </div>

          {/* Photos */}
          <div className="mt-16 grid gap-4 md:grid-cols-2">
            <Reveal className="md:col-span-2">
              <div className="relative aspect-[3/2] overflow-hidden rounded-xl border border-border">
                <Image
                  src={ROOM_PHOTOS[0].src}
                  alt={ROOM_PHOTOS[0].alt}
                  fill
                  priority
                  sizes="(min-width: 1152px) 1152px, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            {ROOM_PHOTOS.slice(1).map((photo, i) => (
              <Reveal key={photo.src} delay={0.08 * (i + 1)}>
                <div className="relative aspect-[3/2] overflow-hidden rounded-xl border border-border">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.08}>
            <p className="mt-4 text-sm text-muted">
              More in the{" "}
              <Link
                href="/photos"
                className="font-medium text-accent underline-offset-4 hover:underline"
              >
                photo slideshow
              </Link>
              , the{" "}
              <a
                href={VIDEO_TOUR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-accent underline-offset-4 hover:underline"
              >
                video walkthrough
              </a>
              , and the{" "}
              <a
                href={DRIVE_FOLDER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-accent underline-offset-4 hover:underline"
              >
                full Drive folder
              </a>
              .
            </p>
          </Reveal>

          {/* How we share costs */}
          <div className="mt-20 max-w-3xl">
            <SectionHeading
              eyebrow="Money, handled thoughtfully"
              title="How we share costs"
            />
            <Reveal delay={0.1}>
              <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted">
                <p>
                  Rent and utilities are the easy part. For common-space
                  purchases — furniture, kitchen gear, the eventual fire pit —
                  we have thought hard about sharing the burden fairly. We
                  follow the approach from Supernuclear&apos;s{" "}
                  <a
                    href={SUPERNUCLEAR_FINANCE_GUIDE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-accent underline-offset-4 hover:underline"
                  >
                    guide to managing finances in a coliving house
                  </a>{" "}
                  and use{" "}
                  <a
                    href={POOLMONEY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-accent underline-offset-4 hover:underline"
                  >
                    Pool
                  </a>{" "}
                  — built by the team behind Braid, the app the guide
                  recommends — to pool money for shared purchases, so no one
                  person is ever on the hook and everything stays
                  transparent.
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
