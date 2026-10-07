import { HeroIn, Starfield } from "./Interactive";
import DashboardMockup from "./DashboardMockup";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink pt-[132px] md:pt-[160px]">
      <Starfield className="absolute inset-0 h-full w-full" />

      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[760px] [mask-image:linear-gradient(to_bottom,transparent,black_30%,black_75%,transparent)] md:h-[820px]">
        <div className="absolute inset-0 animate-aurora bg-[linear-gradient(90deg,transparent_6%,rgba(91,33,182,0.35)_18%,rgba(139,92,246,0.7)_30%,rgba(221,211,255,0.45)_38%,transparent_47%,rgba(109,40,217,0.55)_60%,rgba(196,181,253,0.55)_68%,rgba(139,92,246,0.4)_76%,transparent_90%)] blur-2xl"></div>
        <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.05)_0px,transparent_2px,transparent_26px)] opacity-70"></div>
      </div>

      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-[640px] h-[1400px] w-[1700px] -translate-x-1/2 rounded-[50%] border-t border-lilac/70 bg-ink shadow-[0_-40px_140px_rgba(139,92,246,0.75),0_-10px_40px_rgba(221,211,255,0.45)] md:top-[600px] md:w-[2800px]"></div>

      <div className="relative z-10 mx-auto flex max-w-[1200px] flex-col items-center px-5 text-center xl:px-0">
        <HeroIn kind="zoom" delay={0.1}>
          <p className="rounded-full bg-white/10 px-4 py-1.5 text-[14px] font-medium text-paper backdrop-blur-sm md:text-[15px]">
            Private beta, invite-only
          </p>
        </HeroIn>
        <HeroIn kind="zoom" delay={0.2}>
          <h1 className="mt-6 max-w-[900px] text-[48px] font-medium leading-[1.06] tracking-[-0.045em] text-paper md:text-hero">
            Hire AI agents by name
          </h1>
        </HeroIn>
        <HeroIn kind="zoom" delay={0.3}>
          <p className="mt-6 max-w-[540px] text-[17px] font-medium leading-[1.5] text-paper/90 md:text-[18px]">
            Describe the job in plain English and the agent starts today. Dispatch routes every task to the right one, and your agents keep working after you close the tab.
          </p>
        </HeroIn>
        <HeroIn kind="rise" delay={0.45} className="mt-10 flex flex-col items-center gap-5">
          <a href="/request-invite" className="rounded-[14px] bg-[linear-gradient(110deg,#ddd3ff,#8b5cf6_45%,#3b1d7a)] p-[1.5px] shadow-[0_0_26px_rgba(139,92,246,0.55)] transition-shadow duration-300 hover:shadow-[0_0_46px_rgba(139,92,246,0.95)]">
            <span className="block rounded-[12.5px] bg-deep px-8 py-3.5 text-[17px] font-semibold text-paper">Request an invite</span>
          </a>
          <a href="https://dispatchstaff.com/login" className="border-b border-haze/50 pb-0.5 text-[15px] font-medium text-haze transition-colors hover:border-paper hover:text-paper">
            Already a tester? Sign in
          </a>
        </HeroIn>
      </div>

      <HeroIn kind="panel" delay={0.55} className="relative z-10 mx-auto mt-20 max-w-[1120px] px-4 pb-24 md:mt-28 md:pb-32">
        <div className="rounded-[22px] border border-white/15 bg-deep/80 p-1.5 shadow-[0_-20px_80px_rgba(139,92,246,0.25)] backdrop-blur-sm [mask-image:linear-gradient(to_bottom,black_55%,transparent)] md:p-2">
          <div className="relative overflow-hidden rounded-[16px]">
            <DashboardMockup
              role="img"
              aria-label="The Dispatch org chart for a logistics company: you at the top, with teams and named agents reporting up to you"
            />
          </div>
        </div>
      </HeroIn>
    </section>
  );
}
