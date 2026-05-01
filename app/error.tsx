"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="container-pad py-20">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-harvest-500">
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
        className="focus-ring mt-8 rounded-md bg-forest-800 px-5 py-3 text-sm font-black text-white"
        onClick={reset}
        type="button"
      >
        Try again
      </button>
    </section>
  );
}
