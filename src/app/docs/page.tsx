export default function DocsPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">Documentation</p>
      <h1 className="mt-3 text-4xl font-semibold text-white">Architecture & operations</h1>
      <div className="mt-10 space-y-8 text-slate-300">
        <section className="rounded-2xl border border-white/10 bg-slate-900/70 p-6">
          <h2 className="text-2xl font-medium text-white">Foundation</h2>
          <p className="mt-3">The stack separates UI, business logic, API, database, authentication, and 3D-rendered experiences to support future growth without coupling presentation to infrastructure.</p>
        </section>
        <section className="rounded-2xl border border-white/10 bg-slate-900/70 p-6">
          <h2 className="text-2xl font-medium text-white">Security principles</h2>
          <p className="mt-3">No secrets are embedded in browser code. Server-side configuration is documented in .env.example and should remain in environment variables only.</p>
        </section>
      </div>
    </main>
  );
}
