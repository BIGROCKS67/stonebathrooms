import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { IndexList, PageIntro } from "@/components/ui/Blocks";
import { plumbing } from "@/data/site";

export const metadata: Metadata = {
  title: "Plumbing Services",
  description: plumbing.body,
};

export default function PlumbingPage() {
  return (
    <ServicePage
      kicker="Plumbing services"
      title={plumbing.title}
      lede={plumbing.body}
      image="/work/bath-8.jpg"
      alt="Plumbing engineer at work"
      provideTitle={plumbing.provideTitle}
      provide={plumbing.provide}
      advantagesTitle={plumbing.advantagesTitle}
      advantages={plumbing.advantages}
    />
  );
}

function ServicePage({
  kicker,
  title,
  lede,
  image,
  alt,
  provideTitle,
  provide,
  advantagesTitle,
  advantages,
}: {
  kicker: string;
  title: string;
  lede: string;
  image: string;
  alt: string;
  provideTitle: string;
  provide: string[];
  advantagesTitle: string;
  advantages: string[];
}) {
  return (
    <div>
      <PageIntro kicker={kicker} title={title} lede={lede} />
      <div className="grid gap-12 px-5 pb-20 md:grid-cols-12 md:px-10 md:pb-28">
        <div className="md:col-span-7">
          <h2 className="font-display text-4xl md:text-5xl">{provideTitle}</h2>
          <div className="mt-6">
            <IndexList items={provide} />
          </div>
          <h2 className="font-display mt-16 text-4xl md:text-5xl">{advantagesTitle}</h2>
          <div className="mt-6">
            <IndexList items={advantages} />
          </div>
        </div>
        <Reveal className="h-64 bg-paper sm:h-80 md:col-span-5 md:h-[520px]">
          <img src={image} alt={alt} className="h-full w-full object-cover object-center" />
        </Reveal>
      </div>
    </div>
  );
}
