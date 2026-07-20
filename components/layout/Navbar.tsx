"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  {
    label: "Why Forever Alive",
    href: "#why",
  },
  {
    label: "Features",
    href: "#features",
  },
  {
    label: "How It Works",
    href: "#how-it-works",
  },
  {
    label: "FAQ",
    href: "#faq",
  },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-pink-100/80 bg-white/80 backdrop-blur-xl">
      <div className="page-container">
        <div className="flex h-[72px] items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            className="group flex items-center gap-3"
            aria-label="Forever Alive home"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 text-lg text-white shadow-[0_8px_24px_rgba(236,72,153,0.25)] transition-transform duration-300 group-hover:scale-105">
              ♥
            </span>

            <span className="text-lg font-bold tracking-tight text-gray-950 sm:text-xl">
              Forever
              <span className="text-pink-500"> Alive</span>
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-1 lg:flex"
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-gray-600 transition-colors duration-200 hover:bg-pink-50 hover:text-pink-600"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="#download"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-pink-500 px-6 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(236,72,153,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-pink-600 hover:shadow-[0_14px_34px_rgba(236,72,153,0.32)]"
            >
              Download App
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((current) => !current)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-pink-100 bg-white text-gray-800 shadow-sm transition-colors hover:bg-pink-50 hover:text-pink-600 lg:hidden"
          >
            <span className="relative block h-5 w-5">
              <span
                className={`absolute left-0 top-[3px] h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                  isMenuOpen ? "translate-y-[6px] rotate-45" : ""
                }`}
              />

              <span
                className={`absolute left-0 top-[9px] h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />

              <span
                className={`absolute left-0 top-[15px] h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                  isMenuOpen ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>

        {/* Mobile navigation */}
        <div
          id="mobile-navigation"
          className={`grid overflow-hidden transition-all duration-300 lg:hidden ${
            isMenuOpen
              ? "grid-rows-[1fr] border-t border-pink-100 opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <nav
              aria-label="Mobile navigation"
              className="flex flex-col gap-2 py-5"
            >
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-2xl px-4 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-pink-50 hover:text-pink-600"
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="#download"
                onClick={closeMenu}
                className="mt-3 inline-flex min-h-12 items-center justify-center rounded-full bg-pink-500 px-6 text-base font-semibold text-white shadow-[0_10px_28px_rgba(236,72,153,0.24)] transition-colors hover:bg-pink-600"
              >
                Download the App
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}