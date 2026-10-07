import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type AgentStatus = "working" | "idle" | "review";
type AgentTone = "violet" | "amber" | "emerald" | "sky" | "rose" | "lilac";

type Agent = {
  id: string;
  avatar: string;
  name: string;
  role: string;
  status: AgentStatus;
  statusLabel: string;
  activity: string;
  tone: AgentTone;
};

type Team = {
  id: string;
  name: string;
  summary: string;
  playbook: string;
  tools: string;
  agents: Agent[];
};

const NAV = [
  { id: "org", label: "Org chart", icon: "/images/icons/org-chart.svg", active: true },
  { id: "agents", label: "Agents", icon: "/images/icons/agents.svg", active: false },
  { id: "manuals", label: "Manuals", icon: "/images/icons/manuals.svg", active: false },
  { id: "assets", label: "Assets", icon: "/images/icons/assets.svg", active: false },
];

const TASKS = [
  { id: "t1", title: "Rebook load #4833 after carrier cancel", route: "From you to Rhea" },
  { id: "t2", title: "Send Friday ETA report to Halvorsen Foods", route: "From you to Echo" },
  { id: "t3", title: "Review damage claim on load #4790", route: "From Juno to you" },
];

const STATS = [
  { id: "transit", label: "Loads in transit", value: "142", icon: "/images/icons/truck.svg" },
  { id: "ontime", label: "On time today", value: "98%", icon: "/images/icons/clock.svg" },
  { id: "done", label: "Tasks done this week", value: "1,284", icon: "/images/icons/check-circle.svg" },
];

const TEAMS: Team[] = [
  {
    id: "dispatch",
    name: "Dispatch Ops",
    summary: "Books carriers and keeps every load moving",
    playbook: "Load Booking Playbook",
    tools: "DAT, Samsara, Gmail",
    agents: [
      { id: "rhea", avatar: "/images/avatars/gen__agent-rhea.jpg", name: "Rhea", role: "Load Matcher", status: "working", statusLabel: "Working", activity: "Booked load #4821 to Dallas", tone: "violet" },
      { id: "atlas", avatar: "/images/avatars/gen__agent-atlas.jpg", name: "Atlas", role: "Route Planner", status: "working", statusLabel: "Working", activity: "Rerouted 3 trucks around I-10", tone: "sky" },
      { id: "ledger", avatar: "/images/avatars/gen__agent-ledger.jpg", name: "Ledger", role: "Rate Checker", status: "idle", statusLabel: "Idle", activity: "Waiting on new quotes", tone: "amber" },
    ],
  },
  {
    id: "customer",
    name: "Customer Desk",
    summary: "Keeps shippers updated and files the paperwork",
    playbook: "Shipper Updates Guide",
    tools: "Gmail, Twilio, Sheets",
    agents: [
      { id: "echo", avatar: "/images/avatars/gen__agent-echo.jpg", name: "Echo", role: "Shipment Tracker", status: "working", statusLabel: "Working", activity: "Sent 18 ETA updates", tone: "emerald" },
      { id: "paige", avatar: "/images/avatars/gen__agent-paige.jpg", name: "Paige", role: "Paperwork Clerk", status: "working", statusLabel: "Working", activity: "Filed 12 proofs of delivery", tone: "lilac" },
      { id: "juno", avatar: "/images/avatars/gen__agent-juno.jpg", name: "Juno", role: "Claims Handler", status: "review", statusLabel: "Needs you", activity: "Damage claim on #4790", tone: "rose" },
    ],
  },
];

const STATUS_DOT: Record<AgentStatus, string> = {
  working: "bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]",
  idle: "bg-haze/60",
  review: "bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.8)]",
};

const STATUS_TEXT: Record<AgentStatus, string> = {
  working: "text-emerald-300",
  idle: "text-haze",
  review: "text-amber-300",
};

const AVATAR_RING: Record<AgentTone, string> = {
  violet: "ring-violet/60",
  amber: "ring-amber-400/50",
  emerald: "ring-emerald-400/50",
  sky: "ring-sky-400/50",
  rose: "ring-rose-400/50",
  lilac: "ring-lilac/50",
};

type DashboardMockupProps = ComponentProps<"div">;

