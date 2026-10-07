import type { Metadata } from "next";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import { Reveal } from "@/components/site/Interactive";

export const metadata: Metadata = {
  title: "Request an invite | Dispatch",
  description: "Dispatch is in private beta. Tell us about your team and we will be in touch with an invite.",
};

const NEXT_STEPS = [
  { id: "read", number: "01", text: "We read every request ourselves." },
  { id: "reply", number: "02", text: "If Dispatch fits your work, we email you an invite." },
  { id: "start", number: "03", text: "You hire your first agent and hand off the busywork." },
];

const TEAM_SIZES = [
  { id: "solo", label: "Just me" },
  { id: "small", label: "2 to 10 people" },
  { id: "medium", label: "11 to 50 people" },
  { id: "large", label: "More than 50 people" },
];

export default function RequestInvite() {
  return (
    <>
      <SiteHeader />
      <main className="relative overflow-hidden bg-ink pb-24 pt-[132px] md:pb-36 md:pt-[180px]">
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[700px] bg-[radial-gradient(ellipse_at_30%_20%,rgba(139,92,246,0.3),transparent_60%)]"></div>

        <div className="relative mx-auto grid max-w-[1200px] gap-0 px-5 lg:grid-cols-[1fr_520px] lg:gap-20 xl:px-0 flex-col">
          <Reveal>
            <p className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-[14px] font-medium text-paper md:text-[15px]">Private beta, invite-only</p>
            <h1 className="mt-6 max-w-[560px] text-[44px] font-medium leading-[1.06] tracking-[-0.045em] text-paper md:text-[64px]">Request an invite</h1>
            <p className="mt-6 max-w-[440px] text-[17px] leading-[1.5] text-haze">Tell us a little about your team and the work you want off your plate. We will be in touch.</p>

            <h2 className="mt-14 text-[15px] uppercase tracking-[0.04em] text-accent-soft">What happens next</h2>
            <ol className="mt-5 max-w-[440px] border-t border-white/10">
              {NEXT_STEPS.map((step) => (
                <li key={step.id} className="flex items-baseline gap-5 border-b border-white/10 py-4">
                  <span className="text-[14px] font-medium text-lilac">{step.number}</span>
                  <span className="text-[16px] leading-[1.5] text-paper">{step.text}</span>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={0.1}>
            <form action="mailto:hello@dispatchstaff.com?subject=Dispatch%20invite%20request" method="post" encType="text/plain" className="rounded-[28px] border border-white/10 bg-deep p-6 shadow-[0_0_80px_rgba(139,92,246,0.18)] md:p-8 w-full">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-[15px] font-medium text-paper">
                  Your name
                  <input type="text" name="name" required autoComplete="name" className="rounded-[12px] border border-white/15 bg-white/[0.04] px-4 py-3 text-[16px] font-normal text-paper outline-none transition placeholder:text-haze/60 focus:border-lilac focus:bg-white/[0.07]" />
                </label>
                <label className="flex flex-col gap-2 text-[15px] font-medium text-paper">
                  Work email
                  <input type="email" name="email" required autoComplete="email" className="rounded-[12px] border border-white/15 bg-white/[0.04] px-4 py-3 text-[16px] font-normal text-paper outline-none transition placeholder:text-haze/60 focus:border-lilac focus:bg-white/[0.07]" />
                </label>
              </div>

              <label className="mt-5 flex flex-col gap-2 text-[15px] font-medium text-paper">
                Company
                <input type="text" name="company" autoComplete="organization" className="rounded-[12px] border border-white/15 bg-white/[0.04] px-4 py-3 text-[16px] font-normal text-paper outline-none transition placeholder:text-haze/60 focus:border-lilac focus:bg-white/[0.07]" />
              </label>

              <label className="mt-5 flex flex-col gap-2 text-[15px] font-medium text-paper">
                Team size
                <select name="team_size" defaultValue="" required className="rounded-[12px] border border-white/15 bg-deep px-4 py-3 text-[16px] font-normal text-paper outline-none transition focus:border-lilac">
                  <option value="" disabled>Choose one</option>
                  {TEAM_SIZES.map((size) => (
                    <option key={size.id} value={size.label}>{size.label}</option>
                  ))}
                </select>
              </label>

              <label className="mt-5 flex flex-col gap-2 text-[15px] font-medium text-paper">
                What would you hand off first?
                <textarea name="handoff" rows={4} placeholder="Inbox triage, follow-ups, scheduling..." className="resize-none rounded-[12px] border border-white/15 bg-white/[0.04] px-4 py-3 text-[16px] font-normal leading-[1.5] text-paper outline-none transition placeholder:text-haze/60 focus:border-lilac focus:bg-white/[0.07]"></textarea>
              </label>

              <button type="submit" className="mt-8 w-full rounded-[14px] bg-[linear-gradient(110deg,#ddd3ff,#8b5cf6_45%,#3b1d7a)] p-[1.5px] shadow-[0_0_22px_rgba(139,92,246,0.45)] transition-shadow duration-300 hover:shadow-[0_0_38px_rgba(139,92,246,0.85)]">
                <span className="block rounded-[12.5px] bg-deep py-3.5 text-center text-[16px] font-semibold text-paper">Request an invite</span>
              </button>

              <p className="mt-5 text-center text-[14px] text-haze">
                Already a tester? <a href="https://dispatchstaff.com/login" className="border-b border-haze/50 text-haze transition-colors hover:border-paper hover:text-paper">Sign in</a>
              </p>
            </form>
          </Reveal>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
