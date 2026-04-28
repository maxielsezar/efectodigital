import AnimatedContent from "../animacion/AnimatedContent"

export default function Contacto() {
  return (
<section
  id="contacto"
  className="py-20 px-6 text-center bg-linear-to-b from-neutral-900 to-black"
> <AnimatedContent
    distance={100}
    direction="vertical"
    reverse={false}
    duration={0.8}
    ease="power3.out"
    initialOpacity={0}
    animateOpacity
    scale={1}
    threshold={0.1}
    delay={0}
  >

  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
    ¿Listo para hacer crecer tu negocio?
  </h2>

  <p className="text-blue-100 mb-8 max-w-xl mx-auto">
    Contanos tu idea y te ayudamos a transformarla en una web profesional 
    que genere resultados reales.
  </p>

  {/* BOTONES */}
  <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">

    <a
      href="https://wa.me/549XXXXXXXXXX?text=Hola%20quiero%20información%20sobre%20una%20web"
      target="_blank"
      className="bg-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-900 transition"
    >
       Escribir por WhatsApp
    </a>

    <a
      href="mailto:tuemail@gmail.com"
      className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
    >
      ✉️ Enviar email
    </a>

  </div>

  {/* INFO EXTRA */}
  <div className="text-sm text-blue-200 space-y-1">
    <p>✔ Respuesta en menos de 24hs</p>
    <p>✔ Asesoramiento sin compromiso</p>
    <p>✔ Presupuesto personalizado</p>
  </div>
</AnimatedContent>
</section>)
}