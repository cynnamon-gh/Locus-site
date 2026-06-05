"use client";

import { useState } from "react";
import { CONTACT_TOPICS } from "@/lib/constants";
import { SectionHeading } from "./SectionHeading";

type FormState = "idle" | "submitting" | "success" | "error";

export function ContactForm({ contactEmail }: { contactEmail?: string }) {
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          topic: data.get("topic"),
          message: data.get("message"),
          website: data.get("website"),
        }),
      });

      const body = await res.json().catch(() => ({}));

      if (!res.ok) {
        setErrorMessage(
          typeof body.error === "string"
            ? body.error
            : "Something went wrong. Please try again.",
        );
        setState("error");
        return;
      }

      setState("success");
      form.reset();
    } catch {
      setErrorMessage("Network error. Please try again.");
      setState("error");
    }
  }

  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-border bg-surface px-5 py-20 pb-32 md:px-8 md:py-28 md:pb-28"
    >
      <div className="mx-auto max-w-2xl">
        <SectionHeading eyebrow="Reach out" title="Contact" />
        <p className="mt-6 text-lg leading-relaxed text-muted">
          Questions about the open room, visiting, or collaborating? Send a
          note — we read everything.
          {contactEmail ? (
            <>
              {" "}
              Or email us directly at{" "}
              <a
                href={`mailto:${contactEmail}`}
                className="font-medium text-accent underline-offset-2 hover:underline"
              >
                {contactEmail}
              </a>
              .
            </>
          ) : null}
        </p>

        {state === "success" ? (
          <p
            className="mt-8 rounded-lg border border-accent/30 bg-parchment px-5 py-4 text-foreground"
            role="status"
          >
            Thanks — your message was sent. We will get back to you soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 space-y-6">
            <div className="hidden" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input
                id="website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                className="mt-2 w-full min-h-12 rounded-md border border-border bg-cream px-4 text-base text-foreground outline-none ring-accent focus:ring-2"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="mt-2 w-full min-h-12 rounded-md border border-border bg-cream px-4 text-base text-foreground outline-none ring-accent focus:ring-2"
              />
            </div>

            <div>
              <label htmlFor="topic" className="block text-sm font-medium text-foreground">
                Topic
              </label>
              <select
                id="topic"
                name="topic"
                defaultValue={CONTACT_TOPICS[0]}
                className="mt-2 w-full min-h-12 rounded-md border border-border bg-cream px-4 text-base text-foreground outline-none ring-accent focus:ring-2"
              >
                {CONTACT_TOPICS.map((topic) => (
                  <option key={topic} value={topic}>
                    {topic}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="mt-2 w-full rounded-md border border-border bg-cream px-4 py-3 text-base text-foreground outline-none ring-accent focus:ring-2"
              />
            </div>

            {state === "error" && errorMessage ? (
              <p className="text-sm text-terracotta" role="alert">
                {errorMessage}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={state === "submitting"}
              className="inline-flex min-h-12 w-full items-center justify-center rounded-md bg-accent px-8 text-base font-medium text-cream transition-opacity hover:opacity-90 disabled:opacity-60 sm:w-auto"
            >
              {state === "submitting" ? "Sending…" : "Send message"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
