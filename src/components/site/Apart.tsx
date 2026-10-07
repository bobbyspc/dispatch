import Image from "next/image";
import {
  AddressBook,
  BookOpen,
  CalendarBlank,
  ChartScatter,
  EnvelopeSimple,
  Globe,
  Brain,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./Interactive";

export default function Apart() {
  return (
    <section id="why" aria-label="What sets Dispatch apart" className="bg-ink pb-24 md:pb-36">
      <div className="mx-auto max-w-[1200px] px-5 xl:px-0">
        <Reveal>
          <div className="flex items-center gap-3 text-[16px] uppercase text-accent-soft">
            <ChartScatter size={30} weight="thin" className="text-paper" />
            Why Dispatch
          </div>
          <div className="mt-4 h-px bg-white/10"></div>
        </Reveal>
        <div className="mt-8 flex flex-col justify-between gap-5 md:mt-10 md:flex-row md:items-start">
          <Reveal>
            <h2 className="text-[40px] font-normal leading-[1.08] tracking-[-0.045em] text-paper md:text-section">What sets Dispatch apart</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-[310px] text-[17px] leading-[1.45] text-accent-soft">Built for people who run small businesses and teams, not for engineers.</p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:mt-20 md:grid-cols-2 md:gap-8">
          <Reveal className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-deep transition duration-500 hover:brightness-125">
            <div className="relative aspect-[4/3] md:aspect-auto md:h-[540px]">
              <Image
                src="/images/desk-dusk.jpg"
                alt="A small office desk at dusk with a laptop, a notebook and a stack of paperwork"
                width={1600}
                height={1200}
                loading="eager"
                className="h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/30 to-transparent"></div>
            </div>
            <div className="absolute inset-x-4 bottom-4 rounded-[16px] border border-white/15 bg-deep/80 p-5 backdrop-blur-sm md:p-6">
              <h3 className="text-[24px] font-normal tracking-[-0.03em] text-paper md:text-[28px]">No code and no prompts</h3>
              <p className="mt-2 text-[16px] leading-[1.5] text-haze md:text-[17px]">Roles, manuals and permissions in plain English.</p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-deep transition duration-500 hover:brightness-125">
            <div className="relative h-[420px] bg-[radial-gradient(ellipse_at_50%_35%,rgba(139,92,246,0.38),transparent_65%)] md:h-[540px]">
              <div className="absolute left-1/2 top-12 -translate-x-1/2 rounded-full border border-lilac/50 bg-ink/80 px-6 py-3 text-[17px] font-medium text-paper shadow-[0_0_40px_rgba(139,92,246,0.5)] md:top-16">
                You
              </div>
              <div aria-hidden="true" className="absolute left-1/2 top-[92px] h-12 w-px bg-lilac/50 md:top-[108px]"></div>
              <div aria-hidden="true" className="absolute left-[24%] right-[24%] top-[140px] h-px bg-lilac/50 md:top-[156px]"></div>
              <div aria-hidden="true" className="absolute left-[24%] top-[140px] h-8 w-px bg-lilac/50 md:top-[156px]"></div>
              <div aria-hidden="true" className="absolute right-[24%] top-[140px] h-8 w-px bg-lilac/50 md:top-[156px]"></div>
              <div className="absolute left-[24%] top-[172px] flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/15 bg-card px-3 py-2 md:top-[188px] md:gap-3 md:px-4">
                <img src="/images/avatars/gen__agent-aria.jpg" alt="" width={32} height={32} loading="lazy" className="h-8 w-8 rounded-full object-cover" />
                <span className="text-[15px] font-medium text-paper">Aria</span>
              </div>
              <div className="absolute right-[24%] top-[172px] flex translate-x-1/2 items-center gap-2 rounded-full border border-white/15 bg-card px-3 py-2 md:top-[188px] md:gap-3 md:px-4">
                <img src="/images/avatars/gen__agent-sam.jpg" alt="" width={32} height={32} loading="lazy" className="h-8 w-8 rounded-full object-cover" />
                <span className="text-[15px] font-medium text-paper">Sam</span>
              </div>
              <div aria-hidden="true" className="absolute left-[24%] top-[222px] h-px w-[52%] animate-pulse-soft bg-gradient-to-r from-transparent via-lilac to-transparent md:top-[240px]"></div>
            </div>
            <div className="absolute inset-x-4 bottom-4 rounded-[16px] border border-white/15 bg-deep/80 p-5 backdrop-blur-sm md:p-6">
              <h3 className="text-[24px] font-normal tracking-[-0.03em] text-paper md:text-[28px]">Agents report to agents</h3>
              <p className="mt-2 text-[16px] leading-[1.5] text-haze md:text-[17px]">Build a team the way you would on paper. Dispatch routes every task to the right one.</p>
            </div>
          </Reveal>
        </div>

        <div className="mt-6 grid gap-6 md:mt-8 md:grid-cols-3 md:gap-8">
          <Reveal className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-deep transition duration-500 hover:brightness-125">
            <div className="flex h-[300px] items-start justify-center gap-6 bg-[radial-gradient(ellipse_at_20%_40%,rgba(139,92,246,0.4),transparent_60%),radial-gradient(ellipse_at_90%_20%,rgba(196,181,253,0.18),transparent_55%)] pt-10 md:h-[460px] md:gap-8 md:pt-12">
              <div className="flex flex-col items-center gap-3">
                <div className="relative h-[150px] w-9 rounded-full border border-white/20 bg-white/5 md:h-[200px]">
                  <div className="absolute inset-x-[15px] bottom-3 top-[70%] rounded-full bg-paper"></div>
                  <div className="absolute left-1/2 top-[66%] h-6 w-6 -translate-x-1/2 animate-pulse-soft rounded-full bg-lilac shadow-[0_0_20px_rgba(196,181,253,0.9)]"></div>
                </div>
                <span className="text-[13px] text-haze">Chat only</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="relative h-[150px] w-9 rounded-full border border-white/20 bg-white/5 md:h-[200px]">
                  <div className="absolute inset-x-[15px] bottom-3 top-[40%] rounded-full bg-paper"></div>
                  <div className="absolute left-1/2 top-[36%] h-6 w-6 -translate-x-1/2 animate-pulse-soft rounded-full bg-lilac shadow-[0_0_20px_rgba(196,181,253,0.9)]"></div>
                </div>
                <span className="text-[13px] text-haze">Ask first</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="relative h-[150px] w-9 rounded-full border border-white/20 bg-white/5 md:h-[200px]">
                  <div className="absolute inset-x-[15px] bottom-3 top-3 rounded-full bg-paper"></div>
                  <div className="absolute left-1/2 top-1 h-6 w-6 -translate-x-1/2 animate-pulse-soft rounded-full bg-violet shadow-[0_0_20px_rgba(139,92,246,0.9)]"></div>
                </div>
                <span className="text-[13px] text-haze">Autonomous</span>
              </div>
            </div>
            <div className="absolute inset-x-4 bottom-4 rounded-[16px] border border-white/15 bg-deep/80 p-5 backdrop-blur-sm">
              <h3 className="text-[24px] font-normal tracking-[-0.03em] text-paper">You set the limits</h3>
              <p className="mt-2 text-[16px] leading-[1.5] text-haze">Chat only, ask first, or fully autonomous, with one-click approvals.</p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-deep transition duration-500 hover:brightness-125">
            <div className="relative h-[300px] overflow-hidden bg-[radial-gradient(ellipse_at_50%_60%,rgba(139,92,246,0.45),transparent_65%)] pt-10 md:h-[460px] md:pt-12">
              <div className="flex w-max animate-marquee gap-4">
                <span className="grid h-[68px] w-[68px] place-items-center rounded-[18px] border border-white/20 bg-white/5 text-paper"><EnvelopeSimple size={30} /></span>
                <span className="grid h-[68px] w-[68px] place-items-center rounded-[18px] border border-white/20 bg-white/5 text-paper"><CalendarBlank size={30} /></span>
                <span className="grid h-[68px] w-[68px] place-items-center rounded-[18px] border border-white/20 bg-white/5 text-paper"><Globe size={30} /></span>
                <span className="grid h-[68px] w-[68px] place-items-center rounded-[18px] border border-white/20 bg-white/5 text-paper"><AddressBook size={30} /></span>
                <span className="grid h-[68px] w-[68px] place-items-center rounded-[18px] border border-white/20 bg-white/5 text-paper"><BookOpen size={30} /></span>
                <span className="grid h-[68px] w-[68px] place-items-center rounded-[18px] border border-white/20 bg-white/5 text-paper"><Brain size={30} /></span>
                <span aria-hidden="true" className="grid h-[68px] w-[68px] place-items-center rounded-[18px] border border-white/20 bg-white/5 text-paper"><EnvelopeSimple size={30} /></span>
                <span aria-hidden="true" className="grid h-[68px] w-[68px] place-items-center rounded-[18px] border border-white/20 bg-white/5 text-paper"><CalendarBlank size={30} /></span>
                <span aria-hidden="true" className="grid h-[68px] w-[68px] place-items-center rounded-[18px] border border-white/20 bg-white/5 text-paper"><Globe size={30} /></span>
                <span aria-hidden="true" className="grid h-[68px] w-[68px] place-items-center rounded-[18px] border border-white/20 bg-white/5 text-paper"><AddressBook size={30} /></span>
                <span aria-hidden="true" className="grid h-[68px] w-[68px] place-items-center rounded-[18px] border border-white/20 bg-white/5 text-paper"><BookOpen size={30} /></span>
                <span aria-hidden="true" className="grid h-[68px] w-[68px] place-items-center rounded-[18px] border border-white/20 bg-white/5 text-paper"><Brain size={30} /></span>
              </div>
              <div className="mt-6 flex w-max animate-marquee gap-4 [animation-direction:reverse]">
                <span className="grid h-[68px] w-[68px] place-items-center rounded-[18px] border border-white/25 bg-white/10 text-paper"><Brain size={30} weight="fill" /></span>
                <span className="grid h-[68px] w-[68px] place-items-center rounded-[18px] border border-white/25 bg-white/10 text-paper"><AddressBook size={30} weight="fill" /></span>
                <span className="grid h-[68px] w-[68px] place-items-center rounded-[18px] border border-white/25 bg-white/10 text-paper"><Globe size={30} weight="fill" /></span>
                <span className="grid h-[68px] w-[68px] place-items-center rounded-[18px] border border-white/25 bg-white/10 text-paper"><EnvelopeSimple size={30} weight="fill" /></span>
                <span className="grid h-[68px] w-[68px] place-items-center rounded-[18px] border border-white/25 bg-white/10 text-paper"><CalendarBlank size={30} weight="fill" /></span>
                <span className="grid h-[68px] w-[68px] place-items-center rounded-[18px] border border-white/25 bg-white/10 text-paper"><BookOpen size={30} weight="fill" /></span>
                <span aria-hidden="true" className="grid h-[68px] w-[68px] place-items-center rounded-[18px] border border-white/25 bg-white/10 text-paper"><Brain size={30} weight="fill" /></span>
                <span aria-hidden="true" className="grid h-[68px] w-[68px] place-items-center rounded-[18px] border border-white/25 bg-white/10 text-paper"><AddressBook size={30} weight="fill" /></span>
                <span aria-hidden="true" className="grid h-[68px] w-[68px] place-items-center rounded-[18px] border border-white/25 bg-white/10 text-paper"><Globe size={30} weight="fill" /></span>
                <span aria-hidden="true" className="grid h-[68px] w-[68px] place-items-center rounded-[18px] border border-white/25 bg-white/10 text-paper"><EnvelopeSimple size={30} weight="fill" /></span>
                <span aria-hidden="true" className="grid h-[68px] w-[68px] place-items-center rounded-[18px] border border-white/25 bg-white/10 text-paper"><CalendarBlank size={30} weight="fill" /></span>
                <span aria-hidden="true" className="grid h-[68px] w-[68px] place-items-center rounded-[18px] border border-white/25 bg-white/10 text-paper"><BookOpen size={30} weight="fill" /></span>
              </div>
            </div>
            <div className="absolute inset-x-4 bottom-4 rounded-[16px] border border-white/15 bg-deep/80 p-5 backdrop-blur-sm">
              <h3 className="text-[24px] font-normal tracking-[-0.03em] text-paper">Your apps, their memory</h3>
              <p className="mt-2 text-[16px] leading-[1.5] text-haze">Email, calendar, browser and your CRM, with a memory of the work.</p>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="flex flex-col justify-between rounded-[28px] border border-white/10 bg-deep p-6 md:p-7">
            <div>
              <h3 className="text-[34px] font-normal leading-[1.15] tracking-[-0.04em] text-paper md:text-[38px]">Ready to hand off the busywork?</h3>
              <p className="mt-4 max-w-[260px] text-[17px] leading-[1.45] text-haze">Dispatch is in private beta. Ask for an invite and we will be in touch.</p>
            </div>
            <div className="mt-10 flex flex-col gap-3">
              <a href="/request-invite" className="rounded-[14px] bg-[linear-gradient(110deg,#ddd3ff,#8b5cf6_45%,#3b1d7a)] p-[1.5px] shadow-[0_0_22px_rgba(139,92,246,0.45)] transition-shadow duration-300 hover:shadow-[0_0_38px_rgba(139,92,246,0.85)]">
                <span className="block rounded-[12.5px] bg-deep py-3 text-center text-[16px] font-semibold text-paper">Request an invite</span>
              </a>
              <a href="https://dispatchstaff.com/login" className="rounded-[14px] border border-white/15 bg-white/[0.03] py-3 text-center text-[16px] font-semibold text-accent-soft transition hover:border-white/40 hover:text-paper">
                Already a tester? Sign in
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
