"use client";

import {
  useMotionValue,
  useMotionTemplate,
  animate,
  motion,
} from "framer-motion";
import { useEffect } from "react";

const COLORS = ["#13FAA", "#1E67C6", "#CE84CF", "#DD335C"];

export const FooterHero = () => {
  const color = useMotionValue(COLORS[0]);
  const backgroundImage = useMotionTemplate`
  radial-gradient(125% 125% at 50% 0%, oklch(0.21 0.006 285.885) 50%, ${color}`;

  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  return (
    <motion.div
      className="max-w-7xl left-auto right-auto w-full h-64"
      style={{ backgroundImage }}
    />
  );
};
