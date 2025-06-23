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

  // Optimized scroll effects with will-change
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  // Optimized text animation with requestAnimationFrame
  useEffect(() => {
    let index = 0
    let animationId: number
    const startTime = performance.now()

    const animateText = (timestamp: number) => {
      const elapsed = timestamp - startTime
      const charactersToShow = Math.min(
        fullText.length,
        Math.floor(elapsed / 80)
      )
      
      if (charactersToShow > index) {
        setDisplayText(fullText.slice(0, charactersToShow))
        index = charactersToShow
      }

      if (index < fullText.length) {
        animationId = requestAnimationFrame(animateText)
      }
    }

    animationId = requestAnimationFrame(animateText)

    return () => cancelAnimationFrame(animationId)
  }, [fullText])

  // Memoized floating elements configuration
  const floatingElements = [
    { icon: Brain, color: "#518591", delay: 0, size: "w-16 h-16 md:w-20 md:h-20" },
    { icon: Heart, color: "#e3b01c", delay: 0.5, size: "w-14 h-14 md:w-18 md:h-18" },
    { icon: Shield, color: "#518591", delay: 1, size: "w-18 h-18 md:w-22 md:h-22" },
  ]

  // Stats cards data
  const stats = [
    { number: "24/7", label: "AI Support", icon: "🤖", gradient: "from-[#518591] to-[#518591]/70" },
    { number: "98%", label: "Accuracy Rate", icon: "🎯", gradient: "from-[#e3b01c] to-[#e3b01c]/70" },
    { number: "50k+", label: "Lives Transformed", icon: "✨", gradient: "from-[#518591] to-[#e3b01c]" },
  ]

  return (
    <section
      ref={ref}
className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-[#518591]/5 to-[#e3b01c]/5 overflow-hidden will-change-transform"
      style={{ willChange: 'transform' }}
    >
      {/* Optimized Background Grid */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23518591' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
            willChange: 'transform'
          }}
        />
      </div>

      {/* Optimized Floating Elements */}
      <motion.div 
        style={{ y, opacity }} 
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            className={`absolute ${element.size} flex items-center justify-center`}
            style={{
              left: `${15 + index * 30}%`,
              top: `${20 + index * 20}%`,
              willChange: 'transform, opacity'
            }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              y: [0, -40, 0],
              rotate: [0, 180, 360],
              scale: [0.8, 1, 0.8],
              opacity: [0, 1, 0.8]
            }}
            transition={{
              duration: 12 + index * 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: element.delay,
              ease: "easeInOut",
            }}
          >
            <div
              className={`w-full h-full rounded-2xl flex items-center justify-center shadow-lg backdrop-blur-sm`}
              style={{
                background: `linear-gradient(135deg, ${element.color}20, ${element.color}10)`,
                border: `1px solid ${element.color}30`,
              }}
            >
              <element.icon className="w-1/3 h-1/3" style={{ color: element.color }} />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Main Content */}
      <motion.div 
        style={{ y, opacity }} 
        className="relative z-10 text-center px-4 max-w-7xl mx-auto pt-20 will-change-transform"
      >
        {/* Badge */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "backOut" }}
        >
          <span className="inline-flex items-center px-6 py-3 bg-white/80 bg-gradient-to-r from-[#518591]/10 to-[#e3b01c]/10 border border-[#518591]/20 rounded-full text-[#518591] font-semibold backdrop-blur-sm shadow-lg">
            <Sparkles className="w-5 h-5 mr-2 text-[#e3b01c]" />
            Next-Generation Mental Health AI
            <motion.div
              className="ml-2 w-2 h-2 bg-[#e3b01c] rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              style={{ willChange: 'transform' }}
            />
          </span>
        </motion.div>

        {/* Main Title - Optimized for performance */}
        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-gray-900 mb-8 leading-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{ willChange: 'opacity' }}
        >
          <span className="bg-gradient-to-r from-[#518591] via-gray-900 to-[#e3b01c] bg-clip-text text-transparent font-extralight">
            {displayText}
          </span>
          <motion.span
            className="inline-block w-1 h-16 md:h-20 bg-[#e3b01c] ml-2"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            style={{ willChange: 'opacity' }}
          />
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
          style={{ willChange: 'transform, opacity' }}
        >
          Empowering individuals with intelligent, compassionate AI that understands emotional patterns and provides
          <span className="text-[#518591] font-semibold"> real-time support</span> for mental wellness.
        </motion.p>

        {/* CTA Buttons - Optimized hover effects */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.8, ease: "easeOut" }}
          style={{ willChange: 'transform, opacity' }}
        >
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <Button
              size="lg"
              className="relative overflow-hidden bg-gradient-to-r from-[#518591] to-[#518591]/90 hover:from-[#518591] hover:to-[#518591]/80 text-white px-8 py-6 text-lg rounded-2xl shadow-xl hover:shadow-[#518591]/30 transition-all duration-300 group font-semibold border-0"
            >
              <span className="relative z-10 flex items-center">
                Start Your Journey
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-[#e3b01c]/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ x: '-100%' }}
                whileHover={{ x: '0%' }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            </Button>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <Button
              variant="outline"
              size="lg"
              className="relative overflow-hidden border-2 border-[#518591]/30 bg-white/80 text-[#518591] hover:bg-[#518591]/5 hover:border-[#518591]/50 px-8 py-6 text-lg rounded-2xl group shadow-lg backdrop-blur-sm font-semibold"
            >
              <span className="relative z-10 flex items-center">
                <Play className="mr-3 w-5 h-5 group-hover:scale-110 transition-transform duration-200 text-[#e3b01c]" />
                Watch Demo
              </span>
              <motion.div 
                className="absolute inset-0 bg-[#e3b01c]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </Button>
          </motion.div>
        </motion.div>

        {/* Stats Cards - Optimized layout and animations */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.2, staggerChildren: 0.1 }}
          style={{ willChange: 'transform, opacity' }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2.4 + index * 0.15 }}
              whileHover={{ scale: 1.03, y: -5 }}
              style={{ willChange: 'transform, opacity' }}
            >
              <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 border border-[#518591]/10 shadow-lg hover:shadow-xl hover:shadow-[#518591]/10 transition-all duration-300 h-full">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div
                  className={`text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}
                >
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium text-lg">{stat.label}</div>
                
                {/* Subtle hover effect */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-[#518591]/5 to-[#e3b01c]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0.9 }}
                  whileHover={{ scale: 1 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator - Optimized animation */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        style={{ willChange: 'transform' }}
      >
        <div className="w-6 h-10 border-2 border-[#518591]/30 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-[#e3b01c] rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            style={{ willChange: 'transform' }}
          />
        </div>
      </motion.div>
    </section>
  )
}