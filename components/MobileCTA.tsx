import { CALENDAR_URL } from "@/lib/constants";

export function MobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-parchment/95 px-4 py-3 backdrop-blur-md md:hidden">
      <div className="mx-auto flex max-w-lg gap-3">
        <a
          href={CALENDAR_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-11 flex-1 items-center justify-center rounded-md border border-border bg-surface text-sm font-medium text-foreground"
        >
          Calendar
        </a>
        <a
          href="#contact"
          className="flex min-h-11 flex-1 items-center justify-center rounded-md bg-accent text-sm font-medium text-cream"
        >
          Contact
        </a>
      </div>
    </div>
  );
}
