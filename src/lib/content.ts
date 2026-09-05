import photo1 from "@/assets/photo-1.jpg";
import photo2 from "@/assets/photo-2.jpg";
import photo3 from "@/assets/photo-3.jpg";
import photo4 from "@/assets/photo-4.jpg";
import photo5 from "@/assets/photo-5.jpg";
import photo6 from "@/assets/photo-6.jpg";

export type Essay = {
  title: string;
  date: string;
  readingTime: string;
  excerpt: string;
  tag: string;
};

export const essays: Essay[] = [
  {
    title: "The waiting room is a product too",
    date: "August 2026",
    readingTime: "7 min read",
    excerpt:
      "We spend months optimizing intake forms and minutes thinking about the thirty feet between the front door and the exam room. Patients notice. The space, the signage, the silence — all of it is an interface, and most of it was never designed at all.",
    tag: "Healthcare",
  },
  {
    title: "Roadmaps are fiction. Good fiction.",
    date: "June 2026",
    readingTime: "5 min read",
    excerpt:
      "A roadmap's job isn't to predict the future — it's to give a team a shared story worth believing in. The problem starts when we forget we wrote it. On narrative fallibility, honest planning, and leaving room for the plot twist.",
    tag: "Product",
  },
  {
    title: "Photography as a practice of attention",
    date: "April 2026",
    readingTime: "6 min read",
    excerpt:
      "I don't make photographs to remember things. I make them because the act of framing the world slows me down enough to actually see it. What a decade behind a viewfinder taught me about listening in meetings.",
    tag: "Photography",
  },
  {
    title: "What hospitals taught me about onboarding",
    date: "February 2026",
    readingTime: "8 min read",
    excerpt:
      "The first night shift of a new nurse looks remarkably like the first week of a new user: disoriented, high-stakes, and utterly dependent on whoever is nearby. Onboarding isn't documentation — it's proximity.",
    tag: "Product",
  },
  {
    title: "Slow decisions, fast teams",
    date: "November 2025",
    readingTime: "5 min read",
    excerpt:
      "Speed is a function of fewer reversals, not faster movement. The teams that ship fastest are the ones that argue longest about the right things, once, in writing, and then never again.",
    tag: "Essay",
  },
  {
    title: "The dignity of boring software",
    date: "September 2025",
    readingTime: "6 min read",
    excerpt:
      "Nobody celebrates the scheduling tool that simply works every single day. In healthcare, boring is the highest compliment a product can earn — and the hardest one to design for.",
    tag: "Healthcare",
  },
];

export type Project = {
  title: string;
  year: string;
  role: string;
  description: string;
  status: string;
};

export const projects: Project[] = [
  {
    title: "Meridian Health OS",
    year: "2024 — present",
    role: "Head of Product",
    description:
      "A care-coordination platform for community clinics, rebuilding how intake, referral, and follow-up flow between overextended teams. The thesis: reduce the surface area of every screen until the work becomes obvious.",
    status: "Active",
  },
  {
    title: "The Margin Notes",
    year: "2022 — present",
    role: "Writer",
    description:
      "A monthly letter on healthcare, product craft, and paying attention. Long-form essays, field notes from clinic visits, and the occasional contact sheet. Currently read by a small, patient group of subscribers.",
    status: "Ongoing",
  },
  {
    title: "Ward Light",
    year: "2023",
    role: "Product Lead",
    description:
      "An ambient status system for hospital wards — one glanceable light per room instead of one more dashboard. A study in how little information a busy clinician actually needs at 3 a.m.",
    status: "Shipped",
  },
  {
    title: "Analog / Digital",
    year: "2020 — ongoing",
    role: "Photographer",
    description:
      "A long-term photographic study of transitional spaces: waiting rooms, corridors, thresholds. Shot on medium-format film, developed slowly, published rarely.",
    status: "Ongoing",
  },
];

export type Photo = {
  src: string;
  title: string;
  location: string;
  year: string;
  width: number;
  height: number;
};

export const photos: Photo[] = [
  {
    src: photo1,
    title: "Ward Corridor, Morning",
    location: "St. Luke's Annex",
    year: "2024",
    width: 1200,
    height: 900,
  },
  {
    src: photo2,
    title: "Water Towers",
    location: "Brooklyn, NY",
    year: "2023",
    width: 900,
    height: 1200,
  },
  {
    src: photo3,
    title: "Field Notes",
    location: "Home studio",
    year: "2025",
    width: 1200,
    height: 900,
  },
  {
    src: photo4,
    title: "Cliff Path",
    location: "Point Reyes, CA",
    year: "2024",
    width: 900,
    height: 1200,
  },
  {
    src: photo5,
    title: "The Tool",
    location: "Home studio",
    year: "2023",
    width: 1200,
    height: 900,
  },
  {
    src: photo6,
    title: "Waiting Room",
    location: "Undisclosed clinic",
    year: "2025",
    width: 900,
    height: 1200,
  },
];
