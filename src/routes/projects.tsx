import { createFileRoute } from "@tanstack/react-router";
import { projects } from "@/lib/content";
import { Newsletter } from "@/components/Newsletter";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — David Cohen" },
      {
        name: "description",
        content:
          "Selected work in healthcare technology, writing, and long-term photographic studies.",
      },
      { property: "og:title", content: "Projects — David Cohen" },
      {
        property: "og:description",
        content:
          "Selected work in healthcare technology, writing, and long-term photographic studies.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <div>
      <section className="mx-auto max-w-5xl px-6 pt-16 pb-16 sm:pt-24 sm:pb-24">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-clay">Work</p>
        <h1 className="mt-4 max-w-2xl font-display text-4xl font-light leading-tight text-foreground sm:text-5xl">
          Projects
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
          Products I've helped build, letters I keep writing, and studies that may never be
          finished. A few of the things I'm proud of, in varying states of completion.
        </p>

        <div className="mt-14 divide-y divide-border border-t border-b border-border">
          {projects.map((project) => (
            <article key={project.title} className="py-10 sm:grid sm:grid-cols-[minmax(0,1fr)_auto] sm:gap-8">
              <div className="min-w-0">
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <h2 className="font-display text-2xl font-light text-foreground sm:text-3xl">
                    {project.title}
                  </h2>
                  <span className="text-xs uppercase tracking-[0.15em] text-clay">{project.status}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {project.role} · {project.year}
                </p>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {project.description}
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
