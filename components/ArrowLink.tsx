import Link from "next/link";

export default function ArrowLink({ href, children, inverted = false, className = "" }: { href: string; children: React.ReactNode; inverted?: boolean; className?: string }) {
  return (
    <Link href={href} className={`arrow-link ${inverted ? "inverted" : ""} ${className}`.trim()}>
      <span>{children}</span><span aria-hidden="true">↗</span>
    </Link>
  );
}
