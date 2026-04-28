import ProcessStep from "../ui/ProcessStep";
import { processSteps } from "@/app/data/process";
import AnimatedContent from "../animacion/AnimatedContent";

export default function Proceso() {
  return (
    <section id="proceso" className="py-20 px-6 text-center">
        <AnimatedContent
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
            <h2 className="text-5xl font-bold mb-4">
                Cómo trabajamos
            </h2>

            <p className="text-gray-300 text-2xl mb-12 max-w-2xl mx-auto">
                Nuestro proceso está diseñado para garantizar resultados eficientes, 
                combinando estrategia, diseño y desarrollo en cada etapa.
            </p>

            <div className="grid md:grid-cols-4 gap-6">

                {processSteps.map((step) => (
                <ProcessStep
                    key={step.step}
                    step={step.step}
                    title={step.title}
                    description={step.description}
                />
                ))}

            </div>
        </AnimatedContent>
    </section>)
}
