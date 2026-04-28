import AnimatedContent from "../animacion/AnimatedContent";
import SpotlightCard from "../animacion/SpotlightCard";
import { services } from "@/app/data/service";
import ServiceCard from "../ui/ServiceCard";

export default function Servicios() {
    return(
    <section id="servicios" className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Servicios</h2>
        <p className="text-gray-400 mb-12 text-xl max-w-2xl mx-auto">
        Creamos soluciones digitales pensadas para ayudarte a atraer clientes,
        mejorar tu presencia online y hacer crecer tu negocio.
        </p>
        <div className="grid md:grid-cols-3 gap-8 overflow-hidden">
            {services.map((service, index) => (
                <AnimatedContent
                key={index}
                distance={20}
                direction={service.animation.direction}
                reverse={service.animation.reverse}
                duration={2.6}
                ease="power3.out"
                initialOpacity={0.1}
                animateOpacity
                scale={1}
                threshold={0.5}
                delay={0.2}
                >
                <SpotlightCard
                    className="custom-spotlight-card"
                    spotlightColor="rgba(0, 229, 255, 0.2)"
                >
                    <ServiceCard {...service} />
                </SpotlightCard>
                </AnimatedContent>
            ))}
        </div>
    </section>
    );
}