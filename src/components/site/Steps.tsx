import Image from "next/image";
import { ChartBar, CheckCircle, FileText, UserCirclePlus } from "@phosphor-icons/react/dist/ssr";
import { Reveal, ScrollShift, StepsScroller } from "./Interactive";

export default function Steps() {
  return (
    <section id="how-it-works" aria-label="How it works" className="scroll-mt-24 bg-ink pb-24 md:pb-36">
      <div className="mx-auto max-w-[1200px] px-5 xl:px-0">
        <Reveal>
          <div className="flex items-center gap-3 text-[16px] uppercase text-accent-soft">
            <ChartBar size={30} weight="thin" className="text-paper" />
            How it works
          </div>
          <div className="mt-4 h-px bg-white/10"></div>
        </Reveal>
        <div className="mt-8 flex flex-col justify-between gap-5 md:mt-10 md:flex-row md:items-start">
          <Reveal>
            <h2 className="text-[40px] font-normal leading-[1.08] tracking-[-0.045em] text-paper md:text-section">Three steps to delegate</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-[310px] text-[17px] leading-[1.45] text-accent-soft">No code and no prompts. If you can explain the job to a new hire, you can set up an agent.</p>
          </Reveal>
        </div>

        <div className="mt-10 md:mt-14">
          <StepsScroller
            labels={
              <div className="grid grid-cols-3 text-[17px] font-semibold text-paper">
                <span>01.</span>
                <span>02.</span>
                <span>03.</span>
              </div>
            }
          >
            <div className="mt-10 flex flex-col gap-10">
              <article className="grid md:sticky md:top-[190px] overflow-hidden rounded-[28px] border border-white/10 bg-deep md:grid-cols-[1fr_1.1fr]">
                <div className="p-6 md:p-10">
                  <p className="text-[15px] font-medium text-lilac">Step 1</p>
                  <h3 className="mt-3 text-[30px] font-normal leading-[1.15] tracking-[-0.035em] text-paper md:text-[38px]">Hire by name</h3>
                  <p className="mt-5 max-w-[400px] text-[17px] leading-[1.5] text-haze">Give the agent a name and a role, then describe the job in plain English. It starts today.</p>
                  <div className="mt-8 flex flex-col gap-3">
                    <p className="flex items-center gap-3 rounded-[14px] border border-white/10 px-4 py-3 text-[16px] text-paper"><CheckCircle size={22} weight="duotone" className="shrink-0 text-lilac" />A name and a role, like a real hire</p>
                    <p className="flex items-center gap-3 rounded-[14px] border border-white/10 px-4 py-3 text-[16px] text-paper"><CheckCircle size={22} weight="duotone" className="shrink-0 text-lilac" />Agents can report to other agents</p>
                    <p className="flex items-center gap-3 rounded-[14px] border border-white/10 px-4 py-3 text-[16px] text-paper"><CheckCircle size={22} weight="duotone" className="shrink-0 text-lilac" />Dispatch routes every task to the right one</p>
                  </div>
                </div>
                <div className="relative flex min-h-[340px] flex-col justify-center gap-4 overflow-hidden bg-[radial-gradient(ellipse_at_90%_50%,rgba(196,181,253,0.45),rgba(139,92,246,0.25)_35%,transparent_70%)] p-6 md:p-10">
                  <div className="ml-auto flex w-max items-center gap-3 rounded-[16px] border border-white/20 bg-white/10 px-5 py-3.5 text-[17px] font-medium text-paper backdrop-blur-sm">
                    <UserCirclePlus size={24} />
                    Customer Support Rep
                  </div>
                  <div className="flex items-center justify-end gap-2">
                    <span className="flex items-center gap-2 rounded-[14px] border border-white/20 bg-ink/70 px-4 py-3 text-[16px] font-medium text-paper">
                      Hire
                      <span className="h-2.5 w-2.5 rounded-full bg-paper shadow-[0_0_12px_rgba(242,239,248,0.9)]"></span>
                    </span>
                    <span className="w-6 border-t border-dashed border-white/40"></span>
                    <span className="flex items-center gap-3 rounded-[16px] border border-white/20 bg-white/10 px-5 py-3.5 text-[17px] font-medium text-paper backdrop-blur-sm">
                      <UserCirclePlus size={24} />
                      Sales Outreach SDR
                    </span>
                  </div>
                  <div className="ml-auto mr-10 flex w-max items-center gap-3 rounded-[16px] border border-dashed border-white/25 px-5 py-3.5 text-[17px] font-medium text-haze">
                    <UserCirclePlus size={24} />
                    Your next hire
                  </div>
                </div>
              </article>

              <article className="grid md:sticky md:top-[210px] overflow-hidden rounded-[28px] border border-white/10 bg-deep md:grid-cols-[1fr_1.1fr]">
                <div className="p-6 md:p-10">
                  <p className="text-[15px] font-medium text-lilac">Step 2</p>
                  <h3 className="mt-3 text-[30px] font-normal leading-[1.15] tracking-[-0.035em] text-paper md:text-[38px]">Hand them the playbook</h3>
                  <p className="mt-5 max-w-[400px] text-[17px] leading-[1.5] text-haze">Agents follow your manuals, use your apps (email, calendar, browser, your CRM) and keep a memory of the work.</p>
                  <div className="mt-8 flex flex-col gap-3">
                    <p className="flex items-center gap-3 rounded-[14px] border border-white/10 px-4 py-3 text-[16px] text-paper"><CheckCircle size={22} weight="duotone" className="shrink-0 text-lilac" />Roles, manuals and permissions in plain English</p>
                    <p className="flex items-center gap-3 rounded-[14px] border border-white/10 px-4 py-3 text-[16px] text-paper"><CheckCircle size={22} weight="duotone" className="shrink-0 text-lilac" />Chat only, ask first, or fully autonomous</p>
                  </div>
                </div>
                <div className="relative flex min-h-[340px] items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_60%_60%,rgba(139,92,246,0.4),transparent_70%)] p-6 md:p-10">
                  <div className="w-full max-w-[360px] -rotate-2 rounded-[18px] border border-white/15 bg-card p-6 shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
                    <div className="flex items-center gap-3 text-[16px] font-medium text-paper">
                      <FileText size={22} className="text-lilac" />
                      Refund policy manual
                    </div>
                    <div className="mt-5 flex flex-col gap-2.5">
                      <span className="h-2 w-full rounded-full bg-white/15"></span>
                      <span className="h-2 w-11/12 rounded-full bg-white/15"></span>
                      <span className="h-2 w-4/5 rounded-full bg-white/15"></span>
                      <span className="h-2 w-full rounded-full bg-white/15"></span>
                      <span className="h-2 w-2/3 rounded-full bg-white/15"></span>
                    </div>
                    <p className="mt-6 text-[13px] text-haze">Placeholder: your own manual goes here</p>
                  </div>
                </div>
              </article>

              <article className="grid md:sticky md:top-[230px] overflow-hidden rounded-[28px] border border-white/10 bg-deep md:grid-cols-[1fr_1.1fr]">
                <div className="p-6 md:p-10">
                  <p className="text-[15px] font-medium text-lilac">Step 3</p>
                  <h3 className="mt-3 text-[30px] font-normal leading-[1.15] tracking-[-0.035em] text-paper md:text-[38px]">Delegate and walk away</h3>
                  <p className="mt-5 max-w-[400px] text-[17px] leading-[1.5] text-haze">Agents schedule their own follow-ups, finish jobs while you are away and email you the results.</p>
                  <div className="mt-8 flex flex-col gap-3">
                    <p className="flex items-center gap-3 rounded-[14px] border border-white/10 px-4 py-3 text-[16px] text-paper"><CheckCircle size={22} weight="duotone" className="shrink-0 text-lilac" />Agents keep working after you close the tab</p>
                    <p className="flex items-center gap-3 rounded-[14px] border border-white/10 px-4 py-3 text-[16px] text-paper"><CheckCircle size={22} weight="duotone" className="shrink-0 text-lilac" />Every step shows in the activity feed</p>
                  </div>
                </div>
                <div className="relative min-h-[340px] overflow-hidden">
                  <Image
                    src="/images/laptop-night.jpg"
                    alt="A closed laptop on a quiet desk in the evening, a coat on the chair behind it"
                    width={1600}
                    height={1200}
                    className="absolute inset-0 h-full w-full object-cover opacity-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-deep via-deep/10 to-transparent"></div>
                  <ScrollShift distance={480} className="pointer-events-none absolute bottom-10 left-0 h-px w-1/2 bg-gradient-to-r from-transparent via-lilac to-transparent" />
                </div>
              </article>
            </div>
          </StepsScroller>
        </div>
      </div>
    </section>
  );
}
