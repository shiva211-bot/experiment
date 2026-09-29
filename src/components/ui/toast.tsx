"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

type ToastVariant = "default" | "success" | "error";
type ToastItem = {
  id: string;
  title: string;
  description?: string;
  variant?: ToastVariant;
};

type Ctx = { toast: (t: Omit<ToastItem, "id">) => void };
const ToastCtx = createContext<Ctx | null>(null);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const toast = useCallback((t: Omit<ToastItem, "id">) => {
    const id = Math.random().toString(36).slice(2);
    setToasts((prev) => [...prev, { id, ...t }]);
    setTimeout(
      () => setToasts((prev) => prev.filter((x) => x.id !== id)),
      4000
    );
  }, []);

  return (
    <ToastCtx.Provider value={{ toast }}>
      {children}
      <div
        aria-live="polite"
        aria-atomic="true"
        className="pointer-events-none fixed bottom-4 right-4 z-[var(--z-toast)] flex w-[min(360px,calc(100vw-2rem))] flex-col gap-2"
      >
        {toasts.map((t) => (
          <div
            key={t.id}
            className={cn(
              "glass-strong pointer-events-auto rounded-md p-4 hud-corners",
              t.variant === "success" && "border-emeraldAccent/30",
              t.variant === "error" && "border-danger/30"
            )}
          >
            <div className="text-sm font-medium text-text-primary">
              {t.title}
            </div>
            {t.description ? (
              <div className="mt-0.5 text-xs text-text-secondary">
                {t.description}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </ToastCtx.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastCtx);
  if (!ctx) throw new Error("useToast must be used within <ToastProvider>");
  return ctx;
}
