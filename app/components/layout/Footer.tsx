import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12 px-6">

      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-left">

        {/* MARCA */}
        <div>
          <div className="flex items-center gap-3 mb-3">
            
            <Image
              src="/logo.png"
              alt="Logo"
              width={30}
              height={30}
              className="rounded-md invert"
            />

            <h3 className="text-white font-semibold text-lg">
              Elsezar Digital
            </h3>

          </div>

          <p className="text-sm">
            Creamos páginas web modernas, rápidas y enfocadas en resultados.
          </p>
        </div>

        {/* NAVEGACIÓN */}
        <div>
          <h4 className="text-white font-semibold mb-3">
            Navegación
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="#servicios">Servicios</Link></li>
            <li><Link href="#portfolio">Portafolio</Link></li>
            <li><Link href="#contacto">Contacto</Link></li>
          </ul>
        </div>

        {/* SERVICIOS */}
        <div>
          <h4 className="text-white font-semibold mb-3">
            Servicios
          </h4>
          <ul className="space-y-2 text-sm">
            <li>Landing Pages</li>
            <li>Webs Profesionales</li>
            <li>E-commerce</li>
          </ul>
        </div>

        {/* CONTACTO */}
        <div>
          <h4 className="text-white font-semibold mb-3">
            Contacto
          </h4>

          <ul className="space-y-2 text-sm">
            <li>📧 tuemail@gmail.com</li>
            <li>📱 +54 9 XXX XXX XXXX</li>
          </ul>
        </div>

      </div>

      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm">
        © {new Date().getFullYear()} Elsezar Digital. Todos los derechos reservados.
      </div>

    </footer>
  );
}