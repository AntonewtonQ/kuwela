import Section from "@/components/section";
import { TESTIMONIALS } from "@/lib/data";

export default function Testimonials() {
  return (
    <Section id="depoimentos">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-semibold md:text-3xl">
          O que dizem os clientes
        </h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {TESTIMONIALS.map((t) => (
          <blockquote key={t.author} className="rounded-2xl border p-6">
            <p className="text-lg">“{t.quote}”</p>
            <footer className="mt-3 text-sm text-muted-foreground">
              {t.author} — {t.role}
            </footer>
          </blockquote>
        ))}
      </div>
    </Section>
  );
}
