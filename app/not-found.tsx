import Link from "next/link";

export default function NotFound() {
  return (
    <section className="soft-section py-20">
      <div className="container-pad">
      <p className="inline-flex rotate-[-1deg] rounded-full bg-gold px-4 py-2 text-sm font-black uppercase tracking-[0.16em] text-forest-900 shadow-sm">
        Page not found
      </p>
      <h1 className="mt-4 text-4xl font-black text-forest-900">
        We could not find that page.
      </h1>
      <p className="mt-4 max-w-xl leading-7 text-forest-900/70">
        The page may have moved, or the link may need to be updated. Start from
        the homepage or contact the school office.
      </p>
      <Link
        className="focus-ring mt-8 inline-flex rounded-full bg-forest-800 px-5 py-3 text-sm font-black text-cream"
        href="/"
      >
        Return home
      </Link>
      </div>
    </section>
  );
}
