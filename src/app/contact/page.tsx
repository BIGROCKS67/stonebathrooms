import type { Metadata } from "next";
import { QuoteForm } from "@/components/enquire/Form";
import { PageIntro } from "@/components/ui/Blocks";
import { areas, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Request a quote or book a call. " + site.coverage + ".",
};

export default function ContactPage() {
  return (
    <div className="px-5 pb-24 md:px-10">
      <PageIntro kicker="Contact us" title="Request a quote or book a call" />
      <div className="grid gap-12 pb-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/40">Where we work</p>
          <ul className="mt-5 space-y-2">
            {areas.map((place) => (
              <li key={place} className="font-display text-2xl text-ink">{place}</li>
            ))}
          </ul>
          <div className="mt-8 space-y-3 font-mono text-[12px] uppercase tracking-[0.14em] text-ink/70">
            <a className="block hover:text-ink" href={`tel:${site.phones[0].tel}`}>{site.phones[0].display}</a>
            <a className="block normal-case tracking-normal hover:text-ink" href={`mailto:${site.email}`}>{site.email}</a>
          </div>
        </div>
        <div className="md:col-span-8">
          <QuoteForm />
        </div>
      </div>
    </div>
  );
}
