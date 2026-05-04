import type { Metadata } from "next";
import { Reveal } from "@/components/motion";
import { PageHero } from "@/components/page-hero";
import { SectionHeader } from "@/components/section-header";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact information, school hours, and family message guidance for Okanese Learning Center.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Connect with Okanese Learning Center."
        description="Families should know who to call, when the office is open, and what information to include when asking for help."
        image="/images/okanese-campus-close.jpg"
      />
      <section className="soft-section">
        <div className="container-pad grid gap-10 py-14 sm:py-20 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionHeader
              title="School office"
              description="The school office is the first stop for attendance, family forms, transportation questions, and connecting with the right staff member."
            />
            <dl className="hand-card mt-8 grid gap-5 border border-forest-900/10 bg-cream p-6 shadow-soft">
            <div>
              <dt className="font-black text-forest-900">Address</dt>
              <dd className="mt-1 text-forest-900/70">
                Okanese Learning Center, Okanese First Nation, Saskatchewan
              </dd>
            </div>
            <div>
              <dt className="font-black text-forest-900">Phone</dt>
              <dd className="mt-1 text-forest-900/70">Contact the school office for current phone support.</dd>
            </div>
            <div>
              <dt className="font-black text-forest-900">Email</dt>
              <dd className="mt-1 text-forest-900/70">office@okaneselearning.ca</dd>
            </div>
            <div>
              <dt className="font-black text-forest-900">Hours</dt>
              <dd className="mt-1 text-forest-900/70">
                School office hours follow the school calendar. Families are encouraged to call during the school day.
              </dd>
            </div>
            </dl>
          </Reveal>

          <Reveal className="hand-card border border-forest-900/10 bg-cream p-6 shadow-lift">
          <h2 className="text-2xl font-black text-forest-900">
            What to include when you reach out
          </h2>
          <p className="mt-2 text-sm leading-6 text-forest-900/70">
            Clear details help the office connect families with the right staff
            member and follow up during the school day.
          </p>
          <ul className="mt-6 grid gap-4">
            {[
              "Student name and grade",
              "Parent or caregiver name",
              "Best phone number or email for a reply",
              "Whether the message is about attendance, transportation, forms, classroom questions, or student support",
              "Any date, pickup time, or deadline staff should know",
            ].map((item) => (
              <li
                className="rounded-3xl border border-forest-900/10 bg-gold/14 p-4 text-sm font-semibold leading-6 text-forest-900/78"
                key={item}
              >
                {item}
              </li>
            ))}
          </ul>
          <a
            className="focus-ring mt-6 inline-flex rounded-full bg-forest-800 px-5 py-3 text-sm font-black text-cream transition hover:-translate-y-0.5 hover:bg-forest-900"
            href="mailto:office@okaneselearning.ca?subject=Okanese%20Learning%20Center%20office%20message"
          >
            Email the office
          </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
