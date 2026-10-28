import { LogoMark } from "./illustrations/Logo";
import { MobileMenu } from "./MobileMenu";
import { ThemeToggle } from "./ThemeToggle";
import { navLinks } from "@/lib/content";

export function Nav() {
  return (
    <header className="nav">
      <div
        className="wrap"
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "6px 28px",
          paddingTop: 8,
          paddingBottom: 8,
        }}
      >
        <a
          href="#inicio"
          style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none", color: "inherit" }}
        >
          <LogoMark />
          <span className="disp" style={{ fontSize: 16, fontWeight: 700 }}>
            Atmósfera<span style={{ fontWeight: 500, color: "var(--soft)" }}> Digital</span>
          </span>
        </a>
        <div className="nav-actions">
          <nav aria-label="Principal" className="dnav">
            {navLinks.map((l) => (
              <a key={l.label} className="nl" href={l.href}>
                {l.label}
              </a>
            ))}
            <a className="btn" style={{ padding: "6px 14px", fontSize: 13, borderRadius: 10 }} href="#contacto">
              Contacto
            </a>
          </nav>
          <ThemeToggle />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
