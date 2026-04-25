import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import Servicios from "./components/sections/Servicios";
import Beneficios from "./components/sections/Beneficios"
import Proceso from "./components/sections/Proceso";
import Contacto from "./components/sections/Contacto";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Header />
      <Hero />
      <Servicios />
      <Beneficios />
      <Proceso />
      
      <Contacto />
      


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

     

      {/* FOOTER */}
      <footer className="py-6 text-center text-gray-500">
        © {new Date().getFullYear()} Efecto Digital
      </footer>

    </main>
  );
}