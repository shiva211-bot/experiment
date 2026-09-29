import { cn } from "@/lib/utils";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  label?: string;
};

export function HudFrame({ label, className, children, ...rest }: Props) {
  return (
    <div className={cn("hud-corners relative", className)} {...rest}>
      {label ? (
        <span className="label-technical absolute -top-2 left-3 bg-night px-2">
          {label}
        </span>
      ) : null}
      {children}
    </div>
  );
}
