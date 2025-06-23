"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { MessageSquare, BarChart3, Shield, Smartphone, Cloud, Lock, Zap, Heart, Brain } from "lucide-react"

const features = [
  {
    icon: MessageSquare,
    title: "Conversational AI",
    description: "Natural language processing for empathetic, context-aware conversations",
    details: "Advanced NLP algorithms understand emotional nuances and respond with appropriate empathy and support.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: BarChart3,
    title: "Mood Analytics",
    description: "Comprehensive tracking and analysis of emotional patterns over time",
    details: "Detailed insights into mood trends, triggers, and patterns to help you understand your condition better.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Shield,
    title: "Crisis Prevention",
    description: "Proactive detection and intervention before episodes escalate",
    details:
      "AI-powered early warning system that identifies potential crisis situations and provides immediate support.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Seamless experience across all devices with offline capabilities",
    details: "Native mobile apps with offline support ensure you have access to support even without internet.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Cloud,
    title: "Cloud Sync",
    description: "Secure cloud synchronization keeps your data safe and accessible",
    details: "End-to-end encrypted cloud storage ensures your sensitive health data is protected and synchronized.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Lock,
    title: "Privacy First",
    description: "HIPAA-compliant security with end-to-end encryption",
    details: "Military-grade encryption and HIPAA compliance ensure your personal health information stays private.",
    color: "from-pink-500 to-rose-500",
  },
]

export default function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)

  return (
    <section ref={ref} className="py-24 bg-black" id="features">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-light text-white mb-6">Powerful Features</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            VitaMind combines cutting-edge AI technology with deep understanding of mental health to deliver features
            that truly make a difference in your daily life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              onHoverStart={() => setHoveredFeature(index)}
              onHoverEnd={() => setHoveredFeature(null)}
            >
              <div className="relative bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-800 hover:border-gray-600 transition-all duration-500 h-full overflow-hidden">
                {/* Animated Background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  initial={false}
                />

                {/* Floating Elements */}
                <motion.div
                  className="absolute top-4 right-4 w-20 h-20 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-xl"
                  animate={{
                    scale: hoveredFeature === index ? [1, 1.2, 1] : 1,
                    opacity: hoveredFeature === index ? [0.3, 0.6, 0.3] : 0.3,
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />

                {/* Icon */}
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 relative z-10`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                  {feature.title}
                </h3>

                <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Expandable Details */}
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: hoveredFeature === index ? "auto" : 0,
                    opacity: hoveredFeature === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 border-t border-gray-700">
                    <p className="text-sm text-blue-300">{feature.details}</p>
                  </div>
                </motion.div>

                {/* Hover Indicator */}
                <motion.div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color}`}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: hoveredFeature === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ originX: 0 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature Highlights */}
        <motion.div
          className="mt-20 grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1 }}
        >
          {[
            {
              icon: Zap,
              title: "Lightning Fast",
              description: "Sub-second response times for critical support moments",
            },
            {
              icon: Heart,
              title: "Empathetic AI",
              description: "Emotional intelligence that understands your unique needs",
            },
            {
              icon: Brain,
              title: "Continuous Learning",
              description: "AI that evolves and improves with every interaction",
            },
          ].map((highlight, index) => (
            <motion.div
              key={index}
              className="text-center group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <highlight.icon className="w-8 h-8 text-blue-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">{highlight.title}</h4>
              <p className="text-gray-400 text-sm">{highlight.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
