import { Footer } from "@/presentation/components/atoms/footer";
import { Header } from "@/presentation/components/molecules/header";
import { ProjectsTemplate } from "@/presentation/components/templates/projects-template";

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <div className="flex-grow">
        <ProjectsTemplate />
      </div>
      <Footer />
    </>
  );
}