import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import Servicios from "./components/sections/Servicios";
import Beneficios from "./components/sections/Beneficios"
import Proceso from "./components/sections/Proceso";
import Contacto from "./components/sections/Contacto";
import Portafolio from "./components/sections/Portafolio";
import Testimonio from "./components/sections/Testimonios";
import FAQ from "./components/sections/FAQ";
import Footer from "./components/layout/Footer";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Header />
      <Hero />
      <Servicios />
      <Beneficios />
      <Proceso />
      <Contacto />
      <Portafolio />
      <Testimonio />
      <FAQ />
      <Footer />
    </main>
  );
}