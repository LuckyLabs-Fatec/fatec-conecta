import { ActionCard } from "../organisms/action-card";
import { Card, CardContent, CardHeader, CardTitle } from "../atoms/card";
import { CustomCarousel } from "../organisms/custom-carousel";

import { toast } from 'react-toastify';
import { useRouter } from "next/navigation";

export const HomeTemplate = () => {
  const router = useRouter();
  const notify = () => {
    toast.info("Você precisa realize o login antes de registrar um projeto! Estamos te redirecionando para a página de login!")
    router.push("/login")
  }
  return (
    <main className="p-4 flex flex-col gap-4">
      <section>
        <CustomCarousel />
      </section>
      <section>
        <Card data-testid="main-info-fatec-conecta">
          <CardHeader>
            <CardTitle>Como funciona o FATEC CONECTA?</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Pensando na utilização de poder ajudar o sistema de produção de novas consultorias e projetos, nós da Lucky Labs decidimos investir em um projeto aberto que visa abrir para a comunidade um espaço para que possam inserir todas as suas reclamações atuais na sociedade cotidiana, também dando espaço para que alunos na FATEC possam analisar reclamações como possíveis tópicos de interesse para desenvolverem novos projetos e assim, abrir mais possibilidades da FATEC integrar-se em situações do dia-a-dia.</p>
          </CardContent>
        </Card>
      </section>
      <section className="grid md:grid-cols-2 gap-2">
        <ActionCard
          title="Projetos"
          description="Comunidade"
          action={() => router.push("/projects")}
        >
          <p>Conheça projetos publicados por outros membros da comunidade.</p>
        </ActionCard>
        <ActionCard
          title="Registrar sugestão de ideia"
          description="Comunidade"
          action={notify}
        >
          <p>Registre projetos que se conectem as demandas da comunidade.</p>
        </ActionCard>
      </section>
    </main>
  )
}