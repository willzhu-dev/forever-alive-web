import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-pink-100/60 bg-white/80 backdrop-blur-xl">
      <div className="page-container">
        <div className="flex h-[72px] items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 transition-opacity hover:opacity-80"
          >
            <span className="text-3xl">🫧</span>

            <span className="text-xl font-semibold tracking-tight text-gray-900">
              Forever Alive
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="/features"
              className="text-sm font-medium text-gray-600 transition-colors hover:text-pink-500"
            >
              Features
            </Link>

            <Link
              href="/faq"
              className="text-sm font-medium text-gray-600 transition-colors hover:text-pink-500"
            >
              FAQ
            </Link>

            <Link
              href="/contact"
              className="text-sm font-medium text-gray-600 transition-colors hover:text-pink-500"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}