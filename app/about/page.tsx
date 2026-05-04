import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { SectionHeader } from "@/components/section-header";

export const metadata: Metadata = {
  title: "About Okanese Learning Center",
  description:
    "Learn about Okanese Learning Center, its school community, and its student-centered approach.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="About Okanese Learning Center"
        description="A community school presence shaped around family communication, classroom routines, and respectful local content."
        image="/images/okanese-valley.jpg"
      />
      <section className="soft-section">
        <div className="container-pad grid gap-10 py-14 sm:py-20 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <SectionHeader
            eyebrow="School profile"
            title="A grounded place for learning and connection."
            description="Okanese Learning Center supports students through steady classroom learning, practical family communication, and a school culture shaped by care, responsibility, and belonging."
          />
        </Reveal>
        <Stagger className="grid gap-5">
          {[
            "Students should be able to see their day reflected here: classroom learning, school meals, bus routines, celebrations, and support.",
            "Families should find the office contact, calendar, attendance notes, and staff directory without guessing where to click.",
            "Community connection should come from local school voice, not imported graphics or borrowed symbols.",
          ].map((text) => (
            <StaggerItem key={text}>
              <p className="hand-card border border-forest-900/10 bg-cream p-6 leading-7 text-forest-900/75">
                {text}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
        </div>
      </section>
      <section className="soft-section">
        <div className="container-pad grid gap-8 py-14 sm:py-20 lg:grid-cols-3">
          {[
            {
              title: "Who we serve",
              body: "Students, families, staff, and community members use the school as a place for learning, support, and connection.",
            },
            {
              title: "How families connect",
              body: "Families can use the website to find office contacts, attendance information, transportation notes, events, and staff pathways.",
            },
            {
              title: "How we communicate",
              body: "The site keeps everyday information clear, warm, and practical so families know the next step without searching.",
            },
          ].map((item) => (
            <Reveal className="hand-card border border-charcoal/10 bg-cream p-6 shadow-soft" key={item.title}>
              <h2 className="text-xl font-black text-forest-900">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-forest-900/70">
                {item.body}
              </p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
