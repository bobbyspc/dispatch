import { Reveal, Words } from "./Interactive";

export default function FinalCta() {
  return (
    <section aria-label="Request an invite" className="relative overflow-hidden bg-ink pt-16 md:pt-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-full [mask-image:linear-gradient(to_bottom,transparent,black_35%,black_80%,transparent)]">
        <div className="absolute inset-0 animate-aurora bg-[linear-gradient(90deg,transparent_10%,rgba(109,40,217,0.4)_28%,rgba(196,181,253,0.35)_42%,transparent_52%,rgba(139,92,246,0.5)_66%,rgba(221,211,255,0.3)_74%,transparent_88%)] blur-3xl"></div>
      </div>

      <div className="relative mx-auto flex max-w-[1200px] flex-col items-center px-5 text-center xl:px-0">
        <Words blur className="max-w-[760px] text-[40px] font-medium leading-[1.1] tracking-[-0.045em] text-paper md:text-[64px]">Step into Dispatch and hand off the busywork</Words>
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-[460px] text-[17px] leading-[1.5] text-haze">For owners, office managers and accountants whose days disappear into inboxes, follow-ups and small repetitive work.</p>
        </Reveal>
        <Reveal delay={0.3} className="mt-10 flex flex-col items-center gap-5">
          <a href="/request-invite" className="rounded-[14px] bg-[linear-gradient(110deg,#ddd3ff,#8b5cf6_45%,#3b1d7a)] p-[1.5px] shadow-[0_0_26px_rgba(139,92,246,0.55)] transition-shadow duration-300 hover:shadow-[0_0_46px_rgba(139,92,246,0.95)]">
            <span className="block rounded-[12.5px] bg-deep px-8 py-3.5 text-[17px] font-semibold text-paper">Request an invite</span>
          </a>
          <a href="https://dispatchstaff.com/login" className="border-b border-haze/50 pb-0.5 text-[15px] font-medium text-haze transition-colors hover:border-paper hover:text-paper">
            Already a tester? Sign in
          </a>
        </Reveal>
      </div>

      <div aria-hidden="true" className="relative mt-16 select-none overflow-hidden md:mt-20">
        <p className="animate-sheen whitespace-nowrap bg-[linear-gradient(90deg,#f2eff8,#c4b5fd,#8b5cf6,#ede9fe,#a78bfa,#f2eff8)] bg-[length:200%_100%] bg-clip-text text-center text-[24vw] font-semibold leading-[0.9] tracking-[-0.06em] text-transparent md:text-[19vw]">
          Dispatch
        </p>
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink to-transparent"></div>
      </div>
    </section>
  );
}
