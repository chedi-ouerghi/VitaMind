"use client"

import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Brain, Cpu, Network, Play, Zap } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export default function HeroSection() {
  const fullText = "VitaMind Tracking Minds. Transforming Lives"
  const [displayText, setDisplayText] = useState("")
  const [currentTime, setCurrentTime] = useState("")
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  // Digital clock effect
  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const timeString = now.toLocaleTimeString('en-US', { 
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
      setCurrentTime(timeString)
    }
    
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  // Text animation
  useEffect(() => {
    let index = 0
    let animationId: number
    const startTime = performance.now()

    const animateText = (timestamp: number) => {
      const elapsed = timestamp - startTime
      const charactersToShow = Math.min(
        fullText.length,
        Math.floor(elapsed / 60) // Faster typing for modern feel
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
  }, [])

  // Futuristic floating elements
  const techElements = [
    { icon: Cpu, color: "#518591", delay: 0, size: "w-12 h-12", pattern: "hexagon" },
    { icon: Network, color: "#e3b01c", delay: 0.3, size: "w-14 h-14", pattern: "grid" },
    { icon: Zap, color: "#518591", delay: 0.6, size: "w-10 h-10", pattern: "circuit" },
    { icon: Brain, color: "#e3b01c", delay: 0.9, size: "w-16 h-16", pattern: "neural" },
  ]

  // Binary rain effect
  const BinaryRain = () => {
    const [binaryChars, setBinaryChars] = useState<Array<{id: number, char: string, left: number, speed: number}>>([])

    useEffect(() => {
      const chars = Array.from({ length: 25 }, (_, i) => ({
        id: i,
        char: Math.random() > 0.5 ? '1' : '0',
        left: Math.random() * 100,
        speed: 1 + Math.random() * 3
      }))
      setBinaryChars(chars)
    }, [])

    return (
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {binaryChars.map((item) => (
          <motion.div
            key={item.id}
            className="absolute text-[#518591]/10 font-mono text-sm"
            style={{ left: `${item.left}%` }}
            initial={{ top: '-20px' }}
            animate={{ top: '100%' }}
            transition={{
              duration: 10 / item.speed,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 5,
              ease: "linear"
            }}
          >
            {item.char}
          </motion.div>
        ))}
      </div>
    )
  }

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-[#518591]/3 to-[#e3b01c]/3 overflow-hidden will-change-transform"
      style={{ willChange: 'transform' }}
    >
      {/* Advanced Background Grid with Animation */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(#5185910a 1px, transparent 1px), linear-gradient(90deg, #5185910a 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            willChange: 'transform'
          }}
          animate={{ 
            backgroundPosition: ['0px 0px', '50px 50px']
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear"
          }}
        />
      </div>

      {/* Binary Rain Effect */}
      <BinaryRain />

      {/* Holographic Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#518591]/20 to-transparent"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#e3b01c]/20 to-transparent"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
        />
      </div>

      {/* Floating Tech Elements */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 overflow-hidden pointer-events-none">
        {techElements.map((element, index) => (
          <motion.div
            key={index}
            className={`absolute ${element.size} flex items-center justify-center`}
            style={{
              left: `${10 + index * 25}%`,
              top: `${15 + index * 25}%`,
              willChange: 'transform, opacity'
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              y: [0, -60, 0],
              rotate: [0, 180, 360],
              scale: [0, 1, 0.8],
              opacity: [0, 0.8, 0.6]
            }}
            transition={{
              duration: 15 + index * 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: element.delay,
              ease: "easeInOut",
            }}
          >
            <div
              className="w-full h-full rounded-2xl flex items-center justify-center backdrop-blur-sm border"
              style={{
                background: `linear-gradient(135deg, ${element.color}15, ${element.color}05)`,
                border: `1px solid ${element.color}25`,
                boxShadow: `0 8px 32px ${element.color}10`
              }}
            >
              <element.icon className="w-1/2 h-1/2" style={{ color: element.color }} />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Main Content */}
      <motion.div style={{ y, opacity }} className="relative z-10 text-center px-4 max-w-7xl mx-auto pt-20 will-change-transform">
        
        {/* Digital Status Bar */}
        <motion.div
          className="mb-8 flex justify-between items-center text-sm text-[#518591]/60 font-mono max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span>SYSTEM: ONLINE</span>
          <span>{currentTime}</span>
          <span>VitaMind: ACTIVE</span>
        </motion.div>

      

        {/* Enhanced Title with Glitch Effect */}
        <motion.div
          className="relative mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-gray-900 mb-8 leading-tight relative"
            style={{ willChange: 'opacity' }}
          >
            <span className="bg-gradient-to-r from-[#518591] via-gray-900 to-[#e3b01c] bg-clip-text text-transparent font-extralight tracking-tight">
              {displayText}
            </span>
            
            {/* Glitch Effect Layers */}
            <motion.span
              className="absolute top-0 left-0 bg-gradient-to-r from-[#518591] to-[#e3b01c] bg-clip-text text-transparent opacity-0"
              animate={{ 
                x: [0, -2, 2, 0],
                opacity: [0, 0.1, 0, 0]
              }}
              transition={{ 
                duration: 0.1,
                times: [0, 0.1, 0.2, 1],
                repeat: Number.POSITIVE_INFINITY,
                repeatDelay: 10
              }}
            >
              {displayText}
            </motion.span>
            
            <motion.span
              className="inline-block w-0.5 h-16 md:h-20 bg-[#e3b01c] ml-2"
              animate={{ 
                opacity: [1, 0, 1],
                scaleY: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 1, 
                repeat: Number.POSITIVE_INFINITY, 
                ease: "easeInOut" 
              }}
            />
          </motion.h1>
        </motion.div>

        {/* Enhanced Subtitle */}
        <motion.p
          className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
          style={{ willChange: 'transform, opacity' }}
        >
          Advanced neural network technology meets compassionate care. Experience the future of mental wellness with real-time emotional analysis and adaptive AI support.
        </motion.p>

        {/* Enhanced CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.8, ease: "easeOut" }}
          style={{ willChange: 'transform, opacity' }}
        >
          <motion.div 
            whileHover={{ scale: 1.05, y: -2 }} 
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <Button
              size="lg"
              className="relative overflow-hidden bg-gradient-to-r from-[#518591] to-[#518591]/90 hover:from-[#518591] hover:to-[#518591]/80 text-white px-8 py-6 text-lg rounded-2xl shadow-2xl hover:shadow-[#518591]/40 transition-all duration-300 group font-semibold border-0"
            >
              <span className="relative z-10 flex items-center">
                <Zap className="mr-3 w-5 h-5" />
                Initialize System
                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-[#e3b01c]/30 via-transparent to-[#e3b01c]/30 rounded-2xl"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </Button>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05, y: -2 }} 
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <a href="https://vitamindsurvey.vercel.app/" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="lg"
                className="relative overflow-hidden border-2 border-[#518591]/30 bg-white/80 text-[#518591] hover:bg-[#518591]/5 hover:border-[#518591]/50 px-8 py-6 text-lg rounded-2xl group shadow-xl backdrop-blur-sm font-semibold"
              >
                <span className="relative z-10 flex items-center">
                  <Play className="mr-3 w-5 h-5 group-hover:scale-110 transition-transform duration-200 text-[#e3b01c]" />
                  Take the Survey
                </span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-[#e3b01c]/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </Button>
            </a>
          </motion.div>
        </motion.div>

        {/* Tech Specs */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto text-sm text-[#518591]/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.2 }}
        >
          <div className="text-center p-3 rounded-lg bg-white/50 backdrop-blur-sm border border-[#518591]/10">
            <div className="font-bold text-[#518591]">Real-time Analysis</div>
            <div className="text-xs">Emotional AI</div>
          </div>
          <div className="text-center p-3 rounded-lg bg-white/50 backdrop-blur-sm border border-[#518591]/10">
            <div className="font-bold text-[#518591]">Neural Networks</div>
            <div className="text-xs">Deep Learning</div>
          </div>
          <div className="text-center p-3 rounded-lg bg-white/50 backdrop-blur-sm border border-[#518591]/10">
            <div className="font-bold text-[#518591]">24/7 Support</div>
            <div className="text-xs">Always Active</div>
          </div>
          <div className="text-center p-3 rounded-lg bg-white/50 backdrop-blur-sm border border-[#518591]/10">
            <div className="font-bold text-[#518591]">Quantum Encrypted</div>
            <div className="text-xs">Maximum Security</div>
          </div>
        </motion.div>
      </motion.div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        style={{ willChange: 'transform' }}
      >
        <div className="w-6 h-10 border border-[#518591]/30 rounded-full flex justify-center backdrop-blur-sm bg-white/20">
          <motion.div
            className="w-0.5 h-3 bg-[#e3b01c] rounded-full mt-2"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  )
}