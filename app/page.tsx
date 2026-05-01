import Link from "next/link";
import type { CSSProperties } from "react";
import {
  AnnouncementCard,
  EventCard,
  ImageStoryCard,
  ProgramCard,
  QuickLinkCard,
} from "@/components/cards";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { SectionHeader } from "@/components/section-header";
import {
  announcements,
  communityValues,
  events,
  programs,
  quickLinks,
  studentLife,
} from "@/data/site";

const featureEntries = [
  {
    title: "Families",
    description:
      "Attendance, transportation, nutrition, forms, and the weekly information parents need most.",
    href: "/students-families",
    image: "/images/okanese-school-front.jpg",
  },
  {
    title: "Programs & Services",
    description:
      "Classroom learning, language and culture, student support, nutrition, and transportation.",
    href: "/programs-services",
    image: "/images/okanese-building-close.jpg",
  },
  {
    title: "Calendar",
    description:
      "Family nights, student showcases, staff learning days, and community school dates.",
    href: "/calendar-events",
    image: "/images/okanese-landscape-road.jpg",
  },
];

const extracurriculars = [
  {
    title: "Sports & Recreation",
    description:
      "Students build confidence, cooperation, and healthy routines through active play, games, and school recreation opportunities.",
  },
  {
    title: "Culture & Language",
    description:
      "Language learning, cultural teaching, and community knowledge support identity, belonging, and connection to place.",
  },
  {
    title: "Student Showcases",
    description:
      "Classroom projects, creative work, family nights, and celebrations give students opportunities to share their learning.",
  },
];

const schoolObjects = [
  {
    label: "Books",
    className: "left-[6%] top-4 h-20 w-20 rotate-[-8deg] sm:h-24 sm:w-24",
    src:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 128'%3E%3Crect x='24' y='56' width='72' height='18' rx='5' fill='%2307774b'/%3E%3Crect x='32' y='38' width='76' height='18' rx='5' fill='%23e69520'/%3E%3Crect x='18' y='74' width='84' height='18' rx='5' fill='%23333333'/%3E%3Cpath d='M35 43h58M31 61h51M30 80h56' stroke='white' stroke-width='5' stroke-linecap='round' opacity='.82'/%3E%3C/svg%3E",
  },
  {
    label: "Pencil",
    className: "right-[10%] top-2 h-24 w-24 rotate-[11deg] sm:h-28 sm:w-28",
    src:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 128'%3E%3Cg transform='rotate(-35 64 64)'%3E%3Crect x='24' y='54' width='72' height='20' rx='6' fill='%23e69520'/%3E%3Crect x='88' y='54' width='16' height='20' fill='%2307774b'/%3E%3Cpath d='M104 54l16 10-16 10z' fill='%23333333'/%3E%3Crect x='8' y='54' width='18' height='20' rx='5' fill='%23ffffff'/%3E%3Cpath d='M35 60h44' stroke='white' stroke-width='4' stroke-linecap='round' opacity='.8'/%3E%3C/g%3E%3C/svg%3E",
  },
  {
    label: "Backpack",
    className: "left-[42%] -top-3 hidden h-24 w-24 rotate-[5deg] md:block",
    src:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 128'%3E%3Cpath d='M43 45c2-18 40-18 42 0' fill='none' stroke='%23333333' stroke-width='8' stroke-linecap='round'/%3E%3Crect x='31' y='39' width='66' height='72' rx='18' fill='%2307774b'/%3E%3Crect x='43' y='68' width='42' height='31' rx='9' fill='%23e69520'/%3E%3Cpath d='M42 56h44M54 82h20' stroke='white' stroke-width='6' stroke-linecap='round' opacity='.86'/%3E%3C/svg%3E",
  },
];

