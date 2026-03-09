"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation"; // ✅ Step 1: import

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const router = useRouter(); // ✅ Step 2: call useRouter

  // ✅ Step 3: define function inside component
  const scrollOrNavigate = (id: string, path = "/") => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    } else {
      router.push(`${path}#${id}`);
    }
  };

  return (
    <>
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 
      bg-black/70 backdrop-blur-md px-8 py-4 rounded-full 
      flex items-center justify-between w-[90%] max-w-5xl">

        {/* Logo */}
        <span className="font-bold text-xl text-white">
          ⚡ VisionDip
        </span>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-sm text-gray-300">
          <li className="hover:text-white cursor-pointer">
            <Link href="/short-form">Short-form</Link>
          </li>
          <li
            className="hover:text-white cursor-pointer"
            onClick={() => scrollOrNavigate("services", "/")}
          >
            Services
          </li>
          <li
            className="hover:text-white cursor-pointer"
            onClick={() => scrollOrNavigate("faqs", "/")}
          >
            FAQs
          </li>
        </ul>

        {/* Desktop Button */}
        <button className="hidden md:block ml-4 px-5 py-2 bg-purple-600 rounded-full text-sm hover:bg-purple-700 text-white">
          Book a call
        </button>

        {/* Mobile Hamburger */}
        <div
          className="md:hidden flex flex-col gap-1 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <motion.span
            animate={{ rotate: open ? 45 : 0, y: open ? 6 : 0 }}
            className="w-6 h-0.5 bg-white"
          />
          <motion.span
            animate={{ opacity: open ? 0 : 1 }}
            className="w-6 h-0.5 bg-white"
          />
          <motion.span
            animate={{ rotate: open ? -45 : 0, y: open ? -6 : 0 }}
            className="w-6 h-0.5 bg-white"
          />
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 
            w-[90%] bg-black/90 backdrop-blur-xl rounded-2xl 
            p-6 flex flex-col gap-6 text-center text-white z-40"
          >
            <Link
              href="/short-form"
              className="hover:text-purple-400 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              Short-form
            </Link>

            <span
              className="hover:text-purple-400 cursor-pointer"
              onClick={() => scrollOrNavigate("services", "/")}
            >
              Services
            </span>

            <span
              className="hover:text-purple-400 cursor-pointer"
              onClick={() => scrollOrNavigate("faqs", "/")}
            >
              FAQs
            </span>

            <button className="mt-4 px-5 py-3 bg-purple-600 rounded-full hover:bg-purple-700">
              Book a call
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}