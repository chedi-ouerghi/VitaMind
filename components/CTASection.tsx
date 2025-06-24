"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Shield, Heart } from "lucide-react"

export default function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // Fix hydration: generate particle positions only on client
  const [particles, setParticles] = useState<{ left: number; top: number }[]>([])

  useEffect(() => {
    // Generate positions only on client
    setParticles(
      Array.from({ length: 24 }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
      }))
    )
  }, [])

  return (
    <section
      ref={ref}
      className="relative py-32 overflow-hidden min-h-[80vh] flex items-center"
      style={{
        background: "linear-gradient(120deg, #f7fafc 60%, #e3b01c10 100%)"
      }}
    >
      {/* Modern colorful background overlays */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft white overlay for "white but colorful" look */}
        <div className="absolute inset-0 bg-white/80" />
        {/* Subtle color gradients */}
        <motion.div
          className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-[#518591]/20 via-transparent to-transparent rounded-full blur-[120px]"
          animate={{ scale: [1, 1.1, 1], opacity: [0.18, 0.28, 0.18] }}
          transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-gradient-to-tl from-[#e3b01c]/20 via-transparent to-transparent rounded-full blur-[140px]"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.12, 0.22, 0.12] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-[18rem] h-[18rem] bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2"
          animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.18, 0.08] }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
        />
        {/* Subtle dark overlay for depth */}
        <div className="absolute inset-0 bg-neutral-900/5" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((pos, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full shadow-lg"
            style={{
              left: `${pos.left}%`,
              top: `${pos.top}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.7, 0.2],
            }}
            transition={{
              duration: 3.5 + (i % 12) * 0.2,
              repeat: Number.POSITIVE_INFINITY,
              delay: (i % 12) * 0.1,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center max-w-5xl">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-6 py-3 bg-[#e3b01c]/10 border border-[#e3b01c]/30 rounded-full text-base text-[#518591] mb-8 shadow-xl backdrop-blur-md font-semibold tracking-wide">
            <Sparkles className="inline w-5 h-5 mr-2 text-[#e3b01c]" />
            Join the mental health revolution
          </span>
        </motion.div>

        <motion.h2
          className="text-4xl md:text-6xl lg:text-7xl font-light text-[#518591] mb-8 drop-shadow-xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          Ready to transform your
          <span className="block bg-gradient-to-r from-[#518591] to-[#e3b01c] bg-clip-text text-transparent font-semibold drop-shadow-lg">
            mental health journey?
          </span>
        </motion.h2>

        <motion.p
          className="text-xl md:text-2xl text-[#518591] mb-14 max-w-3xl mx-auto leading-relaxed backdrop-blur-sm bg-white/80 rounded-xl px-6 py-4 shadow-lg"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Join thousands of people who have already discovered the power of AI-driven mental health support. Start your journey with VitaMind today.
        </motion.p>

        {/* Feature highlights */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {[
            {
              icon: Shield,
              title: "100% Private",
              description: "Your data stays secure and confidential",
            },
            {
              icon: Heart,
              title: "Personalized Care",
              description: "AI that adapts to your unique needs",
            },
            {
              icon: Sparkles,
              title: "Proven Results",
              description: "Clinically validated effectiveness",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white/80 backdrop-blur-lg rounded-2xl border border-[#518591]/10 shadow-2xl hover:shadow-[#e3b01c]/30 transition-all duration-300 hover:scale-105"
              whileHover={{ scale: 1.08, y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#518591]/20 to-[#e3b01c]/20 rounded-xl flex items-center justify-center mb-4 shadow-md">
                <feature.icon className="w-7 h-7 text-[#518591]" />
              </div>
              <h3 className="text-[#518591] font-semibold mb-2 text-lg">{feature.title}</h3>
              <p className="text-[#518591]/80 text-base leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-8 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button
            size="lg"
            className="bg-[#518591] hover:bg-[#e3b01c] text-white px-14 py-7 text-xl rounded-full shadow-2xl hover:shadow-[#e3b01c]/25 transition-all duration-300 hover:scale-110 group font-semibold tracking-wide"
          >
            Start Free Trial
            <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform text-[#e3b01c]" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-[#518591] text-[#518591] hover:bg-[#e3b01c]/10 hover:text-[#e3b01c] px-10 py-7 text-lg rounded-full group shadow-lg font-semibold tracking-wide"
          >
            Schedule Demo
          </Button>
        </motion.div>

        <motion.p
          className="mt-12 text-[#518591] text-base backdrop-blur-sm bg-white/80 rounded-full inline-block px-8 py-3 shadow-md"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          No credit card required • 14-day free trial • Cancel anytime
        </motion.p>
      </div>
    </section>
  )
}
