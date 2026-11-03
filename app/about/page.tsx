

import SkillCard from "@/components/SkillCard";

export default function About() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">

      {/* About Introduction */}
      <section className="mb-16 max-w-3xl">

        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
          Get to know me
        </p>

        <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
          About Me
          <span className="text-emerald-400">.</span>
        </h1>

        <p className="text-lg leading-8 text-slate-400">
          Welcome to my portfolio! I am Britney, a web
          development student passionate about learning
          new technologies and building creative websites.
          I enjoy exploring new ideas, solving problems,
          and turning concepts into functional digital
          experiences.
        </p>

      </section>

      {/* Skills Section */}
      <section>

        <div className="mb-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-emerald-400">
            What I'm learning
          </p>

          <h2 className="text-3xl font-bold text-white">
            My Technical Skills
            <span className="text-emerald-400">.</span>
          </h2>

          <p className="mt-3 text-slate-400">
            Technologies and tools I'm exploring through
            my coursework and personal projects.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

          <SkillCard
            title="Web Development"
            description="Learning to build responsive websites using HTML, CSS, JavaScript, React, and Next.js."
          />

          <SkillCard
            title="Frontend Development"
            description="Developing user-friendly interfaces, reusable components, and responsive layouts using modern frontend technologies."
          />

          <SkillCard
            title="Programming"
            description="Improving my JavaScript and TypeScript skills through practical projects and problem-solving."
          />

          <SkillCard
            title="Continuous Learning"
            description="Exploring new technologies, developing my coding abilities, and building projects to strengthen my development experience."
          />

        </div>

      </section>

    </main>
  );
}
