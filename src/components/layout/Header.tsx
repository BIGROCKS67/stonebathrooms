"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mark } from "@/components/ui/Mark";
import { Btn } from "@/components/ui/Btn";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

const links = [
  { href: "/about", label: "About" },
  { href: "/luxury-bathrooms", label: "Bathrooms" },
  { href: "/plumbing", label: "Plumbing" },
  { href: "/heating", label: "Heating" },
  { href: "/reviews", label: "Reviews" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [progress, setProgress] = useState(0);
  const lastY = useRef(0);
  const path = usePathname();
  const overHero = path === "/" && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      setHidden(y > lastY.current && y > 140);
      lastY.current = y;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? y / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [path]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top)] transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]",
        hidden && !open && "-translate-y-full",
        overHero
          ? "bg-transparent text-[#f3efe6]"
          : open
            ? "bg-bg text-ink"
            : "bg-bg/85 text-ink backdrop-blur-md",
      )}
    >
      <div className={cn("hidden grid-cols-3 items-center border-b px-8 py-2 font-mono text-[10px] uppercase tracking-[0.18em] lg:grid", overHero ? "border-[#f3efe6]/15 text-[#f3efe6]/55" : "border-rule text-ink/45")}>
        <span>{site.coverage}</span>
        <a href={`mailto:${site.email}`} className={cn("justify-self-center", overHero ? "hover:text-[#f3efe6]" : "hover:text-ink")}>
          {site.email}
        </a>
        <a href={`tel:${site.phones[0].tel}`} className={cn("justify-self-end", overHero ? "hover:text-[#f3efe6]" : "hover:text-ink")}>
          {site.phoneLine}
        </a>
      </div>

      <div className="relative flex h-16 items-center justify-center px-5 md:h-[4.5rem] md:px-8">
        <Link href="/" aria-label="Stone Bathrooms home" className="absolute left-5 flex items-center gap-3 md:left-8">
          <Mark className="h-9 w-8" />
          <span className="flex flex-col leading-none">
            <span className="inline-block pl-[0.22em] font-display text-[1.35rem] uppercase leading-none tracking-[0.22em]">Stone</span>
            <span className={cn("mt-1 inline-block pl-[0.28em] font-mono text-[8px] uppercase tracking-[0.28em]", overHero ? "text-[#f3efe6]/55" : "text-ink/55")}>Bathrooms</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => {
            const active = path === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "font-mono text-[11px] uppercase tracking-[0.2em] transition",
                  overHero ? "text-[#f3efe6]/70 hover:text-[#f3efe6]" : "text-ink/60 hover:text-ink",
                  active && (overHero ? "text-[#f3efe6]" : "text-ink"),
                )}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="absolute right-8 hidden md:block">
          <Btn
            href="/contact"
            className={cn(
              "!min-h-0 !px-4 !py-2.5",
              overHero && "!border !border-[#f3efe6] !bg-transparent !text-[#f3efe6]",
            )}
          >
            Request a quote
          </Btn>
        </div>

        <button
          type="button"
          className="absolute right-3 z-50 flex h-11 w-11 items-center justify-center md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={cn("absolute h-px w-6 bg-current transition", open ? "rotate-45" : "-translate-y-1.5")} />
          <span className={cn("absolute h-px w-6 bg-current transition", open ? "-rotate-45" : "translate-y-1.5")} />
        </button>
      </div>

      {open && (
        <div className="flex min-h-[100svh] flex-col justify-end bg-bg px-5 pb-36 md:hidden">
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/luxury-bathrooms", label: "Bathrooms" },
            { href: "/plumbing", label: "Plumbing" },
            { href: "/heating", label: "Heating" },
            { href: "/reviews", label: "Reviews" },
            { href: "/contact", label: "Contact" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="font-display text-[3.4rem] leading-[0.92] text-ink">
              {l.label}
            </Link>
          ))}
          <div className="mt-8 flex flex-col gap-3 pb-6 font-mono text-[12px] uppercase tracking-[0.16em] text-ink/55">
            <a href={`tel:${site.phones[0].tel}`}>{site.phones[0].display}</a>
            <a href={`mailto:${site.email}`} className="normal-case tracking-normal">{site.email}</a>
          </div>
        </div>
      )}

      <span aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-rule">
        <span className="block h-full origin-left bg-ink" style={{ transform: `scaleX(${progress})` }} />
      </span>
    </header>
  );
}
