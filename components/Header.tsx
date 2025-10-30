"use client"

import { animate, delay, motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Zap } from "lucide-react"
import Image from "next/image"
import src from "@emotion/is-prop-valid"
import { Sign } from "crypto"
import { div, i } from "framer-motion/client"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])



  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-2xl border-b border-[#518591]/10 shadow-xl"
          : "bg-white/80 backdrop-blur-xl"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-full mx-auto px-8">
        {/* Centrage vertical parfait */}
        <div className="flex items-center justify-between h-20">
          {/* Logo animé */}
          <motion.div
            className="relative w-20 h-20 flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src="/logo.png"
              alt="VitaMind Logo"
              fill
              className="object-contain"
              priority
            />
          </motion.div>

         

          {/* Boutons à droite */}
          <div className="hidden lg:flex items-center space-x-6">
            <Button
              variant="ghost"
              className="text-[#518591] hover:text-[#e3b01c] hover:bg-[#518591]/5 font-medium"
            >
              Sign In
            </Button>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Button className="relative bg-gradient-to-r from-[#518591] to-[#518591]/90 hover:from-[#518591] hover:to-[#518591]/80 text-white border-0 shadow-md px-7 py-2.5 rounded-xl font-semibold overflow-hidden group">
                {/* Animation de fond */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#518591] via-[#e3b01c] to-[#518591] bg-[length:200%_100%] opacity-0 group-hover:opacity-100"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                />

                {/* Contenu */}
                <div className="relative z-10 flex items-center space-x-2">
                  <Zap className="w-4 h-4" />
                  <span>Get Started</span>

                  {/* Indicateurs dynamiques */}
                  <div className="flex space-x-1">
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        className="w-1.5 h-1.5 bg-[#e3b01c] rounded-full"
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{
                          duration: 1.5,
                          repeat: Number.POSITIVE_INFINITY,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </Button>
            </motion.div>
          </div>

          {/* Menu Mobile */}
          <button
            className="lg:hidden text-[#518591] p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menu Mobile */}
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-[#518591]/10"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
          >
            <div className="px-4 py-6 space-y-4">
            
              <div className="pt-4 space-y-3 border-t border-[#518591]/10">
                <Button variant="ghost" className="w-full text-[#518591] hover:bg-[#518591]/5">
                  Sign In
                </Button>
                <Button className="w-full bg-gradient-to-r from-[#518591] to-[#518591]/90 text-white">
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
