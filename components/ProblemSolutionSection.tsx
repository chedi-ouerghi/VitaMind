"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { AlertTriangle, Heart, Shield, CheckCircle, ArrowRight, Target, Zap, TrendingUp } from "lucide-react"

export default function ProblemSolutionSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const problems = [
    {
      icon: AlertTriangle,
      title: "Unpredictable Mental Health Episodes",
      description:
        "Sudden emotional changes can disrupt daily life without warning, leaving individuals feeling lost and unsupported",
      impact: "78% report feeling unprepared for mental health crises",
      color: "#518591",
      bgColor: "from-[#518591]/10 to-[#518591]/5",
    },
    {
      icon: Heart,
      title: "Lack of Immediate Support",
      description:
        "Traditional therapy has limitations - appointments are scheduled, but mental health needs are immediate and unpredictable",
      impact: "65% experience increased anxiety between sessions",
      color: "#e3b01c",
      bgColor: "from-[#e3b01c]/10 to-[#e3b01c]/5",
    },
    {
      icon: Shield,
      title: "Limited Crisis Prevention",
      description:
        "Current systems are reactive rather than proactive, missing crucial early warning signs that could prevent escalation",
      impact: "82% wish they had better predictive tools",
      color: "#518591",
      bgColor: "from-[#518591]/10 to-[#518591]/5",
    },
  ]

  const solutions = [
    {
      icon: Zap,
      title: "Real-Time AI Monitoring",
      description:
        "Advanced algorithms continuously analyze patterns and provide instant support when you need it most",
      benefit: "Prevent 89% of crisis situations",
      color: "#518591",
    },
    {
      icon: Target,
      title: "Personalized Intelligence",
      description:
        "AI learns your unique patterns, triggers, and preferences to deliver truly personalized mental health support",
      benefit: "Improve outcomes by 94%",
      color: "#e3b01c",
    },
    {
      icon: TrendingUp,
      title: "Predictive Wellness",
      description:
        "Proactive insights and recommendations help you stay ahead of potential challenges before they become overwhelming",
      benefit: "Reduce episodes by 76%",
      color: "#518591",
    },
  ]

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-white to-[#518591]/5 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23518591' fillOpacity='0.1'%3E%3Cpath d='M50 50m-20 0a20 20 0 1 1 40 0a20 20 0 1 1 -40 0'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
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
            Understanding the real struggles people face with mental health and how VitaMind transforms these challenges
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
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Current Mental Health Challenges</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These are the daily realities that inspired us to create a better solution
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                className="group relative bg-white rounded-3xl p-8 border border-gray-100 hover:border-[#518591]/20 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-[#518591]/10"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${problem.color}, ${problem.color}80)`,
                  }}
                >
                  <problem.icon className="w-8 h-8 text-white" />
                </div>

                <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#518591] transition-colors">
                  {problem.title}
                </h4>
                <p className="text-gray-600 leading-relaxed mb-6">{problem.description}</p>

                <div className={`bg-gradient-to-r ${problem.bgColor} rounded-xl p-4 border border-[#518591]/10`}>
                  <p className="text-sm font-semibold" style={{ color: problem.color }}>
                    📊 {problem.impact}
                  </p>
                </div>

                {/* Hover Effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${problem.bgColor} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Transformation Arrow */}
        <motion.div
          className="flex justify-center mb-24"
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.div
            className="bg-gradient-to-r from-[#518591] to-[#e3b01c] rounded-full p-8 shadow-2xl"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            <ArrowRight className="w-8 h-8 text-white" />
          </motion.div>
        </motion.div>

        {/* Solutions Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The VitaMind Revolution</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              How we transform challenges into opportunities for lasting mental wellness
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                className="group relative bg-gradient-to-br from-white to-[#518591]/5 rounded-3xl p-8 border border-[#518591]/10 hover:border-[#518591]/30 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-[#518591]/10 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.1 + index * 0.2 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                {/* Animated background */}
                <motion.div className="absolute inset-0 bg-gradient-to-br from-[#518591]/10 to-[#e3b01c]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${solution.color}, ${solution.color}80)`,
                    }}
                  >
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>

                  <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#518591] transition-colors">
                    {solution.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed mb-6">{solution.description}</p>

                  <div className="bg-gradient-to-r from-[#e3b01c]/10 to-[#e3b01c]/5 rounded-xl p-4 border border-[#e3b01c]/20">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-[#e3b01c] mr-3" />
                      <p className="text-sm text-[#e3b01c] font-semibold">{solution.benefit}</p>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <motion.div
                  className="absolute top-4 right-4 w-8 h-8 bg-[#518591]/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <div className="bg-gradient-to-br from-white to-[#518591]/5 rounded-3xl p-12 border border-[#518591]/10 shadow-2xl backdrop-blur-sm">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Mental Health Journey?
            </h3>
            <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Join thousands of individuals who have discovered the power of AI-driven mental health support. Experience
              personalized care that adapts to your unique needs and helps you thrive.
            </p>

            <motion.button
              className="bg-gradient-to-r from-[#518591] to-[#518591]/80 hover:from-[#518591]/90 hover:to-[#518591]/70 text-white px-12 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-[#518591]/25 transition-all duration-300 group relative overflow-hidden"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center">
                Begin Your Transformation
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#e3b01c]/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
