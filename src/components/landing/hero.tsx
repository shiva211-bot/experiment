import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1.2fr_0.8fr] md:items-center">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs uppercase tracking-[0.28em] text-cyan-200">
            3D Holographic Exhibition Platform
          </p>
          <h1 className="max-w-xl text-5xl font-semibold tracking-tight text-white md:text-6xl">
            Design the future of immersive storytelling.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-300">
            Organize projects, present immersive experiences, and manage deployment workflows with a platform built for exhibition-grade experiences.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/projects" className="rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-6 py-3 font-medium text-slate-950">
              Explore projects
            </Link>
            <Link href="/signup" className="rounded-full border border-white/10 px-6 py-3 font-medium text-white">
              Create account
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-5 shadow-glow">
            <div className="rounded-[1.5rem] border border-cyan-400/30 bg-[radial-gradient(circle_at_center,_rgba(94,231,255,0.18),_rgba(15,23,42,0.9)_55%)] p-6">
              <div className="h-72 rounded-[1.25rem] border border-white/10 bg-[radial-gradient(circle_at_center,_rgba(94,231,255,0.35),_rgba(15,23,42,0.9)_55%)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
