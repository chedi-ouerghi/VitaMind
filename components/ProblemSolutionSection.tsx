"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { AlertTriangle, Heart, Shield } from "lucide-react"

export default function ProblemSolutionSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const problems = [
    {
      icon: AlertTriangle,
      title: "Unpredictable Episodes",
      description: "Sudden mood swings can disrupt daily life without warning",
    },
    {
      icon: Heart,
      title: "Emotional Isolation",
      description: "Feeling alone during difficult moments with no immediate support",
    },
    {
      icon: Shield,
      title: "Crisis Prevention",
      description: "Difficulty recognizing early warning signs before episodes escalate",
    },
  ]

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-light text-white mb-6">Real-Time Support When You Need It Most</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Living with bipolar disorder presents unique challenges. VitaMind understands these struggles and provides
            intelligent, personalized support exactly when you need it.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Problems */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-8">The Challenge</h3>
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-4 p-6 bg-gray-800/50 rounded-2xl border border-gray-700 hover:border-gray-600 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
                  <problem.icon className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">{problem.title}</h4>
                  <p className="text-gray-400">{problem.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Solution */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl p-8 border border-blue-500/30">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl"
                animate={{
                  scale: [1, 1.02, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              />

              <div className="relative z-10">
                <h3 className="text-2xl font-semibold text-white mb-6">The VitaMind Solution</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300">AI-powered mood tracking and pattern recognition</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-300">24/7 conversational support and guidance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300">Proactive crisis prevention and intervention</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className="text-gray-300">Personalized coping strategies and recommendations</span>
                  </div>
                </div>

                <motion.div
                  className="mt-8 p-4 bg-gray-800/50 rounded-xl border border-gray-700"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="text-blue-300 italic">
                    "VitaMind learns your unique patterns and provides support that feels truly personal and
                    understanding."
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
