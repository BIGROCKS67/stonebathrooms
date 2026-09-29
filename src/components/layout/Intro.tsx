"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function Intro() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShow(false);
      return;
    }
    if (sessionStorage.getItem("stone-in")) {
      setShow(false);
      return;
    }
    document.body.style.overflow = "hidden";
    const t = window.setTimeout(() => {
      sessionStorage.setItem("stone-in", "1");
      setShow(false);
    }, 1500);
    return () => {
      window.clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (!show) document.body.style.overflow = "";
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#090908] text-[#f3efe6]"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.32em] text-[#f3efe6]/45">
            Bucks, Beds, Northants, Oxfordshire
          </p>
          <p className="font-display mt-5 text-[22vw] uppercase tracking-[0.18em] text-[#f3efe6] md:text-[9rem] md:tracking-[0.22em]">
            Stone
          </p>
          <span className="mt-6 h-px w-14 bg-[#f3efe6]/70" />
          <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.28em] text-[#f3efe6]/50">
            Bathroom installation specialists
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
