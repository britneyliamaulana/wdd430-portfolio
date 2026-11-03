
interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  link,
}: ProjectCardProps) {
  return (
    <article className="group rounded-xl border border-slate-800 bg-[#111c2e] p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-500/60">

      <div className="mb-5 flex items-center justify-between">
        <span className="text-2xl font-bold text-emerald-400">
          {"</>"}
        </span>

        <span className="text-xs text-slate-500">
          Featured Project
        </span>
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
          className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300"
        >
          View Project <span>↗</span>
        </a>
      )}

    </article>
  );
}

