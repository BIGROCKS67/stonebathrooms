import Link from "next/link";
import { areas, site, footerLine, servicesNav } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-rule bg-bg px-5 pb-[calc(5.5rem+env(safe-area-inset-bottom))] pt-16 md:px-10 md:pb-10 md:pt-20">
      <p className="max-w-xl text-[15px] leading-relaxed text-ink/65 md:text-base">{footerLine}</p>

      <div className="mt-14 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-display text-5xl uppercase tracking-[0.14em]">Stone</p>
          <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.28em] text-ink/45">Bathrooms</p>
        </div>
        <div className="flex flex-col gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-ink/70 md:col-span-3">
          <p className="text-ink/35">Navigate</p>
          <Link href="/" className="hover:text-ink">Home</Link>
          <Link href="/about" className="hover:text-ink">About Us</Link>
          {servicesNav.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-ink">{l.label}</Link>
          ))}
          <Link href="/contact" className="hover:text-ink">Contact Us</Link>
        </div>
        <div className="flex flex-col gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-ink/70 md:col-span-4">
          <p className="text-ink/35">Contact</p>
          <ul className="space-y-1 normal-case tracking-normal">
            {areas.map((place) => (
              <li key={place}>{place}</li>
            ))}
          </ul>
          <a href={`mailto:${site.email}`} className="normal-case tracking-normal hover:text-ink">{site.email}</a>
          <a href={`tel:${site.phones[0].tel}`} className="hover:text-ink">{site.phones[0].display}</a>
          <Link href="/reviews" className="hover:text-ink">Google reviews</Link>
          <a href={site.instagram} target="_blank" rel="noreferrer" className="hover:text-ink">Instagram</a>
          <a href={site.facebook} target="_blank" rel="noreferrer" className="hover:text-ink">Facebook</a>
        </div>
      </div>

      <div className="mt-14 grid gap-8 border-t border-rule pt-6 text-[13px] text-ink/55 md:grid-cols-3">
        <p>Luxury bathroom design & installation</p>
        <p>Plumbing repairs & installations</p>
        <p>Heating systems & underfloor heating</p>
      </div>

      <p className="mt-10 font-mono text-[10px] uppercase tracking-[0.16em] text-ink/35">
        © {new Date().getFullYear()} Stone Bathrooms. All rights reserved.
      </p>
    </footer>
  );
}
