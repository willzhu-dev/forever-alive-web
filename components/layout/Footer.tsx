import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-pink-100 bg-white">
      <div className="page-container">
        <div className="grid gap-8 py-10 text-center text-sm text-gray-500 md:grid-cols-3 md:items-center md:text-left">
          {/* Brand */}
          <div>
            <p className="font-semibold text-gray-900">
              🫧 Forever Alive
            </p>

            <p className="mt-2 text-sm text-gray-500">
              Preserve your love. Share your legacy.
            </p>
          </div>

          {/* Links */}
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap justify-center gap-x-6 gap-y-3"
          >
            <Link
              href="/privacy"
              className="transition-colors hover:text-pink-500"
            >
              Privacy
            </Link>

            <Link
              href="/terms"
              className="transition-colors hover:text-pink-500"
            >
              Terms
            </Link>

            <Link
              href="/contact"
              className="transition-colors hover:text-pink-500"
            >
              Contact
            </Link>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-gray-500 md:text-right">
            © {new Date().getFullYear()} Forever Alive.
            <span className="block sm:inline"> All rights reserved.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}