export default function Home() {
  return (
    <>
      <section className="checkered-bg relative overflow-hidden pt-20 text-charcoal">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <img
            alt=""
            className="floating-school-asset absolute right-[7%] top-28 hidden h-20 w-20 rounded-[10px] bg-white/92 object-contain p-3 opacity-90 md:block"
            src="/images/okanese-learning-center-logo.png"
            style={{ "--float-rotate": "5deg" } as CSSProperties}
          />
          <img
            alt=""
            className="floating-school-asset absolute bottom-12 left-[5%] hidden h-24 w-24 rounded-[10px] bg-white/92 object-contain p-3 opacity-85 lg:block"
            src="/images/okanese-first-nation-logo.png"
            style={{ "--float-rotate": "-6deg" } as CSSProperties}
          />
          <div
            className="floating-school-asset absolute left-[44%] top-28 hidden rounded-[10px] border border-charcoal/10 bg-white/94 px-5 py-4 text-sm font-bold uppercase tracking-[0.12em] text-forest-800 md:block"
            style={{ "--float-rotate": "-3deg" } as CSSProperties}
          >
            Calendar
          </div>
          <div
            className="floating-school-asset absolute bottom-20 right-[13%] hidden rounded-[10px] border border-charcoal/10 bg-gold px-5 py-4 text-sm font-bold uppercase tracking-[0.12em] text-charcoal lg:block"
            style={{ "--float-rotate": "4deg" } as CSSProperties}
          >
            Attendance
          </div>
        </div>
        <div className="container-pad relative grid gap-10 py-14 sm:py-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-forest-800">
              Okanese Learning Center
            </p>
            <h1 className="mt-5 max-w-4xl font-display text-3xl sm:text-4xl">
              Clear school information for students, families, and community.
            </h1>
            <p className="mt-6 max-w-2xl text-md leading-8 text-graphite">
              Okanese Learning Center shares family resources, school programs,
              events, announcements, and office contacts in one accessible
              place.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                className="focus-ring rounded-[25px] bg-forest-800 px-7 py-4 text-center text-sm font-bold uppercase tracking-[0.12em] text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-charcoal hover:shadow-lift"
                href="/students-families"
              >
                Family Resources
              </Link>
              <Link
                className="focus-ring rounded-[25px] border border-charcoal/15 bg-white px-7 py-4 text-center text-sm font-bold uppercase tracking-[0.12em] text-charcoal shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift"
                href="/contact"
              >
                Contact Office
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="relative overflow-hidden rounded-[10px] border border-charcoal/10 bg-charcoal shadow-lift">
              <img
                alt="Okanese Learning Center and surrounding land"
                className="h-[320px] w-full object-cover sm:h-[460px]"
                src="/images/okanese-hero-wide.jpg"
              />
              <div className="absolute bottom-5 left-5 right-5 rounded-[10px] bg-white/92 p-4 shadow-soft backdrop-blur">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-forest-800">
                  School office
                </p>
                <p className="mt-1 text-sm font-medium leading-6 text-graphite">
                  Attendance, transportation, forms, and family questions.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative bg-white">
        <div className="pointer-events-none absolute inset-x-0 top-0 z-20 mx-auto hidden h-20 max-w-7xl px-4 sm:block sm:px-6 lg:px-8" aria-hidden="true">
          {schoolObjects.map((object) => (
            <img
              alt=""
              className={`floating-school-asset absolute rounded-[10px] bg-white p-2 shadow-lift ${object.className}`}
              key={object.label}
              src={object.src}
            />
          ))}
        </div>
        <div className="container-pad relative grid gap-5 pb-14 pt-10 md:grid-cols-3">
          {featureEntries.map((entry) => (
            <Link
              className="card-motion group relative overflow-hidden rounded-[10px] border border-charcoal/10 bg-white shadow-soft hover:-translate-y-1 hover:shadow-lift"
              href={entry.href}
              key={entry.title}
            >
              <img
                alt=""
                className="h-44 w-full object-cover transition duration-500 group-hover:scale-105"
                src={entry.image}
              />
              <div className="p-6">
                <h2 className="font-display text-2xl text-charcoal">
                  {entry.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-graphite">
                  {entry.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-charcoal/10 bg-forest-800 text-white">
        <div className="container-pad grid gap-10 py-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <Reveal>
            <SectionHeader
              eyebrow="Family quick links"
              title="Common school tasks."
              description="Parents can move quickly to attendance, transportation, meals, dates, and office support."
              tone="light"
            />
          </Reveal>
          <Stagger className="grid gap-4 sm:grid-cols-2">
            {quickLinks.map((item) => (
              <StaggerItem key={item.title}>
                <QuickLinkCard item={item} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-pad grid gap-10 py-14 sm:py-20 lg:grid-cols-[1fr_0.95fr]">
          <div>
            <Reveal>
              <SectionHeader
                eyebrow="Upcoming events"
                title="Dates families can plan around."
                description="School events include enough context for families to know what is happening and what to do next."
              />
            </Reveal>
            <Stagger className="mt-8 grid gap-4">
              {events.map((item) => (
                <StaggerItem key={item.title}>
                  <EventCard item={item} />
                </StaggerItem>
              ))}
            </Stagger>
            <Link
              className="focus-ring mt-7 inline-flex rounded-[25px] bg-gold px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-charcoal transition hover:-translate-y-0.5 hover:shadow-lift"
              href="/calendar-events"
            >
              See all events
            </Link>
          </div>

          <div>
            <Reveal>
              <SectionHeader
                eyebrow="Announcements"
                title="Current school notices."
                description="Short updates help families know whether they need to call, sign, send, attend, or remember."
              />
            </Reveal>
            <Stagger className="mt-8 grid gap-5">
              {announcements.slice(0, 2).map((item) => (
                <StaggerItem key={item.title}>
                  <AnnouncementCard item={item} />
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      <section className="school-green-panel text-white">
        <div className="container-pad py-14 sm:py-20">
          <Reveal>
            <SectionHeader
              eyebrow="Programs & Services"
              title="Support across the school day."
              description="Services are organized around student learning, culture, wellness, nutrition, and transportation."
              tone="light"
            />
          </Reveal>
          <Stagger className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {programs.map((item) => (
              <StaggerItem key={item.title}>
                <ProgramCard item={item} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-pad py-14 sm:py-20">
          <Reveal>
            <SectionHeader
              eyebrow="Student life"
              title="A visible school community."
              description="Photos and plain-language cards show routines, outdoor learning, classroom life, and the feeling of belonging."
            />
          </Reveal>
          <Stagger className="mt-9 grid gap-5 lg:grid-cols-3">
            {studentLife.map((item) => (
              <StaggerItem key={item.title}>
                <ImageStoryCard item={item} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-pad py-14 sm:py-20">
          <Reveal>
            <SectionHeader
              eyebrow="Extracurriculars"
              title="Learning beyond the classroom."
              description="School life includes activity, culture, creativity, and moments where students share their strengths."
            />
          </Reveal>
          <Stagger className="mt-9 grid gap-5 lg:grid-cols-3">
            {extracurriculars.map((item) => (
              <StaggerItem key={item.title}>
                <article className="card-motion h-full rounded-[10px] border border-charcoal/10 bg-white p-6 shadow-soft hover:-translate-y-1 hover:shadow-lift">
                  <h3 className="font-display text-2xl text-charcoal">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-graphite">
                    {item.description}
                  </p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-charcoal text-white">
        <div className="container-pad grid gap-10 py-14 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-gold">
              Community values
            </p>
            <h2 className="mt-4 max-w-xl font-display text-3xl sm:text-4xl">
              Clear information, respectful voice, and student support.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/76">
              The site keeps school information practical while reflecting the
              relationships, culture, and community care around Okanese Learning
              Center.
            </p>
            <Link
              className="focus-ring mt-7 inline-flex rounded-[25px] bg-gold px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-charcoal transition hover:-translate-y-0.5 hover:shadow-lift"
              href="/about"
            >
              About the school
            </Link>
          </Reveal>
          <Stagger className="grid gap-4">
            {communityValues.map((value) => (
              <StaggerItem key={value.title}>
                <article className="rounded-[10px] border border-white/10 bg-white/5 p-5">
                  <h3 className="font-display text-2xl text-gold">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/74">
                    {value.description}
                  </p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-pad grid gap-8 py-14 sm:py-20 lg:grid-cols-[1fr_0.7fr] lg:items-center">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-forest-800">
              Contact
            </p>
            <h2 className="mt-4 max-w-3xl font-display text-3xl sm:text-4xl">
              Need the office? Start here.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-graphite">
              Families can reach out for attendance, transportation, student
              support, forms, event questions, and general school information.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rounded-[10px] border border-charcoal/10 bg-white p-6 shadow-lift">
              <p className="font-display text-2xl text-charcoal">
                Office support
              </p>
              <p className="mt-3 text-sm leading-7 text-graphite">
                Use the contact page when you need help finding the right
                person, form, date, or student support pathway.
              </p>
              <Link
                className="focus-ring mt-6 inline-flex w-full justify-center rounded-[25px] bg-forest-800 px-6 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:-translate-y-0.5 hover:bg-charcoal hover:shadow-lift"
                href="/contact"
              >
                Contact the school
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
