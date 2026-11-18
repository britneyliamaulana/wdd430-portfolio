
import { Suspense } from 'react';
import HomeContent from './HomeContent';

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
            Hi, I&apos;m Britney.
            <br />
            <span className="text-emerald-400">
              Web Developer.
            </span>
          </h1>

          <p className="max-w-2xl text-lg leading-8 text-slate-400">
            Welcome to my portfolio! I&apos;m a developer
            passionate about creating modern web
            experiences. I&apos;m currently learning Next.js
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
      <Suspense
        fallback={
          <section className="mx-auto max-w-6xl px-6 pb-24">
            <p className="text-slate-400">Loading projects...</p>
          </section>
        }
      >
        <HomeContent />
      </Suspense>
    </main>
  );
}
