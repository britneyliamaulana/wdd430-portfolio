
import Link from 'next/link';
import { createProject } from '@/app/lib/actions';

export default function CreateProjectPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <div className="mb-10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-emerald-400">
          Portfolio Management
        </p>

        <h1 className="text-3xl font-bold text-white md:text-4xl">
          Add a New Project
          <span className="text-emerald-400">.</span>
        </h1>

        <p className="mt-4 text-slate-400">
          Enter the details of your new portfolio project below.
        </p>
      </div>

      <form action={createProject} className="space-y-6">
        <div>
          <label htmlFor="title" className="mb-2 block text-sm font-medium text-white">
            Project Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            required
            minLength={2}
            placeholder="e.g. My Portfolio Website"
            className="w-full rounded-lg border border-slate-700 bg-[#111c2e] px-4 py-3 text-white outline-none focus:border-emerald-400"
          />
        </div>

        <div>
          <label htmlFor="description" className="mb-2 block text-sm font-medium text-white">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            required
            minLength={10}
            rows={5}
            placeholder="Describe your project..."
            className="w-full rounded-lg border border-slate-700 bg-[#111c2e] px-4 py-3 text-white outline-none focus:border-emerald-400"
          />
        </div>

        <div>
          <label htmlFor="technologies" className="mb-2 block text-sm font-medium text-white">
            Technologies
          </label>
          <input
            id="technologies"
            name="technologies"
            type="text"
            required
            minLength={2}
            placeholder="HTML, CSS, JavaScript"
            className="w-full rounded-lg border border-slate-700 bg-[#111c2e] px-4 py-3 text-white outline-none focus:border-emerald-400"
          />
          <p className="mt-2 text-xs text-slate-500">
            Separate each technology with a comma.
          </p>
        </div>

        <div>
          <label htmlFor="link" className="mb-2 block text-sm font-medium text-white">
            Project Link (Optional)
          </label>
          <input
            id="link"
            name="link"
            type="url"
            placeholder="https://github.com/..."
            className="w-full rounded-lg border border-slate-700 bg-[#111c2e] px-4 py-3 text-white outline-none focus:border-emerald-400"
          />
        </div>

        <div className="flex flex-wrap gap-4">
          <button
            type="submit"
            className="rounded-lg bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
          >
            Save Project
          </button>

          <Link
            href="/"
            className="rounded-lg border border-slate-700 px-6 py-3 text-sm font-semibold text-white transition hover:border-emerald-400"
          >
            Cancel
          </Link>
        </div>
      </form>
    </main>
  );
}
