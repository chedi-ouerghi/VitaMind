"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Clock, Zap, TrendingDown, Users, Brain, Heart } from "lucide-react"

const benefits = [
  {
    icon: Clock,
    title: "Always Available",
    description: "24/7 support whenever you need it most",
    gradient: "from-violet-500 to-purple-500",
    bgGradient: "from-violet-50 to-purple-50",
  },
  {
    icon: Zap,
    title: "Instant Response",
    description: "Immediate support in critical moments",
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50",
  },
  {
    icon: TrendingDown,
    title: "Crisis Prevention",
    description: "Proactive intervention to prevent episodes",
    gradient: "from-indigo-500 to-violet-500",
    bgGradient: "from-indigo-50 to-violet-50",
  },
  {
    icon: Brain,
    title: "Personalized AI",
    description: "Learns your unique patterns and needs",
    gradient: "from-violet-600 to-purple-600",
    bgGradient: "from-violet-50 to-purple-50",
  },
  {
    icon: Heart,
    title: "Emotional Intelligence",
    description: "Understands context with empathy",
    gradient: "from-pink-500 to-rose-500",
    bgGradient: "from-pink-50 to-rose-50",
  },
  {
    icon: Users,
    title: "Care Network",
    description: "Connects you with healthcare providers",
    gradient: "from-purple-600 to-indigo-600",
    bgGradient: "from-purple-50 to-indigo-50",
  },
]

export default function BenefitsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      ref={ref}
      className="py-24 bg-white relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #ffffff 70%, #518591 100%)",
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%238B5CF6' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
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
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-4xl">🧠</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-light text-[#518591] mb-6">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-[#518591] to-[#e3b01c] bg-clip-text text-transparent">
              VitaMind
            </span>
            ?
          </h2>
          <p className="text-xl text-[#518591]/80 max-w-3xl mx-auto">
            Experience the next generation of mental health support with AI technology designed specifically for your
            wellbeing.
          </p>
        </motion.div>

        {/* Hexagonal Grid Layout */}
        <div className="relative max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div
                  className="relative bg-white rounded-3xl p-8 border border-[#518591]/10 hover:border-[#e3b01c] transition-all duration-500 h-full group-hover:shadow-2xl group-hover:shadow-[#e3b01c]/10"
                >
                  {/* Floating Icon */}
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-[#518591] to-[#e3b01c] rounded-2xl flex items-center justify-center mb-6 shadow-lg"
                    whileHover={{
                      scale: 1.1,
                      rotate: [0, -5, 5, 0],
                      y: [-5, -10, -5],
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <benefit.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-xl font-semibold text-[#518591] mb-4 group-hover:text-[#e3b01c] transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-[#518591]/80 group-hover:text-[#e3b01c] transition-colors leading-relaxed">
                    {benefit.description}
                  </p>

                  {/* Decorative Elements */}
                  <motion.div
                    className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#e3b01c]/20"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                  />

                  {/* Hover Effect Line */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#518591] to-[#e3b01c] rounded-b-3xl"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{ originX: 0 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="inline-flex items-center space-x-8 bg-white rounded-full px-8 py-4 border border-[#518591]/10">
            <div className="text-center">
              <div className="text-2xl font-bold text-[#518591]">98%</div>
              <div className="text-sm text-[#518591]/80">Accuracy</div>
            </div>
            <div className="w-px h-8 bg-[#518591]/10"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#e3b01c]">24/7</div>
              <div className="text-sm text-[#518591]/80">Available</div>
            </div>
            <div className="w-px h-8 bg-[#518591]/10"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#518591]">50k+</div>
              <div className="text-sm text-[#518591]/80">Users</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
