import { Reveal } from "@/components/motion";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image?: string;
};

export function PageHero({ eyebrow, title, description, image }: PageHeroProps) {
  return (
    <section className="doodle-field relative overflow-hidden bg-earth-50 pt-16 text-cream">
      <img
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-28"
        src={image ?? "/images/okanese-school-front.jpg"}
      />
      <div className="absolute inset-0 image-wash" />
      <div className="absolute inset-x-0 bottom-0 h-2 brand-stripe" />
      <div className="container-pad relative grid gap-10 py-14 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal className="max-w-4xl">
          <p className="inline-flex rotate-[-2deg] rounded-full bg-gold px-4 py-2 text-sm font-black uppercase tracking-[0.16em] text-charcoal shadow-warm">
            {eyebrow}
          </p>
          <h1 className="mt-5 max-w-4xl font-display text-5xl sm:text-7xl lg:text-8xl">
            {title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-cream/82">
            {description}
          </p>
        </Reveal>
        <Reveal delay={0.08} className="relative min-h-80 rotate-1 overflow-hidden rounded-[2rem] bg-cream/16 p-3 shadow-lift backdrop-blur-sm">
          <img
            alt="Okanese Learning Center school life"
            className="h-full min-h-72 w-full rounded-[1.55rem] object-cover photo-tilt"
            src={
              image ??
              "/images/okanese-school-front.jpg"
            }
          />
          <div className="absolute inset-3 rounded-[1.55rem] bg-gradient-to-t from-forest-900/58 via-transparent to-transparent" />
          <p className="absolute bottom-8 left-8 max-w-xs rounded-full bg-cream/92 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-forest-900">
            School life
          </p>
        </Reveal>
      </div>
    </section>
  );
}
