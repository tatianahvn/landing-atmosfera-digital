import type { ReactElement } from "react";
import Image from "next/image";
import { demos, type Demo } from "@/lib/content";
import { BrowserIcon, HealthIcon, ScissorsIcon } from "./illustrations/DemoIcons";

const icons: Record<Demo["key"], ReactElement> = {
  agency: <BrowserIcon />,
  salon: <ScissorsIcon />,
  health: <HealthIcon />,
};

const badges: Record<Demo["status"], string> = {
  here: "Estás aquí",
  live: "Demo en vivo",
  soon: "Próximamente",
};

// Dominio que se muestra en la barra de direcciones simulada (solo para demos publicadas).
function hostOf(href?: string) {
  return href?.startsWith("http") ? new URL(href).host : "";
}

function DemoLink({ demo }: { demo: Demo }) {
  if (demo.status === "soon" || !demo.href) {
    return <span className="dcta dcta-soon">En preparación</span>;
  }
  if (demo.status === "here") {
    return (
      <a className="dcta" href={demo.href}>
        Recorre esta página <span className="arr">↑</span>
      </a>
    );
  }
  return (
    <a className="dcta" href={demo.href} target="_blank" rel="noopener noreferrer">
      Ver demo <span className="arr">↗</span>
      <span className="sr-only"> (se abre en otra pestaña)</span>
    </a>
  );
}

export function Demos() {
  return (
    <section id="demos" style={{ paddingBottom: 96 }}>
      <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: 44 }}>
        <div className="sechead">
          <div className="eyebrow">DEMOS PARA EXPLORAR</div>
          <h2 className="h2">Mira cómo podría lucir tu sitio.</h2>
          <p className="lead">
            Recorre ejemplos funcionando y date una idea de las secciones, las funciones, la calidad y el diseño que
            puede tener la página de tu negocio.
          </p>
        </div>
        <div className="grid">
          {demos.map((d) => (
            <article key={d.key} className="card case demo">
              <div className={`cvis ${d.tone}${d.image ? " has-shot" : ""}`}>
                {d.image ? (
                  <>
                    {/* Barra de ventana estilo macOS: tres botones y la barra de direcciones */}
                    <div className="dbar" aria-hidden="true">
                      <span className="ddots">
                        <span />
                        <span />
                        <span />
                      </span>
                      <span className="durl">{hostOf(d.href)}</span>
                      <span className={`dbadge ${d.status}`}>{badges[d.status]}</span>
                    </div>
                    <div className="dshot">
                      <Image
                        src={d.image}
                        alt={`Captura del inicio de la demo ${d.title}`}
                        fill
                        sizes="(max-width: 640px) 90vw, 360px"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <span className={`dbadge ${d.status}`}>{badges[d.status]}</span>
                    {icons[d.key]}
                  </>
                )}
              </div>
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
        </div>
        <a className="more" href="#contacto">
          ¿Quieres una para tu negocio? Hablemos <span className="arr">→</span>
        </a>
      </div>
    </section>
  );
}
