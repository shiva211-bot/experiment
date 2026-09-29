import { notFound } from "next/navigation";
import { getProjects } from "@/api/projects";

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const projects = await getProjects();
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">{project.category}</p>
      <h1 className="mt-4 text-4xl font-semibold text-white">{project.title}</h1>
      <p className="mt-5 max-w-2xl text-slate-300">{project.summary}</p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-6">
          <h2 className="text-xl font-medium text-white">Deployment status</h2>
          <p className="mt-4 text-sm text-slate-300">Status: {project.status}</p>
          <p className="mt-4 text-sm text-slate-300">Repository: github.com/shiva211-bot/experiment</p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-6">
          <h2 className="text-xl font-medium text-white">Experience notes</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-300">
            <li>Interactive display ready</li>
            <li>Accessibility and motion tuning required</li>
            <li>Deployment rehearsal scheduled</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
