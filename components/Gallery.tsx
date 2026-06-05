import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./motion/Reveal";
import { SectionHeading } from "./SectionHeading";

const galleryImages = [
  { src: "/images/hero/hero.jpg", alt: "Locus exterior in West Philadelphia", featured: true },
  { src: "/images/house/kitchen.jpg", alt: "The kitchen" },
  { src: "/images/house/bedroom-5.jpg", alt: "A sunny bedroom" },
  { src: "/images/house/stairs.jpg", alt: "The wooden staircase" },
  { src: "/images/house/bedroom-2.jpg", alt: "A bedroom with built-in shelves" },
  { src: "/images/house/bedroom-1.jpg", alt: "The open room's desk nook" },
  { src: "/images/house/bathroom.jpg", alt: "A bathroom" },
  { src: "/images/house/bedroom-3.jpg", alt: "The open room" },
];

export function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-24 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Photos" title="The house & the vibe" />
        <Reveal delay={0.08}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            A sampling of the house. The furnished shots are the
            realtor&apos;s staging, not our decor — there are many more in
            the{" "}
            <Link
              href="/photos"
              className="font-medium text-accent underline-offset-4 hover:underline"
            >
              full photo slideshow
            </Link>
            , along with a video walkthrough.
          </p>
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {galleryImages.map((img, index) => (
            <Reveal
              key={img.src}
              delay={index * 0.05}
              y={20}
              className={img.featured ? "col-span-2 row-span-2 h-full" : undefined}
            >
              <figure
                className={
                  img.featured
                    ? "group relative aspect-[4/3] h-full overflow-hidden rounded-lg md:aspect-auto md:min-h-[320px]"
                    : index % 3 === 1
                      ? "group relative aspect-[4/5] overflow-hidden rounded-lg md:aspect-[3/4]"
                      : "group relative aspect-square overflow-hidden rounded-lg"
                }
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045] motion-reduce:transition-none"
                  sizes={
                    img.featured
                      ? "(max-width: 768px) 100vw, 50vw"
                      : "(max-width: 768px) 50vw, 25vw"
                  }
                />
                <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-umber/75 to-umber/0 px-3 pb-2.5 pt-8 text-sm text-cream opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 motion-reduce:transition-none">
                  {img.alt}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
