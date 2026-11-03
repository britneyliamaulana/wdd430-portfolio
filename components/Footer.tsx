
export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="mt-20 border-t border-slate-800 bg-[#0b1120] py-10">
      <div className="mx-auto max-w-6xl px-6 text-center">

        <p className="text-sm text-slate-400">
          Copyright &copy; {currentYear}{" "}
          <span className="font-semibold text-white">
            MyPortfolio
          </span>
          <span className="text-emerald-400">.</span>
          {" "}All rights reserved.
        </p>

        <p className="mt-3 text-xs text-slate-600">
          Designed and built with{" "}
          <span className="text-emerald-400">Next.js</span>
          {" "}and{" "}
          <span className="text-emerald-400">Tailwind CSS</span>.
        </p>

      </div>
    </footer>
  );
}
