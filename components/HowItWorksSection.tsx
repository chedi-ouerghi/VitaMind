"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { MessageCircle, Brain, Shield, ArrowDown, Sparkles } from "lucide-react"

export default function HowItWorksSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      ref={ref}
      className="py-24 bg-gradient-to-br from-white via-violet-50/30 to-purple-50/20 relative overflow-hidden"
      id="how-it-works"
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%238B5CF6' fillOpacity='0.1'%3E%3Cpath d='M30 30m-2 0a2 2 0 1 1 4 0a2 2 0 1 1 -4 0'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-violet-200/20 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-purple-200/15 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -25, 0],
            y: [0, 25, 0],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-4xl">🧠</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-light text-black mb-6">
            How{" "}
            <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              VitaMind
            </span>{" "}
            Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our advanced AI system combines cutting-edge technology with deep understanding of bipolar disorder to
            provide personalized, intelligent support through a sophisticated architecture.
          </p>
        </motion.div>

        {/* Architecture Flow */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {/* Step 1: User Interaction */}
          <div className="text-center mb-12">
            <motion.div
              className="inline-flex items-center space-x-6 bg-gradient-to-r from-violet-50 to-purple-50 rounded-3xl px-8 py-6 shadow-xl border border-violet-100"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <div className="text-left">
                <div className="text-black font-semibold text-lg">Intelligent Conversations</div>
                <div className="text-gray-600">Natural language processing for emotional context</div>
              </div>
              <motion.div
                className="w-8 h-8 bg-violet-200/50 rounded-full flex items-center justify-center"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <Sparkles className="w-4 h-4 text-violet-600" />
              </motion.div>
            </motion.div>
          </div>

          {/* Connection Arrow */}
          <motion.div
            className="flex justify-center mb-8"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            <div className="flex flex-col items-center">
              <ArrowDown className="w-8 h-8 text-violet-400" />
              <div className="w-px h-8 bg-gradient-to-b from-violet-400 to-transparent mt-2"></div>
            </div>
          </motion.div>

          {/* Step 2: AI Processing */}
          <div className="text-center mb-12">
            <motion.div
              className="inline-block bg-white border-2 border-violet-200 rounded-3xl p-8 shadow-2xl max-w-md"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Brain className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-black font-semibold text-lg mb-2">AI Pattern Recognition</h3>
              <p className="text-gray-600 mb-4">
                Advanced algorithms detect early warning signs and emotional patterns
              </p>
              <div className="space-y-2">
                {[
                  "Machine learning models trained on bipolar patterns",
                  "Predictive analytics for episode forecasting",
                  "Behavioral pattern analysis and identification",
                  "Continuous learning from your unique data",
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-2 text-sm"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  >
                    <div className="w-1.5 h-1.5 bg-violet-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Connection Arrow */}
          <motion.div
            className="flex justify-center mb-8"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
          >
            <div className="flex flex-col items-center">
              <ArrowDown className="w-8 h-8 text-violet-400" />
              <div className="w-px h-8 bg-gradient-to-b from-violet-400 to-transparent mt-2"></div>
            </div>
          </motion.div>

          {/* Step 3: Proactive Support */}
          <div className="text-center">
            <motion.div
              className="inline-flex items-center space-x-6 bg-gradient-to-r from-purple-50 to-violet-50 rounded-3xl px-8 py-6 shadow-xl border border-purple-100"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div className="text-left">
                <div className="text-black font-semibold text-lg">Proactive Intervention</div>
                <div className="text-gray-600">Immediate support and crisis prevention when needed</div>
              </div>
              <motion.div
                className="w-8 h-8 bg-purple-200/50 rounded-full flex items-center justify-center"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
              >
                <Shield className="w-4 h-4 text-purple-600" />
              </motion.div>
            </motion.div>
          </div>

          {/* Performance Metrics */}
          <motion.div
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1.2 }}
          >
            {[
              { label: "Processing Speed", value: "<100ms", icon: "⚡" },
              { label: "Accuracy Rate", value: "98%", icon: "🎯" },
              { label: "Response Time", value: "24/7", icon: "🔄" },
              { label: "Success Rate", value: "95%", icon: "✨" },
            ].map((metric, index) => (
              <motion.div
                key={index}
                className="text-center p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-violet-100 hover:border-violet-200 transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-2xl mb-2">{metric.icon}</div>
                <div className="text-2xl font-bold text-violet-600 mb-1">{metric.value}</div>
                <div className="text-sm text-gray-600">{metric.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
