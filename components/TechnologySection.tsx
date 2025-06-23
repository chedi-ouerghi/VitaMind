"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { BarChart3, CheckCircle, ArrowRight, Heart, Star, Brain, Users, Target } from "lucide-react"

const testCategories = [
  {
    id: "emotional",
    title: "Emotional Assessment",
    icon: Heart,
    description: "Comprehensive emotional state evaluation for deeper understanding",
    tests: [
      "Mood stability tracking over 30 days",
      "Emotional response pattern analysis",
      "Stress trigger identification system",
      "Anxiety level measurement protocols",
      "Depression screening questionnaire",
    ],
    color: "from-violet-500 to-purple-500",
    bgColor: "from-violet-50 to-purple-50",
    stats: { accuracy: "94%", duration: "15 min", reports: "12+" },
  },
  {
    id: "behavioral",
    title: "Behavioral Analysis",
    icon: BarChart3,
    description: "Deep behavioral pattern recognition and lifestyle assessment",
    tests: [
      "Sleep pattern analysis and optimization",
      "Social interaction frequency tracking",
      "Daily routine stability assessment",
      "Activity level monitoring system",
      "Communication pattern evaluation",
    ],
    color: "from-purple-500 to-pink-500",
    bgColor: "from-purple-50 to-pink-50",
    stats: { accuracy: "96%", duration: "20 min", reports: "15+" },
  },
  {
    id: "cognitive",
    title: "Cognitive Evaluation",
    icon: Brain,
    description: "Mental processing and decision-making capability assessment",
    tests: [
      "Memory retention and recall testing",
      "Attention span measurement protocols",
      "Decision-making pattern analysis",
      "Problem-solving capability assessment",
      "Learning adaptation rate evaluation",
    ],
    color: "from-indigo-500 to-violet-500",
    bgColor: "from-indigo-50 to-violet-50",
    stats: { accuracy: "92%", duration: "25 min", reports: "18+" },
  },
]

