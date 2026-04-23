import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import SpotlightCard from './components/animacion/SpotlightCard';
import Servicios from "./components/sections/Servicios";
import Beneficios from "./components/sections/Beneficios"
import Proceso from "./components/sections/Proceso";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Header />
      <Hero />
      <Servicios />
      <Beneficios />
      <Proceso />


      {/* PORTFOLIO */}
      <section className="py-20 px-6 bg-gray-950 text-center">
        <h2 className="text-3xl font-bold mb-10">Proyectos</h2>
        <p className="text-gray-400">
          Próximamente casos reales de clientes satisfechos.
        </p>
      </section>

      {/* TESTIMONIOS */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Clientes</h2>
        <p className="text-gray-400">
          “Gracias a Efecto Digital aumentamos nuestras consultas en un 70%”
        </p>
      </section>

      {/* CTA */}
      <section id="contacto" className="py-20 px-6 text-center bg-blue-600">
        <h2 className="text-3xl font-bold mb-4">
          ¿Listo para llevar tu negocio al siguiente nivel?
        </h2>
        <p className="mb-6">
          Contactanos hoy y empecemos tu proyecto
        </p>
        <a
          href="https://wa.me/XXXXXXXXXXX"
          className="bg-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-900 transition"
        >
          Escribir por WhatsApp
        </a>
      </section>

      {/* FOOTER */}
      <footer className="py-6 text-center text-gray-500">
        © {new Date().getFullYear()} Efecto Digital
      </footer>

    </main>
  );
}