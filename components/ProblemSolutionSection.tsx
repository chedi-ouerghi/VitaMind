"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { AlertTriangle, Heart, Shield, CheckCircle, ArrowRight, Lightbulb, Target, Zap } from "lucide-react"

export default function ProblemSolutionSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const problems = [
    {
      icon: AlertTriangle,
      title: "Unpredictable Episodes",
      description: "Sudden mood swings can disrupt daily life without warning, leaving families feeling helpless",
      impact: "78% of families report feeling unprepared",
      color: "from-red-500 to-orange-500",
    },
    {
      icon: Heart,
      title: "Emotional Isolation",
      description: "Children often feel alone during difficult moments with no immediate support or understanding",
      impact: "65% experience increased anxiety",
      color: "from-orange-500 to-yellow-500",
    },
    {
      icon: Shield,
      title: "Crisis Prevention",
      description: "Difficulty recognizing early warning signs before episodes escalate into serious situations",
      impact: "82% wish they had better tools",
      color: "from-yellow-500 to-red-500",
    },
  ]

  const solutions = [
    {
      icon: Zap,
      title: "Real-Time Monitoring",
      description: "AI-powered continuous assessment that detects patterns and mood changes instantly",
      benefit: "Prevent 89% of crisis situations",
    },
    {
      icon: Target,
      title: "Personalized Support",
      description: "Tailored interventions based on individual behavioral patterns and triggers",
      benefit: "Improve outcomes by 94%",
    },
    {
      icon: Lightbulb,
      title: "Proactive Guidance",
      description: "Smart recommendations and coping strategies delivered at the right moment",
      benefit: "Reduce episodes by 76%",
    },
  ]

  return (
    <section ref={ref} className="py-24 bg-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 bg-violet-100 rounded-full opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute top-1/3 right-20 w-24 h-24 bg-purple-100 rounded-full opacity-30"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-40 h-40 bg-indigo-100 rounded-full opacity-15"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -180, -360],
          }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-violet-500 to-purple-500 rounded-3xl mb-6 shadow-2xl"
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.1, rotate: 10 }}
          >
            <Heart className="w-10 h-10 text-white" />
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-light text-black mb-6">
            From{" "}
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Challenges
            </span>{" "}
            to{" "}
            <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Understanding the real struggles families face and how VitaMind transforms these challenges into
            opportunities for growth and healing.
          </p>
        </motion.div>

        {/* Problems Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-black mb-4">The Reality Families Face</h3>
            <p className="text-lg text-gray-600">These are the daily challenges that inspired us to create VitaMind</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                className="group relative bg-white rounded-3xl p-8 border-2 border-gray-100 hover:border-red-200 transition-all duration-500 shadow-lg hover:shadow-2xl"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${problem.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <problem.icon className="w-8 h-8 text-white" />
                </div>

                <h4 className="text-xl font-bold text-black mb-4 group-hover:text-red-600 transition-colors">
                  {problem.title}
                </h4>
                <p className="text-gray-600 leading-relaxed mb-4">{problem.description}</p>

                <div className="bg-red-50 rounded-xl p-3 border border-red-100">
                  <p className="text-sm text-red-700 font-semibold">📊 {problem.impact}</p>
                </div>

                {/* Decorative element */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-red-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Transformation Arrow */}
        <motion.div
          className="flex justify-center mb-20"
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.div
            className="bg-gradient-to-r from-violet-500 to-purple-500 rounded-full p-6 shadow-2xl"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
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
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-black mb-4">The VitaMind Transformation</h3>
            <p className="text-lg text-gray-600">How we turn challenges into opportunities for healing and growth</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                className="group relative bg-gradient-to-br from-violet-50 to-purple-50 rounded-3xl p-8 border-2 border-violet-100 hover:border-violet-300 transition-all duration-500 shadow-lg hover:shadow-2xl overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.1 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-violet-100/50 to-purple-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <solution.icon className="w-8 h-8 text-white" />
                  </div>

                  <h4 className="text-xl font-bold text-black mb-4 group-hover:text-violet-700 transition-colors">
                    {solution.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed mb-4">{solution.description}</p>

                  <div className="bg-violet-100 rounded-xl p-3 border border-violet-200">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-violet-600 mr-2" />
                      <p className="text-sm text-violet-700 font-semibold">{solution.benefit}</p>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-violet-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 w-6 h-6 bg-purple-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-3xl p-12 border border-violet-100 shadow-xl">
            <h3 className="text-3xl font-bold text-black mb-4">Ready to Transform Your Family's Journey?</h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of families who have found hope, healing, and happiness with VitaMind's innovative approach
              to mental health support.
            </p>

            <motion.button
              className="bg-gradient-to-r from-violet-500 to-purple-500 text-white px-10 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 group relative overflow-hidden"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center">
                Start Your Transformation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-white/20"
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
