import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
};

/** Passthrough wrapper — no hide/show animation (was causing blank sections). */
export function Reveal({ children, className = "" }: RevealProps) {
  return <div className={className}>{children}</div>;
}
