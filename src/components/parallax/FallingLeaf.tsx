/* eslint-disable no-unused-vars */

import React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Leaf } from "lucide-react"

export const FallingLeaf = () => {
  const {
    randomX,
    randomY,
    size,
    duration,
    parallaxSpeed,
    delay,
    drift1,
    drift2,
  } = React.useMemo(
    () => ({
      randomX: Math.random() * 100,
      randomY: Math.random() * 100,
      size: Math.random() * 1.2 + 0.8,
      duration: Math.random() * 15 + 15,
      parallaxSpeed: Math.random() * 500 + 200,
      delay: Math.random() * -30,
      drift1: Math.random() * 100 - 50,
      drift2: Math.random() * 100 - 50,
    }),
    []
  )

  const { scrollY } = useScroll()
  const parallaxY = useTransform(scrollY, [0, 4000], [0, parallaxSpeed])

  return (
    <motion.div
      className="absolute text-orange-500/30"
      style={{
        left: `${randomX}%`,
        top: `${randomY}%`,
        y: parallaxY,
        scale: size,
      }}
    >
      <motion.div
        animate={{
          y: [0, 1000],
          x: [0, drift1, drift2],
          rotate: [15, 60, 15],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
          delay: delay,
        }}
      >
        <Leaf className="h-10 w-10 fill-current" />
      </motion.div>
    </motion.div>
  )
}
