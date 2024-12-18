import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ArrowRight } from 'lucide-react'

const testimonials = [
  {
    quote: "Intellisr's AI solutions propelled our manufacturing line's efficiency. Their automation minimized downtime and boosted our ROI significantly.",
    name: "Jane Carter",
    role: "Operations Manager at FutureWorks"
  },
  {
    quote: "We partnered with Intellisr for IAAS, and their personalized approach delivered insights we never thought possible.",
    name: "David Kim",
    role: "CTO at NextGen Systems"
  },
  {
    quote: "Intellisr guided us with tech consulting and reshaped our data strategy, giving us a competitive edge.",
    name: "Sarah Ahmed",
    role: "CEO at QuantumEdge Analytics"
  }
]

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Trigger the fade-in animation after the component mounts
    setMounted(true)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="max-w-7xl mx-auto px-8 py-14 relative">
      {/* Initial Fade-in using Tailwind */}
      <div
        className={`relative bg-[url('../images/comp.jpg')] bg-cover bg-center p-12 rounded-lg xxs:p-5 lg:p-12 overflow-hidden transition-all duration-700 ease-out transform ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
      >
        {/* Semi-transparent overlay for better readability */}
        <div className="absolute inset-0 bg-white/40 backdrop-blur-sm rounded-lg pointer-events-none"></div>

        {/* Carousel Container */}
        <div className="relative flex flex-col items-center justify-center z-10">
          <h2 className="text-cyan-900 text-4xl font-bold mb-10">What Our Clients Say</h2>

          <div className="w-full max-w-3xl relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="bg-white/80 p-8 rounded-lg shadow-lg"
              >
                <p className="text-gray-800 text-xl font-medium leading-relaxed italic">
                  "{testimonials[currentIndex].quote}"
                </p>
                <div className="mt-8">
                  <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-green-500 text-2xl font-semibold">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-gray-700 text-sm font-medium opacity-80 mt-1">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <div className="flex items-center justify-between mt-6">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-white hover:bg-gray-100 transition-colors duration-300 shadow-md"
                aria-label="Previous Testimonial"
              >
                <ArrowLeft className="text-cyan-500 w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-white hover:bg-gray-100 transition-colors duration-300 shadow-md"
                aria-label="Next Testimonial"
              >
                <ArrowRight className="text-cyan-500 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
