import type { ReactNode } from "react";

export function EmptyState({
  title = "Nothing here yet",
  description = "No records match the current view.",
  action,
}: {
  title?: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-lg border border-line/10 bg-panel/40 px-6 py-12 text-center">
      <span className="label-technical">Empty</span>
      <h3 className="text-lg font-medium text-text-primary">{title}</h3>
      <p className="max-w-md text-sm text-text-secondary">{description}</p>
      {action}
    </div>
  );
}
