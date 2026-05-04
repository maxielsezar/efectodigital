import { link } from "fs";

type Props = {
  title: string;
  description: string;
  features: readonly string[];
  price: string;
  pagina: string;
};

export default function ServiceCard({
  title,
  description,
  features,
  price,
  pagina,
}: Props) {
  return (
    <div className="transition hover:scale-105 custom-spotlight-card p-6 flex flex-col h-full">

      <h3 className="text-2xl font-semibold mb-3">{title}</h3>

      <p className="text-gray-400 text-lg mb-4">
        {description}
      </p>

      <ul className="text-sm text-gray-300 mb-6 space-y-1 text-lef pl-3 flex-1">
        {features.map((item, index) => (
          <li key={index}>✔ {item}</li>
        ))}
      </ul>

      <p className="text-blue-500 font-semibold mb-4 text-xl">
        {price}
      </p>

      {/* CTA */}
      <a
        href={pagina}
        className="mt-auto text-lg inline-block text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Solicitar presupuesto
      </a>

    </div>
  );
}