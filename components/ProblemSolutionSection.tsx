"use client"

import { motion, useInView } from "framer-motion"
import { AlertTriangle, ArrowRight, CheckCircle, Heart, Shield, Target, TrendingUp, Zap } from "lucide-react"
import { useRef } from "react"

export default function ProblemSolutionSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const problems = [
    {
      icon: AlertTriangle,
      title: "Lack of Information",
      description:
        "With so much mental health advice, it's overwhelming to know what's reliable and what actually works for you",
      impact: "76% feel overwhelmed by mental health information",
      color: "#518591",
      bgColor: "from-[#518591]/10 to-[#518591]/5",
    },
    {
      icon: Heart,
      title: "Limited Emotional Support",
      description:
        "When anxiety or depression hits, immediate support isn't always available. Friends and family want to help but don't always know how",
      impact: "89% need support outside therapy hours",
      color: "#e3b01c",
      bgColor: "from-[#e3b01c]/10 to-[#e3b01c]/5",
    },
    {
      icon: Shield,
      title: "Access to Professional Help",
      description:
        "Traditional therapy can be expensive, hard to access, and often comes with long waiting times when you need help most",
      impact: "71% face barriers accessing mental health care",
      color: "#518591",
      bgColor: "from-[#518591]/10 to-[#518591]/5",
    },
  ]

  const solutions = [
    {
      icon: Zap,
      title: "AI-Powered",
      description:
        "Get clear, personalized guidance backed by science. Our AI filters through the noise to give you exactly what you need, when you need it",
      benefit: "93% found clearer mental health direction",
      color: "#518591",
    },
    {
      icon: Target,
      title: "24/7 Companion",
      description:
        "A supportive presence whenever you need it. Our AI adapts to your needs, offering empathetic listening and evidence-based coping strategies",
      benefit: "88% felt less alone in their journey",
      color: "#e3b01c",
    },
    {
      icon: TrendingUp,
      title: "Accessible Expert Support",
      description:
        "Professional-grade mental health support at your fingertips, available instantly and affordably through advanced AI technology",
      benefit: "94% gained better access to support",
      color: "#518591",
    },
  ]

  return (
    <section
      ref={ref}
      className="relative py-24 overflow-hidden bg-gradient-to-br from-white via-gray-50 to-[#518591]/10"
    >
      {/* Enhanced background with layered effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-white/85" />
        <motion.div
          className="absolute top-0 left-0 w-1/4 h-1/4 bg-gradient-to-br from-[#518591]/20 to-transparent rounded-full blur-[100px]"
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-[#e3b01c]/20 to-transparent rounded-full blur-[120px]"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23e3b01c' fill-opacity='0.05'%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3C/g%3E%3C/svg%3E')] opacity-15" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
        {/* Header with Creative Typography */}
      <motion.div
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#518591] to-[#e3b01c] rounded-3xl mb-8 shadow-2xl"
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <Heart className="w-10 h-10 text-white" />
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-light text-gray-900 mb-8">
            From{" "}
            <span className="bg-gradient-to-r from-[#518591] to-[#518591]/70 bg-clip-text text-transparent">
              Challenges
            </span>{" "}
            to{" "}
            <span className="bg-gradient-to-r from-[#e3b01c] to-[#e3b01c]/70 bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Understanding the real struggles people face with Bipolar , schizophrene, ADHD and how VitaMind transforms these challenges
            into opportunities for growth, healing, and lasting wellness.
          </p>
   
</motion.div>
      

       {/* Problems Section */}
<motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
        <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Current Mental Health Challenges
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real challenges faced by real people in their mental health journey
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
  <motion.div
    key={index}
    className="relative bg-white rounded-2xl p-6 border-l-8 border-b-8 border-[#518591] hover:border-[#e3b01c] transition-all duration-400 shadow-lg hover:shadow-xl overflow-hidden"
    initial={{ opacity: 0, x: -20 }}
    animate={isInView ? { opacity: 1, x: 0 } : {}}
    transition={{ duration: 0.7, delay: 0.4 + index * 0.1 }}
    whileHover={{ scale: 1.03, y: -5 }}
  >
    <div className="flex items-center mb-4">
      <motion.div
        className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
        style={{
          background: `linear-gradient(135deg, ${problem.color}, ${problem.color}60)`,
        }}
        whileHover={{ rotate: 360 }}
        transition={{ duration: 1 }}
      >
        <problem.icon className="w-6 h-6 text-white" />
      </motion.div>
      <h4 className="text-lg font-medium text-gray-900">{problem.title}</h4>
    </div>
    <p className="text-sm text-gray-600 mb-4">{problem.description}</p>
    <div className="bg-gradient-to-r from-white to-[#518591]/10 p-3 rounded-lg flex items-center">
      <CheckCircle className="w-4 h-4 text-[#518591] mr-2" />
      <span className="text-xs font-medium text-gray-700">{problem.impact}</span>
    </div>
    <motion.div
      className="absolute top-2 right-2 w-8 h-8 bg-[#518591]/20 rounded-full opacity-0 hover:opacity-100"
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
  </motion.div>
))}

          </div>
        </motion.div>

        {/* Transformation Arrow with Dynamic Effect */}
        <motion.div
          className="flex justify-center mb-20"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.9 }}
        >
          <motion.div
            className="w-16 h-16 bg-gradient-to-br from-[#518591] to-[#e3b01c] rounded-full flex items-center justify-center shadow-md"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          >
            <ArrowRight className="w-8 h-8 text-white" />
          </motion.div>
        </motion.div>

        {/* Solutions Section with Vertical Staggered Layout */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="text-center mb-14">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">VitaMind Revolution</h3>
            <p className="text-md md:text-lg text-gray-600 max-w-xl mx-auto">How we transform challenges into opportunities for mental wellness</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                className="relative bg-gradient-to-br from-[#e3b01c]/5 to-[#518591]/5 rounded-xl p-6 border border-[#e3b01c]/20 hover:border-[#518591] transition-all duration-400 shadow-md hover:shadow-2xl"
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 1.1 + index * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#e3b01c]/10 to-[#518591]/10 opacity-0 hover:opacity-50 transition-opacity duration-500"
                />
                <div className="relative z-10">
                  <div
                    className="w-14 h-14 rounded-lg flex items-center justify-center mb-5 shadow-md"
                    style={{ background: `linear-gradient(135deg, ${solution.color}, ${solution.color}70)` }}
                  >
                    <solution.icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-lg font-medium text-gray-900 mb-3">{solution.title}</h4>
                  <p className="text-sm text-gray-600 mb-4">{solution.description}</p>
                  <div className="bg-white/80 p-3 rounded-lg flex items-center">
                    <Target className="w-4 h-4 text-[#e3b01c] mr-2" />
                    <span className="text-xs font-medium text-gray-800">{solution.benefit}</span>
                  </div>
                </div>
                <motion.div
                  className="absolute bottom-2 left-2 w-10 h-10 bg-[#e3b01c]/20 rounded-full opacity-0 hover:opacity-100"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}