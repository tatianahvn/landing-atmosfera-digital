import { navLinks, site } from "@/lib/content";

const links = [...navLinks, { label: "Contacto", href: "#contacto" }];

export function Footer() {
  return (
    <footer style={{ background: "#123A7A", color: "#D3E1F6", fontSize: 14 }}>
      <div
        className="wrap"
        style={{ paddingTop: 48, paddingBottom: 32, display: "flex", flexDirection: "column", gap: 28 }}
      >
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "28px 48px" }}>
          <div
            style={{ flex: "1 1 300px", minWidth: 0, display: "flex", flexDirection: "column", gap: 10, maxWidth: 420 }}
          >
            <div className="disp" style={{ fontSize: 19, fontWeight: 700, color: "#FFFFFF" }}>
              {site.name}
            </div>
            <p>{site.tagline}</p>
            <p className="disp" style={{ fontSize: 17, fontWeight: 700, color: "#8FE9E5" }}>
              Crecemos juntos.
            </p>
          </div>
          <nav className="flinks" aria-label="Pie de página">
            {links.map((l) => (
              <a key={l.label} className="nl" href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,.2)",
            paddingTop: 20,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "8px 24px",
            fontSize: 13,
          }}
        >
          <div>
            © {site.year} {site.name}. Todos los derechos reservados.
          </div>
          <div>Negocios locales. Grandes historias.</div>
        </div>
      </div>
    </footer>
  );
}
