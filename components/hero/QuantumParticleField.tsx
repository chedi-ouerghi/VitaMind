"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface Particle {
  id: number
  x: number
  y: number
  size: number
  color: string
  duration: number
}

export default function QuantumParticleField() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const generateParticles = () => {
      const newParticles: Particle[] = []
      const colors = [
        "rgba(139, 92, 246, 0.6)", // violet
        "rgba(168, 85, 247, 0.5)", // purple
        "rgba(99, 102, 241, 0.4)", // indigo
        "rgba(236, 72, 153, 0.3)", // pink
      ]

      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 4 + 1,
          color: colors[Math.floor(Math.random() * colors.length)],
          duration: Math.random() * 10 + 5,
        })
      }
      setParticles(newParticles)
    }

    generateParticles()
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Quantum connections */}
      <svg className="absolute inset-0 w-full h-full">
        {particles.slice(0, 10).map((particle, index) => (
          <motion.line
            key={`line-${particle.id}`}
            x1={`${particle.x}%`}
            y1={`${particle.y}%`}
            x2={`${particles[(index + 1) % 10]?.x || 0}%`}
            y2={`${particles[(index + 1) % 10]?.y || 0}%`}
            stroke="rgba(139, 92, 246, 0.2)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: index * 0.2,
            }}
          />
        ))}
      </svg>
    </div>
  )
}
