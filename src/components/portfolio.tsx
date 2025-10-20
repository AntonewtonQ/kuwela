import Image from "next/image";
import Section from "@/components/section";
import { PORTFOLIO } from "@/lib/data";

export default function Portfolio() {
  return (
    <Section id="portfolio">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold md:text-3xl">
            Resultados que falam por si
          </h2>
          <p className="mt-2 text-muted-foreground">
            Amostra de projectos (arraste para ver mais)
          </p>
        </div>
        <a
          href="#"
          className="text-sm text-muted-foreground hover:text-foreground"
        >
          Ver portfólio completo →
        </a>
      </div>

      <div className="grid auto-cols-[80%] grid-flow-col gap-6 overflow-x-auto pb-2 sm:auto-cols-[45%] md:auto-cols-[30%]">
        {PORTFOLIO.map((p) => (
          <figure key={p.title} className="rounded-2xl border bg-card">
            {/* Substituir por imagens reais */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-2xl bg-muted">
              <Image
                src={p.image}
                alt={p.title}
                fill
                className="object-cover"
              />
            </div>
            <figcaption className="p-4">
              <div className="text-sm text-muted-foreground">{p.tag}</div>
              <div className="font-medium">{p.title}</div>
              <div className="text-xs text-muted-foreground">
                Impacto: {p.impact}
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
