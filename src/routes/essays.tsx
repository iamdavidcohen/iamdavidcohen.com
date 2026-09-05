import { createFileRoute } from "@tanstack/react-router";
import { essays } from "@/lib/content";
import { Newsletter } from "@/components/Newsletter";

export const Route = createFileRoute("/essays")({
  head: () => ({
    meta: [
      { title: "Essays — David Cohen" },
      {
        name: "description",
        content:
          "Long-form essays on healthcare systems, product craft, and photography as a practice of attention.",
      },
      { property: "og:title", content: "Essays — David Cohen" },
      {
        property: "og:description",
        content:
          "Long-form essays on healthcare systems, product craft, and photography as a practice of attention.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EssaysPage,
});

function EssaysPage() {
  return (
    <div>
      <section className="mx-auto max-w-5xl px-6 pt-16 pb-16 sm:pt-24 sm:pb-24">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-clay">Writing</p>
        <h1 className="mt-4 max-w-2xl font-display text-4xl font-light leading-tight text-foreground sm:text-5xl">
          Essays
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
          Notes on healthcare, product management, and the discipline of paying attention. Written
          slowly, revised reluctantly, published when ready.
        </p>

        <div className="mt-14 divide-y divide-border border-t border-b border-border">
          {essays.map((essay, i) => (
            <article key={essay.title} className="group py-10 sm:grid sm:grid-cols-[80px_minmax(0,1fr)] sm:gap-8">
              <p className="hidden font-display text-2xl italic text-muted-foreground/50 sm:block">
                {String(i + 1).padStart(2, "0")}
              </p>
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  {essay.tag} · {essay.date} · {essay.readingTime}
                </p>
                <h2 className="mt-3 font-display text-2xl font-light text-foreground transition-colors group-hover:text-clay sm:text-3xl">
                  {essay.title}
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {essay.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Newsletter />
    </div>
  );
}
