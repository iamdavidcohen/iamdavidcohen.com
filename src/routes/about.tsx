import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/portrait.jpg";
import { Newsletter } from "@/components/Newsletter";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — David Cohen" },
      {
        name: "description",
        content:
          "David Cohen is a product leader in healthcare and a film photographer, writing about the design of care and the practice of attention.",
      },
      { property: "og:title", content: "About — David Cohen" },
      {
        property: "og:description",
        content:
          "David Cohen is a product leader in healthcare and a film photographer, writing about the design of care and the practice of attention.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div>
      <section className="mx-auto max-w-5xl px-6 pt-16 pb-16 sm:pt-24 sm:pb-24">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-16">
          <div className="min-w-0">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-clay">About</p>
            <h1 className="mt-4 font-display text-4xl font-light leading-tight text-foreground sm:text-5xl">
              David Cohen
            </h1>

            <div className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground">
              <p>
                I spend my working life inside healthcare — building products for clinics,
                hospitals, and the people who keep them running. For the past decade I've led
                product teams through the slow, necessary work of making software that respects
                how care actually happens: interrupted, improvised, and deeply human.
              </p>
              <p>
                Before product management I trained in health policy, which taught me that most
                systems fail not from bad intentions but from unexamined defaults. That idea still
                shapes everything I build and write.
              </p>
              <p>
                On weekends I shoot medium-format film, mostly waiting rooms and corridors — the
                transitional spaces where healthcare's promises meet its reality. Photography is
                how I practice the attention that product work demands.
              </p>
              <p>
                This site is where I think in public. The essays are opinions held loosely, the
                projects are works in progress, and the photographs are finished only when I stop
                looking at them.
              </p>
            </div>

            <div className="mt-12 border-t border-border pt-10">
              <h2 className="font-display text-xl font-light italic text-foreground">
                Currently
              </h2>
              <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <span className="shrink-0 text-clay">—</span>
                  Head of Product at Meridian Health OS
                </li>
                <li className="flex gap-3">
                  <span className="shrink-0 text-clay">—</span>
                  Writing The Margin Notes, a monthly letter
                </li>
                <li className="flex gap-3">
                  <span className="shrink-0 text-clay">—</span>
                  Photographing waiting rooms across the Northeast
                </li>
                <li className="flex gap-3">
                  <span className="shrink-0 text-clay">—</span>
                  Based in Brooklyn, NY
                </li>
              </ul>
            </div>
          </div>

          <aside className="lg:pt-10">
            <figure>
              <img
                src={portrait}
                alt="Portrait of David Cohen seated by a window"
                width={1024}
                height={1280}
                className="w-full object-cover"
              />
              <figcaption className="mt-3 text-xs text-muted-foreground">
                Self-timer, home studio, 2025.
              </figcaption>
            </figure>
          </aside>
        </div>
      </section>

      <Newsletter />
    </div>
  );
}
