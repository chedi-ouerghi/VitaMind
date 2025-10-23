"use client"

import { motion, useScroll } from "framer-motion"
import { useEffect, useState } from "react"

const sections = [
  { id: "hero", name: "Home" },
  { id: "problem-solution", name: "Challenges" },
  { id: "how-it-works", name: "How It Works" },
  { id: "benefits", name: "Benefits" },
  { id: "features", name: "Features" },
  { id: "team", name: "Team" },
  { id: "cta", name: "Get Started" },
]

export default function FloatingMenu() {
  const { scrollYProgress } = useScroll()
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const currentPos = window.scrollY + window.innerHeight / 2
      
      sections.forEach(({ id }) => {
        const element = document.getElementById(id)
        if (element) {
          const { top, bottom } = element.getBoundingClientRect()
          if (top < window.innerHeight / 2 && bottom > window.innerHeight / 2) {
            setActiveSection(id)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.div 
      className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
    >
      {sections.map(({ id, name }) => (
        <motion.div
          key={id}
          className="relative group"
          whileHover={{ scale: 1.2 }}
        >
          <motion.div
            className={`w-3 h-3 rounded-full cursor-pointer border-2 transition-all duration-300 ${
              activeSection === id 
                ? "bg-[#518591] border-[#518591]" 
                : "border-[#518591]/30 hover:border-[#e3b01c]"
            }`}
            onClick={() => {
              document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
            }}
          />
          <div className="absolute left-0 transform -translate-x-full -translate-y-1/4 px-4 hidden group-hover:block">
            <span className="whitespace-nowrap text-sm font-medium text-[#518591]">{name}</span>
          </div>
          
          {/* Progress line */}
          {id !== sections[sections.length - 1].id && (
            <div className="h-4 w-px bg-[#518591]/20 mx-auto mt-1" />
          )}
        </motion.div>
      ))}

      {/* Global scroll progress indicator */}
      <motion.div
        className="absolute left-1/2 top-0 w-px h-full -z-10 bg-[#518591]/10 -translate-x-1/2"
        style={{
          scaleY: scrollYProgress
        }}
      />
    </motion.div>
  )
}
