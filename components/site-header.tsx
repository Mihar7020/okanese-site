"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "@/data/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-40 w-full border-b border-charcoal/10 bg-cream/88 backdrop-blur-xl">
      <div className="container-pad flex min-h-20 items-center justify-between gap-4">
        <Link
          className="focus-ring flex items-center gap-3 rounded-full pr-3 font-display text-2xl text-charcoal sm:text-3xl"
          href="/"
          aria-label="Okanese Learning Center home"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-organic bg-white p-1.5 shadow-soft">
            <img
              alt=""
              className="h-full w-full object-contain"
              src="/images/okanese-learning-center-logo.png"
            />
          </span>
          Okanese<span className="text-clay">.</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                className={`focus-ring rounded-md px-3 py-2 text-sm font-bold transition ${
                  active
                    ? "bg-charcoal text-cream shadow-sm"
                    : "text-charcoal/72 hover:bg-gold/25 hover:text-charcoal"
                }`}
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <Link
            className="focus-ring rounded-md text-sm font-bold text-charcoal/75 hover:text-charcoal"
            href="/calendar-events"
          >
            Calendar
          </Link>
          <Link
            className="focus-ring rounded-full bg-charcoal px-6 py-3 text-sm font-bold text-cream transition hover:-translate-y-0.5 hover:bg-sage hover:shadow-lift"
            href="/contact"
          >
            Contact Office
          </Link>
        </div>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          className="focus-ring rounded-full border border-charcoal/15 bg-cream px-4 py-2 text-sm font-black text-charcoal shadow-sm transition hover:-translate-y-0.5 lg:hidden"
          onClick={() => setIsOpen((open) => !open)}
          type="button"
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </div>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.nav
            aria-label="Mobile navigation"
            className="container-pad grid gap-2 border-t border-charcoal/10 pb-4 lg:hidden"
            id="mobile-navigation"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
          >
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  className={`focus-ring rounded-md px-3 py-3 text-sm font-bold shadow-sm ${
                    active
                      ? "bg-charcoal text-cream"
                      : "bg-cream text-charcoal"
                  }`}
                  href={item.href}
                  key={item.href}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

