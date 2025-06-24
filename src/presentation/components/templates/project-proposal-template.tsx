import { ReactNode } from "react";
import { Separator } from "../atoms/separator";

interface ProjectProposalTemplateProps {
  title: string;
  description: string;
  children: ReactNode
}

export const ProjectProposalTemplate: React.FC<ProjectProposalTemplateProps> = ({
  title,
  description,
  children
}) => (
  <div className="p-6">
    <h1 className="text-3xl font-bold my-2">{title}</h1>
    <p>
      {description}
    </p>
    <Separator className="my-2" />
    <section>
      {children}
    </section>
  </div>
)