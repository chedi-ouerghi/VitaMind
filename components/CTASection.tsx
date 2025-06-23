"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"

export default function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-20 bg-gradient-to-br from-blue-600 to-blue-800 overflow-hidden">
      {/* Animated wave background */}
      <div className="absolute inset-0">
        <svg className="absolute bottom-0 w-full h-32" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <motion.path
            d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"
            fill="rgba(255,255,255,0.1)"
            animate={{
              d: [
                "M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z",
                "M0,80 C300,40 900,100 1200,80 L1200,120 L0,120 Z",
                "M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z",
              ],
            }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.h2
          className="text-4xl md:text-6xl font-light text-white mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          Prêt à Essayer ?
        </motion.h2>

        <motion.p
          className="text-xl md:text-2xl text-blue-100 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Inscrivez-vous pour découvrir VitaminD.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-blue-50 px-12 py-6 text-xl rounded-full shadow-2xl hover:shadow-white/25 transition-all duration-300 hover:scale-105 font-semibold"
            style={{
              animation: "pulse 2s infinite",
            }}
          >
            Rejoindre la Liste d'Attente
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
