import Section from "@/components/section";
import { AREAS } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Play } from "lucide-react";

export default function Areas() {
  return (
    <Section id="areas" className="relative">
      {/* background rays like the mock */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-80 bg-[#010103]">
        <div className="h-full w-full bg-[radial-gradient(900px_400px_at_20%_0%,rgba(124,58,237,0.10),transparent_60%),radial-gradient(800px_300px_at_80%_20%,rgba(99,102,241,0.10),transparent_60%)]" />
      </div>

      {/* Heading */}
      <div className="mb-10 text-center">
        <h2 className="text-2xl font-extrabold text-white md:text-4xl">
          Escolha a{" "}
          <span className="bg-gradient-to-r from-violet-300 to-indigo-300 bg-clip-text text-transparent">
            solução
          </span>{" "}
          perfeita para o seu negócio
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-white/70">
          Da estratégia ao marketing e tecnologia — opções flexíveis para
          necessidades diferentes.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-6 md:grid-cols-3 xl:grid-cols-4">
        {AREAS.map((a, idx) => {
          const featured = idx === 1; // destaque semelhante ao card do meio no mock
          return (
            <article
              key={a.title}
              className={`relative overflow-hidden rounded-[22px] border bg-white/[0.04] p-6 pt-24 text-center shadow-sm backdrop-blur-sm ${
                featured
                  ? "border-white/20 shadow-[0_0_0_1px_rgba(168,85,247,0.25)_inset]"
                  : "border-white/10"
              }`}
            >
              {/* top band */}
              <div
                className={`absolute inset-x-0 top-0 h-24 rounded-t-[22px] border-b ${
                  featured
                    ? "bg-gradient-to-b from-violet-600/25 to-transparent border-white/15"
                    : "bg-white/[0.06] border-white/10"
                }`}
              />

              {/* floating play badge */}
              <div className="absolute top-4 left-1/2 grid h-12 w-12 -translate-x-1/2 place-items-center rounded-full border border-white/15 bg-white/10 text-violet-200 shadow-xl">
                <Play className="h-5 w-5" />
              </div>

              {/* Title (plan name style) */}
              <h3 className="text-sm font-medium text-white/85">{a.title}</h3>

              {/* Feature list */}
              <ul className="mt-5 space-y-2 text-left text-sm text-white/75">
                {a.items.map((i: string) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-violet-300" />
                    <span>{i}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-6">
                {featured ? (
                  <div className="rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 p-[2px]">
                    <Button className="h-10 w-full rounded-full bg-white text-[#0b0b14] hover:bg-white/95">
                      Explorar
                    </Button>
                  </div>
                ) : (
                  <Button
                    variant="outline"
                    className="h-10 w-full rounded-full border-white/15 bg-white/5 text-white hover:bg-white/10"
                  >
                    Explorar
                  </Button>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
