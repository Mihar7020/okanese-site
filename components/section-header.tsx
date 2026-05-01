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
        <p
          className={`mb-4 text-xs font-bold uppercase tracking-[0.12em] ${
            isLight ? "text-gold" : "text-forest-800"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`font-display text-3xl sm:text-4xl ${
          isLight ? "text-white" : "text-charcoal"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 text-base leading-7 sm:text-lg ${
            isLight ? "text-white/78" : "text-graphite"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
