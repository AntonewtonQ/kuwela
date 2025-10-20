import Section from "@/components/section";
import { BLOG } from "@/lib/data";

export default function Blog() {
  return (
    <Section id="blog">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-semibold md:text-3xl">Recursos</h2>
        <p className="mt-2 text-muted-foreground">
          Artigos sobre marketing, negócios e inovação
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {BLOG.map((p) => (
          <a
            key={p.title}
            href={p.href}
            className="rounded-2xl border p-6 hover:bg-accent"
          >
            <div className="text-xs text-muted-foreground">
              {new Date(p.date).toLocaleDateString("pt-PT")}
            </div>
            <h3 className="mt-2 font-medium">{p.title}</h3>
          </a>
        ))}
      </div>
    </Section>
  );
}
