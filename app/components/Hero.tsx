"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "./HeroMotion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.p variants={fadeIn} className="text-sm text-gray-400 mb-4">
          ⭐⭐⭐⭐⭐ Trusted by 20+ brands
        </motion.p>

        <motion.h1
          variants={fadeIn}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          Really cool videos,
          <br />
          <span className="text-purple-500">edited & delivered in 48 hours.</span>
        </motion.h1>

        <motion.p variants={fadeIn} className="mt-6 max-w-xl text-gray-400">
          Affordable, fast, human-powered video edits. Real editors, no AI fillers.
        </motion.p>

        <motion.div variants={fadeIn} className="mt-10 flex gap-4 justify-center">
          <button className="px-6 py-3 bg-purple-600 rounded-full">Book a call</button>
          <button className="px-6 py-3 border border-gray-600 rounded-full">Learn more</button>
        </motion.div>
      </motion.div>
    </section>
  );
}
