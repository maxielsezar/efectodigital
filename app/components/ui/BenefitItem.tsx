type Props = {
  icon: string;
  title: string;
  description: string;
};

export default function BenefitItem({ icon, title, description }: Props) {
  return (
    <div className="flex flex-col items-center text-center gap-3 p-4">
      
      <div className="text-8xl">{icon}</div>

      <h3 className="text-3xl font-semibold">{title}</h3>

      <p className="text-gray-400 text-xl max-w-xs">
        {description}
      </p>

    </div>
  );
}