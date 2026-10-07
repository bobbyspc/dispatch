import { Buildings, Check, Tag } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";
import { Reveal } from "./Interactive-dispatch";

const CARD_TONES = {
  default: "border-white/12 bg-[linear-gradient(170deg,#211b30,#110e18_70%)]",
  featured: "border-accent/60 bg-[linear-gradient(170deg,#2c2046,#141020_70%)] shadow-[0_0_40px_rgba(139,92,246,0.25)]",
};

const PLANS = [
  {
    id: "free",
    name: "Free",
    price: "$0",
    tagline: "Try it out",
    description: "Hand a few routine jobs to agents and see how they fit your day.",
    agents: "Up to 3 agents",
    includes: "What you get",
    tone: "default",
    badge: "",
    delay: 0,
    features: [
      { id: "free-manuals", text: "Manuals and a memory of the work" },
      { id: "free-approvals", text: "One-click approvals" },
      { id: "free-feed", text: "Activity feed for every step" },
    ],
  },
  {
    id: "starter",
    name: "Starter",
    price: "$5",
    tagline: "For solo owners",
    description: "Clear your inbox and follow-ups without hiring help.",
    agents: "Up to 5 agents",
    includes: "Everything in Free, plus",
    tone: "default",
    badge: "",
    delay: 0.05,
    features: [
      { id: "starter-apps", text: "Connect email, calendar and your CRM" },
      { id: "starter-autonomy", text: "Choose chat only, ask first or autonomous" },
    ],
  },
  {
    id: "pro",
    name: "Pro",
    price: "$20",
    tagline: "For growing teams",
    description: "A full staff of agents working across the whole business.",
    agents: "Up to 25 agents",
    includes: "Everything in Starter, plus",
    tone: "featured",
    badge: "Most popular",
    delay: 0.1,
    features: [
      { id: "pro-research", text: "Web research" },
      { id: "pro-browser", text: "Browser access" },
      { id: "pro-after-hours", text: "Jobs finish after hours, results by email" },
    ],
  },
  {
    id: "business",
    name: "Business",
    price: "$50",
    tagline: "For busy operations",
    description: "More agents and more room for the work your team runs every day.",
    agents: "Up to 50 agents",
    includes: "Everything in Pro, plus",
    tone: "default",
    badge: "",
    delay: 0.15,
    features: [
      { id: "business-allowance", text: "Larger monthly work allowance" },
      { id: "business-shared", text: "Shared across the whole team" },
    ],
  },
] as const;

const ENTERPRISE_FEATURES = [
  { id: "enterprise-agents", text: "Up to 100 agents" },
  { id: "enterprise-everything", text: "Everything in Business" },
  { id: "enterprise-allowance", text: "Largest monthly work allowance" },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative scroll-mt-20 overflow-hidden bg-bg py-20 md:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[140px]" />
      <div className="relative mx-auto max-w-[1200px] px-5 md:px-6">
        <Reveal>
          <div className="flex items-center gap-3 border-b border-line pb-5 text-[15px] uppercase tracking-[0.04em] text-soft md:text-[16px]">
            <Tag size={28} className="text-ink-dispatch" />
            Pricing preview
          </div>
          <div className="mt-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="max-w-[700px] text-[38px] font-normal leading-[1.08] tracking-[-0.04em] text-ink-dispatch md:text-[60px]">
              Plans for every size of team
            </h2>
            <p className="max-w-[310px] text-[16px] leading-[1.5] text-soft md:pb-3">
              A preview, not live yet. Each plan includes that much work per month, shared by the whole team.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 md:mt-20 lg:grid-cols-4 lg:gap-4">
          {PLANS.map((plan) => (
            <Reveal key={plan.id} delay={plan.delay}>
              <article className={cn("relative flex h-full flex-col rounded-3xl border p-6", CARD_TONES[plan.tone])}>
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-[20px] font-medium text-ink-dispatch">{plan.name}</h3>
                  <span className={cn("rounded-full bg-accent/20 px-2.5 py-1 text-[12px] font-medium text-soft", { hidden: !plan.badge })}>
                    {plan.badge}
                  </span>
                </div>
                <p className="mt-1 text-[14px] text-soft">{plan.tagline}</p>
                <div className="mt-5 flex items-baseline gap-2">
                  <p className="text-[44px] font-medium leading-none tracking-[-0.04em] text-ink-dispatch">{plan.price}</p>
                  <p className="text-[14px] text-muted">per month</p>
                </div>
                <p className="mt-4 text-[15px] leading-[1.5] text-muted">{plan.description}</p>
                <p className="mt-5 rounded-xl border border-line bg-white/5 px-4 py-2.5 text-[15px] font-medium text-ink-dispatch">{plan.agents}</p>
                <div className="mt-6 flex-1 border-t border-line pt-6">
                  <p className="text-[13px] uppercase tracking-[0.04em] text-soft">{plan.includes}</p>
                  <ul className="mt-4 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature.id} className="flex items-start gap-2.5 text-[15px] leading-[1.45] text-ink-dispatch/90">
                        <Check size={18} className="mt-0.5 shrink-0 text-soft" />
                        {feature.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-5 lg:mt-4">
          <article className="grid gap-8 rounded-3xl border border-white/12 bg-[linear-gradient(110deg,#211b30,#110e18_70%)] p-6 md:p-8 lg:grid-cols-[1.2fr_1fr_auto] lg:items-center lg:gap-12">
            <div>
              <div className="flex items-center gap-3">
                <Buildings size={26} className="text-soft" />
                <h3 className="text-[24px] font-medium tracking-[-0.02em] text-ink-dispatch">Enterprise</h3>
              </div>
              <p className="mt-3 max-w-[440px] text-[15px] leading-[1.5] text-muted">
                For larger organisations running agents across many teams and departments.
              </p>
            </div>
            <ul className="space-y-3">
              {ENTERPRISE_FEATURES.map((feature) => (
                <li key={feature.id} className="flex items-start gap-2.5 text-[15px] leading-[1.45] text-ink-dispatch/90">
                  <Check size={18} className="mt-0.5 shrink-0 text-soft" />
                  {feature.text}
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-4 lg:items-end lg:text-right">
              <div className="flex items-baseline gap-2">
                <p className="text-[44px] font-medium leading-none tracking-[-0.04em] text-ink-dispatch">$100</p>
                <p className="text-[14px] text-muted">per month</p>
              </div>
              <a
                href="mailto:hello@dispatchstaff.com"
                className="rounded-xl border border-line px-5 py-3 text-center text-[15px] font-semibold text-ink-dispatch transition-colors hover:border-accent/60 hover:bg-accent/10"
              >
                Talk to us
              </a>
            </div>
          </article>
        </Reveal>

        <Reveal className="mt-10 flex flex-col items-center gap-4 text-center">
          <a
            href="/request-invite"
            className="rounded-xl bg-[linear-gradient(120deg,#c084fc,#f2eff8_35%,#6d28d9_65%,#818cf8)] p-px shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-shadow hover:shadow-[0_0_44px_rgba(139,92,246,0.8)]"
          >
            <span className="block rounded-[11px] bg-bg-deep px-7 py-3.5 text-[17px] font-semibold text-ink-dispatch shadow-[inset_0_0_18px_rgba(139,92,246,0.4)]">
              Request an invite
            </span>
          </a>
          <p className="text-[14px] text-muted">Pricing is a preview and not live yet.</p>
        </Reveal>
      </div>
    </section>
  );
}
