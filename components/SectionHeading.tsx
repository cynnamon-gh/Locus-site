import { Reveal } from "./motion/Reveal";

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
    <Reveal>
      <header id={id} className={`scroll-mt-24 ${className}`}>
        {eyebrow ? (
          <p className="mb-2 flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-accent">
            <span aria-hidden className="text-terracotta">
              ✳
            </span>
            {eyebrow}
          </p>
        ) : null}
        <h2 className="font-display text-3xl font-medium tracking-tight text-foreground md:text-4xl">
          {title}
        </h2>
      </header>
    </Reveal>
  );
}
