"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Brain, Zap, Target, ArrowRight } from "lucide-react"

export default function IntelligenceShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const capabilities = [
    {
      icon: Brain,
      title: "Cognitive Synthesis",
      description: "Advanced neural processing that understands complex emotional patterns",
      metrics: "99.7% accuracy",
      color: "from-violet-500 to-purple-500",
      bgColor: "from-violet-50 to-purple-50",
    },
    {
      icon: Zap,
      title: "Quantum Response",
      description: "Instantaneous analysis and adaptive response generation",
      metrics: "<10ms latency",
      color: "from-purple-500 to-indigo-500",
      bgColor: "from-purple-50 to-indigo-50",
    },
    {
      icon: Target,
      title: "Precision Targeting",
      description: "Personalized interventions based on individual neural signatures",
      metrics: "94% effectiveness",
      color: "from-indigo-500 to-violet-500",
      bgColor: "from-indigo-50 to-violet-50",
    },
  ]

  return (
    <section ref={ref} className="py-32 bg-white relative overflow-hidden" id="intelligence">
      {/* Quantum field background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/4 left-1/6 w-64 h-64 bg-gradient-to-br from-violet-200/20 to-purple-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-gradient-to-br from-indigo-200/15 to-violet-200/15 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-violet-500 to-purple-500 rounded-3xl mb-8 shadow-2xl"
            initial={{ scale: 0, rotate: 180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.1, rotate: 10 }}
          >
            <Brain className="w-10 h-10 text-white" />
          </motion.div>

          <h2 className="text-6xl md:text-8xl font-light text-black mb-8">
            Quantum{" "}
            <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              Intelligence
            </span>
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Revolutionary AI architecture that transcends traditional boundaries, delivering unprecedented insights into
            human consciousness and emotional well-being.
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-3 gap-12 mb-20">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
              whileHover={{ scale: 1.02, y: -10 }}
            >
              <div
                className={`relative bg-gradient-to-br ${capability.bgColor} rounded-3xl p-10 border border-violet-100 shadow-2xl group-hover:shadow-violet-500/20 transition-all duration-500 h-full overflow-hidden`}
              >
                {/* Quantum glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />

                <div className="relative z-10">
                  <motion.div
                    className={`w-20 h-20 bg-gradient-to-br ${capability.color} rounded-3xl flex items-center justify-center mb-8 shadow-xl`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <capability.icon className="w-10 h-10 text-white" />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-violet-700 transition-colors">
                    {capability.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{capability.description}</p>

                  <div className="flex items-center justify-between">
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl px-4 py-2 border border-violet-100">
                      <span className="text-sm font-semibold text-violet-600">{capability.metrics}</span>
                    </div>
                    <motion.div
                      className="w-8 h-8 bg-violet-100 rounded-full flex items-center justify-center group-hover:bg-violet-200 transition-colors"
                      whileHover={{ scale: 1.2, rotate: 90 }}
                    >
                      <ArrowRight className="w-4 h-4 text-violet-600" />
                    </motion.div>
                  </div>
                </div>

                {/* Quantum particles */}
                <motion.div
                  className="absolute top-4 right-4 w-3 h-3 bg-violet-400 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                />
                <motion.div
                  className="absolute bottom-6 left-6 w-2 h-2 bg-purple-400 rounded-full"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: index * 0.7 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quantum Metrics */}
        <motion.div
          className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-3xl p-12 border border-violet-100 shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-black mb-4">Quantum Performance Metrics</h3>
            <p className="text-lg text-gray-600">Real-time intelligence capabilities that redefine possibilities</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Neural Pathways", value: "∞", icon: "🧠" },
              { label: "Processing Power", value: "Quantum", icon: "⚡" },
              { label: "Learning Rate", value: "Exponential", icon: "📈" },
              { label: "Adaptation Speed", value: "Instant", icon: "🚀" },
            ].map((metric, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">
                  {metric.icon}
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {metric.value}
                </div>
                <div className="text-sm text-gray-600 font-medium">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
