import Link from "next/link";
import { projectMetrics } from "@/lib/metrics";

export function MetricsBar() {
  return (
    <section className="border-y border-white/10 bg-slate-900/50">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-10 md:grid-cols-4">
        {projectMetrics.map((metric) => (
          <div key={metric.label} className="rounded-2xl border border-white/10 bg-slate-950/70 p-5 text-center">
            <div className="text-3xl font-semibold text-white">{metric.value}</div>
            <div className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-400">{metric.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
