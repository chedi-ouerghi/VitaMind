"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Clock, Zap, TrendingDown } from "lucide-react"

const benefits = [
  {
    icon: Clock,
    text: "Toujours disponible",
  },
  {
    icon: Zap,
    text: "Réagit à vos besoins",
  },
  {
    icon: TrendingDown,
    text: "Réduit les risques de rechute",
  },
]

export default function BenefitsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-light text-center text-gray-800 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Pourquoi VitaminD ?
        </motion.h2>

        <div className="max-w-2xl mx-auto space-y-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="flex items-center space-x-6"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <motion.div
                className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
              >
                <motion.div
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
                >
                  <benefit.icon className="w-6 h-6 text-white" />
                </motion.div>
              </motion.div>
              <p className="text-xl text-blue-600 font-medium">{benefit.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
