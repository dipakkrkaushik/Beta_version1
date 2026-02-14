export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-black">
      <h2 className="text-4xl text-center font-bold mb-16">
        Hear it directly from <span className="text-purple-500">our clients</span>
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-gray-900 p-6 rounded-xl">
            <p className="text-gray-300">
              “Amazing editing quality and super fast delivery.”
            </p>
            <p className="mt-4 text-sm text-gray-500">
              — Founder, Startup
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}