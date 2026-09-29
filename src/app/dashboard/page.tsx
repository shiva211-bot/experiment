import { dashboardCards, authUser } from "@/dashboard/data";

export default function DashboardPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-10 flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">Dashboard</p>
          <h1 className="mt-3 text-4xl font-semibold text-white">Operations overview</h1>
        </div>
        <div className="rounded-full border border-white/10 bg-slate-900 px-4 py-2 text-sm text-slate-200">
          {authUser.name} · {authUser.role}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {dashboardCards.map((card) => (
          <div key={card.title} className="rounded-2xl border border-white/10 bg-slate-900/70 p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-400">{card.title}</p>
            <p className="mt-5 text-4xl font-semibold text-white">{card.value}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
