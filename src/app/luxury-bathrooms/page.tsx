import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/FadeIn";
import { Reveal } from "@/components/ui/Reveal";
import { IndexList, PageIntro, Process } from "@/components/ui/Blocks";
import { luxury, photos } from "@/data/site";

export const metadata: Metadata = {
  title: "Luxury Bathrooms",
  description: luxury.body,
};

export default function LuxuryPage() {
  const brands = [...luxury.brands, ...luxury.brands];

  return (
    <div>
      <PageIntro kicker="Luxury bathrooms" title={luxury.title} lede={luxury.body} />

      <Reveal className="mx-5 h-52 bg-paper sm:h-64 md:mx-auto md:h-[420px] md:max-w-6xl">
        <img src="/work/ig/01-DXjNCm-CHD1.jpg" alt="Marble walk-in shower" className="h-full w-full object-cover object-center" />
      </Reveal>

      <section className="grid gap-12 px-5 py-16 md:grid-cols-12 md:px-10 md:py-24">
        <div className="md:col-span-4">
          <FadeIn>
            <h2 className="font-display text-4xl md:text-5xl">{luxury.provideTitle}</h2>
          </FadeIn>
        </div>
        <div className="md:col-span-8">
          <IndexList items={luxury.provide} />
        </div>
      </section>

      <div className="overflow-hidden border-y border-rule bg-paper py-6">
        <p className="mb-4 px-5 font-mono text-[11px] uppercase tracking-[0.24em] text-ink/40 md:px-10">
          {luxury.brandsTitle}
        </p>
        <div className="ticker flex w-max items-center">
          {brands.map((name, i) => (
            <span key={`${name}-${i}`} className="flex items-center">
              <span className="px-7 font-display text-3xl tracking-[0.12em] text-ink md:text-5xl">{name}</span>
              <span className="h-1 w-1 rounded-full bg-ink/60" />
            </span>
          ))}
        </div>
      </div>

      <section className="px-5 py-16 md:px-10 md:py-24">
        <h2 className="font-display text-4xl md:text-6xl">{luxury.processTitle}</h2>
        <div className="mt-10">
          <Process steps={luxury.process} />
        </div>
        <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-4">
          {photos.map((photo) => (
            <Reveal key={photo.src} className="aspect-[4/3] bg-paper">
              <img src={photo.src} alt={photo.alt} className="h-full w-full object-cover object-center" />
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
