'use client';
import { Button } from "@/presentation/components/atoms/button";
import { Card, CardContent } from "@/presentation/components/atoms/card";
import { Checkbox } from "@/presentation/components/atoms/checkbox";
import { Footer } from "@/presentation/components/atoms/footer";
import { Input } from "@/presentation/components/atoms/input";
import { Label } from "@/presentation/components/atoms/label";
import { Textarea } from "@/presentation/components/atoms/textarea";
import { Header } from "@/presentation/components/molecules/header";
import { ProjectProposalTemplate } from "@/presentation/components/templates/project-proposal-template";
import VLibras from "vlibras-nextjs";

export default function ProjectProposal () {
  return (
     <>
      <Header />
      <div className="flex-grow">
        <ProjectProposalTemplate>
          <Card className="w-full mt-10">
            <CardContent>
              <form className="space-y-4">
               <div className="grid items-center gap-3 w-full mt-4 md:mt-6">
                  <Label htmlFor="title">Título do projeto</Label>
                  <Input
                    id="title"
                    placeholder="Digite o título do projeto"
                  />
                </div>
                <div className="grid items-center gap-3 w-full mt-4 md:mt-6">
                  <Label htmlFor="content">Descrição do projeto</Label>
                  <Textarea
                    id="content"
                    placeholder="Descreva sua ideia, objetivos e impacto esperado."
                  />
                </div>
                <div className="grid items-center gap-3 w-full mt-4 md:mt-6">
                  <Label htmlFor="files">Carregue arquivos e fotos</Label>
                  <Input
                    id="files"
                    placeholder="Carregue arquivos ou fotos (Max 5MB, JPG, PNG, PDF)"
                    type="file"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <Checkbox className="btn-check" id="terms" />
                  <Label htmlFor="terms">Eu confirmo que esse projeto é sem fins lucrativos e se aliha com os objetivos de desenvolvimento da comunidade</Label>
                </div>
                <Button className="mt-4">Registrar Projeto</Button>
              </form>
            </CardContent>
          </Card>
        </ProjectProposalTemplate>
      </div>
      <Footer />
      <VLibras forceOnload />
    </>
  )
}