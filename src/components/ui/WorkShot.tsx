"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function WorkShot({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const [hint, setHint] = useState({ x: 0, y: 0, on: false });

  return (
    <Link
      href={href}
      className={cn("group relative block", className)}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        setHint({ x: e.clientX - r.left, y: e.clientY - r.top, on: true });
      }}
      onMouseLeave={() => setHint((h) => ({ ...h, on: false }))}
    >
      {children}
      <span
        aria-hidden
        className="pointer-events-none absolute z-20 hidden -translate-x-1/2 -translate-y-1/2 bg-ink px-3 py-2 font-mono text-[10px] uppercase tracking-[0.22em] text-bg md:block"
        style={{ left: hint.x, top: hint.y, opacity: hint.on ? 1 : 0 }}
      >
        View
      </span>
    </Link>
  );
}
