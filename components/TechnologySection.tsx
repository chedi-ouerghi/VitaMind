"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { FileText, BarChart3, CheckCircle, ArrowRight, Heart, Star } from "lucide-react"

const testCategories = [
  {
    id: "emotional",
    title: "Emotional Assessment",
    icon: Heart,
    description: "Comprehensive emotional state evaluation",
    tests: [
      "Mood stability tracking over 30 days",
      "Emotional response pattern analysis",
      "Stress trigger identification system",
      "Anxiety level measurement protocols",
      "Depression screening questionnaire",
    ],
    color: "from-violet-500 to-purple-500",
    bgColor: "from-violet-50 to-purple-50",
  },
  {
    id: "behavioral",
    title: "Behavioral Analysis",
    icon: BarChart3,
    description: "Deep behavioral pattern recognition",
    tests: [
      "Sleep pattern analysis and optimization",
      "Social interaction frequency tracking",
      "Daily routine stability assessment",
      "Activity level monitoring system",
      "Communication pattern evaluation",
    ],
    color: "from-purple-500 to-pink-500",
    bgColor: "from-purple-50 to-pink-50",
  },
  {
    id: "cognitive",
    title: "Cognitive Evaluation",
    icon: FileText,
    description: "Mental processing and decision-making assessment",
    tests: [
      "Memory retention and recall testing",
      "Attention span measurement protocols",
      "Decision-making pattern analysis",
      "Problem-solving capability assessment",
      "Learning adaptation rate evaluation",
    ],
    color: "from-indigo-500 to-violet-500",
    bgColor: "from-indigo-50 to-violet-50",
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
    <section
      ref={ref}
      className="py-24 bg-gradient-to-br from-white via-violet-50/20 to-purple-50/10 relative overflow-hidden"
      id="technology"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-3">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%238B5CF6' fillOpacity='0.05'%3E%3Cpath d='M40 40c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm20 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/3 left-1/5 w-24 h-24 bg-violet-200/20 rounded-full blur-xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.5, 0.2],
            x: [0, 40, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/5 w-36 h-36 bg-purple-200/15 rounded-full blur-2xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.15, 0.35, 0.15],
            x: [0, -35, 0],
            y: [0, 35, 0],
          }}
          transition={{ duration: 14, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ scale: 0, rotate: 180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-4xl">👨‍👩‍👧‍👦</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-light text-black mb-6">
            Help Parents{" "}
            <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              Understand
            </span>{" "}
            Their Children
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive assessment tools and deep analysis to help parents better understand their children's mental
            health through professional-grade testing and evaluation.
          </p>
        </motion.div>

        {/* Category Selection */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {testCategories.map((category, index) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-3 px-6 py-3 rounded-full border-2 transition-all duration-300 ${
                activeCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white border-transparent shadow-lg`
                  : "bg-white text-gray-600 border-violet-200 hover:border-violet-300 hover:bg-violet-50"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            >
              <category.icon className="w-5 h-5" />
              <span className="font-medium">{category.title}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Active Category Display */}
        {activeTest && (
          <motion.div
            key={activeCategory}
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div
              className={`bg-gradient-to-br ${activeTest.bgColor} rounded-3xl p-8 border border-violet-100 shadow-xl`}
            >
              <div className="text-center mb-8">
                <div
                  className={`w-20 h-20 bg-gradient-to-br ${activeTest.color} rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                >
                  <activeTest.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-black mb-2">{activeTest.title}</h3>
                <p className="text-gray-600">{activeTest.description}</p>
              </div>

              {/* Dynamic Test List */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-black mb-4 flex items-center">
                  <CheckCircle className="w-5 h-5 text-violet-600 mr-2" />
                  Professional Assessment Tests
                </h4>

                {activeTest.tests.map((test, index) => (
                  <motion.div
                    key={test}
                    className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-violet-100 hover:border-violet-200 transition-all duration-300 cursor-pointer group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    onClick={() => toggleTestExpansion(test)}
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <motion.div
                          className="w-8 h-8 bg-gradient-to-br from-violet-500 to-purple-500 rounded-lg flex items-center justify-center"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Star className="w-4 h-4 text-white" />
                        </motion.div>
                        <span className="text-black font-medium group-hover:text-violet-700 transition-colors">
                          {test}
                        </span>
                      </div>
                      <motion.div
                        animate={{ rotate: expandedTests.includes(test) ? 90 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ArrowRight className="w-5 h-5 text-violet-500" />
                      </motion.div>
                    </div>

                    <motion.div
                      initial={false}
                      animate={{
                        height: expandedTests.includes(test) ? "auto" : 0,
                        opacity: expandedTests.includes(test) ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-3 pl-11">
                        <p className="text-sm text-gray-600 leading-relaxed">
                          Detailed analysis and comprehensive evaluation providing insights into your child's{" "}
                          {activeTest.title.toLowerCase()} patterns and development.
                        </p>
                        <div className="mt-2 flex items-center space-x-2">
                          <div className="w-2 h-2 bg-violet-400 rounded-full"></div>
                          <span className="text-xs text-violet-600 font-medium">Professional Grade Assessment</span>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              {/* Call to Action */}
              <motion.div
                className="mt-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <motion.button
                  className={`bg-gradient-to-r ${activeTest.color} text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start {activeTest.title} Assessment
                  <ArrowRight className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* Bottom Statistics */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
        >
          {[
            { label: "Assessment Types", value: "15+", icon: "📋" },
            { label: "Success Rate", value: "96%", icon: "🎯" },
            { label: "Families Helped", value: "25k+", icon: "👨‍👩‍👧‍👦" },
            { label: "Expert Reviews", value: "4.9/5", icon: "⭐" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-violet-100 hover:border-violet-200 transition-all duration-300 shadow-lg group"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
              <div className="text-3xl font-bold text-violet-600 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
