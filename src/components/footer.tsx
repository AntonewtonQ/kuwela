import Link from "next/link";
import { AREAS, NAV } from "@/lib/data";
import { Facebook, Linkedin, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="contactos"
      className="relative border-t border-white/10 py-14 text-white px-10"
    >
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-80 bg-[#0b0b14]">
        <div className="h-full w-full bg-[radial-gradient(900px_400px_at_20%_50%,rgba(124,58,237,0.10),transparent_60%),radial-gradient(800px_300px_at_80%_30%,rgba(99,102,241,0.08),transparent_60%)]" />
      </div>

      <div className="container grid gap-10 md:grid-cols-3">
        {/* Left – Features/Áreas */}
        <div>
          <div className="flex items-center gap-2">
            <LogoDot />
            <span className="bg-gradient-to-r from-violet-300 to-indigo-300 bg-clip-text text-xl font-semibold text-transparent">
              Kuwela
            </span>
          </div>
          <h5 className="mt-6 text-sm font-semibold text-white/90">Soluções</h5>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            {AREAS.map((a) => (
              <li key={a.title}>{a.title}</li>
            ))}
          </ul>
        </div>

        {/* Center – Social + mini nav */}
        <div className="text-center">
          <div className="text-sm font-semibold text-white/90">Siga‑nos</div>
          <div className="mt-4 flex items-center justify-center gap-4">
            <SocialIcon href="#" label="Facebook">
              <Facebook className="h-5 w-5" />
            </SocialIcon>
            <SocialIcon href="#" label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </SocialIcon>
            <SocialIcon href="#" label="Instagram">
              <Instagram className="h-5 w-5" />
            </SocialIcon>
            <SocialIcon href="#" label="Twitter/X">
              <Twitter className="h-5 w-5" />
            </SocialIcon>
          </div>

          {/* mini nav */}
          <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/60">
            {NAV.map((i) => (
              <li key={i.href}>
                <Link href={i.href} className="hover:text-white/90">
                  {i.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right – Company */}
        <div className="md:text-right">
          <h5 className="text-sm font-semibold text-white/90">Empresa</h5>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li>
              <Link href="#sobre" className="hover:text-white">
                Sobre nós
              </Link>
            </li>
            <li>
              <Link href="#portfolio" className="hover:text-white">
                Portfólio
              </Link>
            </li>
            <li>
              <Link href="#blog" className="hover:text-white">
                Blog/Recursos
              </Link>
            </li>
            <li>
              <Link href="#termos" className="hover:text-white">
                Termos de Serviço
              </Link>
            </li>
            <li>
              <Link href="#privacidade" className="hover:text-white">
                Política de Privacidade
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* bottom bar */}
      <div className="container mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/60 md:flex-row">
        <div>
          © {new Date().getFullYear()} Kuwela — Todos os direitos reservados.
        </div>
        <div className="flex items-center gap-4">
          <Link href="#termos" className="hover:text-white/80">
            Termos
          </Link>
          <span aria-hidden className="text-white/25">
            •
          </span>
          <Link href="#privacidade" className="hover:text-white/80">
            Privacidade
          </Link>
        </div>
      </div>

      {/* glow base */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-[radial-gradient(60%_50%_at_50%_120%,rgba(99,102,241,0.35),transparent_70%)]" />
    </footer>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-white/90 shadow-[inset_0_0_0_3px_rgba(255,255,255,0.04)] transition hover:bg-white/15"
    >
      {children}
    </Link>
  );
}

function LogoDot() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-[0_0_12px_rgba(139,92,246,0.35)]"
    >
      <defs>
        <linearGradient id="g2" x1="0" x2="1" y1="0" y2="1">
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
            fill="url(#g2)"
          />
        ))
      )}
    </svg>
  );
}
