
import Link from 'next/link';
import { deleteProject } from '@/app/lib/actions';

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link: string | null;
}

export default function ProjectCard({
  id,
  title,
  description,
  technologies,
  link,
}: ProjectCardProps) {
  const deleteProjectWithId = deleteProject.bind(null, id);

  return (
    <article className="group rounded-xl border border-slate-800 bg-[#111c2e] p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-500/60">
      <div className="mb-5 flex items-center justify-between">
        <span className="text-2xl font-bold text-emerald-400">
          {'</>'}
        </span>
        <span className="text-xs text-slate-500">Featured Project</span>
      </div>

      <h3 className="mb-3 text-xl font-bold text-white transition group-hover:text-emerald-400">
        {title}
      </h3>

      <p className="mb-5 text-sm leading-7 text-slate-400">
        {description}
      </p>

      <div className="mb-5 flex flex-wrap gap-2">
        {technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-md border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300"
          >
            {technology}
          </span>
        ))}
      </div>

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300"
        >
          View Project <span>↗</span>
        </a>
      )}

      <div className="flex gap-3 border-t border-slate-800 pt-5">
        <Link
          href={`/projects/${id}/edit`}
          className="rounded-lg border border-emerald-500/40 px-4 py-2 text-sm font-semibold text-emerald-400 hover:bg-emerald-500/10"
        >
          Edit
        </Link>

        <form action={deleteProjectWithId}>
          <button
            type="submit"
            className="rounded-lg border border-red-500/40 px-4 py-2 text-sm font-semibold text-red-400 hover:bg-red-500/10"
          >
            Delete
          </button>
        </form>
      </div>
    </article>
  );
}
