"use client";

import { usePathname } from "next/navigation";
import { Btn } from "@/components/ui/Btn";
import { FadeIn } from "@/components/ui/FadeIn";
import { cta } from "@/data/site";

export function Cta() {
  const path = usePathname();
  if (path.startsWith("/contact")) return null;

  return (
    <section className="border-t border-rule px-5 py-20 md:px-10 md:py-28">
      <FadeIn>
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-ink/40">Contact</p>
        <h2 className="font-display mt-4 max-w-[12ch] text-5xl text-ink md:text-7xl">{cta.title}</h2>
        <p className="mt-6 max-w-md text-[15px] leading-relaxed text-ink/65 md:text-lg">{cta.body}</p>
        <div className="mt-8">
          <Btn href="/contact">{cta.button}</Btn>
        </div>
      </FadeIn>
    </section>
  );
}
