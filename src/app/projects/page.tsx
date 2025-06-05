'use client';
import { Footer } from "@/presentation/components/atoms/footer";
import { Header } from "@/presentation/components/molecules/header";
import { ProjectsTemplate } from "@/presentation/components/templates/projects-template";
import VLibras from "vlibras-nextjs";


export default function ProjectsPage() {
  return (
    <>
      <Header />
      <div className="flex-grow">
        <ProjectsTemplate />
      </div>
      <Footer />
      <VLibras forceOnload />
    </>
  );
}