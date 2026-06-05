import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { PhotoSlideshow } from "@/components/PhotoSlideshow";
import { SectionHeading } from "@/components/SectionHeading";
import { SiteNav } from "@/components/SiteNav";
import { Reveal } from "@/components/motion/Reveal";
import { DRIVE_FOLDER_URL, VIDEO_TOUR_URL } from "@/lib/constants";
import { PHOTOS } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Photos — Locus",
  description:
    "Photos of Locus, an EA-adjacent group house in West Philadelphia — every room, plus a video walkthrough.",
};

export default function PhotosPage() {
  return (
    <>
      <SiteNav />
      <main className="px-5 pb-20 pt-28 md:px-8 md:pb-28 md:pt-36">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Photos" title="A look around the house" />
          <Reveal delay={0.08}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              Every photo we have — from the realtor&apos;s tour and our own
              first walkthrough, back when the house was empty. A heads-up:
              anything with furniture in it is the realtor&apos;s staging,
              not our actual stuff. Use the arrow keys or the thumbnails to
              browse.
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
      </main>
      <Footer />
    </>
  );
}
