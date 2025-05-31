'use client'
import { motion } from "framer-motion";

// Import Framer Motion

const Hero = () => {
  return (
    <>
      <section className="h-screen p-5 md:p-11 flex items-center justify-center bg-hero bg-center bg-cover bg-no-repeat"> {/* Adjusted padding for smaller screens */}
        <div className="space-y-3 text-center md:mr-0"> {/* Removed margin for smaller screens */}
          <motion.h1
            className="text-3xl md:text-4xl text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Welcome to Sarkin Mota <span className="text-[#EA001E]">Automobiles</span>
          </motion.h1>
          <motion.h2
            className="text-lg md:text-xl text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Your journey begins with us – Discover unbeatable deals and exceptional service!
          </motion.h2>
        </div>
      </section>
    </>
  )
}
export default Hero;