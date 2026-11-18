import { Suspense } from 'react';
import ProjectsContent from './ProjectsContent';

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-emerald-400">
          Portfolio Management
        </p>

        <h1 className="text-3xl font-bold text-white md:text-4xl">
          My Projects<span className="text-emerald-400">.</span>
        </h1>

        <p className="mt-4 text-slate-400">
          Explore the projects I have built.
        </p>
      </div>

      <Suspense
        fallback={
          <p className="text-slate-400">Loading projects...</p>
        }
      >
        <ProjectsContent />
      </Suspense>
    </main>
  );
}