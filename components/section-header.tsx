type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  tone?: "light" | "dark";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  tone = "dark",
}: SectionHeaderProps) {
  const isLight = tone === "light";

  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="mb-4 inline-flex rotate-[-1deg] rounded-full bg-gold/85 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-charcoal shadow-sm">
          <span className="brush-underline">{eyebrow}</span>
        </p>
      ) : null}
      <h2
        className={`font-display text-4xl sm:text-6xl ${
          isLight ? "text-cream" : "text-charcoal"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 text-base leading-7 sm:text-lg ${
            isLight ? "text-cream/76" : "text-charcoal/72"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
