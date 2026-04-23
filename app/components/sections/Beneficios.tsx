import BenefitItem from "../ui/BenefitItem";
import SpotlightCard from "../animacion/SpotlightCard";

export default function Hero() {
  return (
<section id="beneficios" className="py-20 px-6 text-center">

  <SpotlightCard className="transition hover:scale-105 custom-spotlight-card p-8" spotlightColor="rgba(0, 229, 255, 0.2)">
    
    <h2 className="text-5xl font-bold mb-4">
      ¿Por qué elegirnos?
    </h2>

    <p className="text-gray-300 mb-20 text-2xl max-w-2xl mx-auto">
      Diseñamos soluciones digitales pensadas para generar resultados reales, 
      combinando diseño, tecnología y estrategia.
    </p>

    <div className="grid md:grid-cols-3 gap-8 ">

      <BenefitItem
        icon="⚡"
        title="Rendimiento optimizado"
        description="Desarrollamos sitios rápidos y eficientes que mejoran la experiencia del usuario y el posicionamiento en buscadores."
      />

      <BenefitItem
        icon="📱"
        title="Diseño responsive"
        description="Tu web se verá y funcionará perfectamente en cualquier dispositivo, garantizando una experiencia consistente."
      />

      <BenefitItem
        icon="🎯"
        title="Enfoque en resultados"
        description="Cada proyecto está orientado a generar conversiones, captar clientes y hacer crecer tu negocio online."
      />

    </div>

  </SpotlightCard>

</section>
  );
}