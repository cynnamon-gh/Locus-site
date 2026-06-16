import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./motion/Reveal";
import { SectionHeading } from "./SectionHeading";

const galleryImages = [
  { src: "/images/house/kitchen.jpg", alt: "The kitchen" },
  { src: "/images/house/stairs.jpg", alt: "The wooden staircase" },
  { src: "/images/house/bedroom-5.jpg", alt: "A sunny bedroom" },
  { src: "/images/house/bedroom-2.jpg", alt: "A bedroom with built-in shelves" },
];

export function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-24 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Photos" title="A look around" />
        <Reveal delay={0.08}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            A few corners of the house. The{" "}
            <Link
              href="/live"
              className="font-medium text-accent underline-offset-4 hover:underline"
            >
              full set
            </Link>{" "}
            — every room, plus a video walkthrough — lives on the live-here
            page.
          </p>
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {galleryImages.map((img, index) => (
            <Reveal key={img.src} delay={index * 0.05} y={20}>
              <figure className="group relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045] motion-reduce:transition-none"
                  sizes="(max-width: 768px) 50vw, 25vw"
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
