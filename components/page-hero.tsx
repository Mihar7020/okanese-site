import { Reveal } from "@/components/motion";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
};

export function PageHero({ eyebrow, title, description, image }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-earth-50 text-charcoal">
      <div className="absolute inset-x-0 bottom-0 h-2 brand-stripe" />
      <div className="container-pad relative grid gap-10 py-14 sm:py-20 lg:grid-cols-[1fr_0.72fr] lg:items-center">
        <Reveal className="rounded-[10px] border border-charcoal/10 bg-white p-6 shadow-soft sm:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-forest-800">
            {eyebrow}
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-3xl sm:text-4xl">
            {title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-graphite">
            {description}
          </p>
        </Reveal>
        <Reveal delay={0.08} className="relative min-h-72 overflow-hidden rounded-[10px] border border-charcoal/10 bg-white shadow-lift">
          <img
            alt="Okanese Learning Center school life"
            className="absolute inset-0 h-full w-full object-cover"
            src={
              image ??
              "/images/okanese-school-front.jpg"
            }
          />
          <p className="absolute bottom-5 left-5 max-w-xs rounded-[25px] bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-forest-900 shadow-soft">
            School life
          </p>
        </Reveal>
      </div>
    </section>
  );
}
