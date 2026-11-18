
'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('An uncaught error occurred:', error);
  }, [error]);

  return (
    <div className="mx-auto mt-16 max-w-xl rounded-lg border border-slate-700 bg-[#111c2e] p-6 text-center shadow-sm">
      <h1 className="text-2xl font-bold text-white">
        Something went wrong!
      </h1>

      <p className="mt-3 text-slate-400">
        An unexpected error occurred. Please try again later.
      </p>

      <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <button
          onClick={reset}
          className="rounded-md bg-emerald-500 px-4 py-2 font-semibold text-slate-950 transition hover:bg-emerald-400"
        >
          Try Again
        </button>

        <Link
          href="/projects"
          className="rounded-md border border-slate-600 px-4 py-2 font-semibold text-white transition hover:bg-slate-800"
        >
          Go Back to Projects
        </Link>
      </div>
    </div>
  );
}
