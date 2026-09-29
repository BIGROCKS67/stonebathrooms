"use client";

import Script from "next/script";
import { useEffect } from "react";
import { Btn } from "@/components/ui/Btn";
import { FadeIn } from "@/components/ui/FadeIn";
import { site } from "@/data/site";

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

function processEmbed() {
  window.instgrm?.Embeds.process();
}

export function Instagram() {
  useEffect(() => {
    processEmbed();
    const t = window.setTimeout(processEmbed, 800);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <section className="border-t border-rule px-5 py-14 md:px-12 md:py-20">
      <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-[minmax(0,1fr)_420px] lg:gap-16">
        <FadeIn className="lg:sticky lg:top-28">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-ink/45">Instagram</p>
          <h2 className="font-display mt-4 max-w-[12ch] text-4xl text-ink md:text-6xl">
            The jobs, as they go up.
          </h2>
          <p className="mt-5 max-w-md text-[16px] leading-relaxed text-ink/75">
            Live from {site.instagramHandle}. New bathrooms show up here as the team finishes them.
          </p>
          <div className="mt-8">
            <Btn href={site.instagram}>Follow {site.instagramHandle}</Btn>
          </div>
        </FadeIn>
        <FadeIn delay={0.08} className="min-w-0 w-full">
          <div className="mx-auto w-full max-w-[420px] overflow-hidden border border-rule bg-white lg:mx-0">
            <blockquote
              className="instagram-media ig-embed"
              data-instgrm-permalink="https://www.instagram.com/stonebathrooms_/?utm_source=ig_embed&utm_campaign=loading"
              data-instgrm-version="14"
            >
              <a
                href={site.instagram}
                target="_blank"
                rel="noreferrer"
                className="block px-4 py-8 text-center font-mono text-[11px] uppercase tracking-[0.16em] text-ink"
              >
                View {site.instagramHandle} on Instagram
              </a>
            </blockquote>
          </div>
        </FadeIn>
      </div>
      <Script src="https://www.instagram.com/embed.js" strategy="lazyOnload" onLoad={processEmbed} />
    </section>
  );
}
