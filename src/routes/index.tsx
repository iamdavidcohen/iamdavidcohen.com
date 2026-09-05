import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { essays, projects, photos } from "@/lib/content";
import { Newsletter } from "@/components/Newsletter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "David Cohen — Healthcare, Product & Photography" },
      {
        name: "description",
        content:
          "Essays, projects, and photography by David Cohen — working at the intersection of healthcare, product management, and film photography.",
      },
      { property: "og:title", content: "David Cohen — Healthcare, Product & Photography" },
      {
        property: "og:description",
        content:
          "Essays, projects, and photography by David Cohen — working at the intersection of healthcare, product management, and film photography.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const latestEssays = essays.slice(0, 3);
  const featured = projects[0]!;
  const photoPreview = [photos[0]!, photos[1]!, photos[3]!];

  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pt-20 pb-16 sm:pt-32 sm:pb-24">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-clay">
          Healthcare · Product · Photography
        </p>
        <h1 className="mt-6 max-w-3xl font-display text-4xl font-light leading-[1.15] tracking-tight text-foreground sm:text-6xl">
          Thinking in public about how care is designed, built, and{" "}
          <em className="italic">seen</em>.
        </h1>
        <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          I'm David Cohen. I build products for healthcare teams by day and photograph quiet,
          transitional spaces by weekend. This site is where the two practices meet — essays,
          projects, and the occasional contact sheet.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-8">
          <Link
            to="/essays"
            className="inline-flex items-center gap-2 border-b border-foreground pb-0.5 text-sm font-medium text-foreground transition-colors hover:text-clay hover:border-clay"
          >
            Read the essays <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/about"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            More about me
          </Link>
        </div>
      </section>

      {/* Latest essays */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="font-display text-2xl font-light italic text-foreground sm:text-3xl">
              Latest essays
            </h2>
            <Link
              to="/essays"
              className="shrink-0 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              View all
            </Link>
          </div>
          <div className="mt-10 divide-y divide-border border-t border-b border-border">
            {latestEssays.map((essay) => (
              <article key={essay.title} className="group py-8">
                <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  {essay.tag} · {essay.date} · {essay.readingTime}
                </p>
                <h3 className="mt-3 font-display text-2xl font-light text-foreground transition-colors group-hover:text-clay">
                  <Link to="/essays">{essay.title}</Link>
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {essay.excerpt}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Featured project */}
      <section className="border-t border-border bg-secondary">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-clay">Featured project</p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-light leading-tight text-foreground sm:text-4xl">
            {featured.title}
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            {featured.role} · {featured.year}
          </p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {featured.description}
          </p>
          <Link
            to="/projects"
            className="mt-8 inline-flex items-center gap-2 border-b border-foreground pb-0.5 text-sm font-medium text-foreground transition-colors hover:text-clay hover:border-clay"
          >
            All projects <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Photography preview */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="font-display text-2xl font-light italic text-foreground sm:text-3xl">
              Photography
            </h2>
            <Link
              to="/photography"
              className="shrink-0 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              View gallery
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {photoPreview.map((photo) => (
              <figure key={photo.title}>
                <img
                  src={photo.src}
                  alt={`${photo.title} — ${photo.location}`}
                  width={photo.width}
                  height={photo.height}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover sm:aspect-[3/4]"
                />
                <figcaption className="mt-3 flex items-baseline justify-between text-sm">
                  <span className="font-display italic text-foreground">{photo.title}</span>
                  <span className="text-xs text-muted-foreground">{photo.year}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
}
