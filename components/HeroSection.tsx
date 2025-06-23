"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import ParticleBackground from "./ParticleBackground"

export default function HeroSection() {
  const [displayText, setDisplayText] = useState("")
  const fullText = "VitaminD : Votre Compagnon AI pour le Trouble Bipolaire"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 50)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 overflow-hidden">
      <ParticleBackground />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-800 mb-6 leading-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {displayText}
          <motion.span
            className="inline-block w-1 h-12 md:h-16 bg-blue-500 ml-2"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
          />
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-600 mb-12 font-light"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          Un agent intelligent qui parle avec vous pour gérer votre quotidien.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 2.5 }}
        >
          <Button
            size="lg"
            className="bg-blue-500 hover:bg-blue-600 text-white px-12 py-6 text-xl rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 animate-pulse"
          >
            Commencer Maintenant
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
