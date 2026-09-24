import Link from "next/link";

export default function ArrowLink({ href, children, inverted = false, className = "", disabled = false }: { href: string; children: React.ReactNode; inverted?: boolean; className?: string; disabled?: boolean }) {
  const cls = `arrow-link ${inverted ? "inverted" : ""} ${className} ${disabled ? "is-disabled" : ""}`.trim();
  // disabled: se mantiene el texto pero se anula la navegación (no es un enlace)
  if (disabled) {
    return (
      <span className={cls} aria-disabled="true">
        <span>{children}</span><span aria-hidden="true">↗</span>
      </span>
    );
  }
  return (
    <Link href={href} className={cls}>
      <span>{children}</span><span aria-hidden="true">↗</span>
    </Link>
  );
}
