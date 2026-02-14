export default function Services() {
  return (
    <section className="py-24 px-6">
      <h2 className="text-4xl text-center font-bold mb-16">
        How can we help <span className="text-purple-500">you?</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {["YouTube Videos","LinkedIn Videos","Explainers","Ad Creatives"].map((service) => (
          <div key={service} className="bg-gradient-to-br from-gray-900 to-black p-10 rounded-2xl">
            <h3 className="text-2xl font-semibold">{service}</h3>
            <p className="text-gray-400 mt-4">
              High-quality video content designed to convert.
            </p>
            <button className="mt-6 text-purple-500">
              Explore pricing →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}