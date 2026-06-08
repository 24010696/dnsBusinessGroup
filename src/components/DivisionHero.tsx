interface DivisionHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
}

export function DivisionHero({ eyebrow, title, description, image }: DivisionHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[var(--brand-ink)] text-white">
      <div className="absolute inset-0">
        <img src={image} alt={eyebrow} className="h-full w-full object-cover opacity-55" width={1920} height={600} />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--brand-ink)] via-[var(--brand-ink)]/90 to-[var(--brand-ink)]/40" />
      </div>
      <div className="container-prose relative py-24 sm:py-32">
        <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-red)]">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-balance font-display text-4xl font-bold sm:text-5xl md:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg text-white/80">{description}</p>
      </div>
    </section>
  );
}
