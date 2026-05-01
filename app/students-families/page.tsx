import type { Metadata } from "next";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { PageHero } from "@/components/page-hero";
import { SectionHeader } from "@/components/section-header";

export const metadata: Metadata = {
  title: "Students & Families",
  description:
    "Family resources for attendance, transportation, nutrition, forms, and student support.",
};

const familySections = [
  {
    id: "attendance",
    title: "Attendance",
    body: "Families are encouraged to contact the office when a student will be away, late, or leaving early so staff can keep attendance accurate and follow up with care.",
  },
  {
    id: "transportation",
    title: "Transportation",
    body: "Transportation updates are shared through school communication channels when routes, pickup times, weather, or safety routines change.",
  },
  {
    id: "nutrition",
    title: "Nutrition Program",
    body: "The nutrition program helps students settle into the school day with breakfast, snacks, and food routines that support learning and wellness.",
  },
  {
    id: "forms",
    title: "Forms and Documents",
    body: "Families can connect with the office for registration, permission forms, supply lists, student records, and school communication updates.",
  },
];

export default function StudentsFamiliesPage() {
  return (
    <>
      <PageHero
        eyebrow="Students & Families"
        title="Practical information for everyday school routines."
        description="Attendance, meals, buses, forms, and student supports should feel close at hand, especially on a busy morning."
        image="/images/okanese-overhead.jpg"
      />
      <section className="container-pad py-14 sm:py-20">
        <Reveal>
          <SectionHeader
            title="Family resources"
            description="Each section is structured for quick scanning on mobile and desktop, with plain language for everyday family routines."
          />
        </Reveal>
        <Stagger className="mt-8 grid gap-5 md:grid-cols-2">
          {familySections.map((section) => (
            <StaggerItem key={section.id}>
              <article
                className="h-full rounded-2xl border border-forest-900/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lift"
                id={section.id}
              >
                <h2 className="text-xl font-black text-forest-900">
                  {section.title}
                </h2>
                <p className="mt-3 leading-7 text-forest-900/70">
                  {section.body}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </section>
    </>
  );
}
