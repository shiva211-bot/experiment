import { cn } from "@/lib/utils";

type Tone = "cyan" | "holo" | "emerald" | "neutral" | "warning" | "danger";

const tones: Record<Tone, string> = {
  cyan: "border-cyanGlow/30 text-cyanGlow bg-cyanGlow/5",
  holo: "border-holo/30 text-holo-soft bg-holo/5",
  emerald: "border-emeraldAccent/30 text-emeraldAccent bg-emeraldAccent/5",
  neutral: "border-line/15 text-text-secondary bg-white/5",
  warning: "border-warning/30 text-warning bg-warning/5",
  danger: "border-danger/30 text-danger bg-danger/5",
};

export function Badge({
  tone = "cyan",
  className,
  children,
  ...rest
}: React.HTMLAttributes<HTMLSpanElement> & { tone?: Tone }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 border px-2 py-0.5",
        "font-mono text-[10px] uppercase tracking-[0.14em] rounded-sm",
        tones[tone],
        className
      )}
      {...rest}
    >
      {children}
    </span>
  );
}
