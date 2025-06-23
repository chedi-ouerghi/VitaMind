"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Sparkles, Brain, Heart, Shield } from "lucide-react"

export default function HeroSection() {
  const [displayText, setDisplayText] = useState("")
  const fullText = "Transform Mental Health with AI-Powered Intelligence"
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 80)

    return () => clearInterval(timer)
  }, [])

  const floatingElements = [
    { icon: Brain, color: "#518591", delay: 0 },
    { icon: Heart, color: "#e3b01c", delay: 0.5 },
    { icon: Shield, color: "#518591", delay: 1 },
  ]

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-[#518591]/5 to-[#e3b01c]/5 overflow-hidden"
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23518591' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Floating Geometric Elements */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 overflow-hidden">
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{
              left: `${20 + index * 30}%`,
              top: `${20 + index * 20}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8 + index * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: element.delay,
              ease: "easeInOut",
            }}
          >
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-2xl backdrop-blur-sm"
              style={{
                background: `linear-gradient(135deg, ${element.color}20, ${element.color}10)`,
                border: `1px solid ${element.color}30`,
              }}
            >
              <element.icon className="w-8 h-8" style={{ color: element.color }} />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Main Content */}
      <motion.div style={{ y, opacity }} className="relative z-10 text-center px-4 max-w-7xl mx-auto pt-20">
        {/* Badge */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <span className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#518591]/10 to-[#e3b01c]/10 border border-[#518591]/20 rounded-full text-[#518591] font-semibold backdrop-blur-sm shadow-lg">
            <Sparkles className="w-5 h-5 mr-2 text-[#e3b01c]" />
            Next-Generation Mental Health AI
            <motion.div
              className="ml-2 w-2 h-2 bg-[#e3b01c] rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-light text-gray-900 mb-8 leading-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <span className="bg-gradient-to-r from-[#518591] via-gray-900 to-[#e3b01c] bg-clip-text text-transparent font-extralight">
            {displayText}
          </span>
          <motion.span
            className="inline-block w-1 h-16 md:h-20 bg-[#e3b01c] ml-2"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
          />
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          Empowering individuals with intelligent, compassionate AI that understands emotional patterns and provides
          <span className="text-[#518591] font-semibold"> real-time support</span> for mental wellness.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#518591] to-[#518591]/80 hover:from-[#518591]/90 hover:to-[#518591]/70 text-white px-10 py-6 text-lg rounded-2xl shadow-2xl hover:shadow-[#518591]/25 transition-all duration-300 group font-semibold border-0"
            >
              Start Your Journey
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <motion.div className="absolute inset-0 bg-gradient-to-r from-[#e3b01c]/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-[#518591]/30 text-[#518591] hover:bg-[#518591]/5 hover:border-[#518591] px-10 py-6 text-lg rounded-2xl group shadow-lg backdrop-blur-sm font-semibold"
            >
              <Play className="mr-3 w-5 h-5 group-hover:scale-110 transition-transform text-[#e3b01c]" />
              Watch Demo
            </Button>
          </motion.div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          {[
            { number: "24/7", label: "AI Support", icon: "🤖", gradient: "from-[#518591] to-[#518591]/70" },
            { number: "98%", label: "Accuracy Rate", icon: "🎯", gradient: "from-[#e3b01c] to-[#e3b01c]/70" },
            { number: "50k+", label: "Lives Transformed", icon: "✨", gradient: "from-[#518591] to-[#e3b01c]" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.7 + index * 0.2 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-[#518591]/10 shadow-xl hover:shadow-2xl hover:shadow-[#518591]/10 transition-all duration-500">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div
                  className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}
                >
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium text-lg">{stat.label}</div>

                {/* Hover Effect */}
                <motion.div className="absolute inset-0 bg-gradient-to-br from-[#518591]/5 to-[#e3b01c]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <div className="w-6 h-10 border-2 border-[#518591]/30 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-[#e3b01c] rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
        </div>
      </motion.div>
    </section>
  )
}
