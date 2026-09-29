"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type Props = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
};

export function Modal({ open, onClose, title, children, className }: Props) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title ?? "Dialog"}
      className="fixed inset-0 z-[var(--z-modal)] flex items-center justify-center p-4"
    >
      <div
        className="absolute inset-0 bg-night/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        ref={panelRef}
        tabIndex={-1}
        className={cn(
          "glass-strong relative w-full max-w-lg rounded-lg p-6 hud-corners",
          className
        )}
      >
        {title ? (
          <h2 className="mb-4 font-mono text-sm uppercase tracking-[0.14em] text-cyanGlow">
            {title}
          </h2>
        ) : null}
        <div className="text-sm text-text-secondary">{children}</div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute right-4 top-4 text-text-muted hover:text-text-primary"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
