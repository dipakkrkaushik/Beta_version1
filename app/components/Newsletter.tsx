"use client";
import { useRouter } from "next/navigation";

export default function Newsletter() {
  const router = useRouter();

  return (
    <section className="py-24 text-center bg-black">
      <div className="max-w-2xl mx-auto bg-white/5 backdrop-blur-md p-10 rounded-2xl">
        <h2 className="text-3xl font-bold text-white">
          Ready to grow?
        </h2>
        <p className="text-gray-400 mt-4">
          Book a call and start scaling your content.
        </p>
        <button
          onClick={() => router.push("/contact")}
          className="mt-8 px-8 py-3 bg-purple-600 hover:bg-purple-700 transition rounded-full text-white"
        >
          Book a Call
        </button>
      </div>
    </section>
  );
}