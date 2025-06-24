'use client';
import { Footer } from "@/presentation/components/atoms/footer";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/presentation/components/atoms/table";
import { Header } from "@/presentation/components/molecules/header";
import { ProjectProposalTemplate } from "@/presentation/components/templates/project-proposal-template";
import Link from "next/link";
import VLibras from "vlibras-nextjs";

const projects = [
  {
    title: "Iniciativa Jardim Comunit ário",
    author: "Emily Carter",
    createdAt: "2024-07-15",
    status: "Revisão Pendente",
    action: "Revisar"
  },
  {
    title: "Programa de Mentoria de Jovens",
    author: "David Lee",
    createdAt: "2024-07-10",
    status: "Revisão Pendente",
    action: "Revisar"
  },
  {
    title: "Manutencao da Meio Ambiente em construcoes civis",
    author: "Sarah Johnson",
    createdAt: "2024-07-05",
    status: "Revisão Pendente",
    action: "Revisar"
  },
  {
    title: "Tecnologia para Terceira Idade",
    author: "Michael Brown",
    createdAt: "2024-06-28",
    status: "Aprovado",
    action: "Visualizar"
  },
  {
    title: "Preservacao da Historia Local",
    author: "Jessica Wilson",
    createdAt: "2024-06-20",
    status: "Completo",
    action: "Visualizar"
  },
]

export default function ProjectProposals () {
  return (
     <>
      <Header />
      <div className="flex-grow">
        <ProjectProposalTemplate
          title="Projetos registrados"
          description="Revise e gerencie as idéias submetidas."
        >
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Título do projeto</TableHead>
                <TableHead className="text-right">Submetido por</TableHead>
                <TableHead className="text-center">Data da Submissão</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Ações</TableHead>                
              </TableRow>
            </TableHeader>
            <TableBody>
              {projects.map((project) => (
                <TableRow key={project.title}>
                  <TableCell className="font-medium">{project.title}</TableCell>
                  <TableCell className="text-right">{project.author}</TableCell>
                  <TableCell className="text-center">{project.createdAt}</TableCell>
                  <TableCell>
                    <div className="bg-[#F0F2F5] p-2 w-[160px] text-center rounded-sm">
                      {project.status}
                    </div>
                    </TableCell>
                    <TableCell>
                      <Link href="">{project.action}</Link>
                    </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ProjectProposalTemplate>
      </div>
      <Footer />
      <VLibras forceOnload />
    </>
  )
}