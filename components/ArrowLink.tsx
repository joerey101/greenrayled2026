import Link from "next/link";

export default function ArrowLink({ href, children, inverted = false }: { href: string; children: React.ReactNode; inverted?: boolean }) {
  return (
    <Link href={href} className={`arrow-link ${inverted ? "inverted" : ""}`}>
      <span>{children}</span><span aria-hidden="true">↗</span>
    </Link>
  );
}
