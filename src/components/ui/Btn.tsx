import Link from "next/link";
import { cn } from "@/lib/utils";

const variants = {
  cream: "btn btn-cream",
  ghost: "btn btn-ghost",
};

type BtnProps = {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof variants;
  className?: string;
};

export function Btn({ href, children, variant = "cream", className }: BtnProps) {
  const cls = cn(variants[variant], className);
  const offsite = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");

  if (offsite) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
        className={cls}
      >
        <span>{children}</span>
      </a>
    );
  }

  return (
    <Link href={href} className={cls}>
      <span>{children}</span>
    </Link>
  );
}
