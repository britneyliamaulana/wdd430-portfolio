
import ProjectList from "@/components/ProjectList";

const projects = [
  {
    title: "Modest Muse Fashion",
    description:
      "A clothing website that provides users with styling suggestions and outfit combinations. I developed Modest Muse as part of my WDD231 coursework.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/britneyliamaulana/wdd231/tree/main/finalproject",
  },
  {
    title: "Focus Flow",
    description:
      "A productivity and focus application designed to help students stay focused and manage their time effectively. I developed this project as part of my WDD330 coursework.",
    technologies: ["JavaScript", "HTML", "CSS"],
    link: "https://github.com/britneyliamaulana/focus-flow",
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="max-w-3xl">

          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
            Welcome to my portfolio
          </p>

          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
            Hi, I'm Britney.
            <br />
            <span className="text-emerald-400">
              Web Developer.
            </span>
          </h1>

          <p className="max-w-2xl text-lg leading-8 text-slate-400">
            Welcome to my portfolio! I'm a developer
            passionate about creating modern web
            experiences. I'm currently learning Next.js,
            React, and modern web development while
            building practical projects.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
            >
              Explore My Projects →
            </a>

            <a
              href="/about"
              className="rounded-lg border border-slate-700 px-6 py-3 text-sm font-semibold text-white transition hover:border-emerald-400 hover:text-emerald-400"
            >
              About Me
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
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
            Here are some of the projects I've developed
            as part of my web development journey.
          </p>
        </div>

        <ProjectList projects={projects} />
      </section>
    </main>
  );
}
