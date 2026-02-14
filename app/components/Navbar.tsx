"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-black/70 backdrop-blur-md px-8 py-4 rounded-full flex gap-8 items-center">
      <span className="font-bold text-xl">⚡ Agency</span>
      <ul className="hidden md:flex gap-6 text-sm text-gray-300">
        <li className="hover:text-white cursor-pointer">Short-form</li>
        <li className="hover:text-white cursor-pointer">Services</li>
        <li className="hover:text-white cursor-pointer">FAQs</li>
      </ul>
      <button className="ml-4 px-5 py-2 bg-purple-600 rounded-full text-sm hover:bg-purple-700">
        Book a call
      </button>
    </nav>
  );
}