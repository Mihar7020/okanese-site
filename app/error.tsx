"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="soft-section py-20">
      <div className="container-pad">
      <p className="inline-flex rotate-[-1deg] rounded-full bg-gold px-4 py-2 text-sm font-black uppercase tracking-[0.16em] text-forest-900 shadow-sm">
        Site error
      </p>
      <h1 className="mt-4 text-4xl font-black text-forest-900">
        This page could not load.
      </h1>
      <p className="mt-4 max-w-xl leading-7 text-forest-900/70">
        Please try again. If the problem continues, contact the school office
        and share this reference: {error.digest ?? "not available"}.
      </p>
      <button
        className="focus-ring mt-8 rounded-full bg-forest-800 px-5 py-3 text-sm font-black text-cream"
        onClick={reset}
        type="button"
      >
        Try again
      </button>
      </div>
    </section>
  );
}
