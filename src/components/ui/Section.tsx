import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  /** Largura do container interno. */
  width?: "default" | "wide" | "narrow";
};

const widths: Record<NonNullable<SectionProps["width"]>, string> = {
  narrow: "max-w-3xl",
  default: "max-w-6xl",
  wide: "max-w-7xl",
};

/**
 * Seção com espaçamentos generosos e container centralizado.
 */
export function Section({ id, children, className = "", width = "default" }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-20 px-6 py-24 sm:px-8 md:py-32 ${className}`}>
      <div className={`mx-auto w-full ${widths[width]}`}>{children}</div>
    </section>
  );
}

type KickerProps = { children: ReactNode; className?: string };

/** Etiqueta em versalete usada acima dos títulos de seção. */
export function Kicker({ children, className = "" }: KickerProps) {
  return (
    <span className={`kicker inline-flex items-center gap-3 ${className}`}>
      <span aria-hidden className="h-px w-8 bg-current opacity-50" />
      {children}
    </span>
  );
}
