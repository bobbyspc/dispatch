"use client";

import { useState, type ReactNode } from "react";
import { motion } from "motion/react";
import { List, X } from "@phosphor-icons/react";

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      data-reveal=""
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
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
        className="relative z-50 flex h-11 w-11 items-center justify-center rounded-full text-ink-dispatch"
      >
        {open ? <X size={30} /> : <List size={32} />}
      </button>
      {open ? (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          onClick={() => setOpen(false)}
          className="fixed inset-x-4 top-20 z-40 rounded-3xl border border-line bg-bg-deep/95 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.6)] backdrop-blur-xl"
        >
          {children}
        </motion.div>
      ) : null}
    </div>
  );
}
