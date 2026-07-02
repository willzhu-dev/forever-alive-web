import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-pink-100/50 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <span className="text-3xl">🫧</span>

          <span className="text-xl font-semibold">
            Forever Alive
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/features">Features</Link>

          <Link href="/faq">FAQ</Link>

          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}