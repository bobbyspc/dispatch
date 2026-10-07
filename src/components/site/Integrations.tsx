import {
  AddressBook,
  BookOpen,
  CalendarBlank,
  EnvelopeSimple,
  Globe,
  Plug,
  Stack,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./Interactive";

export default function Integrations() {
  return (
    <section aria-label="Apps your agents use" className="relative overflow-hidden bg-ink pb-24 md:pb-40">
      <div className="mx-auto grid max-w-[1200px] items-center gap-14 px-5 md:grid-cols-2 xl:px-0">
        <div>
          <Reveal>
            <div className="flex items-center gap-3 text-[16px] uppercase text-accent-soft">
              <Plug size={30} weight="thin" className="text-paper" />
              Apps
            </div>
            <div className="mt-4 h-px bg-white/10"></div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-8 text-[40px] font-normal leading-[1.08] tracking-[-0.045em] text-paper md:text-section">Agents work in the apps you already use</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-[400px] text-[17px] leading-[1.5] text-haze">Email, calendar, browser and your CRM. Agents follow your manuals and keep a memory of the work.</p>
          </Reveal>
          <Reveal delay={0.15}>
            <a href="/request-invite" className="mt-10 inline-block rounded-[14px] bg-[linear-gradient(110deg,#ddd3ff,#8b5cf6_45%,#3b1d7a)] p-[1.5px] shadow-[0_0_22px_rgba(139,92,246,0.45)] transition-shadow duration-300 hover:shadow-[0_0_38px_rgba(139,92,246,0.85)]">
              <span className="block rounded-[12.5px] bg-deep px-7 py-3 text-[16px] font-semibold text-paper">Request an invite</span>
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="relative mx-auto grid grid-cols-3 gap-5 md:gap-14">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 animate-pulse-soft bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.3),transparent_65%)]"></div>
          <div className="group flex flex-col items-center gap-3">
            <span className="grid h-[84px] w-[84px] place-items-center rounded-[22px] border border-lilac/60 bg-deep text-paper shadow-[0_6px_24px_rgba(139,92,246,0.4)] transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_10px_40px_rgba(139,92,246,0.7)] md:h-[104px] md:w-[104px]"><EnvelopeSimple size={44} weight="fill" /></span>
            <span className="text-[14px] text-haze">Email</span>
          </div>
          <div className="group flex flex-col items-center gap-3">
            <span className="grid h-[84px] w-[84px] place-items-center rounded-[22px] border border-lilac/60 bg-deep text-paper shadow-[0_6px_24px_rgba(139,92,246,0.4)] transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_10px_40px_rgba(139,92,246,0.7)] md:h-[104px] md:w-[104px]"><CalendarBlank size={44} weight="fill" /></span>
            <span className="text-[14px] text-haze">Calendar</span>
          </div>
          <div className="group flex flex-col items-center gap-3">
            <span className="grid h-[84px] w-[84px] place-items-center rounded-[22px] border border-lilac/60 bg-deep text-paper shadow-[0_6px_24px_rgba(139,92,246,0.4)] transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_10px_40px_rgba(139,92,246,0.7)] md:h-[104px] md:w-[104px]"><Globe size={44} weight="fill" /></span>
            <span className="text-[14px] text-haze">Browser</span>
          </div>
          <div className="group flex flex-col items-center gap-3">
            <span className="grid h-[84px] w-[84px] place-items-center rounded-[22px] border border-lilac/60 bg-deep text-paper shadow-[0_6px_24px_rgba(139,92,246,0.4)] transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_10px_40px_rgba(139,92,246,0.7)] md:h-[104px] md:w-[104px]"><AddressBook size={44} weight="fill" /></span>
            <span className="text-[14px] text-haze">Your CRM</span>
          </div>
          <div className="group flex flex-col items-center gap-3">
            <span className="grid h-[84px] w-[84px] place-items-center rounded-[22px] border border-lilac/60 bg-deep text-paper shadow-[0_6px_24px_rgba(139,92,246,0.4)] transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_10px_40px_rgba(139,92,246,0.7)] md:h-[104px] md:w-[104px]"><BookOpen size={44} weight="fill" /></span>
            <span className="text-[14px] text-haze">Manuals</span>
          </div>
          <div className="group flex flex-col items-center gap-3">
            <span className="grid h-[84px] w-[84px] place-items-center rounded-[22px] border border-lilac/60 bg-deep text-paper shadow-[0_6px_24px_rgba(139,92,246,0.4)] transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_10px_40px_rgba(139,92,246,0.7)] md:h-[104px] md:w-[104px]"><Stack size={44} weight="fill" /></span>
            <span className="text-[14px] text-haze">Activity feed</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
