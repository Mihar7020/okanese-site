import { Reveal } from "@/components/motion";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
};

export function PageHero({ eyebrow, title, description, image }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-earth-50 text-white">
      <div className="absolute inset-0 image-wash" />
      <div className="absolute inset-x-0 bottom-0 h-2 brand-stripe" />
      <div className="container-pad relative grid gap-10 py-14 sm:py-20 lg:grid-cols-[1fr_0.72fr] lg:items-center">
        <Reveal className="rounded-lg bg-black/62 p-6 shadow-lift backdrop-blur-sm sm:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-harvest-300">
            {eyebrow}
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-[1.03] sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/80">
            {description}
          </p>
        </Reveal>
        <Reveal delay={0.08} className="relative min-h-72 overflow-hidden rounded-lg border border-white/20 bg-white/10 shadow-lift">
          <img
            alt="Okanese Learning Center school life"
            className="absolute inset-0 h-full w-full object-cover"
            src={
              image ??
              "/images/okanese-school-front.jpg"
            }
          />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-900/65 via-transparent to-transparent" />
          <p className="absolute bottom-5 left-5 max-w-xs rounded-full bg-white/90 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-forest-900">
            School life
          </p>
        </Reveal>
      </div>
    </section>
  );
}
