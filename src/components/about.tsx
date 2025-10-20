import Section from "@/components/section";

export default function About() {
  return (
    <Section id="sobre">
      <div className="grid items-start gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold md:text-3xl">
            Mais do que uma consultoria, um parceiro estratégico
          </h2>
          <p className="mt-4 text-muted-foreground">
            A Kuwela é uma empresa angolana de consultoria e inovação
            empresarial que apoia PMEs e novos empreendedores a crescerem de
            forma estruturada e sustentável. Oferecemos soluções completas que
            unem estratégia, marketing e tecnologia, ajudando negócios a
            transformar ideias em resultados concretos.
          </p>
          <p className="mt-3 text-muted-foreground">
            Posicionamo‑nos como parceiros estratégicos, actuando lado a lado
            com os clientes para desenhar caminhos de crescimento com visão,
            inovação e impacto real.
          </p>
        </div>
        <div className="rounded-2xl border p-6">
          <h3 className="text-lg font-semibold">Marcos</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>2023 – Fundação da Kuwela</li>
            <li>2024 – 30+ projectos entregues</li>
            <li>2025 – Expansão do portfólio digital</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
