import { createFileRoute } from "@tanstack/react-router";
import { photos } from "@/lib/content";
import { Newsletter } from "@/components/Newsletter";

export const Route = createFileRoute("/photography")({
  head: () => ({
    meta: [
      { title: "Photography — David Cohen" },
      {
        name: "description",
        content:
          "Medium-format film photographs of waiting rooms, corridors, and thresholds — transitional spaces where care and attention meet.",
      },
      { property: "og:title", content: "Photography — David Cohen" },
      {
        property: "og:description",
        content:
          "Medium-format film photographs of waiting rooms, corridors, and thresholds — transitional spaces where care and attention meet.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PhotographyPage,
});

function PhotographyPage() {
  return (
    <div>
      <section className="mx-auto max-w-5xl px-6 pt-16 pb-16 sm:pt-24 sm:pb-24">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-clay">Film</p>
        <h1 className="mt-4 max-w-2xl font-display text-4xl font-light leading-tight text-foreground sm:text-5xl">
          Photography
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
          An ongoing study of transitional spaces — waiting rooms, corridors, thresholds — shot on
          medium-format film and developed slowly. These are the places where we pause, and where
          design quietly decides how that pause feels.
        </p>

        <div className="mt-14 columns-1 gap-6 sm:columns-2 lg:columns-3">
          {photos.map((photo) => (
            <figure key={photo.title} className="mb-6 break-inside-avoid">
              <img
                src={photo.src}
                alt={`${photo.title} — ${photo.location}`}
                width={photo.width}
                height={photo.height}
                loading="lazy"
                className="w-full"
              />
              <figcaption className="mt-3 flex items-baseline justify-between gap-2 text-sm">
                <span className="font-display italic text-foreground">{photo.title}</span>
                <span className="shrink-0 text-xs text-muted-foreground">
                  {photo.location}, {photo.year}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <Newsletter />
    </div>
  );
}
