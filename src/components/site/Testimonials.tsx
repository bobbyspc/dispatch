import { Quotes, UserCircle } from "@phosphor-icons/react/dist/ssr";
import { Carousel, Reveal } from "./Interactive";

export default function Testimonials() {
  return (
    <section aria-label="From beta testers" className="relative overflow-hidden bg-ink pb-24 md:pb-36">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-32 h-[700px] bg-[radial-gradient(ellipse_at_50%_50%,rgba(139,92,246,0.16),transparent_60%)]"></div>
      <div className="relative mx-auto max-w-[1200px] px-5 xl:px-0">
        <Reveal>
          <div className="flex items-center gap-3 text-[16px] uppercase text-accent-soft">
            <Quotes size={30} weight="thin" className="text-paper" />
            Beta testers
          </div>
          <div className="mt-4 h-px bg-white/10"></div>
        </Reveal>
        <div className="mt-8 flex flex-col justify-between gap-5 md:mt-10 md:flex-row md:items-start">
          <Reveal>
            <h2 className="text-[40px] font-normal leading-[1.08] tracking-[-0.045em] text-paper md:text-section">In their own words</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-[310px] text-[17px] leading-[1.45] text-accent-soft">Dispatch is in private beta. Reviews from testers will appear here.</p>
          </Reveal>
        </div>
      </div>

      <Reveal className="relative mt-14 md:mt-20">
        <Carousel>
          <article className="grid w-[86vw] max-w-[1200px] shrink-0 snap-center gap-6 rounded-[28px] border border-white/10 bg-card/80 p-4 md:w-[1200px] md:grid-cols-[370px_1fr] md:gap-8 md:p-6">
            <div className="grid aspect-[4/5] place-items-center rounded-[20px] border border-dashed border-white/20 bg-white/[0.03] text-center text-haze md:aspect-auto md:h-[420px]">
              <div className="flex flex-col items-center gap-3 px-6">
                <UserCircle size={48} weight="thin" />
                <p className="text-[14px]">Placeholder: a beta tester photo goes here, with their permission</p>
              </div>
            </div>
            <div className="flex flex-col justify-between gap-8 p-2">
              <p className="text-[22px] leading-[1.45] tracking-[-0.02em] text-paper md:text-[26px]">Placeholder: a real review from a Dispatch beta tester goes here, in their own words.</p>
              <div>
                <p className="text-[17px] font-semibold text-paper">Placeholder: tester name</p>
                <p className="text-[15px] text-haze">Placeholder: role and business</p>
              </div>
            </div>
          </article>
          <article className="grid w-[86vw] max-w-[1200px] shrink-0 snap-center gap-6 rounded-[28px] border border-white/10 bg-card/80 p-4 md:w-[1200px] md:grid-cols-[370px_1fr] md:gap-8 md:p-6">
            <div className="grid aspect-[4/5] place-items-center rounded-[20px] border border-dashed border-white/20 bg-white/[0.03] text-center text-haze md:aspect-auto md:h-[420px]">
              <div className="flex flex-col items-center gap-3 px-6">
                <UserCircle size={48} weight="thin" />
                <p className="text-[14px]">Placeholder: a beta tester photo goes here, with their permission</p>
              </div>
            </div>
            <div className="flex flex-col justify-between gap-8 p-2">
              <p className="text-[22px] leading-[1.45] tracking-[-0.02em] text-paper md:text-[26px]">Placeholder: a second real review from a Dispatch beta tester goes here.</p>
              <div>
                <p className="text-[17px] font-semibold text-paper">Placeholder: tester name</p>
                <p className="text-[15px] text-haze">Placeholder: role and business</p>
              </div>
            </div>
          </article>
          <article className="grid w-[86vw] max-w-[1200px] shrink-0 snap-center gap-6 rounded-[28px] border border-white/10 bg-card/80 p-4 md:w-[1200px] md:grid-cols-[370px_1fr] md:gap-8 md:p-6">
            <div className="grid aspect-[4/5] place-items-center rounded-[20px] border border-dashed border-white/20 bg-white/[0.03] text-center text-haze md:aspect-auto md:h-[420px]">
              <div className="flex flex-col items-center gap-3 px-6">
                <UserCircle size={48} weight="thin" />
                <p className="text-[14px]">Placeholder: a beta tester photo goes here, with their permission</p>
              </div>
            </div>
            <div className="flex flex-col justify-between gap-8 p-2">
              <p className="text-[22px] leading-[1.45] tracking-[-0.02em] text-paper md:text-[26px]">Placeholder: a third real review from a Dispatch beta tester goes here.</p>
              <div>
                <p className="text-[17px] font-semibold text-paper">Placeholder: tester name</p>
                <p className="text-[15px] text-haze">Placeholder: role and business</p>
              </div>
            </div>
          </article>
        </Carousel>
      </Reveal>
    </section>
  );
}
