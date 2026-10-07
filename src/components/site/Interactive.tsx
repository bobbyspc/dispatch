"use client";

import {
  Children,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import {
  AnimatePresence,
  MotionConfig,
  motion,
  useScroll,
  useTransform,
  type MotionValue,
  type TargetAndTransition,
} from "motion/react";
import { CaretLeft, CaretRight, List, Plus, X } from "@phosphor-icons/react";

const ease = [0.22, 1, 0.36, 1] as const;

export function MotionRoot({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

/* ---------- first screen entrances ---------- */

type HeroKind = "zoom" | "drop" | "panel" | "rise";

const heroStates: Record<HeroKind, { initial: TargetAndTransition; animate: TargetAndTransition }> = {
  zoom: { initial: { opacity: 0, y: 80, scale: 1.1 }, animate: { opacity: 1, y: 0, scale: 1 } },
  drop: { initial: { opacity: 0.28, y: -36 }, animate: { opacity: 1, y: 0 } },
  panel: { initial: { opacity: 0, y: 80, scale: 0.9 }, animate: { opacity: 1, y: 0, scale: 1 } },
  rise: { initial: { opacity: 0, y: 31 }, animate: { opacity: 1, y: 0 } },
};

export function HeroIn({
  kind,
  delay = 0,
  className,
  children,
}: {
  kind: HeroKind;
  delay?: number;
  className?: string;
  children: ReactNode;
}) {
  const s = heroStates[kind];
  return (
    <motion.div
      className={className}
      initial={s.initial}
      animate={s.animate}
      transition={{ duration: kind === "panel" ? 1.2 : 1, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

/* ---------- scroll reveals ---------- */

export function Reveal({
  delay = 0,
  className,
  children,
}: {
  delay?: number;
  className?: string;
  children: ReactNode;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
      transition={{ duration: 0.5, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export function FadeHalf({ delay = 0, className, children }: { delay?: number; className?: string; children: ReactNode }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0.5 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export function SlideFromRight({ delay = 0, className, children }: { delay?: number; className?: string; children: ReactNode }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.5, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

function splitWords(children: ReactNode): string[] {
  const text = Children.toArray(children)
    .filter((c) => typeof c === "string" || typeof c === "number")
    .join("");
  return text.split(" ").filter(Boolean);
}

export function Words({
  as = "h2",
  blur = false,
  className,
  children,
}: {
  as?: "h1" | "h2" | "h3" | "p";
  blur?: boolean;
  className?: string;
  children: ReactNode;
}) {
  const words = splitWords(children);
  const nodes: ReactNode[] = [];
  for (let i = 0; i < words.length; i++) {
    nodes.push(
      <motion.span
        key={i}
        className="inline-block whitespace-pre"
        variants={{
          hidden: blur ? { opacity: 0, filter: "blur(10px)" } : { opacity: 0, y: 20 },
          show: blur ? { opacity: 1, filter: "blur(0px)" } : { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.5, ease }}
      >
        {words[i] + (i < words.length - 1 ? " " : "")}
      </motion.span>,
    );
  }
  const Tag = motion[as] as typeof motion.h2;
  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      transition={{ staggerChildren: blur ? 0.09 : 0.06 }}
      aria-label={words.join(" ")}
    >
      {nodes}
    </Tag>
  );
}

/* ---------- scroll-linked ---------- */

export function ScrollShift({
  distance,
  className,
  children,
}: {
  distance: number;
  className?: string;
  children?: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], [-distance / 2, distance / 2]);
  return (
    <motion.div ref={ref} style={{ x }} className={className}>
      {children}
    </motion.div>
  );
}

export function ScrollFade({ className, children }: { className?: string; children?: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <motion.div ref={ref} style={{ opacity }} className={className}>
      {children}
    </motion.div>
  );
}

function ScrollWord({
  progress,
  start,
  end,
  children,
}: {
  progress: MotionValue<number>;
  start: number;
  end: number;
  children: ReactNode;
}) {
  const color = useTransform(progress, [start, end], ["rgba(169,159,196,0.4)", "rgba(242,239,248,1)"]);
  return (
    <motion.span aria-hidden="true" style={{ color }}>
      {children}
    </motion.span>
  );
}

export function ScrollWords({
  as = "p",
  className,
  children,
}: {
  as?: "h2" | "h3" | "p";
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 45%"] });
  const words = splitWords(children);
  const nodes: ReactNode[] = [];
  for (let i = 0; i < words.length; i++) {
    nodes.push(
      <ScrollWord key={i} progress={scrollYProgress} start={i / words.length} end={(i + 1) / words.length}>
        {words[i] + (i < words.length - 1 ? " " : "")}
      </ScrollWord>,
    );
  }
  const Tag = motion[as] as typeof motion.p;
  return (
    <Tag ref={ref} className={className} aria-label={words.join(" ")}>
      {nodes}
    </Tag>
  );
}

export function StepsScroller({ labels, children }: { labels: ReactNode; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 30%", "end 70%"] });
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <div ref={ref}>
      <div className="sticky top-24 z-20 bg-ink/90 pb-3 pt-6 backdrop-blur-sm">
        {labels}
        <div className="relative mt-3 h-px w-full bg-white/10">
          <motion.div
            style={{ scaleX }}
            className="absolute inset-0 origin-left bg-gradient-to-r from-violet to-lilac"
          />
        </div>
      </div>
      {children}
    </div>
  );
}

/* ---------- particle field ---------- */

export function Starfield({ className }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const count = 300;
    const xs = new Float32Array(count);
    const ys = new Float32Array(count);
    const rs = new Float32Array(count);
    const vs = new Float32Array(count);
    const ph = new Float32Array(count);
    let w = 0;
    let h = 0;
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    for (let i = 0; i < count; i++) {
      xs[i] = Math.random() * w;
      ys[i] = Math.random() * h;
      rs[i] = Math.random() * 1.1 + 0.3;
      vs[i] = Math.random() * 0.12 + 0.03;
      ph[i] = Math.random() * Math.PI * 2;
    }
    let raf = 0;
    let t = 0;
    const draw = () => {
      t += 0.016;
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < count; i++) {
        if (!reduce) {
          ys[i] -= vs[i];
          if (ys[i] < -2) {
            ys[i] = h + 2;
            xs[i] = Math.random() * w;
          }
        }
        const a = 0.25 + 0.55 * (0.5 + 0.5 * Math.sin(t * 1.4 + ph[i]));
        ctx.fillStyle = "rgba(226, 216, 255, " + a.toFixed(3) + ")";
        ctx.beginPath();
        ctx.arc(xs[i], ys[i], rs[i], 0, Math.PI * 2);
        ctx.fill();
      }
      if (!reduce) raf = requestAnimationFrame(draw);
    };
    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);
  return <canvas ref={ref} aria-hidden="true" className={className} />;
}

/* ---------- widgets ---------- */

export function HeaderShell({ children }: { children: ReactNode }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={
        scrolled
          ? "fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/85 backdrop-blur-md transition-colors duration-300"
          : "fixed inset-x-0 top-0 z-50 border-b border-transparent bg-transparent transition-colors duration-300"
      }
    >
      {children}
    </header>
  );
}

export function MobileMenu({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="grid h-11 w-11 place-items-center text-paper transition-opacity hover:opacity-70"
      >
        {open ? <X size={28} /> : <List size={30} />}
      </button>
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease }}
            onClick={() => setOpen(false)}
            className="absolute inset-x-4 top-20 rounded-2xl border border-white/10 bg-deep/95 p-6 shadow-2xl backdrop-blur-md"
          >
            {children}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export function Carousel({ children }: { children: ReactNode }) {
  const track = useRef<HTMLDivElement>(null);
  const go = (dir: number) => {
    const el = track.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: "smooth" });
  };
  return (
    <div>
      <div
        ref={track}
        className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-5 pb-4 md:px-[max(1.25rem,calc((100vw-1200px)/2))]"
      >
        {children}
      </div>
      <div className="mx-auto mt-8 flex max-w-[1200px] justify-end gap-3 px-5 xl:px-0">
        <button
          type="button"
          aria-label="Previous"
          onClick={() => go(-1)}
          className="grid h-12 w-12 place-items-center rounded-full border border-white/15 text-paper transition hover:border-white/40 hover:bg-white/10"
        >
          <CaretLeft size={20} />
        </button>
        <button
          type="button"
          aria-label="Next"
          onClick={() => go(1)}
          className="grid h-12 w-12 place-items-center rounded-full border border-white/15 text-paper transition hover:border-white/40 hover:bg-white/10"
        >
          <CaretRight size={20} />
        </button>
      </div>
    </div>
  );
}

export function FaqItem({ question, children }: { question: string; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-[22px] border border-white/10 bg-deep transition-colors hover:border-white/20">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left text-[17px] font-semibold text-paper md:px-6 md:text-[19px]"
      >
        <span>{question}</span>
        <motion.span animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.3 }} className="shrink-0">
          <Plus size={20} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-6 text-[16px] leading-relaxed text-haze md:px-6">{children}</div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
