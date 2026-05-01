export default function Loading() {
  return (
    <section className="container-pad py-16" aria-live="polite" aria-busy="true">
      <div className="max-w-3xl">
        <div className="h-4 w-40 animate-pulse rounded bg-forest-900/10" />
        <div className="mt-5 h-12 w-full max-w-xl animate-pulse rounded bg-forest-900/10" />
        <div className="mt-5 h-24 w-full animate-pulse rounded bg-forest-900/10" />
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {Array.from({ length: 3 }, (_, index) => (
          <div
            className="h-40 animate-pulse rounded-lg bg-forest-900/10"
            key={index}
          />
        ))}
      </div>
    </section>
  );
}
