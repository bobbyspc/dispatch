import { Reveal } from "./Interactive-dispatch";
import ScrollBrighten from "./ScrollBrighten";

export default function Intro() {
  return (
    <section className="relative bg-bg py-24 md:py-36">
      <div className="mx-auto grid max-w-[1200px] items-center gap-16 px-5 md:px-6 lg:grid-cols-[1fr_340px]">
        <Reveal>
          <p className="text-[30px] font-normal leading-[1.18] tracking-[-0.035em] text-ink-dispatch md:text-[50px]">
            Dispatch gives small teams a staff of AI agents.{" "}
            <ScrollBrighten className="text-ink-dispatch">
              They follow your manuals, use your apps and keep a memory of the work, so your days stop disappearing into inboxes and follow-ups.
            </ScrollBrighten>
          </p>
        </Reveal>
        <Reveal delay={0.1} className="flex justify-center">
          <div className="relative flex h-[260px] w-[260px] items-center justify-center md:h-[320px] md:w-[320px]">
            <div className="orb animate-float absolute inset-0 rounded-full" />
            <div className="relative text-center">
              <p className="text-[34px] font-medium tracking-[-0.04em] text-ink-dispatch md:text-[40px]">Agents</p>
              <p className="mt-1 text-[15px] text-ink-dispatch/80">proactively</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
