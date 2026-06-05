import Image from "next/image";
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
    <section
      id="gallery"
      className="scroll-mt-24 px-5 py-20 md:px-8 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Photos" title="The house & the vibe" />
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          Exterior shots are from Locus in West Philadelphia. Other images are
          placeholders from community spaces we admire — we will swap in
          Locus-specific photos as they are ready.
        </p>
        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {galleryImages.map((img, index) => (
            <figure
              key={img.src}
              className={
                img.featured
                  ? "relative col-span-2 row-span-2 aspect-[4/3] overflow-hidden rounded-lg md:aspect-auto md:min-h-[320px]"
                  : index % 3 === 1
                    ? "relative aspect-[4/5] overflow-hidden rounded-lg md:aspect-[3/4]"
                    : "relative aspect-square overflow-hidden rounded-lg"
              }
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 hover:scale-[1.03] motion-reduce:transition-none"
                sizes={
                  img.featured
                    ? "(max-width: 768px) 100vw, 50vw"
                    : "(max-width: 768px) 50vw, 25vw"
                }
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
