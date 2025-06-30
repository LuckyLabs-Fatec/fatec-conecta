import { ActionCard } from "../organisms/action-card";
import { Card, CardContent, CardHeader, CardTitle } from "../atoms/card";
import { CustomCarousel } from "../organisms/custom-carousel";

import { toast } from 'react-toastify';
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/presentation/store";

export const HomeTemplate = () => {
  const router = useRouter();
  const { accessToken } = useAuthStore();

  const isLoggedIn = !!accessToken;

  return (
    <main className="p-4 flex flex-col gap-4">
      <section className="flex flex-col gap-2">
        <CustomCarousel />
        <Card data-testid="main-info-fatec-conecta">
          <CardHeader>
            <CardTitle className="uppercase text-center">Como funciona o FATEC CONECTA?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-[16px] md:text-xl">Conectar <b className="text-[#D9755B]">comunidade</b>, <b className="text-[#1B425E]">alunos</b> e <b className="text-[#1B425F]">coordenação</b> da <b className="text-[#AD0F0A]">Fatec Votorantim</b> o projeto <b>Fatec Conecta</b> tem como objetivo transformar as demandas da comunidade em Projetos Integradores para os cursos de Desenvolvimento de Software Multiplataforma, Ciência de Dados para Negócios e Controle de Obras.</p>
          </CardContent>
        </Card>
      </section>
      <section className="grid md:grid-cols-2 gap-2">
        <ActionCard
          title="Projetos"
          description="Comunidade"
          action={() => router.push("/projects")}
        >
          <p className="text-xl">Conheça projetos publicados por outros membros da comunidade.</p>
        </ActionCard>
        <ActionCard
          title="Registrar sugestão de ideia"
          description="Comunidade"
          action={() => {
            if (isLoggedIn) {
              router.push("/projects/proposal")
            } else {
              toast.info("Você precisa realize o login antes de registrar um projeto! Estamos te redirecionando para a página de login!")
              router.push("/login")
            }
          }}
        >
          <p className="text-xl">Registre projetos que se conectem as demandas da comunidade.</p>
        </ActionCard>
      </section>
    </main>
  )
}