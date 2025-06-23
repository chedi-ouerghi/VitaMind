"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Cpu, Database, Shield, Zap, Globe, Code } from "lucide-react"

const technologies = [
  {
    icon: Cpu,
    name: "Neural Networks",
    description: "Advanced deep learning models for pattern recognition",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Database,
    name: "Big Data Analytics",
    description: "Processing vast amounts of mental health data",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Shield,
    name: "Blockchain Security",
    description: "Immutable and secure health record management",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Zap,
    name: "Real-time Processing",
    description: "Instant analysis and response capabilities",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Globe,
    name: "Cloud Infrastructure",
    description: "Scalable and reliable global deployment",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Code,
    name: "Open Standards",
    description: "FHIR and HL7 compliant healthcare integration",
    color: "from-pink-500 to-rose-500",
  },
]

export default function TechnologySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 bg-gradient-to-b from-black to-gray-900" id="technology">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-light text-white mb-6">Cutting-Edge Technology</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Built on the latest advances in AI, machine learning, and healthcare technology to provide the most
            sophisticated mental health support platform available.
          </p>
        </motion.div>

        {/* Technology Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="relative bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 h-full">
                <motion.div
                  className={`w-12 h-12 bg-gradient-to-br ${tech.color} rounded-xl flex items-center justify-center mb-4`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <tech.icon className="w-6 h-6 text-white" />
                </motion.div>

                <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
                <p className="text-gray-400 text-sm">{tech.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Architecture Diagram */}
        <motion.div
          className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-8 border border-gray-700"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">VitaMind Architecture</h3>

          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* User Layer */}
            <motion.div className="text-center" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">User</span>
              </div>
              <h4 className="text-white font-semibold mb-2">User Interface</h4>
              <p className="text-gray-400 text-sm">Mobile & Web Apps</p>
            </motion.div>

            {/* AI Layer */}
            <motion.div className="text-center" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">AI</span>
              </div>
              <h4 className="text-white font-semibold mb-2">AI Engine</h4>
              <p className="text-gray-400 text-sm">Neural Networks & ML</p>
            </motion.div>

            {/* Data Layer */}
            <motion.div className="text-center" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">Data</span>
              </div>
              <h4 className="text-white font-semibold mb-2">Secure Storage</h4>
              <p className="text-gray-400 text-sm">Encrypted Database</p>
            </motion.div>
          </div>

          {/* Connection Lines */}
          <div className="hidden md:block absolute top-1/2 left-1/3 w-1/3 h-0.5 bg-gradient-to-r from-blue-500 to-green-500 transform -translate-y-1/2"></div>
          <div className="hidden md:block absolute top-1/2 right-1/3 w-1/3 h-0.5 bg-gradient-to-r from-green-500 to-orange-500 transform -translate-y-1/2"></div>
        </motion.div>

        {/* Technical Specs */}
        <motion.div
          className="mt-16 grid md:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1 }}
        >
          {[
            { label: "Response Time", value: "<100ms", description: "Average API response" },
            { label: "Uptime", value: "99.9%", description: "Service availability" },
            { label: "Data Centers", value: "12", description: "Global locations" },
            { label: "Encryption", value: "AES-256", description: "Military grade security" },
          ].map((spec, index) => (
            <motion.div
              key={index}
              className="text-center p-4 bg-gray-800/30 rounded-xl border border-gray-700"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-2xl font-bold text-blue-400 mb-1">{spec.value}</div>
              <div className="text-white font-medium mb-1">{spec.label}</div>
              <div className="text-xs text-gray-400">{spec.description}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
