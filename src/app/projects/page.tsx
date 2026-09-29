import { motion } from "framer-motion";
import Link from "next/link";
import { getProjects } from "@/api/projects";

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">Projects</p>
          <h1 className="mt-3 text-4xl font-semibold text-white">Exhibition catalogue</h1>
        </div>
        <Link href="/signup" className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-200">
          New project
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.slug}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            className="rounded-2xl border border-white/10 bg-slate-900/70 p-6"
          >
            <div className="mb-5 h-28 rounded-xl bg-gradient-to-br from-cyan-500/20 via-violet-500/20 to-slate-900" />
            <div className="mb-3 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-slate-400">
              <span>{project.category}</span>
              <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-2 py-1 text-cyan-200">
                {project.status}
              </span>
            </div>
            <h2 className="text-2xl font-medium text-white">{project.title}</h2>
            <p className="mt-3 text-sm text-slate-300">{project.summary}</p>
            <Link href={`/projects/${project.slug}`} className="mt-5 inline-block text-sm text-cyan-200">
              View details →
            </Link>
          </motion.article>
        ))}
      </div>
    </main>
  );
}
