import type { ReactNode } from "react";
import Image from "next/image";
import { demos, invite, whatsappUrl, type Demo } from "@/lib/content";
import { NewSiteIcon, ToothIcon } from "./illustrations/DemoIcons";

// Ícono para las tarjetas que aún no tienen captura.
const icons: Partial<Record<Demo["key"], ReactNode>> = {
  dental: <ToothIcon />,
};

// Una sola etiqueta por tarjeta, con viñeta de color: verde para cliente, azul para demo.
const kindLabels: Record<Demo["kind"], string> = {
  client: "Cliente",
  demo: "Demo",
};

// Marco común de todas las tarjetas: barra de ventana estilo macOS (botones y buscador vacío)
// y debajo la captura, o el ícono sobre el degradado cuando aún no hay captura.
function BrowserFrame({ tone, badge, children }: { tone: string; badge?: ReactNode; children: ReactNode }) {
  return (
    <div className="cvis dwin">
      <div className="dbar" aria-hidden="true">
        <span className="ddots">
          <span />
          <span />
          <span />
        </span>
        <span className="durl" />
        <span className="dbar-end" />
      </div>
      <div className={`dshot ${tone}`}>
        {children}
        {badge}
      </div>
    </div>
  );
}

function DemoLink({ demo }: { demo: Demo }) {
  if (demo.link === "soon" || !demo.href) {
    return <span className="dcta dcta-soon">En preparación</span>;
  }
  if (demo.link === "here") {
    return (
      <a className="btn dcta" href={demo.href}>
        Recorre esta página <span className="arr">↑</span>
      </a>
    );
  }
  return (
    <a className="btn dcta" href={demo.href} target="_blank" rel="noopener noreferrer">
      {demo.kind === "client" ? "Visitar sitio" : "Ver demo"} <span className="arr">↗</span>
      <span className="sr-only"> (se abre en otra pestaña)</span>
    </a>
  );
}

export function Demos() {
  return (
    <section id="proyectos" style={{ paddingBottom: 96 }}>
      <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: 44 }}>
        <div className="sechead">
          <div className="eyebrow">PROYECTOS Y DEMOS</div>
          <h2 className="h2">Mira cómo podría lucir tu sitio.</h2>
          <p className="lead">
            Explora sitios hechos para clientes reales y demos funcionando. Date una idea de las secciones, las
            funciones, la calidad y el diseño que puede tener la página de tu negocio.
          </p>
        </div>
        <div className="demos-grid">
          {demos.map((d) => (
            <article key={d.key} className="card case demo">
              <BrowserFrame
                tone={d.image ? "" : d.tone}
                badge={<span className={`dbadge ${d.kind}`}>{kindLabels[d.kind]}</span>}
              >
                {d.image ? (
                  <Image
                    src={d.image}
                    alt={`Captura del inicio de ${d.title}`}
                    fill
                    sizes="(max-width: 700px) 92vw, 360px"
                  />
                ) : (
                  <div className="dart">{icons[d.key]}</div>
                )}
              </BrowserFrame>
              <div className="cbody">
                <h3>{d.title}</h3>
                <p className="dtext">{d.text}</p>
                <ul className="dfeat" aria-label={`Incluye en ${d.title}`}>
                  {d.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <DemoLink demo={d} />
              </div>
            </article>
          ))}
          <article className="card case demo invite">
            <BrowserFrame tone="cv2">
              <div className="dart">
                <NewSiteIcon />
              </div>
            </BrowserFrame>
            <div className="cbody">
              <h3>{invite.title}</h3>
              <p className="dtext">{invite.text}</p>
              <ul className="dfeat" aria-label={`Incluye en ${invite.title}`}>
                {invite.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <a className="btn dcta" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                {invite.cta} <span className="arr">→</span>
                <span className="sr-only"> (abre WhatsApp)</span>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
