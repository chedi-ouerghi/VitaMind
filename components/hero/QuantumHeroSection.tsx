"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Sparkles, Zap, Brain, Target } from "lucide-react"
import QuantumParticleField from "./QuantumParticleField"

export default function QuantumHeroSection() {
  const [displayText, setDisplayText] = useState("")
  const [currentPhase, setCurrentPhase] = useState(0)

  const phases = [
    "The Future of Mental Health",
    "AI-Powered Emotional Intelligence",
    "Next-Generation Wellness Platform",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhase((prev) => (prev + 1) % phases.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const currentText = phases[currentPhase]
    let index = 0
    setDisplayText("")

    const timer = setInterval(() => {
      if (index < currentText.length) {
        setDisplayText(currentText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 80)

    return () => clearInterval(timer)
  }, [currentPhase])

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-violet-50/30 to-purple-50/20 overflow-hidden">
      <QuantumParticleField />

      {/* Quantum field background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-violet-400/20 to-purple-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-indigo-400/15 to-violet-400/15 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

      <div className="relative z-10 text-center px-4 max-w-7xl mx-auto pt-20">
        {/* Quantum Badge */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-violet-100/80 to-purple-100/80 backdrop-blur-xl border border-violet-200/50 rounded-full shadow-2xl"
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            >
              <Sparkles className="w-5 h-5 text-violet-600 mr-3" />
            </motion.div>
            <span className="text-violet-700 font-semibold tracking-wide">QUANTUM-POWERED INTELLIGENCE</span>
            <motion.div
              className="w-2 h-2 bg-violet-500 rounded-full ml-3"
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
          </motion.div>
        </motion.div>

        {/* Dynamic Title */}
        <motion.h1
          className="text-6xl md:text-8xl lg:text-9xl font-light text-black mb-8 leading-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <span className="bg-gradient-to-r from-black via-violet-800 to-purple-800 bg-clip-text text-transparent">
            {displayText}
          </span>
          <motion.span
            className="inline-block w-2 h-20 md:h-24 bg-gradient-to-b from-violet-600 to-purple-600 ml-4"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
          />
        </motion.h1>

        {/* Quantum Description */}
        <motion.p
          className="text-2xl md:text-3xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Breakthrough AI technology that understands, adapts, and evolves with human consciousness to deliver
          <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent font-semibold">
            {" "}
            unprecedented mental wellness solutions
          </span>
        </motion.p>

        {/* Quantum Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="relative bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-700 hover:via-purple-700 hover:to-indigo-700 text-white px-12 py-8 text-xl rounded-2xl shadow-2xl hover:shadow-violet-500/25 transition-all duration-300 group overflow-hidden"
            >
              <span className="relative z-10 flex items-center font-semibold">
                Experience the Future
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </span>

              {/* Quantum shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.8 }}
              />
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-violet-300 text-violet-700 hover:bg-violet-50 hover:text-violet-800 px-10 py-8 text-lg rounded-2xl group shadow-xl backdrop-blur-sm bg-white/50"
            >
              <Play className="mr-3 w-5 h-5 group-hover:scale-110 transition-transform" />
              Neural Demo
            </Button>
          </motion.div>
        </motion.div>

        {/* Quantum Metrics */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          {[
            { icon: Brain, label: "Neural Networks", value: "Advanced", color: "from-violet-500 to-purple-500" },
            { icon: Zap, label: "Processing Speed", value: "Quantum", color: "from-purple-500 to-indigo-500" },
            { icon: Target, label: "Precision Rate", value: "99.7%", color: "from-indigo-500 to-violet-500" },
            { icon: Sparkles, label: "Innovation Index", value: "∞", color: "from-violet-500 to-pink-500" },
          ].map((metric, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.2 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="relative bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-violet-100 shadow-2xl group-hover:shadow-violet-500/20 transition-all duration-500">
                {/* Quantum glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />

                <div className="relative z-10 text-center">
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-br ${metric.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <metric.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <div
                    className={`text-3xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent mb-2`}
                  >
                    {metric.value}
                  </div>
                  <div className="text-gray-600 font-medium">{metric.label}</div>
                </div>

                {/* Quantum particles */}
                <motion.div
                  className="absolute top-2 right-2 w-2 h-2 bg-violet-400 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
