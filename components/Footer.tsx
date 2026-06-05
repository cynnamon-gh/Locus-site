import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border px-5 py-10 pb-24 md:px-8 md:pb-10">
      {/* The house cat, keeping watch over the footer */}
      <svg
        className="absolute -top-[39px] right-8 h-10 w-auto text-umber/85 md:right-16"
        viewBox="0 0 64 64"
        aria-hidden
      >
        <title>The house cats say hi</title>
        {/* tail — swishes gently */}
        <path
          className="cat-tail"
          d="M35 61 C47 63 55 56 52 45"
          fill="none"
          stroke="currentColor"
          strokeWidth="4.5"
          strokeLinecap="round"
        />
        {/* sitting body */}
        <path
          d="M11 64 C11 44 15 31 24 26 C33 31 37 45 37 64 Z"
          fill="currentColor"
        />
        {/* head + ears */}
        <circle cx="24" cy="17" r="9.5" fill="currentColor" />
        <polygon points="16,13 13.5,2.5 23,7.5" fill="currentColor" />
        <polygon points="25,7.5 34.5,2.5 32,13" fill="currentColor" />
      </svg>

      <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <p>
          <span className="font-display text-lg text-foreground">Locus</span>
          <span aria-hidden className="mx-2 text-terracotta">
            ✳
          </span>
          West Philadelphia · {year}
        </p>
        <nav aria-label="Footer" className="flex gap-5">
          <Link href="/room" className="transition-colors hover:text-foreground">
            The room
          </Link>
          <Link
            href="/residents"
            className="transition-colors hover:text-foreground"
          >
            Residents
          </Link>
          <Link
            href="/photos"
            className="transition-colors hover:text-foreground"
          >
            Photos
          </Link>
        </nav>
        <p>Part of the Effective Altruism ecosystem and adjacent communities.</p>
      </div>
    </footer>
  );
}
