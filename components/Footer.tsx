export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-5 py-10 pb-24 md:px-8 md:pb-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <p>
          <span className="font-display text-foreground">Locus</span> · West
          Philadelphia · {year}
        </p>
        <p>Part of the Effective Altruism ecosystem and adjacent communities.</p>
      </div>
    </footer>
  );
}
