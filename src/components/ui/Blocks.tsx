import { FadeIn } from "@/components/ui/FadeIn";

export function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-ink/45">{children}</p>
  );
}

export function PageIntro({
  kicker,
  title,
  lede,
}: {
  kicker: string;
  title: string;
  lede?: string;
}) {
  return (
    <header className="px-5 pb-6 pt-32 md:px-10 md:pb-10 md:pt-40">
      <FadeIn>
        <Kicker>{kicker}</Kicker>
        <h1 className="font-display mt-5 max-w-[14ch] text-[12vw] text-ink md:text-[6.4vw]">{title}</h1>
        {lede && (
          <p className="mt-8 max-w-2xl text-[15px] leading-relaxed text-ink/72 md:text-lg">{lede}</p>
        )}
      </FadeIn>
    </header>
  );
}

export function IndexList({ items }: { items: string[] }) {
  return (
    <ul className="border-t border-rule">
      {items.map((item, i) => (
        <li key={item} className="grid grid-cols-[3rem_1fr] items-baseline gap-4 border-b border-rule py-5 md:grid-cols-[4.5rem_1fr] md:py-6">
          <span className="font-mono text-[11px] tracking-[0.18em] text-ink/35">
            {String(i + 1).padStart(2, "0")}
          </span>
          <span className="text-[15px] leading-snug text-ink/88 md:text-lg">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function Process({ steps }: { steps: string[] }) {
  return (
    <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
      {steps.map((step, i) => (
        <li key={step} className="border-t border-ink/35 pt-5">
          <p className="font-mono text-[11px] tracking-[0.18em] text-ink/40">
            {String(i + 1).padStart(2, "0")}
          </p>
          <p className="font-display mt-4 text-[1.7rem] leading-none text-ink md:text-3xl">{step}</p>
        </li>
      ))}
    </ol>
  );
}
