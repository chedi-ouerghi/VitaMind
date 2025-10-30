"use client"

import { motion, useInView } from "framer-motion"
import { Brain, Clock, Lock, ShieldCheck, Users, Zap } from "lucide-react"
import { useRef } from "react"

const benefits = [
  {
    icon: Clock,
    title: "Always Available",
    description: "Get instant support 24/7 — because mental health doesn't follow a schedule.",
    compare: "Unlike others, VitaMind never sleeps.",
    badge: "24/7 Access",
  },
  {
    icon: Brain,
    title: "Emotionally Intelligent",
    description: "AI that listens and responds with empathy, not just data.",
    compare: "Others rely on scripts — we adapt to your emotions.",
    badge: "Human-like AI",
  },
  {
    icon: Lock,
    title: "Privacy First",
    description: "Your data stays yours. End-to-end encryption ensures your journey remains private.",
    compare: "Most apps track you — we protect you.",
    badge: "GDPR+ Secure",
  },
  {
    icon: Zap,
    title: "Rapid Response",
    description: "Immediate personalized help when you need it most.",
    compare: "Fastest emotional response system in its class.",
    badge: "Instant Support",
  },
  {
    icon: Users,
    title: "Care Network",
    description: "Seamlessly connects with real professionals — on your terms.",
    compare: "Unlike others, we connect AI and humans.",
    badge: "Best Choice 2025",
  },
]

export default function BenefitsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      ref={ref}
      className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(120deg, #f7fafc 60%, #e3b01c10 100%)" }}
    >
      {/* Background Animations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 w-[40%] h-[40%] bg-gradient-to-br from-[#518591]/20 to-transparent rounded-full blur-[120px]"
          animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-gradient-to-tl from-[#e3b01c]/20 to-transparent rounded-full blur-[150px]"
          animate={{ scale: [1.1, 0.9, 1.1], opacity: [0.1, 0.25, 0.1] }}
          transition={{ duration: 9, repeat: Infinity }}
        />
      </div>

      <div className="relative container mx-auto px-6">
        {/* Title Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-light text-[#518591] mb-6">
            The{" "}
            <span className="bg-gradient-to-r from-[#518591] to-[#e3b01c] bg-clip-text text-transparent font-medium">
              VitaMind
            </span>{" "}
            Advantage
          </h2>
          <p className="text-lg md:text-xl text-[#518591]/80 max-w-3xl mx-auto">
            Discover what makes us different — from emotional intelligence to privacy-first innovation.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                y: -8,
                scale: 1.03,
                boxShadow: "0px 20px 40px rgba(81,133,145,0.15)",
              }}
              className="group relative bg-white/80 backdrop-blur-xl border border-[#518591]/10 rounded-3xl p-8 shadow-md transition-all duration-300 overflow-hidden"
            >
              {/* Gradient Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#518591]/5 via-transparent to-[#e3b01c]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
              />

              {/* Icon */}
              <div className="relative z-10 flex items-center justify-between mb-6">
                <motion.div
                  className="w-14 h-14 bg-gradient-to-br from-[#518591] to-[#e3b01c] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
                >
                  <benefit.icon className="w-7 h-7 text-white" />
                </motion.div>
                <span className="text-xs font-semibold text-white bg-[#518591]/90 px-3 py-1 rounded-full uppercase tracking-wide shadow-sm">
                  {benefit.badge}
                </span>
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-semibold text-[#518591] mb-3 group-hover:text-[#e3b01c] transition-colors">
                {benefit.title}
              </h3>
              <p className="text-[#518591]/80 mb-4 leading-relaxed">{benefit.description}</p>

              {/* Comparison Reveal */}
              <motion.div
                className="opacity-0 group-hover:opacity-100 text-sm text-[#e3b01c]/90 italic transition-opacity duration-500"
              >
                {benefit.compare}
              </motion.div>

              {/* Floating Accent */}
              <motion.div
                className="absolute bottom-5 right-5 text-[#e3b01c]"
                animate={{ y: [0, -5, 0], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                <ShieldCheck className="w-5 h-5" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
