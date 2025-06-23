"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Brain, Sparkles } from "lucide-react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Features", href: "#features" },
    { name: "Technology", href: "#technology" },
    { name: "Solutions", href: "#solutions" },
    { name: "About", href: "#about" },
  ]

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-[#518591]/10 shadow-2xl shadow-[#518591]/5"
          : "bg-transparent"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative">
              <motion.div
                className="w-12 h-12 bg-gradient-to-br from-[#518591] to-[#e3b01c] rounded-2xl flex items-center justify-center shadow-lg"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(81, 133, 145, 0.3)",
                    "0 0 30px rgba(227, 176, 28, 0.4)",
                    "0 0 20px rgba(81, 133, 145, 0.3)",
                  ],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              >
                <Brain className="w-7 h-7 text-white" />
              </motion.div>
              <motion.div
                className="absolute -top-1 -right-1 w-4 h-4 bg-[#e3b01c] rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <Sparkles className="w-3 h-3 text-white m-0.5" />
              </motion.div>
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-[#518591] to-[#e3b01c] bg-clip-text text-transparent">
                VitaMind
              </span>
              <div className="text-xs text-[#518591]/70 font-medium tracking-wider">AI MENTAL HEALTH</div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="relative text-gray-700 hover:text-[#518591] transition-all duration-300 font-medium group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {item.name}
                <motion.div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#518591] to-[#e3b01c] group-hover:w-full transition-all duration-300" />
                <motion.div
                  className="absolute inset-0 bg-[#518591]/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                  style={{ padding: "8px 16px", margin: "-8px -16px" }}
                />
              </motion.a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="ghost"
              className="text-[#518591] hover:text-[#e3b01c] hover:bg-[#518591]/5 transition-all duration-300"
            >
              Sign In
            </Button>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-gradient-to-r from-[#518591] to-[#518591]/80 hover:from-[#518591]/90 hover:to-[#518591]/70 text-white border-0 shadow-lg hover:shadow-xl hover:shadow-[#518591]/25 transition-all duration-300 px-6 py-2.5 rounded-xl font-semibold">
                Get Started
                <motion.div
                  className="ml-2 w-2 h-2 bg-[#e3b01c] rounded-full"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden text-[#518591] hover:text-[#e3b01c] p-2 rounded-xl hover:bg-[#518591]/5 transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-[#518591]/10 shadow-2xl rounded-b-2xl"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="block text-gray-700 hover:text-[#518591] transition-colors duration-200 py-2 px-4 rounded-lg hover:bg-[#518591]/5"
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {item.name}
                </motion.a>
              ))}
              <div className="pt-4 space-y-3 border-t border-[#518591]/10">
                <Button variant="ghost" className="w-full text-[#518591] hover:bg-[#518591]/5">
                  Sign In
                </Button>
                <Button className="w-full bg-gradient-to-r from-[#518591] to-[#518591]/80 text-white border-0 rounded-xl">
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}
