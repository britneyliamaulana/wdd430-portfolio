
import { sql } from '@/app/lib/db';
import ProjectList from '@/components/ProjectList';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link: string | null;
  year_completed: number;
}

export default async function HomeContent() {
  const projects = await sql`
    SELECT id, title, description, technologies, link, year_completed
    FROM projects
    ORDER BY id DESC
  ` as Project[];

  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl px-6 pb-24"
    >
      <div className="mb-10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-emerald-400">
          My Work
        </p>

        <h2 className="text-3xl font-bold text-white md:text-4xl">
          Featured Projects
          <span className="text-emerald-400">.</span>
        </h2>

        <p className="mt-4 max-w-xl leading-7 text-slate-400">
          Here are some of the projects I&apos;ve developed
          as part of my web development journey.
        </p>
      </div>

      {projects.length > 0 ? (
        <ProjectList projects={projects} />
      ) : (
        <p className="text-slate-400">
          No projects have been added yet.
        </p>
      )}
    </section>
  );
}
