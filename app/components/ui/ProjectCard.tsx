import Image from "next/image";

type Props = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
};

export default function ProjectCard({
  title,
  description,
  image,
  tags,
  link,
}: Props) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/40 backdrop-blur-md">

      {/* IMAGEN */}
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      {/* CONTENIDO */}
      <div className="p-6 text-left">

        <h3 className="text-lg font-semibold mb-2">
          {title}
        </h3>

        <p className="text-gray-400 text-sm mb-4">
          {description}
        </p>

        {/* TAGS */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs bg-blue-600/20 text-blue-400 px-2 py-1 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* LINK */}
        {link && (
          <a
            href={link}
            target="_blank"
            className="text-blue-500 text-sm font-medium hover:underline"
          >
            Ver proyecto →
          </a>
        )}
      </div>
    </div>
  );
}