export default function SignupPage() {
  return (
    <main className="mx-auto max-w-lg px-6 py-20">
      <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-8">
        <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">Join</p>
        <h1 className="mt-3 text-3xl font-semibold text-white">Create account</h1>
        <div className="mt-8 space-y-4">
          <input className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white" placeholder="Full name" />
          <input className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white" placeholder="Work email" />
          <input className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white" type="password" placeholder="Password" />
          <button className="w-full rounded-xl bg-gradient-to-r from-cyan-400 to-violet-500 px-4 py-3 font-medium text-slate-950">
            Sign up
          </button>
        </div>
      </div>
    </main>
  );
}
