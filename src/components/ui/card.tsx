import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type Props = React.HTMLAttributes<HTMLDivElement> & {
  interactive?: boolean;
};

export const Card = forwardRef<HTMLDivElement, Props>(function Card(
  { interactive, className, children, ...rest },
  ref
) {
  return (
    <div
      ref={ref}
      className={cn(
        "relative rounded-lg border border-line/10 bg-panel/60 p-5",
        "transition-all duration-base ease-out",
        interactive &&
          "hover:border-cyanGlow/30 hover:bg-panel/80 hover:shadow-glow-sm cursor-pointer",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
});
