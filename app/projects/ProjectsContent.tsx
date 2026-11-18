
import { sql } from '@/app/lib/db';
import ProjectList from '@/components/ProjectList';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link: string | null;
}

export default async function ProjectsContent() {
  const projects = await sql`
    SELECT id, title, description, technologies, link
    FROM projects
    ORDER BY id DESC
  ` as Project[];

  return (
    <>
      <div className="mb-8">
        <a
          href="/projects/create"
          className="inline-block rounded-lg bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
        >
          + Add New Project
        </a>
      </div>

      {projects.length > 0 ? (
        <ProjectList projects={projects} />
      ) : (
        <p className="text-slate-400">
          No projects have been added yet.
        </p>
      )}
    </>
  );
}
