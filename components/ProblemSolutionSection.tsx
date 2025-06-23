"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function ProblemSolutionSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl flex items-center justify-center">
              <motion.div
                className="w-32 h-32 bg-blue-500 rounded-full flex items-center justify-center"
                animate={{
                  scale: [1, 1.1, 1],
                  boxShadow: [
                    "0 0 20px rgba(74, 144, 226, 0.3)",
                    "0 0 40px rgba(74, 144, 226, 0.6)",
                    "0 0 20px rgba(74, 144, 226, 0.3)",
                  ],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">Un Soutien en Temps Réel</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Les hauts et les bas du trouble bipolaire sont difficiles à gérer seul. VitaminD communique avec vous pour
              offrir un soutien instantané et personnalisé.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
