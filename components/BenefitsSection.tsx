"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Clock, Zap, TrendingDown, Users, Brain, Heart } from "lucide-react"

const benefits = [
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Always there when you need support, day or night",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Zap,
    title: "Instant Response",
    description: "Immediate support and guidance in critical moments",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: TrendingDown,
    title: "Reduced Episodes",
    description: "Proactive intervention helps prevent crisis situations",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Brain,
    title: "Personalized AI",
    description: "Learns your unique patterns and adapts to your needs",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Heart,
    title: "Emotional Intelligence",
    description: "Understands context and responds with empathy",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Users,
    title: "Care Network",
    description: "Connects you with healthcare providers and loved ones",
    color: "from-indigo-500 to-purple-500",
  },
]

export default function BenefitsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-light text-white mb-6">Why Choose VitaMind?</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Experience the next generation of mental health support with AI technology designed specifically for bipolar
            disorder management.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300 h-full overflow-hidden group-hover:scale-105">
                {/* Gradient Background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  initial={false}
                />

                {/* Icon */}
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mb-6 relative`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <benefit.icon className="w-8 h-8 text-white" />
                  <motion.div
                    className="absolute inset-0 bg-white/20 rounded-2xl"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  />
                </motion.div>

                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-blue-300 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{benefit.description}</p>

                {/* Hover Effect */}
                <motion.div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
        >
          {[
            { number: "95%", label: "Accuracy Rate", description: "In mood pattern detection" },
            { number: "24/7", label: "Support", description: "Always available assistance" },
            { number: "60%", label: "Reduction", description: "In crisis episodes" },
            { number: "10k+", label: "Users", description: "Trust VitaMind daily" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-white font-medium mb-1">{stat.label}</div>
              <div className="text-sm text-gray-400">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
