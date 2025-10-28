"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed right-8 top-1/2 -translate-y-1/2 w-1 h-64 bg-white/10 rounded-full z-50 hidden lg:block print:hidden"
      style={{ originY: 0 }}
    >
      <motion.div
        className="w-full bg-[#9c55ff] rounded-full origin-top"
        style={{ scaleY }}
      />
    </motion.div>
  );
};

