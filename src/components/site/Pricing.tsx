import { Check, Tag } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./Interactive";

export default function Pricing() {
  return (
    <section id="pricing" aria-label="Pricing preview" className="relative scroll-mt-24 overflow-hidden bg-ink pb-24 md:pb-36">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-60 h-[700px] bg-[radial-gradient(ellipse_at_30%_60%,rgba(139,92,246,0.14),transparent_55%)]"></div>
      <div className="relative mx-auto max-w-[1200px] px-5 xl:px-0">
        <Reveal>
          <div className="flex items-center gap-3 text-[16px] uppercase text-accent-soft">
            <Tag size={30} weight="thin" className="text-paper" />
            Pricing preview
          </div>
          <div className="mt-4 h-px bg-white/10"></div>
        </Reveal>
        <div className="mt-8 flex flex-col justify-between gap-5 md:mt-10 md:flex-row md:items-start">
          <Reveal>
            <h2 className="text-[40px] font-normal leading-[1.08] tracking-[-0.045em] text-paper md:text-section">Pay for the size of your team</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-[330px] text-[17px] leading-[1.45] text-accent-soft">A preview, not live yet. Each plan includes a set amount of work per month, shared by the whole team.</p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 md:mt-20 lg:grid-cols-5">
          <Reveal>
            <article className="flex h-full flex-col rounded-[24px] border border-white/10 bg-[linear-gradient(170deg,rgba(255,255,255,0.05),rgba(12,10,18,0.95)_60%)] p-6 transition duration-500 hover:brightness-125">
              <h3 className="text-[18px] font-semibold text-paper">Free</h3>
              <p className="mt-5 text-[42px] font-medium tracking-[-0.04em] text-paper">$0</p>
              <div className="my-6 h-px bg-white/10"></div>
              <ul className="flex flex-1 flex-col gap-3.5">
                <li className="flex gap-2.5 text-[15px] leading-[1.4] text-paper"><Check size={18} className="mt-0.5 shrink-0 text-lilac" />Up to 3 agents</li>
                <li className="flex gap-2.5 text-[15px] leading-[1.4] text-paper"><Check size={18} className="mt-0.5 shrink-0 text-lilac" />Monthly work, shared by the team</li>
              </ul>
              <a href="/request-invite" className="mt-8 rounded-[12px] border border-white/15 py-3 text-center text-[15px] font-semibold text-paper transition hover:border-white/40 hover:bg-white/10">Request an invite</a>
            </article>
          </Reveal>
          <Reveal delay={0.05}>
            <article className="flex h-full flex-col rounded-[24px] border border-white/10 bg-[linear-gradient(170deg,rgba(255,255,255,0.05),rgba(12,10,18,0.95)_60%)] p-6 transition duration-500 hover:brightness-125">
              <h3 className="text-[18px] font-semibold text-paper">Starter</h3>
              <p className="mt-5 text-[42px] font-medium tracking-[-0.04em] text-paper">$5<span className="text-[16px] font-normal text-haze">/mo</span></p>
              <div className="my-6 h-px bg-white/10"></div>
              <ul className="flex flex-1 flex-col gap-3.5">
                <li className="flex gap-2.5 text-[15px] leading-[1.4] text-paper"><Check size={18} className="mt-0.5 shrink-0 text-lilac" />Up to 5 agents</li>
                <li className="flex gap-2.5 text-[15px] leading-[1.4] text-paper"><Check size={18} className="mt-0.5 shrink-0 text-lilac" />Monthly work, shared by the team</li>
              </ul>
              <a href="/request-invite" className="mt-8 rounded-[12px] border border-white/15 py-3 text-center text-[15px] font-semibold text-paper transition hover:border-white/40 hover:bg-white/10">Request an invite</a>
            </article>
          </Reveal>
          <Reveal delay={0.1}>
            <article className="flex h-full flex-col rounded-[24px] border border-lilac/40 bg-[linear-gradient(170deg,rgba(139,92,246,0.4),rgba(12,10,18,0.95)_65%)] p-6 shadow-[0_0_60px_rgba(139,92,246,0.25)] transition duration-500 hover:brightness-125">
              <h3 className="text-[18px] font-semibold text-paper">Pro</h3>
              <p className="mt-5 text-[42px] font-medium tracking-[-0.04em] text-paper">$20<span className="text-[16px] font-normal text-haze">/mo</span></p>
              <div className="my-6 h-px bg-white/15"></div>
              <ul className="flex flex-1 flex-col gap-3.5">
                <li className="flex gap-2.5 text-[15px] leading-[1.4] text-paper"><Check size={18} className="mt-0.5 shrink-0 text-lilac" />Up to 25 agents</li>
                <li className="flex gap-2.5 text-[15px] leading-[1.4] text-paper"><Check size={18} className="mt-0.5 shrink-0 text-lilac" />Adds web research</li>
                <li className="flex gap-2.5 text-[15px] leading-[1.4] text-paper"><Check size={18} className="mt-0.5 shrink-0 text-lilac" />Monthly work, shared by the team</li>
              </ul>
              <a href="/request-invite" className="mt-8 rounded-[12px] bg-[linear-gradient(110deg,#ddd3ff,#8b5cf6_45%,#3b1d7a)] p-[1.5px] shadow-[0_0_22px_rgba(139,92,246,0.45)] transition-shadow duration-300 hover:shadow-[0_0_38px_rgba(139,92,246,0.85)]">
                <span className="block rounded-[10.5px] bg-deep py-[11px] text-center text-[15px] font-semibold text-paper">Request an invite</span>
              </a>
            </article>
          </Reveal>
          <Reveal delay={0.15}>
            <article className="flex h-full flex-col rounded-[24px] border border-white/10 bg-[linear-gradient(170deg,rgba(255,255,255,0.05),rgba(12,10,18,0.95)_60%)] p-6 transition duration-500 hover:brightness-125">
              <h3 className="text-[18px] font-semibold text-paper">Business</h3>
              <p className="mt-5 text-[42px] font-medium tracking-[-0.04em] text-paper">$50<span className="text-[16px] font-normal text-haze">/mo</span></p>
              <div className="my-6 h-px bg-white/10"></div>
              <ul className="flex flex-1 flex-col gap-3.5">
                <li className="flex gap-2.5 text-[15px] leading-[1.4] text-paper"><Check size={18} className="mt-0.5 shrink-0 text-lilac" />Up to 50 agents</li>
                <li className="flex gap-2.5 text-[15px] leading-[1.4] text-paper"><Check size={18} className="mt-0.5 shrink-0 text-lilac" />Monthly work, shared by the team</li>
              </ul>
              <a href="/request-invite" className="mt-8 rounded-[12px] border border-white/15 py-3 text-center text-[15px] font-semibold text-paper transition hover:border-white/40 hover:bg-white/10">Request an invite</a>
            </article>
          </Reveal>
          <Reveal delay={0.2}>
            <article className="flex h-full flex-col rounded-[24px] border border-white/10 bg-[linear-gradient(170deg,rgba(255,255,255,0.05),rgba(12,10,18,0.95)_60%)] p-6 transition duration-500 hover:brightness-125">
              <h3 className="text-[18px] font-semibold text-paper">Enterprise</h3>
              <p className="mt-5 text-[42px] font-medium tracking-[-0.04em] text-paper">$100<span className="text-[16px] font-normal text-haze">/mo</span></p>
              <div className="my-6 h-px bg-white/10"></div>
              <ul className="flex flex-1 flex-col gap-3.5">
                <li className="flex gap-2.5 text-[15px] leading-[1.4] text-paper"><Check size={18} className="mt-0.5 shrink-0 text-lilac" />Up to 100 agents</li>
                <li className="flex gap-2.5 text-[15px] leading-[1.4] text-paper"><Check size={18} className="mt-0.5 shrink-0 text-lilac" />Monthly work, shared by the team</li>
              </ul>
              <a href="/request-invite" className="mt-8 rounded-[12px] border border-white/15 py-3 text-center text-[15px] font-semibold text-paper transition hover:border-white/40 hover:bg-white/10">Request an invite</a>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
