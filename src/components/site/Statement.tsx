import { Reveal, ScrollWords } from "./Interactive";

export default function Statement() {
  return (
    <section aria-label="What Dispatch agents do" className="relative bg-ink py-24 md:py-36">
      <div className="mx-auto grid max-w-[1200px] items-center gap-14 px-5 md:grid-cols-[1fr_340px] xl:px-0">
        <Reveal>
          <ScrollWords className="text-[30px] font-normal leading-[1.18] tracking-[-0.035em] text-paper md:text-[48px]">
            Agents follow your manuals, use your apps and keep a memory of the work. They schedule their own follow-ups, finish jobs while you are away and email you the results.
          </ScrollWords>
        </Reveal>
        <Reveal delay={0.15} className="relative mx-auto aspect-square w-[240px] md:w-[340px]">
          <div aria-hidden="true" className="absolute inset-0 rounded-full shadow-[0_0_90px_rgba(139,92,246,0.45)]"></div>
          <div aria-hidden="true" className="absolute inset-0 animate-spin-slow rounded-full bg-[conic-gradient(from_0deg,#4c1d95,#8b5cf6,#ede9fe,#a78bfa,#2e1065,#7c3aed,#4c1d95)]"></div>
          <div aria-hidden="true" className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_35%_30%,rgba(255,255,255,0.55),transparent_45%),radial-gradient(circle_at_60%_80%,rgba(20,17,28,0.7),transparent_60%)]"></div>
          <div className="absolute inset-0 grid place-items-center">
            <span className="text-[30px] font-medium tracking-[-0.04em] text-paper/90 md:text-[40px]">Dispatch</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
