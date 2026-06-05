export function SectionHeading({
  id,
  eyebrow,
  title,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  className?: string;
}) {
  return (
    <header id={id} className={`scroll-mt-24 ${className}`}>
      {eyebrow ? (
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl font-medium tracking-tight text-foreground md:text-4xl">
        {title}
      </h2>
    </header>
  );
}
