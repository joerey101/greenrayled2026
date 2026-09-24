import Link from "next/link";

export default function ArrowLink({ href, children, inverted = false, className = "", disabled = false }: { href: string; children: React.ReactNode; inverted?: boolean; className?: string; disabled?: boolean }) {
  // disabled: el botón queda anulado — no se renderiza
  if (disabled) return null;
  const cls = `arrow-link ${inverted ? "inverted" : ""} ${className}`.trim();
  return (
    <Link href={href} className={cls}>
      <span>{children}</span><span aria-hidden="true">↗</span>
    </Link>
  );
}
