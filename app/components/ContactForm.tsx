"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <section className="relative min-h-screen py-24 px-6 text-white overflow-hidden bg-black">

      {/* 🌌 Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 opacity-40"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{
          background:
            "linear-gradient(120deg, #0f0c29, #302b63, #24243e)",
          backgroundSize: "200% 200%",
        }}
      />

      {/* ✨ Glow Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-600 blur-3xl opacity-20 rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 blur-3xl opacity-20 rounded-full" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            I’d Love to Hear From You
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Ready to connect and collaborate? Drop me a line and let's turn
            ideas into reality.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-16">

          {/* LEFT SIDE - Info */}
          <div className="space-y-10">

            {/* Profile Card */}
            <div className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/20">
              <h2 className="text-2xl font-semibold mb-2">
                Available To Work
              </h2>
              <p className="text-gray-300">Akash Singh</p>
              <p className="text-gray-400">Video Editor</p>

              <div className="mt-6">
                <p className="text-sm text-gray-400">
                  Working Hours (EST)
                </p>
                <p className="font-medium">
                  9:00 AM – 6:00 PM
                </p>
              </div>
            </div>

            {/* Socials */}
            <div className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/20 space-y-4">
              <h2 className="text-xl font-semibold">Connect With Me</h2>

              <div className="flex justify-between items-center">
                <span>Twitter</span>
                <span className="text-gray-400">—</span>
              </div>

              <div className="flex justify-between items-center">
                <span>Instagram</span>
                <span className="text-gray-400">7k+ Followers</span>
              </div>

              <div className="flex justify-between items-center">
                <span>LinkedIn</span>
                <span className="text-gray-400">3k+ Followers</span>
              </div>
            </div>

            {/* Direct Email */}
            <div className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/20">
              <h2 className="text-xl font-semibold mb-2">
                You Can Email Me Here
              </h2>
              <p className="text-purple-400 mb-4">
                akash@ytglow.com
              </p>
              <button className="px-6 py-3 bg-purple-600 rounded-full hover:bg-purple-700 transition">
                Email Now
              </button>
            </div>

          </div>

          {/* RIGHT SIDE - Form */}
          <div className="bg-white/10 backdrop-blur-xl p-10 rounded-2xl border border-white/20 shadow-2xl">
            <h2 className="text-2xl font-semibold mb-8">
              I'm Here for Your Questions
            </h2>

            <form className="space-y-6">

              <div>
                <label className="text-sm text-gray-400">Name</label>
                <input
                  type="text"
                  className="w-full mt-2 p-3 rounded-xl bg-black/40 border border-white/20 focus:border-purple-500 outline-none"
                />
              </div>

              <div>
                <label className="text-sm text-gray-400">Email</label>
                <input
                  type="email"
                  className="w-full mt-2 p-3 rounded-xl bg-black/40 border border-white/20 focus:border-purple-500 outline-none"
                />
              </div>

              <div>
                <label className="text-sm text-gray-400">Message</label>
                <textarea
                  rows={4}
                  className="w-full mt-2 p-3 rounded-xl bg-black/40 border border-white/20 focus:border-purple-500 outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl font-medium hover:scale-105 transition"
              >
                Send Message
              </button>
            </form>

            {/* Book Call */}
            <div className="mt-10 text-center">
              <p className="text-gray-400 text-sm mb-2">
                Available only Mon - Fri
              </p>
              <button className="px-6 py-3 bg-indigo-600 rounded-full hover:bg-indigo-700 transition">
                Book a Call
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}