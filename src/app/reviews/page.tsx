import { Btn } from "@/components/ui/Btn";
import { PageIntro } from "@/components/ui/Blocks";
import { site } from "@/data/site";

export const metadata = { title: "Google reviews" };

export default function ReviewsPage() {
  return (
    <article className="pb-8 pt-36 md:pt-44">
      <PageIntro
        kicker="Google"
        title="Reviews"
        lede="See the Google reviews for the team, or leave one after your bathroom is finished."
      />
      <div className="mt-12 flex flex-wrap gap-3 px-5 md:px-10">
        <a href={site.google} target="_blank" rel="noreferrer" className="btn btn-cream">
          <span>Open Google reviews</span>
        </a>
        <Btn href="/contact" variant="ghost">
          Request a quote
        </Btn>
      </div>
      <div className="mt-14 space-y-3 px-5 font-mono text-[12px] uppercase tracking-[0.16em] text-ink/70 md:px-10">
        <a className="block normal-case tracking-normal hover:text-ink" href={`mailto:${site.email}`}>
          {site.email}
        </a>
        <a className="block hover:text-ink" href={`tel:${site.phones[0].tel}`}>
          {site.phones[0].display}
        </a>
      </div>
    </article>
  );
}
