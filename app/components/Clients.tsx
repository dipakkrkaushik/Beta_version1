"use client";

import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Clients() {
  const clients = ["Growth Forum", "MoonPay", "HeroDevs", "Outro", "Noble"];

  return (
    <motion.section
      className="py-20 text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.p variants={fadeIn} className="text-gray-400 mb-10">
        You're in good hands
      </motion.p>

      <motion.div className="flex flex-wrap justify-center gap-10 opacity-80">
        {clients.map((client) => (
          <motion.span key={client} variants={fadeIn} className="text-xl font-semibold">
            {client}
          </motion.span>
        ))}
      </motion.div>
    </motion.section>
  );
}
