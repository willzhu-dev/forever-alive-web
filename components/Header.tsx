"use client";

import Link from "next/link";

const navigation = [
  {
    name: "About",
    href: "/about",
  },
  {
    name: "How it Works",
    href: "/#how-it-works",
  },
  {
    name: "Privacy",
    href: "/privacy",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div className="container">
        <nav className="glass mt-5 flex h-18 items-center justify-between rounded-full px-8">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 font-semibold text-xl text-black"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-200/60 text-xl backdrop-blur">
              🫧
            </div>

            <span>Forever Alive</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[15px] font-medium text-gray-600 transition hover:text-pink-500"
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="/"
              className="btn text-sm"
            >
              Start Your Legacy
            </Link>
          </div>

          {/* Mobile Placeholder */}
          <button className="text-3xl md:hidden">
            ☰
          </button>
        </nav>
      </div>
    </header>
  );
}