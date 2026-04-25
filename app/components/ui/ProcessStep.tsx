import SpotlightCard from "../animacion/SpotlightCard";

type Props = {
  step: number;
  title: string;
  description: string;
};

export default function ProcessStep({ step, title, description }: Props) {
  return (
    <SpotlightCard className="p-6 rounded-2xl backdrop-blur-md transition hover:scale-105" spotlightColor="rgba(0, 229, 255, 0.2)"> 

      {/* Título */}
      <h3 className="text-lg font-semibold mb-3 text-xl">
        {title}
      </h3>

      {/* Descripción */}
      <p className="text-gray-300 text-xl">
        {description}
      </p>
    
    </SpotlightCard>
  );
}