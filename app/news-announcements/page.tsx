import type { Metadata } from "next";
import { AnnouncementCard } from "@/components/cards";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { PageHero } from "@/components/page-hero";
import { SectionHeader } from "@/components/section-header";
import { announcements } from "@/data/site";

export const metadata: Metadata = {
  title: "News / Announcements",
  description:
    "School news, announcements, family notices, and operational updates for Okanese Learning Center.",
};

export default function NewsAnnouncementsPage() {
  return (
    <>
      <PageHero
        eyebrow="News / Announcements"
        title="School updates in one clear place."
        description="News should tell families what changed, who it affects, and what to do next without making them search."
        image="/images/okanese-landscape-road.jpg"
      />
      <section className="soft-section">
        <div className="container-pad py-14 sm:py-20">
          <Reveal>
            <SectionHeader
              title="Latest announcements"
              description="Announcements are grouped for families, operations, classroom updates, and community events so important details are easier to scan."
            />
          </Reveal>
          <Stagger className="mt-10 grid gap-7 md:grid-cols-3">
            {announcements.map((item) => (
              <StaggerItem className="even:md:translate-y-8" key={item.title}>
                <AnnouncementCard item={item} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}
