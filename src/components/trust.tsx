import Section from "@/components/section";

// --- Simple, brand‑neutral logo glyphs (SVG) ---
type LogoProps = { className?: string };
const common = {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg",
};

function LogoGrid({ className }: LogoProps) {
  return (
    <svg {...common} className={className} aria-hidden>
      {Array.from({ length: 3 }).map((_, r) =>
        Array.from({ length: 3 }).map((_, c) => (
          <circle
            key={`${r}-${c}`}
            cx={6 + c * 6}
            cy={6 + r * 6}
            r="2"
            fill="currentColor"
          />
        ))
      )}
    </svg>
  );
}
function LogoSwoosh({ className }: LogoProps) {
  return (
    <svg {...common} className={className} aria-hidden>
      <path
        d="M3 15c3-4 7-6 11-6 2 0 4 .6 7 2-3 4-7 6-11 6-2 0-4-.6-7-2Z"
        fill="currentColor"
      />
    </svg>
  );
}
function LogoAsterisk({ className }: LogoProps) {
  return (
    <svg {...common} className={className} aria-hidden>
      {[0, 60, 120].map((r) => (
        <g key={r} transform={`rotate(${r} 12 12)`}>
          <rect
            x="10.5"
            y="4"
            width="3"
            height="16"
            rx="1.5"
            fill="currentColor"
          />
        </g>
      ))}
    </svg>
  );
}
function LogoBag({ className }: LogoProps) {
  return (
    <svg {...common} className={className} aria-hidden>
      <path d="M6 9h12l-1 9H7L6 9Z" fill="currentColor" />
      <path
        d="M9 9V8a3 3 0 0 1 6 0v1"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
function LogoSpiral({ className }: LogoProps) {
  return (
    <svg {...common} className={className} aria-hidden>
      <path
        d="M12 6a6 6 0 1 0 6 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="18" cy="12" r="3" fill="currentColor" />
    </svg>
  );
}
function LogoMono({ className }: LogoProps) {
  return (
    <svg {...common} className={className} aria-hidden>
      <circle
        cx="12"
        cy="12"
        r="8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M9 15V8l6 7V8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
function LogoN({ className }: LogoProps) {
  return (
    <svg {...common} className={className} aria-hidden>
      <path
        d="M7 17V7l10 10V7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function LogoWedge({ className }: LogoProps) {
  return (
    <svg {...common} className={className} aria-hidden>
      <circle
        cx="12"
        cy="12"
        r="9"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M12 3a9 9 0 0 1 9 9h-9V3Z" fill="currentColor" />
    </svg>
  );
}

const LOGOS = [
  LogoGrid,
  LogoSwoosh,
  LogoAsterisk,
  LogoBag,
  LogoSpiral,
  LogoMono,
  LogoN,
  LogoWedge,
];

export default function TrustedBy() {
  return (
    <Section id="parceiros" className="relative py-14">
      {/* arco/onda superior como no mock */}
      <div className="pointer-events-none absolute inset-x-0 -top-20 h-28 bg-[radial-gradient(120%_100%_at_50%_0,rgba(124,58,237,0.45),transparent_70%)]" />

      <div className="container">
        <p className="text-center text-sm font-medium text-white/85">
          Apoiados por{" "}
          <span className="bg-gradient-to-r from-violet-300 to-indigo-300 bg-clip-text text-transparent">
            200+ empresas
          </span>{" "}
          em crescimento
        </p>

        <div className="mt-8 grid grid-cols-4 items-center justify-items-center gap-6 opacity-95 md:grid-cols-8">
          {LOGOS.map((Logo, i) => (
            <div key={i} className="h-8 w-8 text-violet-200 md:h-10 md:w-10">
              <Logo className="h-full w-full" />
            </div>
          ))}
        </div>
      </div>

      {/* brilho inferior discreto para integrar a secção */}
      <div className="pointer-events-none absolute inset-x-0 -bottom-10 h-20 bg-[radial-gradient(60%_50%_at_50%_120%,rgba(99,102,241,0.25),transparent_70%)]" />
    </Section>
  );
}
