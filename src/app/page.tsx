"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { GlassPanel } from "@/components/ui/glass-panel";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Modal } from "@/components/ui/modal";
import { LoadingState } from "@/components/ui/loading-state";
import { ErrorState } from "@/components/ui/error-state";
import { EmptyState } from "@/components/ui/empty-state";
import { HudFrame } from "@/components/hud/hud-frame";
import { useToast } from "@/components/ui/toast";

export default function HomePage() {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  return (
    <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* ============ HERO ============ */}
      <section className="relative mt-8 overflow-hidden rounded-xl border border-line/10 scanlines">
        <div className="grid-fine absolute inset-0 opacity-60" aria-hidden />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(94,231,255,0.18),transparent_60%)]"
          aria-hidden
        />
        <HudFrame
          className="relative z-10 p-8 sm:p-14"
          label="SYSTEM // ONLINE"
        >
          <p className="label-technical mb-4">
            [ Phase 02 — Design Foundation ]
          </p>
          <h1 className="text-glow max-w-3xl text-4xl font-semibold leading-tight text-text-primary sm:text-5xl md:text-6xl">
            A holographic surface for{" "}
            <span className="text-cyanGlow">serious engineering work.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-sm text-text-secondary sm:text-base">
            A cohesive design system for exhibiting projects across AI, software,
            cybersecurity, and research — built on glass surfaces, fine grids,
            HUD framing, and controlled glow.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg">Enter exhibition</Button>
            <Button size="lg" variant="secondary">
              Read the docs
            </Button>
          </div>
        </HudFrame>
      </section>

      {/* ============ BUTTONS ============ */}
      <section className="mt-16">
        <h2 className="label-technical mb-4">01 // Buttons</h2>
        <GlassPanel>
          <div className="flex flex-wrap items-center gap-3">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="danger">Danger</Button>
            <Button disabled>Disabled</Button>
            <Button size="sm">Small</Button>
            <Button size="lg">Large</Button>
          </div>
        </GlassPanel>
      </section>

      {/* ============ BADGES ============ */}
      <section className="mt-12">
        <h2 className="label-technical mb-4">02 // Badges</h2>
        <div className="flex flex-wrap gap-2">
          <Badge tone="cyan">AI</Badge>
          <Badge tone="holo">Software</Badge>
          <Badge tone="emerald">Deployed</Badge>
          <Badge tone="neutral">Draft</Badge>
          <Badge tone="warning">Beta</Badge>
          <Badge tone="danger">Deprecated</Badge>
        </div>
      </section>

      {/* ============ CARDS ============ */}
      <section className="mt-12">
        <h2 className="label-technical mb-4">03 // Cards</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              t: "Neural Inference",
              d: "Low-latency model serving for edge devices.",
              tag: "AI",
            },
            {
              t: "Zero-Trust Mesh",
              d: "Identity-aware service mesh across regions.",
              tag: "Security",
            },
            {
              t: "Realtime Graph",
              d: "Streaming analysis of linked datasets.",
              tag: "Research",
            },
          ].map((c) => (
            <Card key={c.t} interactive>
              <Badge tone="cyan">{c.tag}</Badge>
              <h3 className="mt-4 text-lg font-medium text-text-primary">
                {c.t}
              </h3>
              <p className="mt-1 text-sm text-text-secondary">{c.d}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* ============ FORM ============ */}
      <section className="mt-12">
        <h2 className="label-technical mb-4">04 // Inputs</h2>
        <GlassPanel label="QUERY" className="max-w-2xl">
          <div className="grid gap-4 sm:grid-cols-2">
            <Input label="Search" placeholder="Search projects…" />
            <Input
              label="Email"
              type="email"
              placeholder="you@domain.dev"
              hint="Used for deployment notifications only."
            />
            <Input
              label="API token"
              type="password"
              placeholder="••••••••"
              error="Token format is invalid."
            />
            <Select
              label="Domain"
              options={[
                { value: "ai", label: "AI / ML" },
                { value: "sec", label: "Cybersecurity" },
                { value: "sw", label: "Software" },
                { value: "res", label: "Research" },
              ]}
            />
          </div>
        </GlassPanel>
      </section>

      {/* ============ OVERLAYS ============ */}
      <section className="mt-12">
        <h2 className="label-technical mb-4">05 // Overlays</h2>
        <div className="flex flex-wrap gap-3">
          <Button variant="secondary" onClick={() => setOpen(true)}>
            Open modal
          </Button>
          <Button
            variant="secondary"
            onClick={() =>
              toast({
                title: "Deployment queued",
                description: "Build #a7f3 will start in a moment.",
                variant: "success",
              })
            }
          >
            Show toast
          </Button>
        </div>
        <Modal open={open} onClose={() => setOpen(false)} title="Confirm">
          <p className="mb-6">
            This is a Phase 2 design-system modal. Focus is moved to the panel,
            ESC closes, background scroll is locked.
          </p>
          <div className="flex justify-end gap-2">
            <Button variant="ghost" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setOpen(false)}>Confirm</Button>
          </div>
        </Modal>
      </section>

      {/* ============ STATES ============ */}
      <section className="mt-12 mb-24">
        <h2 className="label-technical mb-4">06 // States</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <GlassPanel>
            <LoadingState label="Fetching telemetry" />
          </GlassPanel>
          <ErrorState onRetry={() => toast({ title: "Retrying…" })} />
          <EmptyState
            title="No projects yet"
            description="Once a project is published it will appear here."
            action={<Button size="sm">Create project</Button>}
          />
        </div>
      </section>
    </main>
  );
}
