"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { MessageSquare, BarChart3, Shield, Lock, Watch } from "lucide-react"

const features = [
  {
    icon: MessageSquare,
    title: "Conversational AI",
    description: "Natural language processing for empathetic conversations",
    details: "Advanced NLP algorithms understand emotional nuances and respond with appropriate empathy.",
    color: "violet",
  },
  {
    icon: BarChart3,
    title: "Mood Analytics",
    description: "Comprehensive tracking and analysis of emotional patterns",
    details: "Detailed insights into mood trends, triggers, and patterns to help you understand better.",
    color: "purple",
  },
  {
    icon: Shield,
    title: "Crisis Prevention",
    description: "Proactive detection and intervention before episodes escalate",
    details: "AI-powered early warning system that identifies potential crisis situations.",
    color: "indigo",
  },

  {
    icon: Lock,
    title: "Privacy First",
    description: "HIPAA-compliant security with end-to-end encryption",
    details: "Military-grade encryption and HIPAA compliance ensure privacy protection.",
    color: "purple",
  },
]

export default function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeFeature, setActiveFeature] = useState(0)

  return (
    <section
      ref={ref}
      className="py-24 bg-white"
      id="features"
      style={{
        background: "linear-gradient(-135deg, #ffffff 70%, #518591 100%)"
      }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ rotate: -180, scale: 0 }}
            animate={isInView ? { rotate: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-4xl">⚡</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-light text-[#518591] mb-6">
            Powerful{" "}
            <span className="bg-gradient-to-r from-[#518591] to-[#e3b01c] bg-clip-text text-transparent">
              Features
            </span>
          </h2>
          <p className="text-xl text-[#518591]/80 max-w-3xl mx-auto">
            Where technology meets deep understanding of mental health to deliver transformative experiences.
          </p>
        </motion.div>

        {/* Interactive Feature Showcase */}
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Feature List */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                    activeFeature === index
                      ? "border-[#518591] bg-[#518591]/10 shadow-lg"
                      : "border-[#518591]/10 bg-white hover:border-[#e3b01c] hover:bg-[#e3b01c]/10"
                  }`}
                  onClick={() => setActiveFeature(index)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-start space-x-4">
                    <motion.div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        activeFeature === index
                          ? "bg-[#518591] text-white"
                          : "bg-[#e3b01c]/10 text-[#518591]"
                      }`}
                      animate={{
                        scale: activeFeature === index ? 1.1 : 1,
                        rotate: activeFeature === index ? 360 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <feature.icon className="w-6 h-6" />
                    </motion.div>
                    <div className="flex-1">
                      <h3
                        className={`text-lg font-semibold mb-2 ${
                          activeFeature === index ? "text-[#518591]" : "text-[#518591]/80"
                        }`}
                      >
                        {feature.title}
                      </h3>
                      <p className="text-[#518591]/70 text-sm">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Feature Detail */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-[#518591]/10">
                {/* Animated Background */}
                <motion.div
                  className="absolute inset-0 bg-[#518591]/10 rounded-3xl opacity-50"
                  key={activeFeature}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 0.5 }}
                  transition={{ duration: 0.5 }}
                />

                <div className="relative z-10">
                  <motion.div
                    className="w-20 h-20 bg-gradient-to-br from-[#518591] to-[#e3b01c] rounded-2xl flex items-center justify-center mb-6 shadow-lg"
                    key={activeFeature}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, type: "spring" }}
                  >
                    {(() => {
                      const IconComponent = features[activeFeature].icon
                      return <IconComponent className="w-10 h-10 text-white" />
                    })()}
                  </motion.div>

                  <motion.h3
                    className="text-2xl font-bold text-[#518591] mb-4"
                    key={`title-${activeFeature}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    {features[activeFeature].title}
                  </motion.h3>

                  <motion.p
                    className="text-[#518591]/80 text-lg leading-relaxed"
                    key={`details-${activeFeature}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    {features[activeFeature].details}
                  </motion.p>

                  {/* Decorative Elements */}
                  <motion.div
                    className="absolute top-4 right-4 w-16 h-16 rounded-full bg-[#e3b01c]/20 blur-xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
