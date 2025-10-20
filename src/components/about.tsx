import Section from "@/components/section";
import { Separator } from "@/components/ui/separator";
import { CheckCircle2, Target, Rocket, Lightbulb } from "lucide-react";

export default function About() {
  return (
    <Section id="sobre" className="relative ">
      {/* background glows to match hero/navbar */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-80 bg-[#010103]">
        <div className="h-full w-full bg-[radial-gradient(900px_400px_at_20%_50%,rgba(124,58,237,0.12),transparent_60%),radial-gradient(800px_300px_at_80%_30%,rgba(99,102,241,0.10),transparent_60%)]" />
      </div>

      <div className="grid items-start gap-10 md:grid-cols-2">
        {/* copy lado esquerdo */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
            Sobre a Kuwela
          </span>

          <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
            Mais do que uma consultoria, uma{" "}
            <span className="text-violet-300">parceira estratégica</span>
          </h2>

          <p className="mt-4 text-white/70">
            A Kuwela é uma empresa angolana de consultoria e inovação
            empresarial que apoia PMEs e novos empreendedores a crescerem de
            forma estruturada e sustentável. Unimos estratégia, marketing e
            tecnologia para transformar ideias em resultados concretos.
          </p>
          <p className="mt-3 text-white/70">
            Actuamos lado a lado com os clientes para desenhar caminhos de
            crescimento com visão, inovação e impacto real.
          </p>

          {/* highlights */}
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-violet-300" />
              <div>
                <h3 className="font-medium text-white">
                  Estratégia + Execução
                </h3>
                <p className="text-sm text-white/60">
                  Planos accionáveis e acompanhamento próximo.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Target className="mt-0.5 h-5 w-5 text-violet-300" />
              <div>
                <h3 className="font-medium text-white">Posicionamento claro</h3>
                <p className="text-sm text-white/60">
                  Marca e narrativa alinhadas ao mercado.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Rocket className="mt-0.5 h-5 w-5 text-violet-300" />
              <div>
                <h3 className="font-medium text-white">
                  Crescimento previsível
                </h3>
                <p className="text-sm text-white/60">
                  Funis, campanhas e métricas que importam.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Lightbulb className="mt-0.5 h-5 w-5 text-violet-300" />
              <div>
                <h3 className="font-medium text-white">
                  Transformação digital
                </h3>
                <p className="text-sm text-white/60">
                  Websites, apps e ferramentas à medida.
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* cartão de marcos + métricas */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white shadow-sm backdrop-blur">
          <h3 className="text-lg font-semibold">Marcos</h3>
          <Separator className="my-4 bg-white/10" />

          <ol className="space-y-4 text-sm text-white/70">
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-violet-400" />
              <div>
                <div className="font-medium text-white">
                  2025 — Fundação da Kuwela
                </div>
                <p>Primeiros projectos e validação do método.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-violet-400" />
              <div>
                <div className="font-medium text-white">
                  2025 — 1+ projectos entregues
                </div>
                <p>Expansão de serviços e presença digital.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 rounded-full bg-violet-400" />
              <div>
                <div className="font-medium text-white">
                  2025 — Portfólio digital reforçado
                </div>
                <p>Novas soluções e casos de crescimento.</p>
              </div>
            </li>
          </ol>

          <Separator className="my-6 bg-white/10" />

          {/* métricas rápidas */}
          <div className="grid grid-cols-3 divide-x divide-white/10 text-center">
            <div>
              <div className="text-2xl font-bold">1+</div>
              <div className="text-xs text-white/60">projectos</div>
            </div>
            <div>
              <div className="text-2xl font-bold">18%</div>
              <div className="text-xs text-white/60">
                média de aumento em vendas*
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold">120k</div>
              <div className="text-xs text-white/60">alcance em campanhas</div>
            </div>
          </div>

          <p className="mt-3 text-center text-[11px] text-white/50">
            *exemplo médio em casos seleccionados
          </p>
        </div>
      </div>
    </Section>
  );
}
