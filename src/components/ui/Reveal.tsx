"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const ease = [0.76, 0, 0.24, 1] as const;

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={cn("relative overflow-hidden", className)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        className="absolute inset-0"
        variants={{ hidden: { y: "105%" }, show: { y: "0%" } }}
        transition={{ duration: 0.95, delay, ease }}
      >
        <motion.div
          className="h-full w-full"
          variants={{ hidden: { scale: 1.08 }, show: { scale: 1 } }}
          transition={{ duration: 1.25, delay, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
