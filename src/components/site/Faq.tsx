import { Info } from "@phosphor-icons/react/dist/ssr";
import { FaqItem, Reveal, Words } from "./Interactive";

export default function Faq() {
  return (
    <section id="faq" aria-label="Questions" className="scroll-mt-24 bg-ink pb-24 md:pb-36">
      <div className="mx-auto max-w-[1200px] px-5 xl:px-0">
        <Reveal>
          <div className="flex items-center gap-3 text-[16px] uppercase text-accent-soft">
            <Info size={30} weight="thin" className="text-paper" />
            FAQ
          </div>
          <div className="mt-4 h-px bg-white/10"></div>
        </Reveal>
        <div className="mt-8 flex flex-col justify-between gap-5 md:mt-10 md:flex-row md:items-start">
          <Words className="text-[40px] font-normal leading-[1.08] tracking-[-0.045em] text-paper md:text-section">Curious about Dispatch?</Words>
          <Words as="p" className="max-w-[310px] text-[17px] leading-[1.45] text-accent-soft">Plain answers to the questions people ask first.</Words>
        </div>

        <div className="mt-12 grid items-start gap-4 md:mt-16 md:grid-cols-2 md:gap-x-8 md:gap-y-5">
          <div className="flex flex-col gap-4 md:gap-5">
            <Reveal>
              <FaqItem question="Do I need to write code or prompts?">
                No. Roles, manuals and permissions are all written in plain English, the way you would brief a new hire.
              </FaqItem>
            </Reveal>
            <Reveal delay={0.05}>
              <FaqItem question="How much can an agent do on its own?">
                You decide. Each agent can be set to chat only, ask first, or fully autonomous, with one-click approvals for anything you want to check.
              </FaqItem>
            </Reveal>
            <Reveal delay={0.1}>
              <FaqItem question="Which apps can agents use?">
                Your email, calendar, browser and your CRM. They follow your manuals and keep a memory of the work.
              </FaqItem>
            </Reveal>
            <Reveal delay={0.15}>
              <FaqItem question="How do I get access?">
                Dispatch is in private beta and invite-only. Email hello@dispatchstaff.com to request an invite. Already a tester? Sign in at dispatchstaff.com/login.
              </FaqItem>
            </Reveal>
          </div>
          <div className="flex flex-col gap-4 md:gap-5">
            <Reveal delay={0.05}>
              <FaqItem question="What happens when I close the tab?">
                Agents keep working after you close the tab. They schedule their own follow-ups, finish jobs while you are away and email you the results.
              </FaqItem>
            </Reveal>
            <Reveal delay={0.1}>
              <FaqItem question="Can I see what an agent did?">
                Yes. Every action can be approved, and every step shows in the activity feed.
              </FaqItem>
            </Reveal>
            <Reveal delay={0.15}>
              <FaqItem question="Can agents work together?">
                Yes. Agents report to agents, and Dispatch routes every task to the right one.
              </FaqItem>
            </Reveal>
            <Reveal delay={0.2}>
              <FaqItem question="Where does Dispatch run?">
                Dispatch is an online web app, available everywhere, built on Cloudflare&apos;s global network.
              </FaqItem>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
