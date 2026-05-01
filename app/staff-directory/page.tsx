import type { Metadata } from "next";
import { StaffCard } from "@/components/cards";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { PageHero } from "@/components/page-hero";
import { SectionHeader } from "@/components/section-header";
import { staff } from "@/data/site";

export const metadata: Metadata = {
  title: "Staff Directory",
  description:
    "Staff directory for Okanese Learning Center leadership, office, teachers, and support staff.",
};

export default function StaffDirectoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Staff Directory"
        title="Find the right school contact."
        description="Families should be able to recognize who can help with classroom questions, office needs, student support, and daily routines."
        image="/images/okanese-school-front.jpg"
      />
      <section className="container-pad py-14 sm:py-20">
        <Reveal>
          <SectionHeader
            title="School staff"
            description="Families can start with the office, classroom teachers, or student support team depending on the question."
          />
        </Reveal>
        <Stagger className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {staff.map((member) => (
            <StaggerItem key={`${member.group}-${member.role}`}>
              <StaffCard member={member} />
            </StaggerItem>
          ))}
        </Stagger>
      </section>
    </>
  );
}
