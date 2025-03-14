"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function Hero() {
  const glitchTextRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const glitchText = glitchTextRef.current
    if (!glitchText) return

    const originalText = glitchText.innerText
    glitchText.setAttribute("data-text", originalText)
  }, [])

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden cyberpunk-grid">
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-purple-950/50 to-black/80 z-0"></div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xl md:text-2xl font-medium text-primary mb-2 animate-glow">
              AI/ML ENTHUSIAST & TECH EXPLORER
            </h2>
            <h1 ref={glitchTextRef} className="text-4xl md:text-6xl font-bold mb-6 glitch">
              SOHAM LAMB
            </h1>
            <p className="text-gray-300 text-lg mb-8 max-w-lg">
              Aspiring engineer with a passion for artificial intelligence, machine learning, and exploring cutting-edge
              technologies. Building the future, one line of code at a time.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                className="bg-primary text-black hover:bg-primary/80 neon-border"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                View Projects
              </Button>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Contact Me
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-primary neon-border">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-15%20at%2010.58.40_bdb6d8e3.jpg-2JEXllcKboRjXyGfLW2A51mCu5KFhz.jpeg"
                alt="Soham Lamb"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent mix-blend-overlay"></div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-primary animate-glow" />
      </div>
    </section>
  )
}

