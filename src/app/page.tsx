import { HoloScene } from "@/three/holo-scene";
import { Hero } from "@/components/landing/hero";
import { MetricsBar } from "@/components/landing/metrics-bar";
import { FeatureGrid } from "@/components/landing/feature-grid";
import { FeaturedProjects } from "@/components/landing/featured-projects";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <MetricsBar />
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-[1fr_1.2fr] md:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">Live showcase</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">Immersive visual control room</h2>
            <p className="mt-4 text-slate-300">
              Monitor exhibits, review deployment quality, and align live performance with catalog project details.
            </p>
          </div>
          <HoloScene />
        </div>
      </section>
      <FeatureGrid />
      <FeaturedProjects />
    </main>
  );
}
