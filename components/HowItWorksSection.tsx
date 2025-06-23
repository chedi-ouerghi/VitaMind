"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { MessageCircle, Brain, Shield, ChevronDown } from "lucide-react"

const steps = [
  {
    icon: MessageCircle,
    title: "Intelligent Conversations",
    description: "VitaMind engages in natural conversations to understand your emotional state",
    details: [
      "Natural language processing for emotional context",
      "Mood pattern recognition through dialogue",
      "Personalized conversation flows based on your history",
      "Real-time sentiment analysis and response adaptation",
    ],
  },
  {
    icon: Brain,
    title: "AI Pattern Recognition",
    description: "Advanced algorithms detect early warning signs and emotional patterns",
    details: [
      "Machine learning models trained on bipolar disorder patterns",
      "Predictive analytics for episode forecasting",
      "Behavioral pattern analysis and trend identification",
      "Continuous learning from your unique data",
    ],
  },
  {
    icon: Shield,
    title: "Proactive Intervention",
    description: "Immediate support and crisis prevention when you need it most",
    details: [
      "Real-time crisis detection and alert systems",
      "Emergency contact integration and notifications",
      "Personalized coping strategy recommendations",
      "Professional healthcare provider coordination",
    ],
  },
]

export default function HowItWorksSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [expandedStep, setExpandedStep] = useState<number | null>(null)

  return (
    <section ref={ref} className="py-24 bg-gray-900" id="how-it-works">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-light text-white mb-6">How VitaMind Works</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our advanced AI system combines cutting-edge technology with deep understanding of bipolar disorder to
            provide personalized, intelligent support.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 h-full">
                {/* Step Number */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm font-medium text-blue-400 bg-blue-500/20 px-3 py-1 rounded-full">
                    Step {index + 1}
                  </span>
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center border border-blue-500/30"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <step.icon className="w-8 h-8 text-blue-400" />
                  </motion.div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
                <p className="text-gray-400 mb-6">{step.description}</p>

                {/* Expandable Details */}
                <button
                  onClick={() => setExpandedStep(expandedStep === index ? null : index)}
                  className="flex items-center justify-between w-full text-left text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <span className="text-sm font-medium">Learn More</span>
                  <motion.div animate={{ rotate: expandedStep === index ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: expandedStep === index ? "auto" : 0,
                    opacity: expandedStep === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-400">{detail}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform -translate-y-1/2 z-10">
                  <motion.div
                    className="w-2 h-2 bg-blue-400 rounded-full absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
