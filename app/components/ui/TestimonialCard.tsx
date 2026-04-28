type Props = {
  name: string;
  role: string;
  company: string;
  text: string;
};

export default function TestimonialCard({
  name,
  role,
  company,
  text,
}: Props) {
  return (
    <div className="p-6 rounded-2xl border border-gray-800 bg-gray-900/40 backdrop-blur-md text-left transition hover:scale-105">

      <p className="text-gray-300 mb-4 text-sm leading-relaxed">
        “{text}”
      </p>

      <div className="mt-4">
        <p className="font-semibold">{name}</p>
        <p className="text-xs text-gray-500">
          {role} · {company}
        </p>
      </div>

    </div>
  );
}