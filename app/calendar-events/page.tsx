import type { Metadata } from "next";
import { EventCard } from "@/components/cards";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { PageHero } from "@/components/page-hero";
import { SectionHeader } from "@/components/section-header";
import { events } from "@/data/site";

export const metadata: Metadata = {
  title: "Calendar / Events",
  description:
    "Upcoming school events and important dates for Okanese Learning Center.",
};

export default function CalendarEventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Calendar / Events"
        title="Important dates for families and community."
        description="Dates should include enough context that families know what is happening, what to send, and whether they need to attend."
        image="/images/okanese-building-close.jpg"
      />
      <section className="soft-section">
        <div className="container-pad grid gap-10 py-14 sm:py-20 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <Reveal>
            <SectionHeader title="Upcoming events" />
          </Reveal>
          <Stagger className="mt-8 grid gap-4">
            {events.map((event) => (
              <StaggerItem key={event.title}>
                <EventCard item={event} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
        <Reveal className="hand-card border border-forest-900/10 bg-cream p-6 shadow-soft">
          <h2 className="text-xl font-black text-forest-900">Month view</h2>
          <p className="mt-3 leading-7 text-forest-900/70">
            The month view gives families a quick visual scan of school days,
            family events, student showcases, and staff learning days.
          </p>
          <div className="mt-6 grid grid-cols-7 gap-2 text-center text-sm">
            {Array.from({ length: 35 }, (_, index) => (
              <div
                className="rounded-full border border-forest-900/10 bg-gold/14 py-2 text-forest-900/70"
                key={index}
              >
                {index + 1 <= 31 ? index + 1 : ""}
              </div>
            ))}
          </div>
        </Reveal>
        </div>
      </section>
    </>
  );
}
