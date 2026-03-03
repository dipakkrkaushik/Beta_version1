"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-white text-2xl font-bold mb-4">
              VentoVeda
            </h2>
            <p className="text-sm leading-relaxed">
              Building immersive digital experiences with
              motion, depth and intelligence.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="#">Home</Link></li>
              <li><Link href="#">Services</Link></li>
              <li><Link href="#">Testimonials</Link></li>
              <li><Link href="#">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Get In Touch
            </h3>
            <p className="text-sm">contact@ventoveda.com</p>
            <p className="text-sm mt-2">Gurgaon, India</p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-4">
              <a href="#" className="hover:text-white transition">Twitter</a>
              <a href="#" className="hover:text-white transition">LinkedIn</a>
              <a href="#" className="hover:text-white transition">Instagram</a>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm">
          © {new Date().getFullYear()} VentoVeda. All rights reserved.
        </div>

      </div>
    </footer>
  );
}