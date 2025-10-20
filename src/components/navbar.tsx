"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { NAV } from "@/lib/data";
import { Search, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("#inicio");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section highlight (observa as secções com os ids do NAV)
  useEffect(() => {
    const ids = NAV.map((n) => n.href.replace("#", ""));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    if (!sections.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        }
      },
      { root: null, rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.2, 0.6] }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-colors ${
        scrolled
          ? "border-white/10 bg-[#0b0b14]/70 backdrop-blur"
          : "border-transparent bg-[#151529]"
      }`}
    >
      {/* soft violet background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-80">
        <div className="h-full w-full bg-[radial-gradient(900px_400px_at_20%_50%,rgba(124,58,237,0.18),transparent_60%),radial-gradient(800px_300px_at_80%_30%,rgba(99,102,241,0.16),transparent_60%)]" />
      </div>

      <div className="container flex h-16 items-center justify-between">
        {/* Brand: ícone + nome com gradiente */}
        <Link href="#inicio" className="group inline-flex items-center gap-2">
          <DotLogo />
          <span className="bg-gradient-to-r from-violet-500 to-indigo-400 bg-clip-text text-lg font-semibold text-transparent group-hover:opacity-95">
            Kuwela
          </span>
        </Link>

        {/* Links centrais com separadores "+" e indicador activo */}
        <nav className="hidden items-center gap-3 md:flex">
          {NAV.map((item, idx) => (
            <div className="flex items-center" key={item.href}>
              <Link
                href={item.href}
                className={`relative px-2 py-1 text-sm transition-colors ${
                  active === item.href
                    ? "text-violet-300"
                    : "text-white/70 hover:text-white"
                }`}
              >
                <span>{item.label}</span>
                {/* underline/indicator estilo Nexus */}
                <span
                  className={`pointer-events-none absolute left-1/2 top-full block h-[2px] w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-400 to-indigo-400 transition-[width] duration-300 ${
                    active === item.href ? "w-6" : "group-hover:w-6"
                  }`}
                />
              </Link>
              {idx < NAV.length - 1 && (
                <span
                  aria-hidden
                  className="mx-3 select-none text-xs text-white/25"
                >
                  +
                </span>
              )}
            </div>
          ))}
        </nav>

        {/* CTA + ícones à direita */}
        <div className="flex items-center gap-2">
          {/* CTA com aro gradiente */}
          <div className="hidden sm:block">
            <div className="rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 p-[2px] shadow-[0_0_0_3px_rgba(255,255,255,0.06)_inset]">
              <Button
                asChild
                size="sm"
                variant="outline"
                className="h-9 rounded-full border-none bg-white/5 px-5 text-white hover:bg-white/10"
              >
                <Link href="#contactos">Contactar</Link>
              </Button>
            </div>
          </div>

          {/* Botões circulares */}
          <IconCircle ariaLabel="Pesquisar" title="Pesquisar">
            <Search className="h-4 w-4" />
          </IconCircle>
          <IconCircle ariaLabel="Fechar" title="Fechar">
            <X className="h-4 w-4" />
          </IconCircle>
        </div>
      </div>

      {/* borda inferior luminosa */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-[radial-gradient(60%_50%_at_50%_120%,rgba(99,102,241,0.35),transparent_70%)]" />
    </header>
  );
}

function IconCircle({
  children,
  ariaLabel,
  title,
}: {
  children: React.ReactNode;
  ariaLabel: string;
  title?: string;
}) {
  return (
    <button
      aria-label={ariaLabel}
      title={title}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/8 text-white/90 backdrop-blur transition hover:bg-white/15"
      type="button"
    >
      {children}
    </button>
  );
}

function DotLogo() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-[0_0_12px_rgba(139,92,246,0.35)]"
    >
      {/* grid de pontos com gradiente */}
      <defs>
        <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#c4b5fd" />
          <stop offset="100%" stopColor="#a5b4fc" />
        </linearGradient>
      </defs>
      {Array.from({ length: 3 }).map((_, r) =>
        Array.from({ length: 3 }).map((_, c) => (
          <circle
            key={`${r}-${c}`}
            cx={6 + c * 6}
            cy={6 + r * 6}
            r="2"
            fill="url(#g)"
          />
        ))
      )}
    </svg>
  );
}
