
import Link from 'next/link';
import CreateProjectForm from './CreateProjectForm';

export default function CreateProjectPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <div className="mb-10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-emerald-400">
          Portfolio Management
        </p>

        <h1 className="text-3xl font-bold text-white md:text-4xl">
          Add New Project<span className="text-emerald-400">.</span>
        </h1>

        <p className="mt-4 text-slate-400">
          Add a new project to your portfolio.
        </p>
      </div>

      <CreateProjectForm />

      <div className="mt-6">
        <Link
          href="/projects"
          className="text-sm font-medium text-slate-400 hover:text-emerald-400"
        >
          ← Back to Projects
        </Link>
      </div>
    </main>
  );
}

