import { Button } from "./button";

export function ErrorState({
  title = "Signal lost",
  description = "The requested data could not be retrieved.",
  onRetry,
}: {
  title?: string;
  description?: string;
  onRetry?: () => void;
}) {
  return (
    <div
      role="alert"
      className="flex flex-col items-center gap-4 rounded-lg border border-danger/20 bg-danger/5 px-6 py-10 text-center"
    >
      <span className="label-technical text-danger/80">Error</span>
      <h3 className="text-lg font-medium text-text-primary">{title}</h3>
      <p className="max-w-md text-sm text-text-secondary">{description}</p>
      {onRetry ? (
        <Button variant="secondary" size="sm" onClick={onRetry}>
          Retry
        </Button>
      ) : null}
    </div>
  );
}
