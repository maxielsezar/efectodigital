import ProjectCard from "@/app/components/ui/ProjectCard";
import { projects } from "@/app/data/projects";


export default function Portafolio() {
  return (
    <section id="portfolio" className="py-20 px-6 text-center">

    <h2 className="text-3xl font-bold mb-4">
        Proyectos recientes
    </h2>

    <p className="text-gray-500 mb-12 max-w-2xl mx-auto">
        Algunos de los trabajos que desarrollamos para ayudar a nuestros clientes 
        a crecer en el mundo digital.
    </p>

    <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
        ))}
    </div>

    </section>)
 }