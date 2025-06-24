import { ReactNode } from "react";
import { Separator } from "../atoms/separator";

interface ProjectProposalTemplateProps {
  children: ReactNode
}

export const ProjectProposalTemplate: React.FC<ProjectProposalTemplateProps> = ({
  children
}) => (
  <div className="p-6">
    <h1 className="text-3xl font-bold my-2">Registre uma proposta de projeto</h1>
    <p>
      Descreva sua ideia, seus objetivos e o impacto esperado. Este espaço é dedicado a iniciativas colaborativas que possam evoluir com o apoio de outros membros.
    </p>
    <Separator className="my-2" />
    <section>
      {children}
    </section>
  </div>
)