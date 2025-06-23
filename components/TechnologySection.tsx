"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Cpu, Database, Shield, Globe, ArrowDown, BarChart3, Cloud } from "lucide-react"

export default function TechnologySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 bg-black text-white relative overflow-hidden" id="technology">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v22H20v-1.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
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
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-4xl">🚀</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-light text-white mb-6">
            VitaMind{" "}
            <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
              Architecture
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Built on cutting-edge technology stack designed for scalability, security, and real-time mental health
            support.
          </p>
        </motion.div>

        {/* Architecture Diagram */}
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {/* User Layer */}
          <div className="text-center mb-12">
            <motion.div
              className="inline-flex items-center space-x-4 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full px-8 py-4 shadow-2xl"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">👤</span>
              </div>
              <div className="text-left">
                <div className="text-white font-semibold">User Interface</div>
                <div className="text-violet-200 text-sm">Mobile & Web Applications</div>
              </div>
            </motion.div>
          </div>

          {/* Connection Arrow */}
          <motion.div
            className="flex justify-center mb-8"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            <ArrowDown className="w-8 h-8 text-violet-400" />
          </motion.div>

          {/* API Gateway */}
          <div className="text-center mb-12">
            <motion.div
              className="inline-block bg-gray-900 border-2 border-violet-500 rounded-2xl p-6 shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center space-x-4">
                <Globe className="w-8 h-8 text-violet-400" />
                <div className="text-left">
                  <div className="text-white font-semibold">API Gateway</div>
                  <div className="text-gray-400 text-sm">Load Balancing & Rate Limiting</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Connection Arrow */}
          <motion.div
            className="flex justify-center mb-8"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
          >
            <ArrowDown className="w-8 h-8 text-violet-400" />
          </motion.div>

          {/* Core Services */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Cpu,
                title: "AI Engine",
                subtitle: "Neural Networks & ML",
                description: "Advanced deep learning models for pattern recognition and emotional analysis",
                color: "from-violet-500 to-purple-500",
              },
              {
                icon: BarChart3,
                title: "Analytics Engine",
                subtitle: "Real-time Processing",
                description: "Instant mood analysis and behavioral pattern detection",
                color: "from-purple-500 to-pink-500",
              },
              {
                icon: Shield,
                title: "Security Layer",
                subtitle: "HIPAA Compliant",
                description: "End-to-end encryption and secure data handling",
                color: "from-indigo-500 to-violet-500",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 border border-gray-700 rounded-2xl p-6 hover:border-violet-500 transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4`}
                >
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-1">{service.title}</h3>
                <p className="text-violet-400 text-sm mb-3">{service.subtitle}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Connection Arrow */}
          <motion.div
            className="flex justify-center mb-8"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
          >
            <ArrowDown className="w-8 h-8 text-violet-400" />
          </motion.div>

          {/* Data Layer */}
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Database,
                title: "Secure Database",
                subtitle: "Encrypted Storage",
                description: "Patient data stored with military-grade encryption",
                color: "from-violet-600 to-purple-600",
              },
              {
                icon: Cloud,
                title: "Cloud Infrastructure",
                subtitle: "Global CDN",
                description: "Distributed across 12 data centers worldwide",
                color: "from-purple-600 to-pink-600",
              },
            ].map((layer, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 border border-gray-700 rounded-2xl p-6 hover:border-violet-500 transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${layer.color} rounded-xl flex items-center justify-center mb-4`}
                >
                  <layer.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-1">{layer.title}</h3>
                <p className="text-violet-400 text-sm mb-3">{layer.subtitle}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{layer.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Performance Metrics */}
          <motion.div
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1.2 }}
          >
            {[
              { label: "Response Time", value: "<50ms", icon: "⚡" },
              { label: "Uptime", value: "99.99%", icon: "🔄" },
              { label: "Data Centers", value: "12", icon: "🌍" },
              { label: "Encryption", value: "AES-256", icon: "🔒" },
            ].map((metric, index) => (
              <motion.div
                key={index}
                className="text-center p-4 bg-gray-900/50 rounded-xl border border-gray-700 hover:border-violet-500 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-2xl mb-2">{metric.icon}</div>
                <div className="text-2xl font-bold text-violet-400 mb-1">{metric.value}</div>
                <div className="text-sm text-gray-400">{metric.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
