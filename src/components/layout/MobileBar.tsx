"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/data/site";

export function MobileBar() {
  const path = usePathname();
  if (path.startsWith("/contact")) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-rule bg-bg pb-[env(safe-area-inset-bottom)] md:hidden">
      <a
        href={`tel:${site.phones[0].tel}`}
        className="flex h-14 items-center justify-center font-mono text-[11px] uppercase tracking-[0.18em] text-ink"
      >
        Call
      </a>
      <Link
        href="/contact"
        className="flex h-14 items-center justify-center bg-ink font-mono text-[11px] uppercase tracking-[0.18em] text-bg"
      >
        Request a quote
      </Link>
    </div>
  );
}
