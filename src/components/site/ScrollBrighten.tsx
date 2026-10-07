"use client";

import { useRef, type ComponentProps } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";

type ScrollBrightenProps = ComponentProps<"span">;

function Letter({
  char,
  index,
  total,
  progress,
}: {
  char: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const start = (index / total) * 0.9;
  const opacity = useTransform(progress, [start, start + 0.1], [0.45, 1]);
  return <motion.span style={{ opacity }}>{char}</motion.span>;
}

export default function ScrollBrighten({ className, children, ...props }: ScrollBrightenProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 45%"] });

  if (reduceMotion || typeof children !== "string") {
    return (
      <span ref={ref} className={className} {...props}>
        {children}
      </span>
    );
  }

  const words = children.split(" ");
  const total = children.length;
  let offset = 0;

  return (
    <span ref={ref} className={className} {...props}>
      <span className="sr-only">{children}</span>
      <span aria-hidden="true">
        {words.map((word, wordIndex) => {
          const wordStart = offset;
          offset += word.length + 1;
          return (
            <span key={`${wordIndex}-${word}`}>
              <span className="inline-block">
                {Array.from(word).map((char, charIndex) => (
                  <Letter
                    key={charIndex}
                    char={char}
                    index={wordStart + charIndex}
                    total={total}
                    progress={scrollYProgress}
                  />
                ))}
              </span>
              {wordIndex < words.length - 1 ? " " : null}
            </span>
          );
        })}
      </span>
    </span>
  );
}
