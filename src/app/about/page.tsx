import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { IndexList, PageIntro } from "@/components/ui/Blocks";
import { about } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description: about.body[0],
};

export default function AboutPage() {
  return (
    <div>
      <PageIntro kicker="About us" title={about.title} />
      <div className="grid gap-10 px-5 pb-20 md:grid-cols-12 md:px-10 md:pb-28">
        <div className="md:col-span-7">
          {about.body.map((p) => (
            <p key={p} className="mt-5 max-w-xl text-[16px] leading-relaxed text-ink/75 first:mt-0 md:text-lg">
              {p}
            </p>
          ))}
          <h2 className="font-display mt-14 text-4xl md:text-5xl">{about.trustTitle}</h2>
          <div className="mt-6">
            <IndexList items={about.trust} />
          </div>
        </div>
        <Reveal className="h-64 bg-paper sm:h-80 md:col-span-5 md:h-[520px]">
          <img src="/work/his-shower.jpg" alt="Fitting a walk-in shower" className="h-full w-full object-cover object-center" />
        </Reveal>
      </div>
    </div>
  );
}
