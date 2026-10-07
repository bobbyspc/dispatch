import {
  BookOpenText,
  Brain,
  CalendarBlank,
  ClockCountdown,
  Envelope,
  Globe,
  AddressBook,
  PaperPlaneTilt,
  SquaresFour,
  Moon,
  FileText,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./Interactive-dispatch";

export default function Capabilities() {
  return (
    <section className="bg-bg py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-5 md:px-6">
        <Reveal>
          <div className="flex items-center gap-3 border-b border-line pb-5 text-[15px] uppercase tracking-[0.04em] text-soft md:text-[16px]">
            <SquaresFour size={28} className="text-ink-dispatch" />
            What agents do
          </div>
          <div className="mt-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="max-w-[720px] text-[38px] font-normal leading-[1.08] tracking-[-0.04em] text-ink-dispatch md:text-[60px]">
              They work the way your team already works
            </h2>
            <p className="max-w-[310px] text-[16px] leading-[1.5] text-soft md:pb-3">
              Your manuals, your apps and a memory of the work.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-10 md:mt-20 lg:grid-cols-[250px_1fr] lg:gap-16">
          <div className="hidden lg:block">
            <div className="sticky top-32">
              <a href="#cap-manuals" className="group relative flex items-center gap-4 border-b border-white/30 py-4 text-[17px] font-medium text-ink-dispatch outline-none">
                <BookOpenText size={28} className="transition-all duration-300 ease-out group-hover:-rotate-6 group-hover:scale-110 group-hover:text-accent group-focus-visible:text-accent" />
                <span className="transition-transform duration-300 ease-out group-hover:translate-x-1.5 group-focus-visible:translate-x-1.5">Manuals</span>
                <span aria-hidden="true" className="absolute -bottom-px left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100" />
              </a>
              <a href="#cap-apps" className="group relative flex items-center gap-4 border-b border-white/30 py-4 text-[17px] font-medium text-ink-dispatch outline-none">
                <SquaresFour size={28} className="transition-all duration-300 ease-out group-hover:-rotate-6 group-hover:scale-110 group-hover:text-accent group-focus-visible:text-accent" />
                <span className="transition-transform duration-300 ease-out group-hover:translate-x-1.5 group-focus-visible:translate-x-1.5">Apps</span>
                <span aria-hidden="true" className="absolute -bottom-px left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100" />
              </a>
              <a href="#cap-time" className="group relative flex items-center gap-4 border-b border-white/30 py-4 text-[17px] font-medium text-ink-dispatch outline-none">
                <ClockCountdown size={28} className="transition-all duration-300 ease-out group-hover:-rotate-6 group-hover:scale-110 group-hover:text-accent group-focus-visible:text-accent" />
                <span className="transition-transform duration-300 ease-out group-hover:translate-x-1.5 group-focus-visible:translate-x-1.5">Follow-ups</span>
                <span aria-hidden="true" className="absolute -bottom-px left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-500 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100" />
              </a>
            </div>
          </div>

          <div className="space-y-8">
            <Reveal>
              <article id="cap-manuals" className="relative grid scroll-mt-32 overflow-hidden rounded-3xl border border-line bg-[linear-gradient(160deg,#1d1829,#110e18)] p-7 md:grid-cols-2 md:p-8">
                <div>
                  <h3 className="text-[26px] font-medium tracking-[-0.03em] text-ink-dispatch md:text-[30px]">Your manuals, followed</h3>
                  <p className="mt-4 max-w-[380px] text-[16px] leading-[1.55] text-muted md:text-[17px]">
                    Hand an agent the way you do things, written in plain English. They follow it, and they keep a memory of the work.
                  </p>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <span className="inline-flex items-center gap-2 rounded-xl border border-line bg-white/[0.03] px-3.5 py-2.5 text-[15px] text-ink-dispatch">
                      <FileText size={18} />
                      Manuals
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-xl border border-line bg-white/[0.03] px-3.5 py-2.5 text-[15px] text-ink-dispatch">
                      <Brain size={18} />
                      Memory
                    </span>
                  </div>
                </div>
                <div className="relative mt-10 flex min-h-[240px] items-center justify-center md:mt-0">
                  <div className="absolute h-[220px] w-[220px] rounded-full bg-accent/25 blur-3xl" />
                  <div className="relative w-[230px] rotate-[-4deg] rounded-2xl border border-white/15 bg-white/[0.06] p-5 backdrop-blur-xl">
                    <p className="text-[13px] font-medium text-ink-dispatch">Refund-policy manual</p>
                    <div className="mt-4 space-y-2.5">
                      <div className="h-2 w-full rounded-full bg-white/15" />
                      <div className="h-2 w-5/6 rounded-full bg-white/15" />
                      <div className="h-2 w-4/6 rounded-full bg-accent/60" />
                      <div className="h-2 w-full rounded-full bg-white/15" />
                      <div className="h-2 w-3/6 rounded-full bg-white/15" />
                    </div>
                  </div>
                  <div className="absolute bottom-6 right-4 rotate-[5deg] rounded-xl border border-white/15 bg-bg-deep/80 px-4 py-2.5 text-[13px] text-ink-dispatch backdrop-blur md:right-2">
                    In plain English
                  </div>
                </div>
              </article>
            </Reveal>

            <Reveal>
              <article id="cap-apps" className="relative grid scroll-mt-32 overflow-hidden rounded-3xl border border-line bg-[linear-gradient(160deg,#1d1829,#110e18)] p-7 md:grid-cols-2 md:p-8">
                <div>
                  <h3 className="text-[26px] font-medium tracking-[-0.03em] text-ink-dispatch md:text-[30px]">Your apps, used</h3>
                  <p className="mt-4 max-w-[380px] text-[16px] leading-[1.55] text-muted md:text-[17px]">
                    Agents work inside the tools you already use, so nothing has to move.
                  </p>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <span className="inline-flex items-center gap-2 rounded-xl border border-line bg-white/[0.03] px-3.5 py-2.5 text-[15px] text-ink-dispatch">
                      <Envelope size={18} />
                      Email
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-xl border border-line bg-white/[0.03] px-3.5 py-2.5 text-[15px] text-ink-dispatch">
                      <CalendarBlank size={18} />
                      Calendar
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-xl border border-line bg-white/[0.03] px-3.5 py-2.5 text-[15px] text-ink-dispatch">
                      <Globe size={18} />
                      Browser
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-xl border border-line bg-white/[0.03] px-3.5 py-2.5 text-[15px] text-ink-dispatch">
                      <AddressBook size={18} />
                      Your CRM
                    </span>
                  </div>
                </div>
                <div className="relative mt-10 flex min-h-[280px] flex-col items-center justify-start md:mt-0">
                  <div className="flex gap-6 text-ink-dispatch md:gap-8">
                    <Envelope size={30} weight="fill" />
                    <CalendarBlank size={30} weight="fill" />
                    <Globe size={30} weight="fill" />
                    <AddressBook size={30} weight="fill" />
                  </div>
                  <svg aria-hidden="true" viewBox="0 0 240 90" className="h-[90px] w-[240px]" fill="none">
                    <path d="M18 4 C18 50, 120 40, 120 88" stroke="#8B5CF6" strokeWidth="1.5" />
                    <path d="M86 4 C86 50, 120 40, 120 88" stroke="#8B5CF6" strokeWidth="1.5" />
                    <path d="M154 4 C154 50, 120 40, 120 88" stroke="#818CF8" strokeWidth="1.5" />
                    <path d="M222 4 C222 50, 120 40, 120 88" stroke="#818CF8" strokeWidth="1.5" />
                  </svg>
                  <div className="orb h-[140px] w-[140px] rounded-full" />
                </div>
              </article>
            </Reveal>

            <Reveal>
              <article id="cap-time" className="relative grid scroll-mt-32 overflow-hidden rounded-3xl border border-line bg-[linear-gradient(160deg,#1d1829,#110e18)] p-7 md:grid-cols-2 md:p-8">
                <div>
                  <h3 className="text-[26px] font-medium tracking-[-0.03em] text-ink-dispatch md:text-[30px]">Follow-ups, handled</h3>
                  <p className="mt-4 max-w-[380px] text-[16px] leading-[1.55] text-muted md:text-[17px]">
                    Agents schedule their own follow-ups, finish jobs while you are away and email you the results.
                  </p>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <span className="inline-flex items-center gap-2 rounded-xl border border-line bg-white/[0.03] px-3.5 py-2.5 text-[15px] text-ink-dispatch">
                      <ClockCountdown size={18} />
                      Own follow-ups
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-xl border border-line bg-white/[0.03] px-3.5 py-2.5 text-[15px] text-ink-dispatch">
                      <Moon size={18} />
                      While you are away
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-xl border border-line bg-white/[0.03] px-3.5 py-2.5 text-[15px] text-ink-dispatch">
                      <PaperPlaneTilt size={18} />
                      Results by email
                    </span>
                  </div>
                </div>
                <div className="relative mt-10 flex min-h-[240px] items-center justify-center md:mt-0">
                  <div className="absolute h-[220px] w-[220px] rounded-full bg-indigo-500/20 blur-3xl" />
                  <div className="relative w-full max-w-[300px] space-y-3">
                    <div className="flex items-center justify-between rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3 backdrop-blur-xl">
                      <span className="text-[14px] text-ink-dispatch">Follow-up scheduled</span>
                      <ClockCountdown size={18} className="text-soft" />
                    </div>
                    <div className="ml-6 flex items-center justify-between rounded-xl border border-white/15 bg-white/[0.06] px-4 py-3 backdrop-blur-xl">
                      <span className="text-[14px] text-ink-dispatch">Job finished</span>
                      <span className="h-2 w-2 animate-pulse-dot rounded-full bg-soft" />
                    </div>
                    <div className="flex items-center justify-between rounded-xl border border-accent/50 bg-accent/15 px-4 py-3 backdrop-blur-xl">
                      <span className="text-[14px] text-ink-dispatch">Results sent to your inbox</span>
                      <Envelope size={18} className="text-soft" />
                    </div>
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
