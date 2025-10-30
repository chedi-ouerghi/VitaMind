"use client"

import { animate, delay, inView, motion, useInView } from "framer-motion"
import { useRef } from "react"
import { HelpCircle, BookOpen, Compass, Users, Phone } from "lucide-react"
import { p, div } from "framer-motion/client"
import { Icon } from "next/dist/lib/metadata/types/metadata-types"
import { connection } from "next/server"
import path from "path"

const items = [
  {
    icon: HelpCircle,
    title: "You're Not Alone",
    description:
      "For parents who feel lost or overwhelmed — a clear, compassionate starting point to regain confidence.",
    badge: "Emotional Support",
  },
  {
    icon: BookOpen,
    title: "Curated Resources",
    description:
      "Step-by-step guides, crisis plans, and age-appropriate explanations to bridge the gap in scarce local services.",
    badge: "Guides & Plans",
  },
  {
    icon: Compass,
    title: "Practical Roadmap",
    description:
      "Daily routines, activity suggestions, and gentle interventions designed to stabilise chaotic days.",
    badge: "Daily Tools",
  },
  {
    icon: Users,
    title: "Community Links",
    description:
      "Trusted groups and moderated forums so you can find peers and professionals even when options are scarce.",
    badge: "Peer Support",
  },
  {
    icon: Phone,
    title: "Quick Safety Plan",
    description:
      "Templates for emergency contacts and short scripts for difficult conversations — ready when you need them.",
    badge: "Emergency-Ready",
  },
]

export default function ParentPackSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="parent-pack"
      ref={ref}
      className="relative py-28 bg-gradient-to-b from-white to-[#f8fafc] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 xl:px-16">
        {/* HEADER */}
        <motion.div
          className="text-center mb-28 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-light text-[#518591] mb-6">
            Parent Pack
          </h2>
          <p className="text-xl text-[#518591]/80 leading-relaxed">
            When local services are limited and the path forward feels unclear,
            the Parent Pack provides clarity, structure, and gentle guidance —
            designed to support both parents and children through uncertain
            times.
          </p>
        </motion.div>

        {/* TIMELINE STRUCTURE */}
        <div className="relative max-w-6xl mx-auto">
          {/* Ligne centrale */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 w-[3px] h-full bg-gradient-to-b from-[#518591]/25 via-[#e3b01c]/25 to-transparent rounded-full"
          />

          <div className="flex flex-col gap-24 md:gap-28">
            {items.map((item, index) => {
              const Icon = item.icon
              const isEven = index % 2 === 0
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 80 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.12 }}
                  whileHover={{
                    y: -8,
                    transition: { type: "spring", stiffness: 300, damping: 15 },
                  }}
                  className={`relative flex flex-col lg:flex-row items-center group transition-all duration-300 ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* ICON */}
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      rotate: isEven ? -5 : 5,
                      transition: { duration: 0.3 },
                    }}
                    className="relative z-20 flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-[#518591] to-[#e3b01c] shadow-xl group-hover:shadow-2xl group-hover:shadow-[#518591]/30 transition-all duration-300"
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Ligne horizontale */}
                  <div
                    aria-hidden="true"
                    className={`hidden lg:block absolute top-1/2 -translate-y-1/2 w-[40%] h-[2px] bg-[#518591]/15 ${
                      isEven ? "right-[50%]" : "left-[50%]"
                    }`}
                  />

                  {/* TEXT */}
                  <div
                    className={`mt-6 lg:mt-0 lg:w-[45%] ${
                      isEven
                        ? "lg:pr-20 lg:text-right"
                        : "lg:pl-20 lg:text-left"
                    } text-center lg:text-inherit`}
                  >
                    <h3 className="text-3xl font-semibold text-[#518591] mb-4 group-hover:text-[#416c70] transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-lg text-[#518591]/80 leading-relaxed">
                      {item.description}
                    </p>
                    <motion.span
                      whileHover={{
                        scale: 1.1,
                        transition: { yoyo: Infinity, duration: 0.6 },
                      }}
                      className="inline-block mt-5 text-sm font-medium text-white bg-[#518591] px-4 py-1.5 rounded-full shadow-sm group-hover:bg-[#416c70] transition-all duration-300"
                    >
                      {item.badge}
                    </motion.span>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="mt-32 flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="max-w-2xl text-[#518591]/80 mb-10 text-lg leading-relaxed">
            The Parent Pack brings calm, clarity, and connection — when resources
            are scarce and guidance feels out of reach.
          </p>
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 8px 25px rgba(81,133,145,0.35)",
            }}
            whileTap={{ scale: 0.97 }}
            onClick={() =>
              document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center gap-3 bg-[#518591] hover:bg-[#436f72] text-white px-10 py-4 rounded-2xl shadow-lg transition-all text-lg font-medium"
          >
            Get the Parent Pack
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
