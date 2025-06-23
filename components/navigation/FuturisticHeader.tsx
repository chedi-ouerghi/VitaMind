"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Brain, Sparkles, ArrowRight } from "lucide-react"

export default function FuturisticHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-violet-100/50 shadow-lg"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Quantum Logo */}
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative">
              <motion.div
                className="w-12 h-12 bg-gradient-to-br from-violet-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Brain className="w-7 h-7 text-white" />
              </motion.div>

              {/* Orbital rings */}
              <motion.div
                className="absolute inset-0 border-2 border-violet-300/30 rounded-2xl"
                animate={{ rotate: [0, -360] }}
                transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                style={{ transform: "scale(1.3)" }}
              />
              <motion.div
                className="absolute inset-0 border border-purple-300/20 rounded-2xl"
                animate={{ rotate: [360, 0] }}
                transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                style={{ transform: "scale(1.6)" }}
              />
            </div>

            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                VitaMind
              </h1>
              <p className="text-xs text-gray-500 -mt-1">Quantum Intelligence</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { name: "Intelligence", icon: Brain },
              { name: "Solutions", icon: Sparkles },
              { name: "Technology", icon: ArrowRight },
              { name: "Future", icon: Sparkles },
            ].map((item, index) => (
              <motion.a
                key={item.name}
                href={`#${item.name.toLowerCase()}`}
                className="flex items-center space-x-2 text-gray-700 hover:text-violet-600 transition-colors duration-300 group"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <item.icon className="w-4 h-4 group-hover:text-violet-600 transition-colors" />
                <span className="font-medium">{item.name}</span>
              </motion.a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                className="border-violet-300 text-violet-700 hover:bg-violet-50 hover:text-violet-800 transition-all duration-300"
              >
                Neural Demo
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white shadow-lg hover:shadow-violet-500/25 transition-all duration-300 group">
                Get Started
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-lg hover:bg-violet-50 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X className="w-6 h-6 text-violet-600" /> : <Menu className="w-6 h-6 text-violet-600" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`md:hidden overflow-hidden ${isMenuOpen ? "max-h-96" : "max-h-0"}`}
          initial={false}
          animate={{ height: isMenuOpen ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="py-4 space-y-4 border-t border-violet-100">
            {[
              { name: "Intelligence", icon: Brain },
              { name: "Solutions", icon: Sparkles },
              { name: "Technology", icon: ArrowRight },
              { name: "Future", icon: Sparkles },
            ].map((item) => (
              <motion.a
                key={item.name}
                href={`#${item.name.toLowerCase()}`}
                className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:text-violet-600 hover:bg-violet-50 rounded-lg transition-all duration-300"
                whileHover={{ x: 10 }}
                onClick={() => setIsMenuOpen(false)}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.name}</span>
              </motion.a>
            ))}

            <div className="px-4 pt-4 space-y-3 border-t border-violet-100">
              <Button variant="outline" className="w-full border-violet-300 text-violet-700 hover:bg-violet-50">
                Neural Demo
              </Button>
              <Button className="w-full bg-gradient-to-r from-violet-600 to-purple-600 text-white">Get Started</Button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  )
}