export default function DashboardMockup({ className, ...props }: DashboardMockupProps) {
  return (
    <div className={cn("flex overflow-hidden rounded-[16px] bg-ink text-left", className)} {...props}>
      <aside className="hidden w-[230px] shrink-0 flex-col border-r border-white/10 bg-deep/70 p-4 md:flex">
        <div className="flex items-center gap-2.5 px-2">
          <img src="/images/avatars/gen__logo-northline.png" alt="" width={28} height={28} className="h-7 w-7 rounded-lg object-cover" />
          <p className="text-[14px] font-semibold text-paper">Northline Freight</p>
        </div>

        <nav className="mt-6 flex flex-col gap-1">
          {NAV.map((item) => (
            <div key={item.id} className={cn("flex items-center gap-2.5 rounded-lg px-3 py-2", item.active ? "bg-violet/20" : "opacity-75")}>
              <img src={item.icon} alt="" className="h-4 w-4" />
              <p className={cn("text-[13px] font-medium", item.active ? "text-paper" : "text-haze")}>{item.label}</p>
            </div>
          ))}
        </nav>

        <p className="mt-7 px-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-haze/70">Open tasks</p>
        <ul className="mt-3 flex flex-col gap-2">
          {TASKS.map((task) => (
            <li key={task.id} className="rounded-xl border border-white/5 bg-white/[0.03] px-3 py-2.5">
              <p className="text-[12.5px] font-medium leading-snug text-paper">{task.title}</p>
              <p className="mt-1 text-[11px] text-haze">{task.route}</p>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex items-center gap-2.5 border-t border-white/10 px-2 pt-4">
          <img src="/images/avatars/gen__worker-dana-ortiz.jpg" alt="" width={28} height={28} className="h-7 w-7 rounded-full object-cover" />
          <p className="text-[13px] font-medium text-paper">Dana Ortiz, Ops Lead</p>
        </div>
      </aside>

      <div className="relative flex-1 bg-[radial-gradient(circle_at_50%_0%,rgba(139,92,246,0.18),transparent_60%)] p-4 md:p-7">
        <div className="grid grid-cols-3 gap-2 md:gap-3">
          {STATS.map((stat) => (
            <div key={stat.id} className="rounded-xl border border-white/10 bg-card/80 px-3 py-2.5 md:px-4 md:py-3">
              <div className="flex items-center gap-1.5">
                <img src={stat.icon} alt="" className="h-3.5 w-3.5 md:h-4 md:w-4" />
                <p className="text-[11px] font-medium text-haze md:text-[12px]">{stat.label}</p>
              </div>
              <p className="mt-0.5 text-[18px] font-semibold tracking-tight text-paper md:text-[24px]">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-6 flex w-fit items-center gap-3 rounded-full border border-lilac/40 bg-violet/15 py-2 pl-2 pr-6 shadow-[0_0_30px_rgba(139,92,246,0.3)] md:mt-8">
          <img src="/images/avatars/gen__worker-dana-ortiz.jpg" alt="" width={36} height={36} className="h-9 w-9 rounded-full object-cover" />
          <div>
            <div className="flex items-center gap-1.5">
              <img src="/images/icons/crown.svg" alt="" className="h-4 w-4" />
              <p className="text-[14px] font-semibold text-paper">You</p>
            </div>
            <p className="text-[12px] text-haze">Every team reports to you</p>
          </div>
        </div>

        <div aria-hidden="true" className="relative mx-auto hidden h-8 w-1/2 md:block">
          <div className="absolute left-1/2 top-0 h-4 w-px bg-lilac/40"></div>
          <div className="absolute inset-x-0 top-4 h-px bg-lilac/40"></div>
          <div className="absolute left-0 top-4 h-4 w-px bg-lilac/40"></div>
          <div className="absolute right-0 top-4 h-4 w-px bg-lilac/40"></div>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-4 md:mt-0 md:grid-cols-2 md:gap-5">
          {TEAMS.map((team) => (
            <div key={team.id} className="rounded-2xl border border-white/10 bg-card/70 p-3 md:p-4">
              <div className="flex items-start justify-between gap-3 px-1">
                <div>
                  <div className="flex items-center gap-2">
                    <img src="/images/icons/org-chart.svg" alt="" className="h-4 w-4" />
                    <p className="text-[15px] font-semibold text-paper md:text-[16px]">{team.name}</p>
                  </div>
                  <p className="mt-0.5 text-[12px] text-haze md:text-[13px]">{team.summary}</p>
                </div>
                <p className="shrink-0 rounded-full bg-white/5 px-2.5 py-1 text-[11px] font-medium text-lilac">3 agents</p>
              </div>
              <div className="mt-3 flex flex-wrap gap-1.5 px-1">
                <div className="flex items-center gap-1.5 rounded-md bg-white/5 px-2 py-1">
                  <img src="/images/icons/manuals.svg" alt="" className="h-3.5 w-3.5" />
                  <p className="text-[11px] text-haze">{team.playbook}</p>
                </div>
                <div className="flex items-center gap-1.5 rounded-md bg-white/5 px-2 py-1">
                  <img src="/images/icons/apps.svg" alt="" className="h-3.5 w-3.5" />
                  <p className="text-[11px] text-haze">{team.tools}</p>
                </div>
              </div>

              <ul className="mt-3 flex flex-col gap-2">
                {team.agents.map((agent) => (
                  <li key={agent.id} className="flex items-center gap-3 rounded-xl border border-white/5 bg-ink/70 px-3 py-2.5">
                    <img src={agent.avatar} alt="" width={36} height={36} className={cn("h-9 w-9 shrink-0 rounded-full object-cover ring-2", AVATAR_RING[agent.tone])} />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-baseline gap-2">
                        <p className="text-[13.5px] font-semibold text-paper">{agent.name}</p>
                        <p className="truncate text-[12px] text-haze">{agent.role}</p>
                      </div>
                      <p className="truncate text-[12px] text-paper/70">{agent.activity}</p>
                    </div>
                    <div className="flex shrink-0 items-center gap-1.5">
                      <span className={cn("h-2 w-2 rounded-full", STATUS_DOT[agent.status])}></span>
                      <p className={cn("text-[11.5px] font-medium", STATUS_TEXT[agent.status])}>{agent.statusLabel}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
