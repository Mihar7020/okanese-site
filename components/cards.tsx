import Link from "next/link";
import type { CardItem, StaffMember } from "@/data/site";

export function QuickLinkCard({ item }: { item: CardItem }) {
  const body = (
    <div className="card-motion group h-full overflow-hidden rounded-lg border border-charcoal/10 bg-white p-6 shadow-sm hover:-translate-y-1 hover:border-charcoal/30 hover:shadow-lift">
      <div className="flex items-center justify-between gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-charcoal text-sm font-black text-gold">
          {item.label?.slice(0, 2).toUpperCase() ?? item.title.slice(0, 2).toUpperCase()}
        </div>
        <span className="rounded-full bg-gold px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-charcoal">
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
    <Link className="focus-ring block rounded-lg" href={item.href}>
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
      className="card-motion group overflow-hidden rounded-lg border border-charcoal/10 bg-white shadow-sm hover:-translate-y-1 hover:shadow-lift"
    >
      {item.image ? (
        <div className="relative h-48 overflow-hidden">
          <img
            alt={item.label ?? ""}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            src={item.image}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/68 to-transparent" />
          <p className="absolute bottom-4 left-4 rounded-md bg-gold px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-charcoal">
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
            className="focus-ring mt-5 inline-flex rounded-md text-sm font-black text-charcoal underline decoration-gold decoration-4 underline-offset-4"
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
    <article className="card-motion group overflow-hidden rounded-lg border border-charcoal/10 bg-white shadow-sm hover:-translate-y-1 hover:shadow-lift">
      {item.image ? (
        <img
          alt={`${item.title} announcement image`}
          className="h-40 w-full object-cover transition duration-500 group-hover:scale-105"
          src={item.image}
        />
      ) : null}
      <div className="p-5">
      {item.meta ? (
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-charcoal/58">
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
    <article className="card-motion group flex gap-4 overflow-hidden rounded-lg border border-charcoal/10 bg-white p-4 shadow-sm hover:-translate-y-1 hover:shadow-lift">
      <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-md bg-charcoal text-center text-white">
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
    <article className="card-motion group overflow-hidden rounded-lg border border-charcoal/10 bg-white shadow-sm hover:-translate-y-1 hover:shadow-lift">
      {member.image ? (
        <img
          alt={`${member.name} portrait`}
          className="h-52 w-full bg-charcoal/5 object-contain p-4 transition duration-500 group-hover:scale-105"
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
        className="focus-ring mt-4 inline-flex rounded-md text-sm font-bold text-charcoal underline decoration-gold decoration-4 underline-offset-4"
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
    <article className="card-motion group overflow-hidden rounded-lg border border-charcoal/10 bg-white shadow-sm hover:-translate-y-1 hover:shadow-lift">
      {item.image ? (
        <img
          alt={item.label ?? item.title}
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
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
