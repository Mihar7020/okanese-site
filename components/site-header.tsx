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
    <header className="fixed top-0 z-40 w-full border-b border-charcoal/10 bg-white/90 backdrop-blur-xl">
      <div className="container-pad flex min-h-20 items-center justify-between gap-4">
        <Link
          className="focus-ring rounded-md font-display text-3xl text-charcoal"
          href="/"
          aria-label="Okanese Learning Center home"
        >
          Okanese<span className="text-gold">.</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                className={`focus-ring rounded-md px-3 py-2 text-sm font-bold transition ${
                  active
                    ? "bg-charcoal text-white shadow-sm"
                    : "text-charcoal/72 hover:bg-charcoal/5 hover:text-charcoal"
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
            className="focus-ring rounded-full bg-charcoal px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:shadow-lift"
            href="/contact"
          >
            Contact Office
          </Link>
        </div>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          className="focus-ring rounded-full border border-charcoal/15 bg-white px-4 py-2 text-sm font-black text-charcoal shadow-sm transition hover:-translate-y-0.5 lg:hidden"
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
                      ? "bg-charcoal text-white"
                      : "bg-white text-charcoal"
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

