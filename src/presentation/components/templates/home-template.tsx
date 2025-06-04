import { ActionCard } from "../organisms/action-card";
import { Card, CardContent, CardHeader, CardTitle } from "../atoms/card";
import { CustomCarousel } from "../organisms/custom-carousel";

export const HomeTemplate = () => (
  <main className="p-4 flex flex-col gap-4">
    <section>
      <CustomCarousel />
    </section>
    <section>
      <Card>
        <CardHeader>
          <CardTitle>Como funciona o FATEC CONECTA?</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Pensando na utilização de poder ajudar o sistema de produção de novas consultorias e projetos, nós da Lucky Labs decidimos investir em um projeto aberto que visa abrir para a comunidade um espaço para que possam inserir todas as suas reclamações atuais na sociedade cotidiana, também dando espaço para que alunos na FATEC possam analisar reclamações como possíveis tópicos de interesse para desenvolverem novos projetos e assim, abrir mais possibilidades da FATEC integrar-se em situações do dia-a-dia.</p>
        </CardContent>
      </Card>
    </section>
    <section className="grid grid-cols-2 gap-2">
      <ActionCard
        title="Projetos"
        description="Comunidade"
      >
        <p>Conheça projetos publicados por outros membros da comunidade.</p>
      </ActionCard>
      <ActionCard
        title="Registrar sugestão de idea"
        description="Comunidade"
      >
        <p>Registre projetos que se conectem as demandas da comunidade.</p>
      </ActionCard>
    </section>
  </main>
)