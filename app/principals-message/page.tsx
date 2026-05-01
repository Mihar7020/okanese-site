import type { Metadata } from "next";
import { Reveal } from "@/components/motion";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Principal's Message",
  description:
    "A welcoming message from the principal of Okanese Learning Center.",
};

export default function PrincipalsMessagePage() {
  return (
    <>
      <PageHero
        eyebrow="Principal's Message"
        title="Welcome to Okanese Learning Center"
        description="A message that should sound like it belongs to this school community, with real priorities and a clear invitation to families."
        image="/images/okanese-school-front.jpg"
      />
      <section className="container-pad py-14 sm:py-20">
        <Reveal>
          <article className="mx-auto grid max-w-5xl overflow-hidden rounded-3xl border border-forest-900/10 bg-white shadow-lift lg:grid-cols-[0.78fr_1.22fr]">
            <img
              alt="School welcome portrait"
              className="h-full min-h-80 w-full bg-earth-50 object-contain p-8"
              src="/images/okanese-learning-center-logo.png"
            />
            <div className="p-6 sm:p-10">
              <p className="text-lg font-black text-forest-900">
                Dear students, families, staff, and community members,
              </p>
              <div className="mt-6 space-y-5 text-base leading-8 text-forest-900/75">
                <p>
                  Welcome to Okanese Learning Center. A strong school day is
                  built from many small pieces: students feeling ready to learn,
                  families knowing who to call, staff working together, and
                  community knowledge being treated with care.
                </p>
                <p>
                  This site should help families find what they need quickly,
                  from attendance and transportation to programs, events, and
                  staff contacts.
                </p>
                <p>
                  We want families to feel welcome, informed, and comfortable
                  reaching out. When school and home stay connected, students
                  are better able to take pride in their learning and their
                  responsibilities.
                </p>
              </div>
              <p className="mt-8 font-black text-forest-900">
                School Principal
              </p>
              <p className="text-sm text-forest-900/60">
                Principal, Okanese Learning Center
              </p>
            </div>
          </article>
        </Reveal>
      </section>
    </>
  );
}
