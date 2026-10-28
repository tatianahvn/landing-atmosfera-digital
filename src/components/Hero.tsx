import { HeroIllustration } from "./illustrations/HeroIllustration";
import { CheckIcon } from "./illustrations/Icons";
import { heroPoints } from "@/lib/content";

export function Hero() {
  return (
    <section id="inicio" style={{ position: "relative", paddingTop: 120, paddingBottom: 90, background: "#DCE9F8" }}>
      <div className="herobg" />
      <div className="herowash" />
      <div className="wrap" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "56px 48px" }}>
        <div
          style={{
            flex: "1 1 440px",
            minWidth: 0,
            display: "flex",
            flexDirection: "column",
            gap: 26,
            alignItems: "flex-start",
          }}
        >
          <h1 style={{ fontSize: "clamp(32px,4.4vw,52px)", lineHeight: 1.1, fontWeight: 700 }}>
            Soluciones digitales que <span className="accent">impulsan tu negocio local.</span>
          </h1>
          <p style={{ fontSize: 17, color: "#1F2A44", maxWidth: 500 }}>
            Te ayudamos a dar el siguiente paso en el mundo digital con soluciones simples, prácticas y a tu medida.
          </p>
          <a className="btn" href="#contacto">
            Agenda una asesoría gratuita <span className="arr">→</span>
          </a>
          <ul className="points">
            {heroPoints.map((p) => (
              <li key={p}>
                <CheckIcon />
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div style={{ flex: "1 1 340px", minWidth: 0, display: "flex", flexDirection: "column", gap: 26 }}>
          <HeroIllustration className="hvis" />
          <p
            className="disp"
            style={{ textAlign: "center", fontSize: "clamp(17px,2vw,20px)", fontWeight: 700, lineHeight: 1.3 }}
          >
            Más visibilidad. Más clientes. Más ventas.
          </p>
        </div>
      </div>
    </section>
  );
}
