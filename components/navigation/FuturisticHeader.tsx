"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Brain, Sparkles, Zap } from "lucide-react"

export default function FuturisticHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()
  const headerOpacity = useTransform(scrollY, [0, 100], [0.95, 1])
  const headerScale = useTransform(scrollY, [0, 100], [1, 0.98])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Intelligence", href: "#intelligence", icon: Brain },
    { name: "Innovation", href: "#innovation", icon: Sparkles },
    { name: "Impact", href: "#impact", icon: Zap },
    { name: "Future", href: "#future", icon: Brain },
  ]

  return (
    <motion.header
      style={{ opacity: headerOpacity, scale: headerScale }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-2xl border-b border-violet-200/50 shadow-2xl shadow-violet-500/10"
          : "bg-transparent"
      }`}
    >
      {/* Futuristic glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 via-purple-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Neural network background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 20">
          <defs>
            <pattern id="neural" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="currentColor" className="text-violet-500">
                <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" repeatCount="indefinite" />
              </circle>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#neural)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="flex items-center justify-between h-20">
          {/* Futuristic Logo */}
          <motion.div
            className="flex items-center space-x-3 group cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative">
              <motion.div
                className="w-12 h-12 bg-gradient-to-br from-violet-500 via-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center shadow-2xl"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(139, 92, 246, 0.3)",
                    "0 0 40px rgba(139, 92, 246, 0.6)",
                    "0 0 20px rgba(139, 92, 246, 0.3)",
                  ],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <Brain className="w-7 h-7 text-white" />
              </motion.div>

              {/* Orbital rings */}
              <motion.div
                className="absolute inset-0 border-2 border-violet-300/30 rounded-2xl"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-0 border border-purple-300/20 rounded-2xl scale-125"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
            </div>

            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                VitaMind
              </span>
              <span className="text-xs text-gray-500 font-medium tracking-wider">NEXT-GEN AI</span>
            </div>
          </motion.div>

          {/* Futuristic Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="group relative px-6 py-3 rounded-xl transition-all duration-300 hover:bg-violet-50/50"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center space-x-2">
                  <item.icon className="w-4 h-4 text-violet-600 group-hover:text-purple-600 transition-colors" />
                  <span className="text-gray-700 group-hover:text-violet-700 font-medium transition-colors">
                    {item.name}
                  </span>
                </div>

                {/* Futuristic underline */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-violet-500 to-purple-500 origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
              </motion.a>
            ))}
          </nav>

          {/* Futuristic CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              className="text-gray-700 hover:text-violet-600 hover:bg-violet-50/50 transition-all duration-300"
            >
              Access Portal
            </Button>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="relative bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-700 hover:via-purple-700 hover:to-indigo-700 text-white border-0 shadow-2xl shadow-violet-500/25 px-8 py-3 rounded-xl font-semibold overflow-hidden group">
                <span className="relative z-10 flex items-center">
                  Launch AI
                  <Sparkles className="w-4 h-4 ml-2 group-hover:rotate-12 transition-transform" />
                </span>

                {/* Animated background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden relative w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div animate={{ rotate: isMobileMenuOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
              {isMobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className="md:hidden overflow-hidden"
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isMobileMenuOpen ? "auto" : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="bg-white/95 backdrop-blur-xl border-t border-violet-100 rounded-b-2xl shadow-2xl">
            <div className="px-6 py-8 space-y-6">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-3 text-gray-700 hover:text-violet-600 transition-colors duration-300 group"
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <item.icon className="w-5 h-5 text-violet-500 group-hover:text-purple-500 transition-colors" />
                  <span className="font-medium">{item.name}</span>
                </motion.a>
              ))}

              <div className="pt-6 space-y-4 border-t border-violet-100">
                <Button variant="ghost" className="w-full text-gray-700 hover:text-violet-600">
                  Access Portal
                </Button>
                <Button className="w-full bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white border-0 shadow-lg">
                  Launch AI
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  )
}
