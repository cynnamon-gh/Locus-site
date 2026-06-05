import Image from "next/image";
import { Reveal } from "./motion/Reveal";
import { SectionHeading } from "./SectionHeading";

const galleryImages = [
  { src: "/images/hero/hero.jpg", alt: "Locus exterior in West Philadelphia", featured: true },
  { src: "/images/gallery/01-crowd.jpg", alt: "Community gathering outdoors" },
  { src: "/images/gallery/02-presentation.jpg", alt: "Presentation and discussion space" },
  { src: "/images/gallery/03-call-room.jpg", alt: "Small meeting room" },
  { src: "/images/gallery/04-sunroom.jpg", alt: "Bright sunroom seating" },
  { src: "/images/gallery/05-lobby.jpg", alt: "Welcoming common area" },
  { src: "/images/gallery/06-gathering.jpg", alt: "People gathered indoors" },
  { src: "/images/gallery/08-outdoor.jpg", alt: "Outdoor campus space" },
];

export function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-24 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Photos" title="The house & the vibe" />
        <Reveal delay={0.08}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            Exterior shots are from Locus in West Philadelphia. Other images
            are placeholders from community spaces we admire — we will swap in
            Locus-specific photos as they are ready.
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
