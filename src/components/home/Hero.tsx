import { Mark } from "@/components/ui/Mark";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#090908]">
      <img
        src="/brand/lockup.jpg"
        alt=""
        className="ken pointer-events-none absolute inset-0 h-full w-full scale-110 object-cover opacity-50 blur-2xl"
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(9,9,8,0.2),rgba(9,9,8,0.82)_72%)]" />

      <div className="relative z-10 flex flex-col items-center px-6 pb-16 pt-28 text-center">
        <Mark className="h-24 w-[4.6rem] md:h-32 md:w-24" />
        <h1 className="inline-block pl-[0.28em] font-display mt-8 text-[15vw] uppercase leading-none tracking-[0.28em] text-[#f3efe6] min-[420px]:text-[13vw] md:mt-10 md:pl-[0.34em] md:text-[7.4rem] md:tracking-[0.34em]">
          Stone
        </h1>
        <p className="mt-3 inline-block pl-[0.42em] font-display text-[3.4vw] uppercase tracking-[0.42em] text-[#f3efe6]/80 min-[420px]:text-[2.6vw] md:pl-[0.55em] md:text-[1.35rem] md:tracking-[0.55em]">
          Bathrooms
        </p>
        <span className="mt-5 h-px w-12 bg-[#f3efe6]/70" />
        <p className="mt-6 inline-block max-w-[16rem] pl-[0.22em] font-mono text-[8px] uppercase leading-relaxed tracking-[0.22em] text-[#f3efe6]/60 min-[400px]:max-w-none min-[400px]:pl-[0.32em] min-[400px]:text-[10px] min-[400px]:tracking-[0.32em] md:pl-[0.42em] md:text-[11px] md:tracking-[0.42em]">
          Bathroom installation specialists
        </p>
      </div>

      <div className="absolute bottom-8 left-0 right-0 z-10 hidden flex-col items-center gap-3 md:flex">
        <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#f3efe6]/40">Scroll</span>
        <span className="h-12 w-px origin-top animate-pulse bg-[#f3efe6]/35" />
      </div>
    </section>
  );
}
