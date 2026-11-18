
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto mt-16 max-w-xl rounded-lg border border-slate-700 bg-[#111c2e] p-6 text-center shadow-sm">
      <h1 className="text-2xl font-bold text-white">
        Project Not Found
      </h1>

      <p className="mt-3 text-slate-400">
        The project you are looking for does not exist.
      </p>

      <div className="mt-6">
        <Link
          href="/projects"
          className="rounded-md border border-slate-600 px-4 py-2 font-semibold text-white transition hover:bg-slate-800"
        >
          Back to Projects
        </Link>
      </div>
    </div>
  );
}
