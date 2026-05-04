export default function EcommerceInfo() {
  return (
    <section className="py-24 md:px-46 px-10 text-center text-white bg-black mx-auto">

      {/* TÍTULO */}
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        Tiendas Online <br /> (E-commerce)
      </h2>

      <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-16">
        Creamos tiendas online diseñadas para vender de forma automática, 
        permitiéndote escalar tu negocio y generar ingresos las 24 horas del día.
      </p>

      {/* BLOQUE PRINCIPAL */}
      <div className="grid md:grid-cols-2 gap-12 text-left items-center mb-20">

        <div>
          <h3 className="text-2xl font-semibold mb-4">
            ¿Qué incluye un E-commerce?
          </h3>

          <p className="text-gray-400 mb-4">
            Una tienda online es mucho más que una página web: es un sistema 
            completo de ventas que gestiona productos, pagos y pedidos de forma automática.
          </p>

          <ul className="space-y-2 text-gray-300">
            <li>✔ Catálogo de productos</li>
            <li>✔ Carrito de compras</li>
            <li>✔ Integración con medios de pago</li>
            <li>✔ Panel de administración</li>
            <li>✔ Gestión de pedidos</li>
            <li>✔ Diseño responsive</li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-8 rounded-xl">
          <h4 className="text-xl font-semibold mb-3">
            ¿Para quién es ideal?
          </h4>
          <p className="text-gray-400">
            Negocios que venden productos físicos o digitales y quieren escalar 
            sus ventas sin depender exclusivamente de redes sociales.
          </p>
        </div>

      </div>

      {/* GENERACIÓN DE INGRESOS */}
      <h3 className="text-3xl font-bold mb-12">
        ¿Cómo genera ingresos?
      </h3>

      <div className="grid md:grid-cols-3 gap-8 text-left mb-20">

        <div className="p-6 border border-gray-800 rounded-xl hover:scale-105 transition">
          <h4 className="text-xl font-semibold mb-3">
            🛒 Ventas automáticas
          </h4>
          <p className="text-gray-400">
            Tu tienda trabaja por vos, recibiendo pedidos incluso cuando no estás disponible.
          </p>
        </div>

        <div className="p-6 border border-gray-800 rounded-xl hover:scale-105 transition">
          <h4 className="text-xl font-semibold mb-3">
            🌍 Alcance ilimitado
          </h4>
          <p className="text-gray-400">
            Vendé a clientes de cualquier lugar sin limitaciones geográficas.
          </p>
        </div>

        <div className="p-6 border border-gray-800 rounded-xl hover:scale-105 transition">
          <h4 className="text-xl font-semibold mb-3">
            📈 Escalabilidad
          </h4>
          <p className="text-gray-400">
            Podés aumentar ventas sin aumentar costos operativos proporcionalmente.
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
            ⚡ Rendimiento optimizado
          </h4>
          <p className="text-gray-400">
            Tiendas rápidas que mejoran la experiencia del usuario y aumentan conversiones.
          </p>
        </div>

        <div className="p-6 border border-gray-800 rounded-xl hover:scale-105 transition">
          <h4 className="text-xl font-semibold mb-3">
            💳 Pagos integrados
          </h4>
          <p className="text-gray-400">
            Integración con múltiples métodos de pago para facilitar la compra.
          </p>
        </div>

        <div className="p-6 border border-gray-800 rounded-xl hover:scale-105 transition">
          <h4 className="text-xl font-semibold mb-3">
            📦 Gestión de productos
          </h4>
          <p className="text-gray-400">
            Administrá tu catálogo de forma simple y organizada.
          </p>
        </div>

        <div className="p-6 border border-gray-800 rounded-xl hover:scale-105 transition">
          <h4 className="text-xl font-semibold mb-3">
            📊 Control total
          </h4>
          <p className="text-gray-400">
            Visualizá pedidos, ventas y comportamiento de clientes.
          </p>
        </div>

        <div className="p-6 border border-gray-800 rounded-xl hover:scale-105 transition">
          <h4 className="text-xl font-semibold mb-3">
            🤖 Automatización
          </h4>
          <p className="text-gray-400">
            Procesos automáticos que reducen trabajo manual.
          </p>
        </div>

        <div className="p-6 border border-gray-800 rounded-xl hover:scale-105 transition">
          <h4 className="text-xl font-semibold mb-3">
            🔗 Integraciones
          </h4>
          <p className="text-gray-400">
            Conectá tu tienda con redes sociales, marketing y herramientas externas.
          </p>
        </div>

      </div>

      {/* BLOQUE DE VALOR */}
      <div className="mt-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-10 rounded-xl">
        <h3 className="text-2xl font-bold mb-4">
          Tu negocio abierto 24/7
        </h3>

        <p className="text-gray-400 max-w-2xl mx-auto">
          Un e-commerce te permite vender sin límites de horario, automatizar procesos 
          y escalar tu negocio de forma sostenible.
        </p>
      </div>

      {/* CTA */}
      <div className="mt-20">
        <h3 className="text-2xl font-bold mb-4">
          ¿Listo para vender online?
        </h3>

        <p className="text-gray-400 mb-6">
          Creamos tiendas online preparadas para crecer junto a tu negocio.
        </p>

        <a
          href="#contacto"
          className="inline-block bg-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
        >
          Crear mi tienda online
        </a>
      </div>

    </section>
  );
}