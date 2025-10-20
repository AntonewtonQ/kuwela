import { CONTACT_INFO, NAV } from "@/lib/data";

export default function Footer() {
  return (
    <footer id="contactos" className="border-t py-12">
      <div className="container grid gap-6 md:grid-cols-3">
        <div>
          <h4 className="text-lg font-semibold">Kuwela</h4>
          <p className="mt-2 text-sm text-muted-foreground">
            Diagnostique a sua empresa gratuitamente.
          </p>
        </div>
        <div>
          <h5 className="font-semibold">Ligações úteis</h5>
          <ul className="mt-3 space-y-2">
            {NAV.map((i) => (
              <li key={i.href}>
                <a
                  href={i.href}
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {i.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="font-semibold">Contactos</h5>
          <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
            <li>{CONTACT_INFO.address}</li>
            <li>{CONTACT_INFO.email}</li>
            <li>WhatsApp: {CONTACT_INFO.whatsapp}</li>
          </ul>
        </div>
      </div>
      <div className="container mt-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Kuwela
      </div>
    </footer>
  );
}
