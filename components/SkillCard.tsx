
interface SkillCardProps {
  title: string;
  description: string;
}

export default function SkillCard({
  title,
  description,
}: SkillCardProps) {
  return (
    <article className="rounded-xl border border-slate-800 bg-[#111c2e] p-6 shadow-sm transition duration-300 hover:border-emerald-500/60">

      <div className="mb-4 h-1 w-10 rounded-full bg-emerald-400" />

      <h3 className="mb-3 text-xl font-bold text-white">
        {title}
      </h3>

      <p className="text-sm leading-7 text-slate-400">
        {description}
      </p>

    </article>
  );
}
