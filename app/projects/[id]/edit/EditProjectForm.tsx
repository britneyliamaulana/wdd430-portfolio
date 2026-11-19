
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { sql } from '@/app/lib/db';
import { updateProject } from '@/app/lib/actions';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link: string | null;
  year_completed: number;
}

export default async function EditProjectForm({ id }: { id: string }) {
  const projectId = Number(id);

  if (!Number.isInteger(projectId) || projectId <= 0) {
    notFound();
  }

  const projects = await sql`
    SELECT id, title, description, technologies, link, year_completed
    FROM projects
    WHERE id = ${projectId}
  ` as Project[];

  const project = projects[0];

  if (!project) {
    notFound();
  }

  const updateProjectWithId = updateProject.bind(null, id);

  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <div className="mb-10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-emerald-400">
          Portfolio Management
        </p>

        <h1 className="text-3xl font-bold text-white md:text-4xl">
          Edit Project<span className="text-emerald-400">.</span>
        </h1>

        <p className="mt-4 text-slate-400">
          Update the details of your portfolio project.
        </p>
      </div>

      <form action={updateProjectWithId} className="space-y-6">
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
            defaultValue={project.title}
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
            defaultValue={project.description}
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
            defaultValue={project.technologies.join(', ')}
            className="w-full rounded-lg border border-slate-700 bg-[#111c2e] px-4 py-3 text-white outline-none focus:border-emerald-400"
          />
          <p className="mt-2 text-xs text-slate-500">
            Separate each technology with a comma.
          </p>
        </div>

        <div>
  <label
    htmlFor="yearCompleted"
    className="mb-2 block text-sm font-medium text-white"
  >
    Year Completed
  </label>
  <input
    id="yearCompleted"
    name="yearCompleted"
    type="number"
    min="2000"
    max={new Date().getFullYear()}
    required
    defaultValue={project.year_completed}
    className="w-full rounded-lg border border-slate-700 bg-[#111c2e] px-4 py-3 text-white outline-none focus:border-emerald-400"
  />
</div>

        <div>
          <label htmlFor="link" className="mb-2 block text-sm font-medium text-white">
            Project Link (Optional)
          </label>
          <input
            id="link"
            name="link"
            type="url"
            defaultValue={project.link ?? ''}
            className="w-full rounded-lg border border-slate-700 bg-[#111c2e] px-4 py-3 text-white outline-none focus:border-emerald-400"
          />
        </div>

        <div className="flex flex-wrap gap-4">
          <button
            type="submit"
            className="rounded-lg bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
          >
            Save Changes
          </button>

          <Link
            href="/projects"
            className="rounded-lg border border-slate-700 px-6 py-3 text-sm font-semibold text-white transition hover:border-emerald-400"
          >
            Cancel
          </Link>
        </div>
      </form>
    </main>
  );
}
