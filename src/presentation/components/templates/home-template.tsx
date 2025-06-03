import { Header } from "../molecules/header";
import { ActionCard } from "../organisms/action-card";

export const HomeTemplate = () => (
  <main>
    <Header />
    <section data-testid="action-start-menu" className="grid grid-cols-2 p-4 gap-2">
      <ActionCard
        title="Projetos"
        description="Comunidade"
        content="Conheça projetos publicados por outros membros da comunidade."
      />
      <ActionCard
        title="Registrar sugestão de idea"
        description="Comunidade"
        content="Registre projetos que se conectem as demandas da comunidade."
      />
    </section>
  </main>
)