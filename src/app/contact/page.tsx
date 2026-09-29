export default function ContactPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">Contact</p>
      <h1 className="mt-3 text-4xl font-semibold text-white">Request a briefing</h1>
      <div className="mt-8 rounded-3xl border border-white/10 bg-slate-900/80 p-8">
        <div className="space-y-4">
          <input className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white" placeholder="Name" />
          <input className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white" placeholder="Email" />
          <textarea className="min-h-32 w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white" placeholder="Project requirements" />
          <button className="rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-6 py-3 font-medium text-slate-950">
            Send inquiry
          </button>
        </div>
      </div>
    </main>
  );
}
