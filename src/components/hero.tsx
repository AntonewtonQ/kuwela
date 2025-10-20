"use client";

import { Button } from "@/components/ui/button";
import ContactDialog from "@/components/contact-dialog";
import { Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-[#0b0b14]">
        {/* soft violet glows */}
        <div className="absolute inset-0 opacity-90 bg-[radial-gradient(1200px_600px_at_50%_-10%,#6d28d9_10%,transparent_60%),radial-gradient(800px_400px_at_80%_20%,#4f46e5_8%,transparent_60%)]" />
        {/* star field */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
      </div>

      <div className="container flex min-h-[72vh] flex-col items-center justify-center py-24 text-center">
        {/* Eyebrow */}
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
          <Sparkles className="h-3.5 w-3.5" />
          Consultoria angolana — estratégia, marketing e tecnologia
        </span>

        {/* Headline */}
        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white md:text-6xl">
          Uma <span className="text-violet-300">parceira</span>,
          <br className="hidden sm:block" />
          possibilidades <span className="text-violet-300">infinitas</span>
        </h1>

        {/* Subcopy */}
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
          Da estratégia à execução, a Kuwela ajuda PMEs a crescer de forma
          inteligente — diagnósticos rápidos, planos accionáveis e soluções
          digitais sob medida.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
          {/* Primary CTA abre o diálogo de diagnóstico */}
          <div className="[&>button]:h-12 [&>button]:rounded-full [&>button]:px-6 [&>button]:text-base [&>button]:bg-violet-600 [&>button:hover]:bg-violet-500">
            <ContactDialog asCTA />
          </div>

          {/* Secondary CTA */}
          <Button
            asChild
            variant="outline"
            className="h-12 rounded-full border-white/15 bg-white/5 px-6 text-base text-white hover:bg-white/10 hover:text-white"
          >
            <a href="#portfolio">Ver portfólio</a>
          </Button>
        </div>
      </div>

      <Decorations />
    </section>
  );
}

function Decorations() {
  return (
    <>
      {/* purple sparkles */}
      <span className="pointer-events-none absolute left-6 top-40 h-5 w-5 -rotate-12 rounded-[2px] bg-violet-400/40 blur-[1px]" />
      <span className="pointer-events-none absolute right-12 top-24 h-6 w-6 rotate-45 rounded-[2px] bg-violet-500/40 blur-[1px]" />
      <span className="pointer-events-none absolute bottom-20 left-1/3 h-4 w-4 rotate-45 rounded-[2px] bg-indigo-400/40 blur-[1px]" />

      {/* subtle gradient footer wave */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-[radial-gradient(60%_50%_at_50%_120%,rgba(99,102,241,0.35),transparent_70%)]" />
    </>
  );
}
