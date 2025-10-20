import Section from "@/components/section";
import { TESTIMONIALS } from "@/lib/data";
import { Star, X } from "lucide-react";

export default function Testimonials() {
  // enriquece os dados com placeholders opcionais (rating/data)
  const items = TESTIMONIALS.map((t, i) => ({
    ...t,
    rating: 5,
    when: ["há 2 dias", "há 1 semana", "há 2 semanas", "há 5 dias"][i % 4],
  }));

  return (
    <Section id="depoimentos" className="relative overflow-hidden">
      {/* fundo sutil para combinar com o tema */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-80 bg-[#010103]">
        <div className="h-full w-full bg-[radial-gradient(900px_400px_at_20%_50%,rgba(124,58,237,0.10),transparent_60%),radial-gradient(800px_300px_at_80%_30%,rgba(99,102,241,0.08),transparent_60%)]" />
      </div>

      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          Ouça de <span className="text-violet-300">quem mais importa</span>
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-white/70">
          Histórias reais de clientes que transformaram os seus resultados com a
          Kuwela.
        </p>
      </div>

      {/* grade estilo carrossel em mosaico */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {items.map((t, idx) => (
          <TestimonialCard key={t.author + idx} {...t} showX={idx % 2 === 1} />
        ))}
      </div>
    </Section>
  );
}

function TestimonialCard({
  quote,
  author,
  role,
  rating = 5,
  when = "há poucos dias",
  showX = false,
}: {
  quote: string;
  author: string;
  role: string;
  rating?: number;
  when?: string;
  showX?: boolean;
}) {
  const initials = getInitials(author);
  return (
    <figure className="relative rounded-[22px] border border-white/10 bg-white/5 p-5 text-white shadow-sm backdrop-blur">
      {/* cantos arredondados com traço duplo sutil */}
      <div className="pointer-events-none absolute inset-0 rounded-[22px] ring-1 ring-white/5" />

      {/* linha do topo: ícone X decorativo + tempo */}
      <div className="mb-3 flex items-center justify-between text-xs text-white/50">
        <span className="inline-flex items-center gap-1">
          {showX && (
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/10 bg-white/10">
              <X className="h-3 w-3" />
            </span>
          )}
        </span>
        <span>{when}</span>
      </div>

      <blockquote className="text-[15px] leading-relaxed text-white/90">
        “{quote}”
      </blockquote>

      {/* rodapé com avatar, nome e rating */}
      <figcaption className="mt-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-violet-400 to-indigo-400 text-[11px] font-semibold text-black/80">
            {initials}
          </div>
          <div className="leading-tight">
            <div className="text-sm font-medium text-white">{author}</div>
            <div className="text-xs text-white/60">{role}</div>
          </div>
        </div>
        <Stars count={rating} />
      </figcaption>
    </figure>
  );
}

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="inline-flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < count ? "fill-yellow-400 text-yellow-400" : "text-white/30"
          }`}
        />
      ))}
    </div>
  );
}

function getInitials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((s) => s[0]?.toUpperCase())
    .join("");
}
