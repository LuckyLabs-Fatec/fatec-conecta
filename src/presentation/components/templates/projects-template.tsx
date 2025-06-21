import { Separator } from "../atoms/separator";
import { CustomPagination } from "../molecules/custom-pagination";
import { ProjectCard } from "../organisms/project-card";
import BibliotecaItinerante from "@/presentation/assets/biblioteca-itinerante.png";


export const ProjectsTemplate = () => (
  <div className="p-6">
    <h1 className="text-3xl font-bold my-2">Projetos</h1>
    <p>
      Explore nossos últimos projetos e contribuições da comunidade.
    </p>
    <Separator className="my-2" />
    <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      <ProjectCard
        title="Biblioteca Itinerante de Programação"
        description="Descrição do projeto 1"
        imageUrl={BibliotecaItinerante.src}
      />
      <ProjectCard 
        title="Workshop de Programação para Iniciantes"
        description="Descrição do projeto 2"
        imageUrl={BibliotecaItinerante.src}
      />
      <ProjectCard 
        title="Workshop de Contrução de Jogos com Unity"
        description="Descrição do projeto 3"
        imageUrl={BibliotecaItinerante.src}
      />
      <ProjectCard 
        title="Workshop de Contrução com Materiais Recicláveis"
        description="Descrição do projeto 4"
        imageUrl={BibliotecaItinerante.src}
      />
      <ProjectCard 
        title="Ciência de Dados para Todos"
        description="Descrição do projeto 5"
        imageUrl={BibliotecaItinerante.src}
      />
      <ProjectCard 
        title="Construções Sustentáveis com Tecnologia"
        description="Descrição do projeto 6"
        imageUrl={BibliotecaItinerante.src}
      />
      <ProjectCard 
        title="IOT e Contruções Inteligentes"
        description="Descrição do projeto 7"
        imageUrl={BibliotecaItinerante.src}
      />
      <ProjectCard 
        title="Workshop Construção Civil e Sustentabilidade"
        description="Descrição do projeto 8"
        imageUrl={BibliotecaItinerante.src}
      />
      <ProjectCard 
        title="Minicurso de Programação para Crianças"
        description="Descrição do projeto 9"
        imageUrl={BibliotecaItinerante.src}
      />
    </section>
    <CustomPagination />
  </div>
)