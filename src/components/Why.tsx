import type { ReactElement } from "react";
import { whyPoints } from "@/lib/content";
import { EyeIcon, TrendIcon, UsersIcon } from "./illustrations/Icons";

const icons: Record<(typeof whyPoints)[number]["key"], ReactElement> = {
  eye: <EyeIcon />,
  users: <UsersIcon />,
  trend: <TrendIcon />,
};

export function Why() {
  return (
    <section id="nosotros" style={{ paddingBottom: 96 }}>
      <div className="wrap">
        <div
          className="deep"
          style={{
            padding: "clamp(32px,6vw,64px)",
            display: "flex",
            flexWrap: "wrap",
            gap: "40px 56px",
            alignItems: "center",
          }}
        >
          <div style={{ flex: "1 1 360px", minWidth: 0, display: "flex", flexDirection: "column", gap: 18 }}>
            <div className="eyebrow">POR QUÉ ATMÓSFERA DIGITAL</div>
            <h2 style={{ fontSize: "clamp(26px,3.4vw,38px)", lineHeight: 1.15, fontWeight: 700 }}>
              Tu negocio, más fuerte en el mundo digital.
            </h2>
            <p style={{ fontSize: 16, color: "#D3E1F6", maxWidth: 540 }}>
              No se trata solo de estar en internet, sino de usar las herramientas correctas para atraer más clientes,
              mejorar tu operación y hacer crecer tus ventas.
            </p>
          </div>
          <div style={{ flex: "1 1 280px", minWidth: 0, display: "flex", flexDirection: "column", gap: 14 }}>
            {whyPoints.map((p) => (
              <div key={p.key} className="vrow">
                <div className="vico">{icons[p.key]}</div>
                {p.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
