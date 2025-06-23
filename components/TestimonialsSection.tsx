"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    text: "VitaminD m'écoute et m'aide à rester stable.",
    author: "Marie L.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    text: "Grâce à VitaminD, je me sens moins seul dans ma lutte.",
    author: "Pierre M.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    text: "L'IA comprend vraiment mes besoins et réagit rapidement.",
    author: "Sophie D.",
    avatar: "/placeholder.svg?height=60&width=60",
  },
]

export default function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-light text-center text-gray-800 mb-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          Ils Parlent de Nous
        </motion.h2>

        <div className="max-w-4xl mx-auto relative">
          <motion.div
            className="bg-white rounded-3xl p-12 shadow-xl text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            key={currentIndex}
          >
            <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-6 overflow-hidden">
              <img
                src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                alt={testimonials[currentIndex].author}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-2xl text-gray-700 italic mb-6 leading-relaxed">"{testimonials[currentIndex].text}"</p>
            <p className="text-lg font-semibold text-blue-600">– {testimonials[currentIndex].author}</p>
          </motion.div>

          <div className="flex justify-center items-center mt-8 space-x-4">
            <Button variant="outline" size="sm" onClick={prevTestimonial} className="rounded-full p-2">
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-blue-500" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>

            <Button variant="outline" size="sm" onClick={nextTestimonial} className="rounded-full p-2">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
