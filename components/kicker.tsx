import { cn } from "cn";

export function Kicker({
  children,
  className,
  light,
}: {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-2.5 font-mono text-xs tracking-[0.25em] uppercase",
        light ? "text-ink/60" : "text-paper/60",
        className
      )}
    >
      <span className="h-1.5 w-1.5 bg-brand" aria-hidden />
      {children}
    </div>
  );
}
