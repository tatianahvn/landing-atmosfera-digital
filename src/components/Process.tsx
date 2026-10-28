import type { CSSProperties, ReactElement } from "react";
import { steps } from "@/lib/content";
import {
  HandshakeIllustration,
  PlanIllustration,
  RocketIllustration,
  StoreIllustration,
} from "./illustrations/ProcessIllustrations";

const illustrations: Record<(typeof steps)[number]["key"], ReactElement> = {
  store: <StoreIllustration />,
  plan: <PlanIllustration />,
  rocket: <RocketIllustration />,
  handshake: <HandshakeIllustration />,
};

// Las tarjetas se apilan con `position: sticky` (ver .pinwrap / .stack / .scard en globals.css).
// El encabezado y la tarjeta 1 permanecen fijos; las demás suben y se encima una a una.
export function Process() {
  return (
    <section id="proceso" style={{ paddingBottom: 96 }}>
      <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: 44 }}>
        <div className="pinwrap">
          <div className="sechead pinhead">
            <div className="eyebrow">CÓMO TRABAJAMOS</div>
            <h2 className="h2">Un proceso claro, sin complicaciones.</h2>
            <p className="lead">Te acompañamos paso a paso, desde la primera conversación hasta ver resultados.</p>
          </div>
          <div className="stack">
            {steps.map((s, i) => (
              <article key={s.key} className="card scard" style={{ "--i": i } as CSSProperties}>
                <div className="numbox">{i + 1}</div>
                <h3 style={{ fontSize: 17, fontWeight: 700 }}>{s.title}</h3>
                <p style={{ color: "#3F4D66" }}>{s.text}</p>
                <div className="sill">{illustrations[s.key]}</div>
              </article>
            ))}
          </div>
        </div>
        <a className="more" href="#contacto">
          Conoce nuestro proceso <span className="arr">→</span>
        </a>
      </div>
    </section>
  );
}
