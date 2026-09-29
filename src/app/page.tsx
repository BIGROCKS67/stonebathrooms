import Link from "next/link";
import { Btn } from "@/components/ui/Btn";
import { FadeIn } from "@/components/ui/FadeIn";
import { Hero } from "@/components/home/Hero";
import { Instagram } from "@/components/home/Instagram";
import { areas, luxuryHome, photos, site, tradeHome } from "@/data/site";

const reasons = [
  {
    title: "Ten year workmanship warranty",
    line: "The bathroom is backed for a decade after the team leaves.",
  },
  {
    title: "Ten million pounds insurance cover",
    line: "Your home is covered while the work is happening.",
  },
  {
    title: "A team of experts",
    line: "Specialists in bespoke, high-end bathrooms, from the first drawing to the last fitting.",
  },
  {
    title: "Design, supply, and installation",
    line: "One team handles the whole job, so nothing is passed between strangers.",
  },
];

function Checks({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 space-y-3.5">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-[16px] leading-snug text-ink/80">
          <span className="mt-0.5 text-[var(--accent)]" aria-hidden>
            ✓
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

function Shot({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <img
      src={src}
      alt={alt}
      className={`h-52 w-full object-cover object-center sm:h-64 md:h-[460px] ${className}`}
    />
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="bg-bg px-5 py-10 md:px-12 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-2 md:gap-16">
          <Shot src="/work/ig/12-CrOQ_njodje.jpg" alt="Victorian en-suite with a copper bath in Sherrington" />
          <FadeIn>
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-ink/45">01 — The bathroom</p>
            <h2 className="font-display mt-4 text-4xl text-ink md:text-6xl">{luxuryHome.title}</h2>
            <p className="mt-3 max-w-xl font-display text-2xl text-[var(--accent)] md:text-3xl">
              {luxuryHome.line}
            </p>
            <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-ink/75">
              This is the work. A bespoke, high-end bathroom designed around the house, then fitted by the same team. {luxuryHome.body}
            </p>
            <Checks items={luxuryHome.points} />
            <div className="mt-8 flex flex-wrap gap-3">
              <Btn href={luxuryHome.href} variant="ghost">
                {luxuryHome.cta}
              </Btn>
              <Btn href="/contact">Request a quote</Btn>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="border-t border-rule bg-paper px-5 py-10 md:px-12 md:py-20">
        <div className="mx-auto grid max-w-6xl items-start gap-8 md:grid-cols-2 md:gap-16">
          <Shot
            src="/work/ig/02-DPE-d4LiA_R.jpg"
            alt="Double basin and a lit round mirror"
            className="md:order-2"
          />
          <FadeIn className="md:order-1">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-ink/45">02 — Why us</p>
            <h2 className="font-display mt-4 text-4xl text-ink md:text-6xl">Why clients stay with the team.</h2>
            <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-ink/75">
              A beautiful bathroom is easy to promise. The reason to choose Stone is who stands behind it: a team of experts, a ten-year warranty, and cover that actually means something if anything goes wrong.
            </p>
            <ul className="mt-8 space-y-5">
              {reasons.map((item, i) => (
                <li key={item.title} className="border-t border-rule pt-5">
                  <p className="font-display text-2xl text-ink md:text-3xl">
                    <span className="mr-3 font-mono text-sm tracking-[0.16em] text-[var(--accent)]">
                      0{i + 1}
                    </span>
                    {item.title}
                  </p>
                  <p className="mt-2 max-w-md text-[15px] leading-relaxed text-ink/70">{item.line}</p>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Btn href="/contact">Request a quote</Btn>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="border-t border-rule px-5 py-10 md:px-12 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-2 md:gap-16">
          <Shot src="/work/his-basin.jpg" alt="Plumbing a marble basin" />
          <FadeIn>
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-ink/45">03 — The rest of the house</p>
            <h2 className="font-display mt-4 text-4xl text-ink md:text-6xl">{tradeHome.title}</h2>
            <p className="mt-3 max-w-xl font-display text-2xl text-[var(--accent)] md:text-3xl">
              {tradeHome.line}
            </p>
            <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-ink/75">
              Bathrooms come first. When the heating or the plumbing needs the same standard, it is still this team. {tradeHome.body}
            </p>
            <Checks items={tradeHome.points} />
            <div className="mt-8 flex flex-wrap gap-3">
              <Btn href="/heating" variant="ghost">
                Explore our services
              </Btn>
              <Btn href="/contact">Request a quote</Btn>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="border-t border-rule bg-paper px-5 py-14 md:px-12 md:py-20">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-ink/45">The work</p>
            <h2 className="font-display mt-4 max-w-[14ch] text-4xl text-ink md:text-6xl">
              Finished bathrooms from the Instagram.
            </h2>
          </FadeIn>
          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3">
            {photos.map((photo) => (
              <img
                key={photo.src}
                src={photo.src}
                alt={photo.alt}
                className="aspect-[3/4] w-full object-cover"
              />
            ))}
          </div>
          <div className="mt-8">
            <Btn href="/contact">Request a quote</Btn>
          </div>
        </div>
      </section>

      <Instagram />

      <section className="border-t border-rule bg-paper px-5 py-14 md:px-12 md:py-20">
        <div className="mx-auto grid max-w-6xl items-end gap-10 md:grid-cols-2">
          <FadeIn>
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-ink/45">04 — Proof</p>
            <h2 className="font-display mt-4 text-4xl text-ink md:text-6xl">Read it from the people who had the team in.</h2>
            <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-ink/75">
              Google reviews are the straight version. See what clients say, then ask for a quote if the bathroom is the one you want built.
            </p>
          </FadeIn>
          <FadeIn>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <a href={site.google} target="_blank" rel="noreferrer" className="btn btn-ghost">
                <span>Google reviews</span>
              </a>
              <Btn href="/contact">Request a quote</Btn>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="border-t border-rule px-5 py-12 md:px-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-ink/45">Where we work</p>
          <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
            {areas.map((place) => (
              <li key={place} className="font-display text-2xl text-ink md:text-3xl">{place}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-rule px-5 py-12 md:px-12 md:py-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 font-mono text-[13px] uppercase tracking-[0.16em] text-ink/70 md:flex-row md:justify-between">
          <a href={`mailto:${site.email}`} className="normal-case tracking-normal hover:text-ink">
            {site.email}
          </a>
          <a href={`tel:${site.phones[0].tel}`} className="hover:text-ink">
            {site.phones[0].display}
          </a>
          <Link href="/reviews" className="hover:text-ink">
            Reviews
          </Link>
        </div>
      </section>
    </>
  );
}
