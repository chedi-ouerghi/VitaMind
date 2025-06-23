"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Brain, Zap, Target, Shield, Sparkles, ArrowRight } from "lucide-react"

export default function QuantumAdvantagesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const advantages = [
    {
      icon: Brain,
      title: "Neural Processing",
      description: "Advanced AI algorithms that understand complex emotional patterns and cognitive behaviors",
      position: "top-left",
    },
    {
      icon: Zap,
      title: "Quantum Speed",
      description: "Instantaneous analysis and response generation with sub-millisecond processing times",
      position: "top-right",
    },
    {
      icon: Target,
      title: "Precision Targeting",
      description: "Personalized interventions based on individual neural signatures and behavioral data",
      position: "bottom-left",
    },
    {
      icon: Shield,
      title: "Secure Architecture",
      description: "Enterprise-grade security with quantum encryption and privacy-first design principles",
      position: "bottom-right",
    },
  ]

  const getPositionClasses = (position: string) => {
    switch (position) {
      case "top-left":
        return "absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2"
      case "top-right":
        return "absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2"
      case "bottom-left":
        return "absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2"
      case "bottom-right":
        return "absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2"
      default:
        return ""
    }
  }

  return (
    <section
      ref={ref}
      className="py-32 bg-gradient-to-br from-gray-900 via-violet-900/20 to-purple-900/20 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-violet-500/10 to-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-indigo-500/10 to-violet-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl font-light text-white mb-6">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
              VitaMind
            </span>
            ?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We combine cutting-edge technology, clinical expertise, and a passion for innovation to create unprecedented
            solutions that transform mental wellness.
          </p>
        </motion.div>

        {/* Central Quantum Circle with Advantages */}
        <div className="relative max-w-6xl mx-auto">
          <div className="relative w-full h-[800px] flex items-center justify-center">
            {/* Central Core */}
            <motion.div
              className="relative z-20"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="w-80 h-80 bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-full border-2 border-violet-400/30 backdrop-blur-xl flex items-center justify-center relative">
                {/* Orbital Rings */}
                <motion.div
                  className="absolute inset-0 border-2 border-violet-400/20 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
                <motion.div
                  className="absolute inset-4 border border-purple-400/20 rounded-full"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
                <motion.div
                  className="absolute inset-8 border border-indigo-400/20 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />

                {/* Central Icon */}
                <motion.div
                  className="w-24 h-24 bg-gradient-to-br from-violet-500 to-purple-500 rounded-full flex items-center justify-center shadow-2xl"
                  animate={{
                    scale: [1, 1.1, 1],
                    boxShadow: [
                      "0 0 20px rgba(139, 92, 246, 0.3)",
                      "0 0 40px rgba(139, 92, 246, 0.6)",
                      "0 0 20px rgba(139, 92, 246, 0.3)",
                    ],
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                >
                  <Sparkles className="w-12 h-12 text-white" />
                </motion.div>

                {/* Quantum Particles */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-violet-400 rounded-full"
                    style={{
                      top: "50%",
                      left: "50%",
                      transformOrigin: `${120 + i * 10}px 0px`,
                    }}
                    animate={{
                      rotate: 360,
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      rotate: { duration: 10 + i * 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                      scale: { duration: 2, repeat: Number.POSITIVE_INFINITY, delay: i * 0.2 },
                      opacity: { duration: 2, repeat: Number.POSITIVE_INFINITY, delay: i * 0.2 },
                    }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Advantage Cards */}
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                className={`${getPositionClasses(advantage.position)} w-80`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
              >
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-2xl group hover:shadow-violet-500/20 transition-all duration-500">
                  {/* Connection Line */}
                  <motion.div
                    className="absolute w-px h-32 bg-gradient-to-b from-violet-400/50 to-transparent"
                    style={{
                      top: advantage.position.includes("top") ? "100%" : "auto",
                      bottom: advantage.position.includes("bottom") ? "100%" : "auto",
                      left: "50%",
                      transform: "translateX(-50%)",
                    }}
                    initial={{ scaleY: 0 }}
                    animate={isInView ? { scaleY: 1 } : {}}
                    transition={{ duration: 0.8, delay: 1.2 + index * 0.1 }}
                  />

                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <advantage.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-violet-300 transition-colors">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6">{advantage.description}</p>

                  <motion.div
                    className="flex items-center text-violet-400 font-semibold group-hover:text-violet-300 transition-colors cursor-pointer"
                    whileHover={{ x: 5 }}
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          {[
            { label: "AI Accuracy", value: "99.7%", icon: "🎯" },
            { label: "Response Time", value: "<10ms", icon: "⚡" },
            { label: "User Satisfaction", value: "98.5%", icon: "💜" },
            { label: "Global Reach", value: "50+ Countries", icon: "🌍" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.7 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-3xl mb-3 group-hover:scale-125 transition-transform duration-300">{stat.icon}</div>
              <div className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
