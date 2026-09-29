import Link from "next/link";
import { featuredProjects } from "@/projects/data";

export function FeaturedProjects() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">Featured projects</p>
          <h2 className="mt-2 text-3xl font-semibold text-white">Immersive experiences in motion</h2>
        </div>
        <Link href="/projects" className="text-sm text-cyan-200 hover:text-white">
          View all
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {featuredProjects.map((project) => (
          <article key={project.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="mb-4 h-36 rounded-xl bg-gradient-to-br from-cyan-500/30 via-violet-500/20 to-slate-900" />
            <div className="mb-3 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate-400">
              <span>{project.category}</span>
              <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-2 py-1 text-cyan-200">
                {project.status}
              </span>
            </div>
            <h3 className="text-2xl font-medium text-white">{project.title}</h3>
            <p className="mt-3 text-sm text-slate-300">{project.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
