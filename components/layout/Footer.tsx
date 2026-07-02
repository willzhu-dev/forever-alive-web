import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-pink-100 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 text-center text-sm text-gray-500 md:flex-row">
        <div>
          <p className="font-semibold text-gray-900">
            🫧 Forever Alive
          </p>

          <p className="mt-2">
            Preserve your love. Share your legacy.
          </p>
        </div>

        <div className="flex gap-6">
          <Link href="/privacy">Privacy</Link>

          <Link href="/terms">Terms</Link>

          <Link href="/contact">Contact</Link>
        </div>

        <p>
          © {new Date().getFullYear()} Forever Alive.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}