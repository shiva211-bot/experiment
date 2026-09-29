import Link from "next/link";

export function FeatureGrid() {
  const features = [
    "3D holographic scenes",
    "Project and deployment management",
    "Search and filtering",
    "Accessibility and SEO built in",
    "Secure authentication flows",
    "Operational analytics dashboard",
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-6 md:grid-cols-3">
        {features.map((feature) => (
          <div key={feature} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="mb-4 h-10 w-10 rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 shadow-glow" />
            <h3 className="text-xl font-medium text-white">{feature}</h3>
            <p className="mt-3 text-sm text-slate-300">
              Structured to support immersive exhibition planning, public showcases, and secure operational delivery.
            </p>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link href="/docs" className="inline-flex rounded-full border border-white/10 px-5 py-3 text-sm text-slate-200">
          Read the architecture
        </Link>
      </div>
    </section>
  );
}
