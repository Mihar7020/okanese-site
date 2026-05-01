import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-pad py-20">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-harvest-500">
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
        className="focus-ring mt-8 inline-flex rounded-md bg-forest-800 px-5 py-3 text-sm font-black text-white"
        href="/"
      >
        Return home
      </Link>
    </section>
  );
}
