"use client"

import { cn } from "@/lib/utils"
import { motion, type MotionValue, useScroll, useSpring, useTransform } from "motion/react"
import { useEffect, useRef, useState } from "react"
import NextImage from "next/image"

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance])
}

function Image({
  url,
  label,
  description,
}: {
  url: string
  label: string
  description: string
}) {
  const ref = useRef(null)
  const containerRef = useRef<any>(null)
  const [snap, setSnap] = useState(true)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  })
  const y = useParallax(scrollYProgress, 100)

  useEffect(() => {
    if (containerRef.current) {
      const containerHeight = containerRef.current.scrollHeight
      const screenHeight = window.innerHeight
      setSnap(containerHeight <= screenHeight)
    }
  }, [description])

  return (
    <motion.section
      className={cn("relative flex justify-center items-center pb-72 min-h-screen pt-[96px]", snap && "snap-start")}
    >
      <div className="sm:w-max flex flex-col md:flex-row sm:gap-8 md:items-start items-center md:text-left text-center">
        <motion.div ref={ref} className="image-wrapper">
          <NextImage src={url} alt={`Image ${label}`} width={200} height={200} />
        </motion.div>
        <motion.div
          initial={{ visibility: "hidden" }}
          animate={{ visibility: "visible" }}
          style={{ y }}
          className="text-container sm:!-translate-y-[10px]"
        >
          <h2 className="md:!text-left !text-center">{`#${label}`}</h2>
          <p className="md:text-left text-center prose font-mono">{description}</p>
        </motion.div>
      </div>
    </motion.section>
  )
}

interface Props {
  images: { label: string; url: string; description: string }[]
}

export default function Parallax({ images }: Props) {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <>
      <div className="relative max-w-5xl mx-auto">
        {images.map((image, index) => (
          <Image key={index} url={image.url} label={image.label} description={image.description} />
        ))}
      </div>

      <motion.div className="progress" style={{ scaleX }} />

      <StyleSheet />
    </>
  )
}

function StyleSheet() {
  return (
    <style>{`
      html {
        scroll-snap-type: y mandatory;
      }

      .image-wrapper {
        flex-shrink: 0;
        width: 400px;
        height: 300px;
        max-width: 90%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: var(--muted);
        border-radius: 24px;
        overflow: hidden;
        box-shadow: 0 8px 20px rgba(79, 240, 183, 0.1);
      }

      .image-wrapper img {
        width: 100%;
        height: 100%;
        object-fit: contain; /* Show whole image, never cut */
        border-radius: 24px; /* Rounded corners */
      }

      .text-container {
        flex-grow: 1;
        text-align: center;
      }

      .text-container h2 {
        color: #4ff0b7;
        margin: 0;
        font-family: "Azeret Mono", monospace;
        font-size: 50px;
        font-weight: 700;
        letter-spacing: -3px;
        line-height: 1.2;
        text-align: left;
      }

      .text-container p {
        margin: 10px 0 0;
        font-family: "Azeret Mono", monospace;
        font-size: 16px;
        color: #999;
      }

      @media (max-width: 640px) {
        .image-wrapper {
          width: 300px;
          height: 250px;
        }

        .text-container h2 {
          font-size: 36px;
          text-align: center;
        }

        .text-container p {
          font-size: 14px;
        }
      }

      .progress {
        position: fixed;
        bottom: 50px;
        height: 5px;
        background: #4ff0b7;
        transform: scaleX(0);
        left: 50%;
        width: 100%;
        max-width: 1024px;
        translate: -50%;
      }
    `}</style>
  )
}
