import Link from "next/link";
import type { CardItem, StaffMember } from "@/data/site";

export function QuickLinkCard({ item }: { item: CardItem }) {
  const body = (
    <div className="card-motion hand-card group h-full overflow-hidden border border-charcoal/10 bg-cream p-6 hover:-translate-y-1 hover:border-clay/50 hover:shadow-lift">
      <div className="flex items-center justify-between gap-3">
        <div className="flex h-12 w-12 rotate-[-4deg] items-center justify-center rounded-organic bg-charcoal text-sm font-black text-gold shadow-soft">
          {item.label?.slice(0, 2).toUpperCase() ?? item.title.slice(0, 2).toUpperCase()}
        </div>
        <span className="rounded-full bg-gold px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-charcoal shadow-sm">
          {item.label ?? "Info"}
        </span>
      </div>
      <h3 className="mt-5 font-display text-3xl text-charcoal">
        {item.title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-charcoal/70">
        {item.description}
      </p>
    </div>
  );

  return item.href ? (
    <Link className="focus-ring block rounded-[2rem]" href={item.href}>
      {body}
    </Link>
  ) : (
    body
  );
}

export function ProgramCard({ item }: { item: CardItem }) {
  return (
    <article
      id={item.href?.split("#")[1]}
      className="card-motion hand-card group overflow-hidden border border-charcoal/10 bg-cream hover:-translate-y-1 hover:shadow-lift"
    >
      {item.image ? (
        <div className="relative h-56 overflow-hidden rounded-b-[2rem]">
          <img
            alt={item.label ?? ""}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            src={item.image}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/72 via-transparent to-transparent" />
          <p className="absolute bottom-4 left-4 rotate-[-2deg] rounded-full bg-gold px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-charcoal shadow-sm">
            Program
          </p>
        </div>
      ) : null}
      <div className="p-6">
        <h3 className="font-display text-3xl text-charcoal">
          {item.title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-charcoal/70">
          {item.description}
        </p>
        {item.href ? (
          <Link
            className="focus-ring mt-5 inline-flex rounded-md text-sm font-black text-charcoal underline decoration-clay decoration-4 underline-offset-4"
            href={item.href}
          >
            Read about this support
          </Link>
        ) : null}
      </div>
    </article>
  );
}

export function AnnouncementCard({ item }: { item: CardItem }) {
  return (
    <article className="card-motion hand-card group overflow-hidden border border-charcoal/10 bg-cream hover:-translate-y-1 hover:shadow-lift">
      {item.image ? (
        <img
          alt={`${item.title} announcement image`}
          className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
          src={item.image}
        />
      ) : null}
      <div className="p-5">
      {item.meta ? (
        <p className="inline-flex rotate-[-1deg] rounded-full bg-clay/18 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-charcoal/75">
          {item.meta}
        </p>
      ) : null}
      <h3 className="mt-2 font-display text-3xl text-charcoal">{item.title}</h3>
      <p className="mt-2 text-sm leading-6 text-charcoal/70">
        {item.description}
      </p>
      </div>
    </article>
  );
}

export function EventCard({ item }: { item: CardItem }) {
  return (
    <article className="card-motion hand-card group flex gap-4 overflow-hidden border border-charcoal/10 bg-cream p-4 hover:-translate-y-1 hover:shadow-lift">
      <div className="flex h-16 w-16 shrink-0 rotate-[-3deg] flex-col items-center justify-center rounded-organic bg-charcoal text-center text-cream shadow-soft">
        <span className="text-xs font-bold uppercase text-gold">
          {item.meta?.split(" ")[0] ?? "TBD"}
        </span>
        <span className="text-xl font-black">{item.meta?.split(" ")[1] ?? ""}</span>
      </div>
      <div>
        <h3 className="font-display text-2xl text-charcoal">{item.title}</h3>
        <p className="mt-1 text-sm leading-6 text-charcoal/70">
          {item.description}
        </p>
      </div>
    </article>
  );
}

export function StaffCard({ member }: { member: StaffMember }) {
  return (
    <article className="card-motion hand-card group overflow-hidden border border-charcoal/10 bg-cream hover:-translate-y-1 hover:shadow-lift">
      {member.image ? (
        <img
          alt={`${member.name} portrait`}
          className="h-56 w-full bg-gold/10 object-contain p-4 transition duration-500 group-hover:scale-105"
          src={member.image}
        />
      ) : null}
      <div className="p-5">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-charcoal/58">
        {member.group}
      </p>
      <h3 className="mt-3 font-display text-3xl text-charcoal">{member.name}</h3>
      <p className="mt-1 text-sm font-semibold text-charcoal/75">
        {member.role}
      </p>
      <a
        className="focus-ring mt-4 inline-flex rounded-md text-sm font-bold text-charcoal underline decoration-clay decoration-4 underline-offset-4"
        href={`mailto:${member.email}`}
      >
        {member.email}
      </a>
      </div>
    </article>
  );
}

export function ImageStoryCard({ item }: { item: CardItem }) {
  return (
    <article className="card-motion hand-card group overflow-hidden border border-charcoal/10 bg-cream hover:-translate-y-1 hover:shadow-lift">
      {item.image ? (
        <img
          alt={item.label ?? item.title}
          className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
          src={item.image}
        />
      ) : null}
      <div className="p-6">
        <h3 className="font-display text-3xl text-charcoal">{item.title}</h3>
        <p className="mt-3 text-sm leading-6 text-charcoal/70">
          {item.description}
        </p>
      </div>
    </article>
  );
}
