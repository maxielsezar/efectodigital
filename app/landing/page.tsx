export default function LandingInfo() {
  return (
    <section className="py-24 md:px-46 px-20 text-center mx-auto bg-black text-white">

      {/* TÍTULO */}
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        ¿Qué es una Landing Page?
      </h2>

      <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-16">
        Una landing page es una página web diseñada estratégicamente con un solo objetivo: 
        convertir visitantes en clientes. A diferencia de una web tradicional, elimina distracciones 
        y guía al usuario hacia una acción concreta.
      </p>

      {/* BLOQUE PRINCIPAL */}
      <div className="grid md:grid-cols-2 gap-12 text-left items-center mb-20">

        <div>
          <h3 className="text-2xl font-semibold mb-4">
            ¿Cómo ayuda a generar ingresos?
          </h3>

          <p className="text-gray-400 mb-4">
            Una landing page bien diseñada no solo muestra información, sino que 
            está optimizada para persuadir y convertir. Cada sección está pensada 
            para llevar al usuario hacia una decisión.
          </p>

          <ul className="space-y-2 text-gray-300">
            <li>✔ Convierte visitas en consultas o ventas</li>
            <li>✔ Mejora el retorno de inversión en publicidad</li>
            <li>✔ Automatiza la captación de clientes</li>
            <li>✔ Funciona 24/7 para tu negocio</li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-8 rounded-xl">
          <h4 className="text-xl font-semibold mb-3">
            Ejemplo real
          </h4>
          <p className="text-gray-400">
            Imaginá que invertís en anuncios. Si enviás tráfico a una web común, 
            perdés clientes. Pero si lo dirigís a una landing optimizada, 
            cada visita tiene más probabilidades de convertirse en ingreso.
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
            🎯 Enfoque en conversión
          </h4>
          <p className="text-gray-400">
            Cada elemento está diseñado para guiar al usuario hacia una acción específica.
          </p>
        </div>

        <div className="p-6 border border-gray-800 rounded-xl hover:scale-105 transition">
          <h4 className="text-xl font-semibold mb-3">
            ⚡ Alto rendimiento
          </h4>
          <p className="text-gray-400">
            Carga rápida y experiencia optimizada para no perder oportunidades.
          </p>
        </div>

        <div className="p-6 border border-gray-800 rounded-xl hover:scale-105 transition">
          <h4 className="text-xl font-semibold mb-3">
            📈 Escalable
          </h4>
          <p className="text-gray-400">
            Podés usarla para campañas, productos o servicios específicos.
          </p>
        </div>

        <div className="p-6 border border-gray-800 rounded-xl hover:scale-105 transition">
          <h4 className="text-xl font-semibold mb-3">
            🤖 Automatización
          </h4>
          <p className="text-gray-400">
            Captura leads y consultas sin intervención manual.
          </p>
        </div>

        <div className="p-6 border border-gray-800 rounded-xl hover:scale-105 transition">
          <h4 className="text-xl font-semibold mb-3">
            💰 Mayor rentabilidad
          </h4>
          <p className="text-gray-400">
            Aumenta el retorno de inversión en marketing digital.
          </p>
        </div>

        <div className="p-6 border border-gray-800 rounded-xl hover:scale-105 transition">
          <h4 className="text-xl font-semibold mb-3">
            📱 Responsive
          </h4>
          <p className="text-gray-400">
            Funciona perfectamente en celulares, donde está la mayoría del tráfico.
          </p>
        </div>

      </div>

      {/* CTA */}
      <div className="mt-20">
        <h3 className="text-2xl font-bold mb-4">
          ¿Querés una landing que realmente genere resultados?
        </h3>

        <p className="text-gray-400 mb-6">
          Diseñamos páginas optimizadas para convertir visitas en clientes.
        </p>

        <a
          href="#contacto"
          className="inline-block bg-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
        >
          Solicitar mi landing
        </a>
      </div>

    </section>
  );
}