import type { Metadata } from "next";
import { ProgramCard } from "@/components/cards";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { PageHero } from "@/components/page-hero";
import { SectionHeader } from "@/components/section-header";
import { programs } from "@/data/site";

export const metadata: Metadata = {
  title: "Programs & Services",
  description:
    "Programs and services at Okanese Learning Center, including learning supports, nutrition, transportation, and student services.",
};

export default function ProgramsServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Programs & Services"
        title="Support for learning, wellness, meals, and daily school life."
        description="Families can understand what support exists, who to contact, and how each service fits into the school day."
        image="/images/okanese-campus-close.jpg"
      />
      <section className="soft-section">
        <div className="container-pad py-14 sm:py-20">
          <Reveal>
            <SectionHeader
              title="Program areas"
              description="Program areas are grouped around the student experience: classroom learning, language and culture, wellness, nutrition, transportation, and family communication."
            />
          </Reveal>
          <Stagger className="mt-10 grid gap-7 md:grid-cols-2">
            {programs.map((item) => (
              <StaggerItem className="even:md:translate-y-8" key={item.title}>
                <ProgramCard item={item} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
      <section className="green-glow text-cream">
        <div className="container-pad grid gap-6 py-14 sm:py-20 lg:grid-cols-3">
          {[
            {
              title: "Need support?",
              body: "Families can begin with the school office or classroom teacher, and staff will help connect the student to the right support.",
            },
            {
              title: "Family services",
              body: "Nutrition, transportation, attendance, and forms are treated as part of learning because students do better when routines are steady.",
            },
            {
              title: "Community-led learning",
              body: "Language, culture, land, and community knowledge are approached with care and shared through appropriate school guidance.",
            },
          ].map((item) => (
            <Reveal className="hand-card border border-cream/10 bg-cream/8 p-6" key={item.title}>
              <h2 className="text-xl font-black text-gold">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-cream/74">
                {item.body}
              </p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
