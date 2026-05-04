import Link from "next/link";
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

const familyPriorities = [
  {
    title: "Attendance",
    description: "Call the office when a student is away or arriving late.",
    href: "/contact",
    image: "/images/okanese-school-front.jpg",
  },
  {
    title: "Transportation",
    description: "Check bus routines, pickup reminders, and route updates.",
    href: "/students-families#transportation",
    image: "/images/okanese-landscape-road.jpg",
  },
  {
    title: "Meals",
    description: "Find nutrition program notes for breakfast, snacks, and meals.",
    href: "/students-families#nutrition",
    image: "/images/okanese-campus-close.jpg",
  },
];

const extracurriculars = [
  {
    title: "Sports and active play",
    description:
      "Students are encouraged to move, cooperate, and build confidence through games, outdoor activity, and school sports opportunities.",
  },
  {
    title: "Culture and language",
    description:
      "Language learning, cultural teaching, and community knowledge help students stay connected to identity, place, and family.",
  },
  {
    title: "Student showcases",
    description:
      "Classroom projects, creative work, family nights, and celebrations give students a chance to share what they are learning.",
  },
];

export default function Home() {
  return (
    <>
      <section className="grid-paper doodle-field relative overflow-hidden pt-20 text-charcoal">
        <div className="container-pad grid gap-12 py-16 sm:py-24 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <Reveal>
            <div className="inline-flex rotate-[-2deg] items-center gap-3 rounded-full border border-charcoal/10 bg-cream px-4 py-2 text-xs font-black uppercase tracking-[0.16em] shadow-warm">
              <span className="h-2.5 w-2.5 rounded-full bg-ember" />
              Okanese Learning Center
            </div>
            <h1 className="mt-8 max-w-5xl font-display text-6xl sm:text-8xl lg:text-[8.6rem]">
              A school day shaped around{" "}
              <span className="highlight-slab">family</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-charcoal/74">
              Find the information parents need most: attendance, transportation,
              meals, classroom updates, student supports, events, and office
              contacts.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                className="focus-ring rounded-full bg-charcoal px-7 py-4 text-center text-sm font-black uppercase tracking-[0.12em] text-cream transition hover:-translate-y-1 hover:bg-sage hover:shadow-lift"
                href="/students-families"
              >
                Family information
              </Link>
              <Link
                className="focus-ring rounded-full border border-charcoal/15 bg-gold px-7 py-4 text-center text-sm font-black uppercase tracking-[0.12em] text-charcoal transition hover:-translate-y-1 hover:shadow-warm"
                href="/calendar-events"
              >
                Calendar and events
              </Link>
            </div>
          </Reveal>

          <Reveal className="relative min-h-[570px]" delay={0.08}>
            <div className="photo-tilt absolute left-0 top-4 h-[360px] w-[76%] rotate-[-3deg] overflow-hidden rounded-[2.5rem] bg-charcoal shadow-lift sm:h-[430px]">
              <img
                alt="Drone view of Okanese Learning Center and surrounding land"
                className="h-full w-full object-cover opacity-88"
                src="/images/okanese-hero-wide.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/82 to-transparent" />
              <p className="absolute bottom-6 left-6 max-w-xs font-display text-4xl text-cream sm:text-5xl">
                Learning, support, and community in one place.
              </p>
            </div>
            <div className="photo-tilt absolute right-0 top-24 h-52 w-[42%] rotate-[5deg] overflow-hidden rounded-[2rem] bg-cream shadow-soft sm:h-64">
              <img
                alt="Okanese Learning Center building with red roof"
                className="h-full w-full object-cover"
                src="/images/okanese-school-front.jpg"
              />
            </div>
            <div className="hand-card absolute bottom-16 right-6 w-[58%] rotate-[-1deg] border border-charcoal/10 bg-gold p-5 shadow-warm sm:w-[44%]">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-charcoal/65">
                Office
              </p>
              <p className="mt-4 font-display text-4xl text-charcoal">
                Need help?
              </p>
              <p className="mt-2 text-sm font-medium leading-6 text-charcoal/75">
                Contact the office for attendance, forms, transportation, and
                student support questions.
              </p>
            </div>
            <div className="photo-tilt absolute bottom-0 left-10 h-36 w-[48%] rotate-[4deg] overflow-hidden rounded-[1.8rem] bg-cream shadow-soft sm:h-44 sm:w-[36%]">
              <img
                alt="Okanese valley and road near the school"
                className="h-full w-full object-cover"
                src="/images/okanese-landscape-road.jpg"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="green-glow relative overflow-hidden border-y border-charcoal/10 text-cream">
        <div className="container-pad grid gap-5 py-10 md:grid-cols-3">
          {familyPriorities.map((item) => (
            <Link
              className="card-motion hand-card group relative min-h-56 overflow-hidden border border-cream/10 bg-cream/8 p-5 hover:-translate-y-1 hover:bg-cream/12 hover:shadow-lift md:odd:translate-y-5"
              href={item.href}
              key={item.title}
            >
              <img
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-24 transition duration-500 group-hover:scale-105 group-hover:opacity-32"
                src={item.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/68 to-transparent" />
              <div className="relative mt-20">
                <p className="font-display text-5xl text-gold">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-cream/76">
                {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="soft-section">
        <div className="container-pad py-16 sm:py-24">
          <Reveal>
            <SectionHeader
              eyebrow="Family quick links"
              title="The links parents look for first."
              description="The homepage now starts with practical school tasks and the information families need during the week."
            />
          </Reveal>
          <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {quickLinks.map((item) => (
              <StaggerItem key={item.title}>
                <QuickLinkCard item={item} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="green-glow text-cream">
        <div className="container-pad py-16 sm:py-24">
          <Reveal>
            <SectionHeader
              eyebrow="Programs and services"
              title="Support families can understand quickly."
              description="Learning, language and culture, student support, nutrition, and transportation are grouped around the real school day."
              tone="light"
            />
          </Reveal>
          <Stagger className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-4">
            {programs.map((item) => (
              <StaggerItem className="even:lg:translate-y-10" key={item.title}>
                <ProgramCard item={item} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="soft-section">
        <div className="container-pad py-16 sm:py-24">
          <Reveal>
            <SectionHeader
              eyebrow="Extracurriculars"
              title="Learning also happens outside the classroom."
              description="Families can see that school life includes activity, culture, creativity, and chances for students to share their strengths."
            />
          </Reveal>
          <Stagger className="mt-10 grid gap-5 lg:grid-cols-3">
            {extracurriculars.map((item, index) => (
              <StaggerItem key={item.title}>
                <article
                className={`card-motion hand-card h-full border p-7 hover:-translate-y-1 hover:shadow-lift ${
                    index === 1
                      ? "border-charcoal bg-charcoal text-cream"
                      : "border-charcoal/10 bg-cream text-charcoal"
                  }`}
                >
                  <span
                    className={`font-display text-7xl ${
                      index === 1 ? "text-gold" : "text-gold/80"
                    }`}
                  >
                    0{index + 1}
                  </span>
                  <h3 className="mt-5 font-display text-4xl">{item.title}</h3>
                  <p
                    className={`mt-4 text-sm leading-7 ${
                      index === 1 ? "text-cream/76" : "text-charcoal/72"
                    }`}
                  >
                    {item.description}
                  </p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="green-glow text-cream">
        <div className="container-pad py-16 sm:py-24">
          <Reveal>
            <SectionHeader
              eyebrow="Student life"
              title="A school families can picture."
              description="Real photos and plain-language cards show routines, outdoor learning, classroom life, and the feeling of belonging."
              tone="light"
            />
          </Reveal>
          <Stagger className="mt-10 grid gap-7 lg:grid-cols-3">
            {studentLife.map((item) => (
              <StaggerItem className="even:lg:translate-y-8" key={item.title}>
                <ImageStoryCard item={item} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="soft-section">
        <div className="container-pad grid gap-10 py-16 sm:py-24 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Reveal>
              <SectionHeader
                eyebrow="Announcements"
                title="School notes parents can scan."
                description="Updates are written so families know whether they need to call, sign, send, attend, or remember."
              />
            </Reveal>
            <Stagger className="mt-8 grid gap-5 md:grid-cols-2">
              {announcements.slice(0, 2).map((item) => (
                <StaggerItem key={item.title}>
                  <AnnouncementCard item={item} />
                </StaggerItem>
              ))}
            </Stagger>
          </div>
          <div>
            <Reveal>
              <SectionHeader
                eyebrow="Events"
                title="Dates with enough context to plan."
                description="Event cards answer what is happening and what families need to do next."
              />
            </Reveal>
            <Stagger className="mt-8 grid gap-4">
              {events.map((item) => (
                <StaggerItem key={item.title}>
                  <EventCard item={item} />
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      <section className="green-glow text-cream">
        <div className="container-pad py-16 sm:py-24">
          <Reveal>
            <SectionHeader
              eyebrow="Community values"
              title="What families should feel from the site."
              description="The design stays bold, but the content stays focused on students, families, culture, and clear next steps."
              tone="light"
            />
          </Reveal>
          <Stagger className="mt-10 grid gap-5 md:grid-cols-3">
            {communityValues.map((value) => (
              <StaggerItem key={value.title}>
                <article className="card-motion hand-card h-full border border-cream/10 bg-cream/8 p-7 hover:-translate-y-1 hover:bg-cream/12 hover:shadow-lift">
                  <h3 className="font-display text-4xl text-gold">
                    {value.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-cream/74">
                    {value.description}
                  </p>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="doodle-field relative overflow-hidden bg-gold text-charcoal">
        <div className="pointer-events-none absolute -left-10 top-4 font-display text-[16rem] leading-none opacity-10">
          OLC
        </div>
        <div className="container-pad relative grid gap-8 py-16 sm:py-24 lg:grid-cols-[1fr_0.78fr] lg:items-center">
          <Reveal>
            <h2 className="max-w-4xl font-display text-6xl sm:text-8xl">
              Need the office? Start here.
            </h2>
            <p className="mt-7 max-w-2xl text-xl leading-9 text-charcoal/76">
              Families can reach out for attendance, transportation, student
              support, forms, event questions, and general school information.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="hand-card rotate-1 border border-charcoal/15 bg-cream p-6 shadow-lift">
              <p className="font-display text-4xl text-charcoal">
                Office support
              </p>
              <p className="mt-3 text-sm leading-7 text-charcoal/70">
                Use the contact page when you need help finding the right
                person, form, date, or student support pathway.
              </p>
              <Link
                className="focus-ring mt-6 inline-flex w-full justify-center rounded-full bg-charcoal px-6 py-4 text-sm font-black uppercase tracking-[0.12em] text-cream transition hover:-translate-y-1 hover:bg-sage hover:shadow-lift"
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
