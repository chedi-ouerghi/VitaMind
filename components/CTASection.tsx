"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Shield, Lock, Clock } from "lucide-react"
import { Input } from "./ui/input"

export default function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // Fix hydration: generate particle positions only on client
  const [particles, setParticles] = useState<{ left: number; top: number }[]>([])
  
  // Timer state
  const [timeLeft, setTimeLeft] = useState(15 * 60) // 15 minutes in seconds

  // Form state
  const [email, setEmail] = useState("")

  useEffect(() => {
    // Generate positions only on client
    setParticles(
      Array.from({ length: 24 }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
      }))
    )

    // Timer countdown
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Email submitted:", email)
    // You can add your form submission logic here
  }

  return (
    <section
      ref={ref}
      className="relative py-24 overflow-hidden min-h-[70vh] flex items-center"
      style={{
        background: "linear-gradient(135deg, #ffffff 70%, #518591 100%)"
      }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-[#518591]/20 via-transparent to-transparent rounded-full blur-[120px]"
          animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-gradient-to-tl from-[#e3b01c]/20 via-transparent to-transparent rounded-full blur-[140px]"
          animate={{ scale: [1.1, 0.9, 1.1], opacity: [0.1, 0.22, 0.1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="relative container mx-auto px-4 text-center max-w-4xl">
        <motion.h2
          className="text-5xl md:text-6xl lg:text-7xl font-light text-[#518591] mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          Ready to transform your{" "}
          <span className="block bg-gradient-to-r from-[#518591] to-[#e3b01c] bg-clip-text text-transparent font-medium">
            mental health journey?
          </span>
        </motion.h2>

        <motion.p
          className="text-xl text-[#518591]/80 mb-12 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Join thousands of people improving their mental wellbeing with AI-powered support that understands and grows with you.
        </motion.p>

        {/* Timer Section */}
        <motion.div
          className="mb-12 p-6 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-[#518591]/10 max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="flex items-center justify-center gap-2 text-[#518591] font-semibold text-lg mb-2">
            <Clock className="w-5 h-5 text-[#e3b01c]" />
            <span>Offre spéciale : 14 jours gratuits</span>
          </div>
          <div className="text-[#e3b01c] font-bold text-2xl">
            {formatTime(timeLeft)}
          </div>
        </motion.div>

        {/* Email Form */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 py-6 px-6 text-lg rounded-2xl border-2 border-[#518591]/20 focus:border-[#518591] focus:ring-2 focus:ring-[#518591]/20 shadow-lg bg-white/80 backdrop-blur-sm"
            />
            <Button
              type="submit"
              size="lg"
              className="bg-gradient-to-r from-[#518591] to-[#518591]/90 hover:from-[#518591] hover:to-[#e3b01c] text-white px-8 py-6 text-lg rounded-2xl shadow-xl transition-all duration-300 font-semibold min-w-[200px] hover:shadow-[#e3b01c]/25"
            >
              <span className="relative z-10 flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </span>
            </Button>
          </form>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-6 mb-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[
            { icon: Lock, text: "Sécurisé par SSL" },
            { icon: Shield, text: "Données cryptées" },
            { icon: Sparkles, text: "Confidentiel" },
          ].map((badge, index) => (
            <div key={index} className="flex items-center gap-2 text-[#518591]/70">
              <badge.icon className="w-4 h-4" />
              <span className="text-sm font-medium">{badge.text}</span>
            </div>
          ))}
        </motion.div>

        <motion.p
          className="text-[#518591]/60 text-sm font-medium"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          No credit card required • 14-day free trial • Cancel anytime
        </motion.p>
      </div>
    </section>
  )
}