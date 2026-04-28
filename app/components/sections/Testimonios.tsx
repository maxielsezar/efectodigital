import TestimonialCard from "@/app/components/ui/TestimonialCard";
import { testimonials } from "@/app/data/testimonials";


export default function Testimonio() {
  return (
<section className="py-20 px-6 text-center">

  <h2 className="text-3xl font-bold mb-4">
    Lo que dicen nuestros clientes
  </h2>

  <p className="text-gray-500 mb-12 max-w-2xl mx-auto">
    Ayudamos a negocios y emprendedores a mejorar su presencia digital 
    y obtener resultados reales.
  </p>

  <div className="grid md:grid-cols-3 gap-8">
    {testimonials.map((t, i) => (
      <TestimonialCard key={i} {...t} />
    ))}
  </div>

</section>)
 }