export default function TechnologySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeCategory, setActiveCategory] = useState("emotional")
  const [expandedTests, setExpandedTests] = useState<string[]>([])

  const activeTest = testCategories.find((cat) => cat.id === activeCategory)

  const toggleTestExpansion = (test: string) => {
    setExpandedTests((prev) => (prev.includes(test) ? prev.filter((t) => t !== test) : [...prev, test]))
  }

  return (
    <section ref={ref} className="py-24 bg-white relative overflow-hidden" id="technology">
      {/* Animated Background Circles */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/4 left-1/6 w-50 h-50 bg-gradient-to-br from-violet-200/30 to-purple-200/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 right-1/5 w-50 h-50 bg-gradient-to-br from-purple-200/25 to-pink-200/25 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.25, 0.5, 0.25],
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-50 h-50 bg-gradient-to-br from-indigo-200/20 to-violet-200/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, 120, 0],
            y: [0, -80, 0],
          }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/3 w-50 h-50 bg-gradient-to-br from-violet-200/35 to-purple-200/35 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.35, 0.7, 0.35],
            x: [0, -60, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 16, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-violet-500 to-purple-500 rounded-3xl mb-6 shadow-2xl"
            initial={{ scale: 0, rotate: 180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <Users className="w-10 h-10 text-white" />
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-light text-black mb-6">
            Professional{" "}
            <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              Assessment
            </span>{" "}
            Tools
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Empower parents with comprehensive, scientifically-backed assessment tools designed by mental health
            professionals to understand and support their children's emotional well-being.
          </p>
        </motion.div>

        {/* Category Navigation */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {testCategories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`group relative flex flex-col items-center p-6 rounded-2xl border-2 transition-all duration-500 min-w-[200px] ${
                activeCategory === category.id
                  ? `bg-gradient-to-br ${category.color} text-white border-transparent shadow-2xl scale-105`
                  : "bg-white/80 backdrop-blur-sm text-gray-700 border-violet-200 hover:border-violet-300 hover:bg-violet-50/50 hover:scale-102"
              }`}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-all duration-300 ${
                  activeCategory === category.id ? "bg-white/20" : "bg-violet-100 group-hover:bg-violet-200"
                }`}
              >
                <category.icon
                  className={`w-6 h-6 ${activeCategory === category.id ? "text-white" : "text-violet-600"}`}
                />
              </div>
              <span className="font-semibold text-lg mb-1">{category.title}</span>
              <span
                className={`text-sm text-center leading-tight ${
                  activeCategory === category.id ? "text-white/80" : "text-gray-500"
                }`}
              >
                {category.description.split(" ").slice(0, 4).join(" ")}...
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Active Category Content */}
        {activeTest && (
          <motion.div
            key={activeCategory}
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Category Header */}
            <div className="text-center mb-12">
              <div
                className={`inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br ${activeTest.color} rounded-3xl mb-6 shadow-2xl`}
              >
                <activeTest.icon className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-black mb-4">{activeTest.title}</h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">{activeTest.description}</p>

              {/* Stats */}
              <div className="flex justify-center gap-8 mt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-violet-600">{activeTest.stats.accuracy}</div>
                  <div className="text-sm text-gray-500">Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">{activeTest.stats.duration}</div>
                  <div className="text-sm text-gray-500">Duration</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-600">{activeTest.stats.reports}</div>
                  <div className="text-sm text-gray-500">Reports</div>
                </div>
              </div>
            </div>

            {/* Assessment Tests Grid */}
            <div
              className={`bg-gradient-to-br ${activeTest.bgColor} rounded-3xl p-8 border border-violet-100 shadow-2xl`}
            >
              <div className="flex items-center mb-8">
                <CheckCircle className="w-6 h-6 text-violet-600 mr-3" />
                <h4 className="text-xl font-bold text-black">Professional Assessment Battery</h4>
              </div>

              <div className="grid gap-4">
                {activeTest.tests.map((test, index) => (
                  <motion.div
                    key={test}
                    className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-violet-100 hover:border-violet-300 transition-all duration-300 cursor-pointer group hover:shadow-lg"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    onClick={() => toggleTestExpansion(test)}
                    whileHover={{ scale: 1.02, x: 10 }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <motion.div
                          className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg"
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Star className="w-5 h-5 text-white" />
                        </motion.div>
                        <div>
                          <span className="text-black font-semibold text-lg group-hover:text-violet-700 transition-colors">
                            {test}
                          </span>
                          <div className="flex items-center mt-1">
                            <Target className="w-4 h-4 text-violet-500 mr-1" />
                            <span className="text-sm text-gray-500">Professional Grade</span>
                          </div>
                        </div>
                      </div>
                      <motion.div
                        animate={{ rotate: expandedTests.includes(test) ? 90 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-violet-500"
                      >
                        <ArrowRight className="w-6 h-6" />
                      </motion.div>
                    </div>

                    <motion.div
                      initial={false}
                      animate={{
                        height: expandedTests.includes(test) ? "auto" : 0,
                        opacity: expandedTests.includes(test) ? 1 : 0,
                      }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 pl-14 border-t border-violet-100 mt-4">
                        <p className="text-gray-600 leading-relaxed mb-3">
                          Comprehensive evaluation providing detailed insights into your child's{" "}
                          {activeTest.title.toLowerCase()} patterns, development milestones, and personalized
                          recommendations for optimal support.
                        </p>
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-violet-400 rounded-full"></div>
                            <span className="text-xs text-violet-600 font-medium">Evidence-Based</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                            <span className="text-xs text-purple-600 font-medium">Clinically Validated</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.div
                className="mt-10 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <motion.button
                  className={`bg-gradient-to-r ${activeTest.color} text-white px-10 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 group relative overflow-hidden`}
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center">
                    Begin {activeTest.title}
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* Bottom Statistics */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
        >
          {[
            { label: "Assessment Types", value: "15+", icon: "📋", color: "from-violet-500 to-purple-500" },
            { label: "Success Rate", value: "96%", icon: "🎯", color: "from-purple-500 to-pink-500" },
            { label: "Families Helped", value: "25k+", icon: "👨‍👩‍👧‍👦", color: "from-indigo-500 to-violet-500" },
            { label: "Expert Reviews", value: "4.9/5", icon: "⭐", color: "from-pink-500 to-rose-500" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-8 bg-white/90 backdrop-blur-sm rounded-3xl border border-violet-100 hover:border-violet-300 transition-all duration-300 shadow-xl group hover:shadow-2xl"
              whileHover={{ scale: 1.05, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300">{stat.icon}</div>
              <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 font-semibold">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
