
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-[#0b1120]/95 shadow-sm backdrop-blur">
      <nav className="mx-auto flex min-h-20 max-w-6xl items-center justify-between px-6">

        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-white transition hover:text-emerald-400"
        >
          My Portfolio<span className="text-emerald-400">.</span>
        </Link>

        <ul className="flex items-center gap-8 text-sm font-medium">
          <li>
            <Link
              href="/"
              className="text-slate-300 transition hover:text-emerald-400"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/about"
              className="text-slate-300 transition hover:text-emerald-400"
            >
              About
            </Link>
          </li>
        </ul>

      </nav>
    </header>
  );
}
