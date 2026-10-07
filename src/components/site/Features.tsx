import {
  BookOpen,
  CalendarBlank,
  CheckCircle,
  CloudCheck,
  EnvelopeSimple,
  Globe,
  ListChecks,
  AddressBook,
  SquaresFour,
  Stack,
} from "@phosphor-icons/react/dist/ssr";
import { FadeHalf, Reveal, ScrollFade, ScrollShift, SlideFromRight } from "./Interactive";
import Intro from "./Intro-dispatch";

export default function Features() {
  return (
    <section id="features" aria-label="Features" className="bg-ink pb-24 md:pb-36">
      <div className="mx-auto max-w-[1200px] px-5 xl:px-0">
        <Reveal>
          <div className="flex items-center gap-3 text-[16px] uppercase text-accent-soft">
            <SquaresFour size={30} weight="thin" className="text-paper" />
            Features
          </div>
          <div className="mt-4 h-px bg-white/10"></div>
        </Reveal>
        <div className="mt-8 flex flex-col justify-between gap-5 md:mt-10 md:flex-row md:items-start">
          <FadeHalf>
            <h2 className="text-[40px] font-normal leading-[1.08] tracking-[-0.045em] text-paper md:text-section">You stay in charge</h2>
          </FadeHalf>
          <FadeHalf delay={0.1}>
            <p className="max-w-[310px] text-[17px] leading-[1.45] text-accent-soft">See what every agent is doing, and decide how much it does on its own.</p>
          </FadeHalf>
        </div>

        <div className="mt-14 grid gap-8 md:mt-20 lg:grid-cols-[252px_1fr] lg:gap-16">
          <div className="hidden lg:block">
            <nav aria-label="Features" className="sticky top-32">
              <a href="#feature-approvals" className="group flex items-center gap-4 border-b border-white/15 py-4 text-[17px] font-medium text-paper transition-colors hover:text-lilac">
                <ListChecks size={30} weight="light" className="transition-transform group-hover:scale-[0.95]" />
                Approvals
              </a>
              <a href="#feature-feed" className="group flex items-center gap-4 border-b border-white/15 py-4 text-[17px] font-medium text-paper transition-colors hover:text-lilac">
                <Stack size={30} weight="light" className="transition-transform group-hover:scale-[0.95]" />
                Activity feed
              </a>
              <a href="#feature-manuals" className="group flex items-center gap-4 border-b border-white/15 py-4 text-[17px] font-medium text-paper transition-colors hover:text-lilac">
                <BookOpen size={30} weight="light" className="transition-transform group-hover:scale-[0.95]" />
                Manuals and apps
              </a>
            </nav>
          </div>

          <div className="flex flex-col gap-8">
            <Reveal>
              <article id="feature-approvals" className="grid scroll-mt-32 overflow-hidden rounded-[28px] border border-white/10 bg-deep md:grid-cols-2">
                <div className="p-6 md:p-8">
                  <h3 className="text-[28px] font-medium tracking-[-0.035em] text-paper md:text-[30px]">One-click approvals</h3>
                  <p className="mt-4 text-[17px] leading-[1.5] text-haze">Every action can be approved. Set an agent to ask first, and nothing important goes out until you say so.</p>
                  <a href="/request-invite" className="mt-10 inline-block rounded-[12px] border border-white/15 bg-white/[0.04] px-6 py-3 text-[16px] font-semibold text-accent-soft transition hover:border-white/40 hover:bg-[#cccccc] hover:text-ink">
                    Request an invite
                  </a>
                </div>
                <div className="relative overflow-hidden bg-[radial-gradient(ellipse_at_70%_50%,rgba(139,92,246,0.35),transparent_65%)] md:p-8 pt-6 pr-6 pb-6 pl-9">
                  <ScrollShift distance={200} className="pointer-events-none absolute left-0 top-10 h-px w-2/3 bg-gradient-to-r from-transparent via-lilac to-transparent" />
                  <SlideFromRight>
                    <div className="rounded-[16px] border border-white/15 bg-card/90 p-4">
                      <p className="text-[13px] uppercase tracking-[0.06em] text-haze">Waiting for you</p>
                      <p className="mt-2 text-[16px] font-medium text-paper">Aria wants to send a refund reply</p>
                      <div className="mt-4 flex gap-2">
                        <span className="rounded-[10px] bg-violet px-4 py-2 text-[14px] font-semibold text-paper">Approve</span>
                        <span className="rounded-[10px] border border-white/15 px-4 py-2 text-[14px] font-semibold text-haze">Edit first</span>
                      </div>
                    </div>
                  </SlideFromRight>
                  <SlideFromRight delay={0.12}>
                    <div className="mt-4 ml-6 rounded-[16px] border border-white/10 bg-card/70 p-4">
                      <p className="text-[13px] uppercase tracking-[0.06em] text-haze">Waiting for you</p>
                      <p className="mt-2 text-[16px] font-medium text-paper">Sam wants to send three follow-ups</p>
                    </div>
                  </SlideFromRight>
                  <SlideFromRight delay={0.24}>
                    <div className="mt-4 ml-12 flex items-center gap-2 rounded-[16px] border border-white/10 bg-card/50 p-4 text-[15px] text-haze">
                      <CheckCircle size={20} weight="fill" className="text-lilac" />
                      Approved, sent
                    </div>
                  </SlideFromRight>
                  <p className="mt-4 text-[12px] text-haze/70">Illustration of the approval flow</p>
                </div>
              </article>
            </Reveal>

            <Reveal>
              <article id="feature-feed" className="grid scroll-mt-32 overflow-hidden rounded-[28px] border border-white/10 bg-deep md:grid-cols-2">
                <div className="p-6 md:p-8">
                  <h3 className="text-[28px] font-medium tracking-[-0.035em] text-paper md:text-[30px]">Nothing happens out of sight</h3>
                  <p className="mt-4 text-[17px] leading-[1.5] text-haze">Every step shows in the activity feed. Agents keep working after you close the tab, then email you the results.</p>
                  <div className="mt-8 flex items-center gap-3 text-[15px] text-paper">
                    <CloudCheck size={24} weight="light" className="text-lilac" />
                    Built on Cloudflare&apos;s global network
                  </div>
                </div>
                <div className="relative p-6 md:p-8">
                  <ScrollFade className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,rgba(139,92,246,0.4),transparent_60%)]" />
                  <div className="relative border-l border-white/15 pl-5">
                    <FadeHalf>
                      <p className="text-[13px] text-haze">Aria</p>
                      <p className="text-[16px] text-paper">Read the refund-policy manual</p>
                    </FadeHalf>
                    <FadeHalf delay={0.1} className="mt-5">
                      <p className="text-[13px] text-haze">Aria</p>
                      <p className="text-[16px] text-paper">Drafted a reply in your voice</p>
                    </FadeHalf>
                    <FadeHalf delay={0.2} className="mt-5">
                      <p className="text-[13px] text-haze">Sam</p>
                      <p className="text-[16px] text-paper">Scheduled his own follow-up</p>
                    </FadeHalf>
                    <FadeHalf delay={0.3} className="mt-5">
                      <p className="text-[13px] text-haze">Sam</p>
                      <p className="text-[16px] text-paper">Emailed you the results</p>
                    </FadeHalf>
                  </div>
                  <p className="relative mt-6 text-[12px] text-haze/70">Illustration of the activity feed</p>
                </div>
              </article>
            </Reveal>

            <Reveal>
              <article id="feature-manuals" className="grid scroll-mt-32 overflow-hidden rounded-[28px] border border-white/10 bg-deep md:grid-cols-2">
                <div className="p-6 md:p-8">
                  <h3 className="text-[28px] font-medium tracking-[-0.035em] text-paper md:text-[30px]">Your manuals, your apps</h3>
                  <p className="mt-4 text-[17px] leading-[1.5] text-haze">Agents follow your manuals and use the apps you already work in.</p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <span className="flex items-center gap-2 rounded-[12px] border border-white/15 px-3.5 py-2.5 text-[16px] font-medium text-paper"><EnvelopeSimple size={20} />Email</span>
                    <span className="flex items-center gap-2 rounded-[12px] border border-white/15 px-3.5 py-2.5 text-[16px] font-medium text-paper"><CalendarBlank size={20} />Calendar</span>
                    <span className="flex items-center gap-2 rounded-[12px] border border-white/15 px-3.5 py-2.5 text-[16px] font-medium text-paper"><Globe size={20} />Browser</span>
                    <span className="flex items-center gap-2 rounded-[12px] border border-white/15 px-3.5 py-2.5 text-[16px] font-medium text-paper"><AddressBook size={20} />Your CRM</span>
                  </div>
                </div>
                <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden">
                  <div aria-hidden="true" className="absolute top-8 flex gap-6 text-paper">
                    <EnvelopeSimple size={26} weight="bold" />
                    <CalendarBlank size={26} weight="bold" />
                    <Globe size={26} weight="bold" />
                    <AddressBook size={26} weight="bold" />
                  </div>
                  <div aria-hidden="true" className="absolute top-[70px] h-[70px] w-px animate-pulse-soft bg-gradient-to-b from-lilac/0 to-lilac"></div>
                  <div aria-hidden="true" className="relative mt-10 h-[150px] w-[150px] rounded-full shadow-[0_0_70px_rgba(139,92,246,0.55)]">
                    <div className="absolute inset-0 animate-spin-slow rounded-full bg-[conic-gradient(from_90deg,#4c1d95,#a78bfa,#f2eff8,#7c3aed,#2e1065,#4c1d95)]"></div>
                    <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_35%_30%,rgba(255,255,255,0.5),transparent_45%)]"></div>
                  </div>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
