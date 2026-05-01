import Link from "next/link";
import { footerLinks, navItems } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="container-pad grid gap-10 py-14 lg:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-14 w-14 items-center justify-center rounded-lg bg-white p-1">
              <img
                alt="Okanese Learning Center logo"
                className="h-full w-full object-contain"
                src="/images/okanese-learning-center-logo.png"
              />
            </span>
            <div>
              <p className="font-display text-3xl">Okanese Learning Center</p>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-gold">
                School community website
              </p>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm leading-6 text-white/75">
            Clear family communication, student support, and community updates
            in one warm school-focused place.
          </p>
          <p className="mt-4 text-sm text-white/70">
            Contact the office for attendance, transportation, family forms,
            and student support questions.
          </p>
          <div className="mt-5 flex items-center gap-3 rounded-lg border border-sage/10 bg-white/5 p-3">
            <img
              alt="Okanese First Nation logo"
              className="h-12 w-12 object-contain"
              src="/images/okanese-first-nation-logo.png"
            />
            <p className="text-xs font-semibold leading-5 text-white/70">
              Proudly connected to Okanese First Nation and the families served
              by the school community.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.18em] text-gold">
            School
          </h2>
          <ul className="mt-4 grid gap-2">
            {navItems.slice(1, 6).map((item) => (
              <li key={item.href}>
                <Link
                  className="focus-ring rounded-md text-sm text-white/80 hover:text-white"
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase tracking-[0.18em] text-gold">
            Related Links
          </h2>
          <ul className="mt-4 grid gap-2">
            {footerLinks.map((item) => (
              <li key={item.href}>
                <Link
                  className="focus-ring rounded-md text-sm text-white/80 hover:text-white"
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-pad py-5 text-sm text-white/60">
          Copyright &copy; 2026 Okanese Learning Center. Built for family
          communication, student support, and community connection.
        </div>
      </div>
    </footer>
  );
}
