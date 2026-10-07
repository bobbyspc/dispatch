import { CheckCircle, UsersThree } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "./Interactive";

export default function Agents() {
  return (
    <section id="agents" aria-label="Example agents" className="relative scroll-mt-24 overflow-hidden bg-ink pb-24 md:pb-36">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-40 h-[600px] bg-[radial-gradient(ellipse_at_50%_100%,rgba(139,92,246,0.18),transparent_60%)]"></div>
      <div className="relative mx-auto max-w-[1200px] px-5 xl:px-0">
        <Reveal>
          <div className="flex items-center gap-3 text-[16px] uppercase text-accent-soft">
            <UsersThree size={30} weight="thin" className="text-paper" />
            Agents
          </div>
          <div className="mt-4 h-px bg-white/10"></div>
        </Reveal>
        <div className="mt-8 flex flex-col justify-between gap-5 md:mt-10 md:flex-row md:items-start">
          <Reveal>
            <h2 className="text-[40px] font-normal leading-[1.08] tracking-[-0.045em] text-paper md:text-section">Hire them by name</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-[310px] text-[17px] leading-[1.45] text-accent-soft">Describe the job in plain English and the agent starts today. Two examples:</p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:mt-20 md:grid-cols-2 md:gap-8">
          <Reveal>
            <article className="group h-full rounded-[28px] border border-white/10 bg-[linear-gradient(160deg,rgba(139,92,246,0.22),rgba(12,10,18,0.9)_55%)] p-6 transition duration-500 hover:-translate-y-1 hover:brightness-125 md:p-9">
              <div className="flex items-center gap-4">
                <span className="relative h-16 w-16 shrink-0">
                  <img src="/images/avatars/gen__agent-aria.jpg" alt="" width={64} height={64} loading="lazy" className="h-16 w-16 rounded-full object-cover" />
                  <span className="absolute -bottom-0.5 -right-0.5 h-5 w-5 rounded-full border-[3px] border-deep bg-[#10b981]"></span>
                </span>
                <div>
                  <h3 className="text-[30px] font-medium tracking-[-0.035em] text-paper">Aria</h3>
                  <p className="text-[16px] text-haze">Customer Support Rep</p>
                </div>
              </div>
              <div className="my-7 h-px bg-white/10"></div>
              <ul className="flex flex-col gap-4">
                <li className="flex gap-3 text-[17px] leading-[1.45] text-paper"><CheckCircle size={22} weight="light" className="mt-0.5 shrink-0 text-lilac" />Works the support queue by your refund-policy manual</li>
                <li className="flex gap-3 text-[17px] leading-[1.45] text-paper"><CheckCircle size={22} weight="light" className="mt-0.5 shrink-0 text-lilac" />Drafts replies in your voice</li>
                <li className="flex gap-3 text-[17px] leading-[1.45] text-paper"><CheckCircle size={22} weight="light" className="mt-0.5 shrink-0 text-lilac" />Asks before a refund goes out</li>
              </ul>
            </article>
          </Reveal>

          <Reveal delay={0.1}>
            <article className="group h-full rounded-[28px] border border-white/10 bg-[linear-gradient(200deg,rgba(139,92,246,0.22),rgba(12,10,18,0.9)_55%)] p-6 transition duration-500 hover:-translate-y-1 hover:brightness-125 md:p-9">
              <div className="flex items-center gap-4">
                <span className="relative h-16 w-16 shrink-0">
                  <img src="/images/avatars/gen__agent-sam.jpg" alt="" width={64} height={64} loading="lazy" className="h-16 w-16 rounded-full object-cover" />
                  <span className="absolute -bottom-0.5 -right-0.5 h-5 w-5 rounded-full border-[3px] border-deep bg-[#10b981]"></span>
                </span>
                <div>
                  <h3 className="text-[30px] font-medium tracking-[-0.035em] text-paper">Sam</h3>
                  <p className="text-[16px] text-haze">Sales Outreach SDR</p>
                </div>
              </div>
              <div className="my-7 h-px bg-white/10"></div>
              <ul className="flex flex-col gap-4">
                <li className="flex gap-3 text-[17px] leading-[1.45] text-paper"><CheckCircle size={22} weight="light" className="mt-0.5 shrink-0 text-lilac" />Researches prospects on the live web</li>
                <li className="flex gap-3 text-[17px] leading-[1.45] text-paper"><CheckCircle size={22} weight="light" className="mt-0.5 shrink-0 text-lilac" />Writes personalised outreach</li>
                <li className="flex gap-3 text-[17px] leading-[1.45] text-paper"><CheckCircle size={22} weight="light" className="mt-0.5 shrink-0 text-lilac" />Schedules his own follow-ups</li>
              </ul>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
