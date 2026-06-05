export type Photo = {
  src: string;
  alt: string;
  caption: string;
};

const tour = (n: number): Photo => ({
  src: `/images/house/tour-${String(n).padStart(2, "0")}.jpg`,
  alt: "The house before move-in, from the realtor's tour",
  caption: "From the realtor's tour",
});

const life = (n: number): Photo => ({
  src: `/images/house/life-${n}.jpg`,
  alt: "Walking through the empty house",
  caption: "Our first walkthrough",
});

/** Every photo from the shared Drive folder, in viewing order. */
export const PHOTOS: Photo[] = [
  // The open room first
  {
    src: "/images/house/bedroom-3.jpg",
    alt: "The open bedroom, staged with a bed, closet, and string lights",
    caption: "The open room",
  },
  {
    src: "/images/house/bedroom-1.jpg",
    alt: "The open bedroom's desk nook with built-in bookshelf",
    caption: "The open room — desk nook",
  },
  {
    src: "/images/house/tour-14.jpg",
    alt: "The open bedroom empty, showing built-in shelving and hardwood floors",
    caption: "The open room, as a blank canvas",
  },
  // The rest of the labeled rooms
  {
    src: "/images/house/bedroom-2.jpg",
    alt: "A bedroom at Locus",
    caption: "Bedroom",
  },
  {
    src: "/images/house/bedroom-4.jpg",
    alt: "A bedroom at Locus",
    caption: "Bedroom",
  },
  {
    src: "/images/house/bedroom-5.jpg",
    alt: "A bedroom at Locus",
    caption: "Bedroom",
  },
  {
    src: "/images/house/bedroom-6.jpg",
    alt: "A bedroom at Locus",
    caption: "Bedroom",
  },
  {
    src: "/images/house/kitchen.jpg",
    alt: "The kitchen, with gas range and dishwasher",
    caption: "Kitchen",
  },
  {
    src: "/images/house/bathroom.jpg",
    alt: "A bathroom at Locus",
    caption: "Bathroom",
  },
  {
    src: "/images/house/closet.jpg",
    alt: "A closet at Locus",
    caption: "Closet",
  },
  {
    src: "/images/house/stairs.jpg",
    alt: "The wooden staircase",
    caption: "Stairs",
  },
  // Realtor tour (14 lives in the room group above)
  ...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18].map(tour),
  // First-walkthrough photos
  ...[3712, 3713, 3714, 3715, 3716, 3718, 3720, 3721, 3723, 3725].map(life),
  // The finale
  {
    src: "/images/house/steve.jpg",
    alt: "Steve, an orange tabby, lying in a doorway while March, a black foster cat, watches from behind",
    caption: "Steve, holding the doorway — March (foster, short-term resident) behind",
  },
];

/** The three photos of the room that is for rent. */
export const ROOM_PHOTOS = PHOTOS.slice(0, 3);
