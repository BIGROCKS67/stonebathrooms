import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { IndexList, PageIntro } from "@/components/ui/Blocks";
import { heating } from "@/data/site";

export const metadata: Metadata = {
  title: "Heating Services",
  description: heating.body,
};

export default function HeatingPage() {
  return (
    <div>
      <PageIntro kicker="Heating services" title={heating.title} lede={heating.body} />
      <div className="grid gap-12 px-5 pb-20 md:grid-cols-12 md:px-10 md:pb-28">
        <div className="md:col-span-7">
          <h2 className="font-display text-4xl md:text-5xl">{heating.provideTitle}</h2>
          <div className="mt-6">
            <IndexList items={heating.provide} />
          </div>
          <h2 className="font-display mt-16 text-4xl md:text-5xl">{heating.advantagesTitle}</h2>
          <div className="mt-6">
            <IndexList items={heating.advantages} />
          </div>
        </div>
        <Reveal className="h-64 bg-paper sm:h-80 md:col-span-5 md:h-[520px]">
          <img src="/work/his-boiler.jpg" alt="Servicing a boiler" className="h-full w-full object-cover object-center" />
        </Reveal>
      </div>
    </div>
  );
}
