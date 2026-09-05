import { useState, type FormEvent } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  }

  return (
    <section className="border-t border-border bg-secondary">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-clay">The Margin Notes</p>
          <h2 className="mt-4 font-display text-3xl font-light leading-tight text-foreground sm:text-4xl">
            One letter a month, on healthcare, product craft, and paying attention.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            No growth hacks, no threads, no noise. Just an essay and a photograph, delivered when it's ready.
          </p>

          {submitted ? (
            <p className="mt-8 font-display text-xl italic text-foreground">
              Thank you — you're on the list. Talk soon.
            </p>
          ) : (
            <form onSubmit={onSubmit} className="mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                aria-label="Email address"
                className="h-12 flex-1 border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-clay focus:outline-none"
              />
              <button
                type="submit"
                className="h-12 bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-80"
              >
                Subscribe
              </button>
            </form>
          )}

          <p className="mt-6 text-sm text-muted-foreground">
            Prefer a conversation?{" "}
            <a
              href="mailto:hello@iamdavidcohen.com"
              className="border-b border-muted-foreground/40 text-foreground transition-colors hover:border-clay hover:text-clay"
            >
              hello@iamdavidcohen.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
