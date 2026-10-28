import type { ReactElement } from "react";
import { services } from "@/lib/content";
import { ArrowIcon } from "./illustrations/Icons";
import { BookingIcon, GoogleIcon, QrIcon, SiteIcon, ToolsIcon, WhatsappIcon } from "./illustrations/ServiceIcons";

const icons: Record<(typeof services)[number]["key"], ReactElement> = {
  site: <SiteIcon />,
  tools: <ToolsIcon />,
  google: <GoogleIcon />,
  booking: <BookingIcon />,
  whatsapp: <WhatsappIcon />,
  qr: <QrIcon />,
};

export function Services() {
  return (
    <section id="servicios" style={{ paddingTop: 96, paddingBottom: 96 }}>
      <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: 44 }}>
        <div className="sechead">
          <div className="eyebrow">NUESTROS SERVICIOS</div>
          <h2 className="h2">Soluciones digitales para cada etapa de tu negocio.</h2>
          <p className="lead">
            Desde una presencia en línea hasta herramientas que te ayuden a vender más, creamos soluciones a la medida
            de tus objetivos.
          </p>
        </div>
        <div className="grid3">
          {services.map((s) => (
            <article key={s.key} className={`card lift svc ${s.tone}`}>
              <div className="itile">{icons[s.key]}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <a className="svc-go" href="#contacto" aria-label={s.aria}>
                <ArrowIcon width={20} height={20} fill="none" stroke="currentColor" strokeWidth={2.4} />
              </a>
            </article>
          ))}
        </div>
        <a className="more" href="#contacto">
          Conoce todos los servicios <span className="arr">→</span>
        </a>
      </div>
    </section>
  );
}
