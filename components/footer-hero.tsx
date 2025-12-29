"use client"

import { useMotionValue, useMotionTemplate, animate, motion } from "framer-motion"
import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

const COLORS = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"]

export const FooterHero = () => {
  const color = useMotionValue(COLORS[0])
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const baseColor = mounted && resolvedTheme === "light" ? "hsl(240 5% 96%)" : "hsl(240 10% 10%)"

  const backgroundImage = useMotionTemplate`
    radial-gradient(125% 125% at 50% 0%, ${baseColor} 50%, ${color})`

  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 10,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "mirror",
    })
  }, [color])

  return (
    <motion.div
      className="relative w-full h-72 overflow-hidden transition-colors duration-300"
      style={{ backgroundImage }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-64 h-64 rounded-full blur-3xl opacity-30 dark:opacity-20"
          style={{ background: color }}
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute right-0 w-48 h-48 rounded-full blur-3xl opacity-25 dark:opacity-15"
          style={{ background: color }}
          animate={{
            x: [0, -80, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute left-1/2 bottom-0 w-56 h-56 rounded-full blur-3xl opacity-20 dark:opacity-10"
          style={{ background: color }}
          animate={{
            x: [-50, 50, -50],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>
      <div
        className="absolute inset-0 opacity-[0.04] dark:opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                           linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />
    </motion.div>
  )
}
