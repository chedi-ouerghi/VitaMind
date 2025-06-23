"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Shield, Heart } from "lucide-react"

export default function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      ref={ref}
      className="relative py-32 bg-gradient-to-br from-gray-950 via-blue-950/40 to-purple-950/40 overflow-hidden min-h-[80vh] flex items-center"
    >
      {/* Futuristic glassmorphism background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[32rem] h-[32rem] bg-blue-500/20 rounded-full blur-[120px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[36rem] h-[36rem] bg-purple-500/20 rounded-full blur-[140px]"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.15, 0.4, 0.15] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-[18rem] h-[18rem] bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2"
          animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.25, 0.1] }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(24)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full shadow-lg"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.7, 0.2],
            }}
            transition={{
              duration: 3.5 + Math.random() * 2.5,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
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
          <span className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500/30 to-purple-500/30 border border-blue-500/40 rounded-full text-base text-blue-200 mb-8 shadow-xl backdrop-blur-md">
            <Sparkles className="inline w-5 h-5 mr-2" />
            Join the Mental Health Revolution
          </span>
        </motion.div>

        <motion.h2
          className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-8 drop-shadow-xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          Ready to Transform Your
          <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold drop-shadow-lg">
            Mental Health Journey?
          </span>
        </motion.h2>

        <motion.p
          className="text-xl md:text-2xl text-blue-100 mb-14 max-w-3xl mx-auto leading-relaxed backdrop-blur-sm bg-white/5 rounded-xl px-6 py-4 shadow-lg"
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
              className="flex flex-col items-center text-center p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-blue-500/10 shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105"
              whileHover={{ scale: 1.08, y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-xl flex items-center justify-center mb-4 shadow-md">
                <feature.icon className="w-7 h-7 text-blue-300" />
              </div>
              <h3 className="text-white font-semibold mb-2 text-lg">{feature.title}</h3>
              <p className="text-blue-100 text-base leading-relaxed">{feature.description}</p>
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
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-14 py-7 text-xl rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-110 group font-semibold tracking-wide"
          >
            Start Free Trial
            <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-blue-400 text-blue-200 hover:bg-blue-900/30 hover:text-white px-10 py-7 text-lg rounded-full group shadow-lg font-semibold tracking-wide"
          >
            Schedule Demo
          </Button>
        </motion.div>

        <motion.p
          className="mt-12 text-blue-200 text-base backdrop-blur-sm bg-white/5 rounded-full inline-block px-8 py-3 shadow-md"
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
