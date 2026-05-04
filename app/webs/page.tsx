export default function WebsProfesionales() {
  return (
    <section className="py-24 md:px-46 px-20 text-center  mx-auto text-white bg-black">

      {/* TÍTULO */}
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        Webs Profesionales
      </h2>

      <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-16">
        Creamos sitios web completos diseñados para posicionar tu marca, 
        generar confianza y convertir visitantes en clientes. 
        Tu negocio necesita más que presencia online: necesita una web estratégica.
      </p>

      {/* BLOQUE PRINCIPAL */}
      <div className="grid md:grid-cols-2 gap-12 text-left items-center mb-20">

        <div>
          <h3 className="text-2xl font-semibold mb-4">
            ¿Qué incluye una web profesional?
          </h3>

          <p className="text-gray-400 mb-4">
            A diferencia de una landing page, una web profesional está pensada 
            para representar completamente tu negocio y acompañar al usuario 
            en todo su proceso de decisión.
          </p>

          <ul className="space-y-2 text-gray-300">
            <li>✔ Página de inicio optimizada</li>
            <li>✔ Sección de servicios o productos</li>
            <li>✔ Página de contacto y formularios</li>
            <li>✔ Integración con WhatsApp</li>
            <li>✔ Diseño responsive (mobile y desktop)</li>
            <li>✔ SEO básico incluido</li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-8 rounded-xl">
          <h4 className="text-xl font-semibold mb-3">
            ¿Para quién es ideal?
          </h4>
          <p className="text-gray-400">
            Empresas, profesionales y marcas que necesitan construir presencia digital,
            transmitir confianza y diferenciarse de la competencia.
          </p>
        </div>

      </div>

      {/* GENERACIÓN DE INGRESOS */}
      <h3 className="text-3xl font-bold mb-12">
        ¿Cómo ayuda a tu negocio?
      </h3>

      <div className="grid md:grid-cols-3 gap-8 text-left mb-20">

        <div className="p-6 border border-gray-800 rounded-xl hover:scale-105 transition">
          <h4 className="text-xl font-semibold mb-3">
            🧠 Genera confianza
          </h4>
          <p className="text-gray-400">
            Una web profesional transmite seriedad y credibilidad, aumentando 
            las probabilidades de que te elijan.
          </p>
        </div>

        <div className="p-6 border border-gray-800 rounded-xl hover:scale-105 transition">
          <h4 className="text-xl font-semibold mb-3">
            🔍 Mejora tu visibilidad
          </h4>
          <p className="text-gray-400">
            Permite que nuevos clientes te encuentren en Google y otros buscadores.
          </p>
        </div>

        <div className="p-6 border border-gray-800 rounded-xl hover:scale-105 transition">
          <h4 className="text-xl font-semibold mb-3">
            💼 Genera oportunidades
          </h4>
          <p className="text-gray-400">
            Funciona como tu vendedor online, captando consultas y clientes potenciales.
          </p>
        </div>

      </div>

      {/* BENEFICIOS */}
      <h3 className="text-3xl font-bold mb-12">
        Beneficios clave
      </h3>

      <div className="grid md:grid-cols-3 gap-8 text-left">

        <div className="p-6 border border-gray-800 rounded-xl hover:scale-105 transition">
          <h4 className="text-xl font-semibold mb-3">
            ⚡ Velocidad y rendimiento
          </h4>
          <p className="text-gray-400">
            Sitios optimizados para cargar rápido y mejorar la experiencia del usuario.
          </p>
        </div>

        <div className="p-6 border border-gray-800 rounded-xl hover:scale-105 transition">
          <h4 className="text-xl font-semibold mb-3">
            🎨 Diseño personalizado
          </h4>
          <p className="text-gray-400">
            Adaptado a tu marca y a tu público objetivo.
          </p>
        </div>

        <div className="p-6 border border-gray-800 rounded-xl hover:scale-105 transition">
          <h4 className="text-xl font-semibold mb-3">
            📱 100% responsive
          </h4>
          <p className="text-gray-400">
            Perfecta visualización en celulares, tablets y computadoras.
          </p>
        </div>

        <div className="p-6 border border-gray-800 rounded-xl hover:scale-105 transition">
          <h4 className="text-xl font-semibold mb-3">
            🔒 Seguridad
          </h4>
          <p className="text-gray-400">
            Implementamos buenas prácticas para proteger tu sitio y tus datos.
          </p>
        </div>

        <div className="p-6 border border-gray-800 rounded-xl hover:scale-105 transition">
          <h4 className="text-xl font-semibold mb-3">
            📊 Escalabilidad
          </h4>
          <p className="text-gray-400">
            Tu web puede crecer junto a tu negocio sin necesidad de rehacerla.
          </p>
        </div>

        <div className="p-6 border border-gray-800 rounded-xl hover:scale-105 transition">
          <h4 className="text-xl font-semibold mb-3">
            🤝 Integraciones
          </h4>
          <p className="text-gray-400">
            Conectamos tu web con herramientas como redes sociales, CRM o email.
          </p>
        </div>

      </div>

      {/* CTA */}
      <div className="mt-20">
        <h3 className="text-2xl font-bold mb-4">
          ¿Listo para tener una web profesional?
        </h3>

        <p className="text-gray-400 mb-6">
          Creamos sitios web que representan tu marca y generan resultados reales.
        </p>

        <a
          href="#contacto"
          className="inline-block bg-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
        >
          Solicitar mi web
        </a>
      </div>

    </section>
  );
}