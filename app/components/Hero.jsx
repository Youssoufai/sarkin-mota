'use client'
import { motion } from "framer-motion";

// Import Framer Motion

const Hero = () => {
  return (
    <>
      <section className="h-screen p-11 flex items-center justify-center" id="hero">
        <div className="space-y-3 mr-28 text-center md:mr-0">
          <motion.h1
            className="text-4xl text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Welcome to Capital Cars
          </motion.h1>
          <motion.h2
            className="text-white"
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