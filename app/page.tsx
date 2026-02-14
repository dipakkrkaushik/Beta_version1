import Hero from "./components/Hero";
import Clients from "./components/Clients";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Clients />
      <Services />
      <Testimonials />
      <Newsletter />
    </main>
  );
}
