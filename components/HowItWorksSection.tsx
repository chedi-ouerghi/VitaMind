"use client"

import { motion, useAnimation, useInView } from "framer-motion"
import { ArrowDown, BrainCircuit, HeartPulse, Pen, Shield } from "lucide-react"
import { useEffect, useRef } from "react"

export default function HowItWorksSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const steps = [
    {
      icon: BrainCircuit,
      title: "Smart Analysis",
      description:
        "VitaMind's AI analyzes your communication patterns, mood fluctuations, and behavioral indicators.",
      features: [
        "Continuous mood monitoring",
        "Pattern recognition",
        "Early warning detection",
        "Behavioral analysis"
      ],
      details:
        "Advanced algorithms process your interactions to understand your unique mental wellness profile.",
      color: "#518591",
      position: "left",
    },
    {
      icon: Pen,
      title: "Begin the Journey — Tell Your Story",
      description:
        "You're greeted with a poetic, calming AI form that listens—",
      features: [
        "Storytelling-based questions",
        "Safe, judgment-free space",
        "Authentic self-expression",
        "Emotional clarity"
      ],
      details:
        "Through storytelling-based questions, you share how you feel, think, and experience the world. No labels. Just your truth.",
      color: "#e3b01c",
      position: "right",
      isImage: true,
      imageUrl: "/Begin_the_Journey.png",
    },
    {
      icon: HeartPulse,
      title: "Personalized Support",
      description:
        "Receive tailored therapeutic interventions and coping strategies based on your needs.",
      features: [
        "AI-driven conversations",
        "Customized coping tools",
        "Mood regulation exercises",
        "Crisis prevention"
      ],
      details:
        "Get immediate, personalized support through empathetic AI conversations and evidence-based interventions.",
      color: "#518591",
      position: "left",
    },
    {
      icon: Shield,
      title: "Continuous Care",
      description:
        "24/7 monitoring and support ensures you're never alone in your mental health journey.",
      features: [
        "Round-the-clock availability",
        "Progress tracking",
        "Professional notifications",
        "Emergency response"
      ],
      details:
        "Experience seamless, ongoing support with real-time monitoring and instant access to help when needed.",
      color: "#e3b01c",
      position: "right",
    },
  ]

  const metrics = [
    { label: "Response Time", value: "<2s", icon: "⚡", color: "#518591" },
    { label: "Accuracy Rate", value: "98.7%", icon: "🎯", color: "#e3b01c" },
    { label: "Availability", value: "24/7", icon: "🔄", color: "#518591" },
    { label: "Success Rate", value: "96.2%", icon: "✨", color: "#e3b01c" },
  ]

  return (
    <section
      ref={ref}
      className="py-24 bg-gradient-to-br from-[#518591]/5 via-white to-[#e3b01c]/5 relative overflow-hidden"
      id="how-it-works"
      style={{
        background: "linear-gradient(-135deg, #ffffff 70%, #518591 100%)"
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, #ffffff 70%, #518591 100%)",
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
            <BrainCircuit className="w-10 h-10 text-white" />
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-light text-gray-900 mb-8">
            How{" "}
            <span className="bg-gradient-to-r from-[#518591] to-[#e3b01c] bg-clip-text text-transparent">VitaMind</span>{" "}
            Works
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover how VitaMind leverages smart diagnostics and intelligent therapy to support mental well-being with AI-driven precision.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="max-w-6xl mx-auto mb-20">
          {steps.map((step, index) => (
            <div key={index} className="relative mb-16 last:mb-0">
              <motion.div
                className={`flex flex-col lg:flex-row items-center gap-12 ${step.position === "right" ? "lg:flex-row-reverse" : ""}`}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
              >
                <div className="flex-1">
                  {step.icon && (
                    <motion.div
                      className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 shadow-lg"
                      style={{
                        background: `linear-gradient(135deg, ${step.color}, ${step.color}80)`,
                      }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <step.icon className="w-8 h-8 text-white" />
                    </motion.div>
                  )}

                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">{step.description}</p>
                  <p className="text-gray-500 leading-relaxed">{step.details}</p>
                </div>

                <div className="flex-1 flex justify-center">
                  {step.isImage ? (
               <motion.div
  className="
    relative w-80 h-80 
    bg-gradient-to-br from-white to-[#518591]/5 
    rounded-3xl border border-[#518591]/10 shadow-2xl overflow-hidden
    [perspective:1000px]
  "
  whileHover={{ scale: 1.05 }}
  transition={{ duration: 0.4 }}
>
  <motion.img
    src={step.imageUrl}
    className="
      absolute inset-0 w-full h-full object-contain rounded-3xl border border-[#518591]/10 shadow-2xl overflow-hidden
      [transform-style:preserve-3d]
    "
    animate={{
      rotateY: [16, 12, 16],
      rotateX: [3, 0, 3],        
      scale: [1, 1.06, 1],
      y: [0, -8, 0],
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut",   
      rotateX: [3, 0, 3],        
      scale: [1, 1.06, 1],
      y: [0, -8, 0],
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
</motion.div>


                  ) : (
                    <motion.div
                      className="relative w-80 h-80 bg-gradient-to-br from-white to-[#518591]/5 rounded-3xl border border-[#518591]/10 shadow-2xl flex items-center justify-center"
                      whileHover={{ scale: 1.05, rotate: 2 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        className="w-32 h-32 rounded-2xl flex items-center justify-center shadow-xl"
                        style={{
                          background: `linear-gradient(135deg, ${step.color}, ${step.color}60)`,
                        }}
                        animate={{
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, 0],
                        }}
                        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                      >
                        <step.icon className="w-16 h-16 text-white" />
                      </motion.div>

                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-4 h-4 rounded-full"
                          style={{
                            background: i % 2 === 0 ? step.color : "#e3b01c",
                            top: `${20 + i * 25}%`,
                            right: `${10 + i * 15}%`,
                          }}
                          animate={{
                            y: [0, -20, 0],
                            opacity: [0.3, 0.8, 0.3],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: i * 0.5,
                          }}
                        />
                      ))}
                    </motion.div>
                  )}
                </div>
              </motion.div>

              {index < steps.length - 1 && (
                <motion.div
                  className="flex justify-center my-12"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                >
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    className="flex flex-col items-center"
                  >
                    <ArrowDown className="w-8 h-8 text-[#518591]/60" />
                    <div className="w-px h-12 bg-gradient-to-b from-[#518591]/60 to-transparent mt-2" />
                  </motion.div>
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Metrics */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-[#518591]/10 hover:border-[#518591]/30 transition-all duration-300 shadow-lg hover:shadow-xl group"
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
            >
              <div className="text-3xl mb-3">{metric.icon}</div>
              <div className="text-3xl font-bold mb-2" style={{ color: metric.color }}>
                {metric.value}
              </div>
              <div className="text-sm text-gray-600 font-medium">{metric.label}</div>
              <motion.div className="absolute inset-0 bg-gradient-to-br from-[#518591]/5 to-[#e3b01c]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}