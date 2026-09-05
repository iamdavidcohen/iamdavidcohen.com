import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Menu, X } from "lucide-react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="max-w-md text-center">
        <p className="font-display text-7xl italic text-foreground">404</p>
        <h2 className="mt-4 text-lg font-medium text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="border-b border-foreground pb-0.5 text-sm text-foreground transition-colors hover:text-clay hover:border-clay"
          >
            Return home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl italic text-foreground">This page didn't load</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="border-b border-foreground pb-0.5 text-sm text-foreground transition-colors hover:text-clay hover:border-clay"
          >
            Try again
          </button>
          <a
            href="/"
            className="border-b border-transparent pb-0.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

const navLinks = [
  { to: "/essays", label: "Essays" },
  { to: "/projects", label: "Projects" },
  { to: "/photography", label: "Photography" },
  { to: "/about", label: "About" },
] as const;

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-border bg-background">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
        <Link to="/" className="font-display text-xl italic tracking-tight text-foreground">
          David Cohen
        </Link>

        <nav className="hidden items-center gap-8 sm:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground underline underline-offset-8 decoration-clay" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className="text-foreground sm:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border px-6 py-4 sm:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="text-base text-muted-foreground transition-colors hover:text-foreground"
                activeProps={{ className: "text-foreground" }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} David Cohen · iamdavidcohen.com
        </p>
        <div className="flex items-center gap-6">
          <a
            href="mailto:hello@iamdavidcohen.com"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Email
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Twitter
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "David Cohen — Healthcare, Product & Photography" },
      {
        name: "description",
        content:
          "Essays, projects, and photography by David Cohen — on healthcare, product management, and the practice of paying attention.",
      },
      { name: "author", content: "David Cohen" },
      { property: "og:title", content: "David Cohen — Healthcare, Product & Photography" },
      {
        property: "og:description",
        content:
          "Essays, projects, and photography by David Cohen — on healthcare, product management, and the practice of paying attention.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,400;0,6..72,500;1,6..72,300;1,6..72,400&family=Inter:wght@400;500&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col bg-background">
        <Header />
        <main className="flex-1">
          {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
