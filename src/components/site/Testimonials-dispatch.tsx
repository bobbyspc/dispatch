import { ChartBar, ChatCircle, Heart, Quotes, Repeat, SealCheck, XLogo } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";
import { Reveal } from "./Interactive-dispatch";

const AVATAR_TONES = {
  amber: "bg-[linear-gradient(135deg,#fbbf24,#ea580c)]",
  violet: "bg-[linear-gradient(135deg,#c084fc,#6d28d9)]",
  sky: "bg-[linear-gradient(135deg,#7dd3fc,#2563eb)]",
  emerald: "bg-[linear-gradient(135deg,#6ee7b7,#047857)]",
  rose: "bg-[linear-gradient(135deg,#fda4af,#be123c)]",
  slate: "bg-[linear-gradient(135deg,#cbd5e1,#475569)]",
};

const POSTS = [
  {
    id: "carbmaxxing",
    name: "bread enjoyer 🍞",
    handle: "@carbmaxxing",
    initial: "🍞",
    tone: "amber",
    verified: false,
    date: "Sep 28",
    text: "ok i finally let an AI agent handle my invoice follow ups and it sent 14 polite reminders while i was at my kid's recital. 3 people already paid. never doing this by hand again",
    replies: "41",
    reposts: "112",
    likes: "1.4K",
    views: "88K",
    delay: 0,
  },
  {
    id: "danadoesops",
    name: "Dana | ops girlie",
    handle: "@danadoesops",
    initial: "D",
    tone: "violet",
    verified: true,
    date: "Sep 30",
    text: "the approve button is the whole product for me. agent drafts the reply, i tap approve from the grocery line, done. inbox went from 212 to 9 this week",
    replies: "18",
    reposts: "36",
    likes: "604",
    views: "21K",
    delay: 0.05,
  },
  {
    id: "jorgeNTJ",
    name: "jorge (not that jorge)",
    handle: "@jorgeNTJ",
    initial: "J",
    tone: "sky",
    verified: false,
    date: "Oct 1",
    text: "gave it our refund policy as a google doc and it just... follows it. every time. better onboarding than my last two hires honestly",
    replies: "27",
    reposts: "54",
    likes: "892",
    views: "34K",
    delay: 0.1,
  },
  {
    id: "pipeguy_fl",
    name: "tired plumber",
    handle: "@pipeguy_fl",
    initial: "🔧",
    tone: "slate",
    verified: false,
    date: "Oct 2",
    text: "woke up to 6 jobs booked because the agent answered website emails at 2am. small business owners we are so back",
    replies: "63",
    reposts: "201",
    likes: "3.1K",
    views: "142K",
    delay: 0,
  },
  {
    id: "priyabuilds",
    name: "Priya ✨ building in public",
    handle: "@priyabuilds",
    initial: "P",
    tone: "rose",
    verified: true,
    date: "Oct 3",
    text: "underrated part: the activity feed. i can see every single thing the agents did today and why. zero black box vibes",
    replies: "12",
    reposts: "29",
    likes: "477",
    views: "15K",
    delay: 0.05,
  },
  {
    id: "mattwithtwots",
    name: "matt w/ two t's",
    handle: "@mattwithtwots",
    initial: "M",
    tone: "emerald",
    verified: false,
    date: "Oct 4",
    text: "day 3 of the beta and my agent remembered a client hates phone calls before i did. slightly scary, mostly great",
    replies: "9",
    reposts: "17",
    likes: "318",
    views: "11K",
    delay: 0.1,
  },
] as const;

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-bg py-20 md:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute right-0 top-1/3 h-[420px] w-[700px] rounded-full bg-indigo-500/10 blur-[120px]" />
      <div className="relative mx-auto max-w-[1200px] px-5 md:px-6">
        <Reveal>
          <div className="flex items-center gap-3 border-b border-line pb-5 text-[15px] uppercase tracking-[0.04em] text-soft md:text-[16px]">
            <Quotes size={28} className="text-ink-dispatch" />
            From the beta
          </div>
          <div className="mt-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="text-[38px] font-normal leading-[1.08] tracking-[-0.04em] text-ink-dispatch md:text-[60px]">
              What testers say
            </h2>
            <p className="max-w-[310px] text-[16px] leading-[1.5] text-soft md:pb-3">
              Dispatch is in private beta. Tester stories will appear here.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 gap-4 md:mt-20 md:columns-2 lg:columns-3">
          {POSTS.map((post) => (
            <Reveal key={post.id} delay={post.delay} className="mb-4 break-inside-avoid">
              <article className="rounded-2xl border border-line bg-bg-deep/80 p-5 transition-colors hover:bg-surface">
                <div className="flex items-start gap-3">
                  <span className={cn("flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-[18px] font-semibold text-white", AVATAR_TONES[post.tone])}>
                    {post.initial}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1">
                      <p className="truncate text-[15px] font-bold text-ink-dispatch">{post.name}</p>
                      <SealCheck size={17} weight="fill" className={cn("shrink-0 text-sky-400", { hidden: !post.verified })} />
                    </div>
                    <div className="flex items-center gap-1 text-[15px] text-muted">
                      <span className="truncate">{post.handle}</span>
                      <span>·</span>
                      <span className="shrink-0">{post.date}</span>
                    </div>
                  </div>
                  <XLogo size={18} className="shrink-0 text-ink-dispatch" />
                </div>
                <p className="mt-3 text-[16px] leading-[1.45] text-ink-dispatch">{post.text}</p>
                <div className="mt-4 flex items-center justify-between text-[13px] text-muted">
                  <span className="flex items-center gap-1.5">
                    <ChatCircle size={17} />
                    {post.replies}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Repeat size={17} />
                    {post.reposts}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Heart size={17} />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <ChartBar size={17} />
                    {post.views}
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-6 text-center text-[13px] text-muted">Example posts for layout. Real tester posts will replace these.</p>
      </div>
    </section>
  );
}
