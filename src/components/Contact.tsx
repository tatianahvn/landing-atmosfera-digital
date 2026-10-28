import { whatsappUrl } from "@/lib/content";

export function Contact() {
  return (
    <section id="contacto" style={{ paddingBottom: 80 }}>
      <div className="wrap">
        <div
          className="deep"
          style={{
            padding: "clamp(40px,7vw,80px) clamp(24px,6vw,64px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: 24,
          }}
        >
          <h2 style={{ fontSize: "clamp(26px,3.8vw,42px)", lineHeight: 1.12, fontWeight: 700, maxWidth: 760 }}>
            ¿Listo para llevar tu negocio al siguiente nivel?
          </h2>
          <p style={{ fontSize: 16, maxWidth: 520, color: "#D3E1F6" }}>
            Agenda una asesoría gratuita y descubre qué herramientas digitales son ideales para ti.
          </p>
          <a
            className="btn btn-light"
            style={{ fontSize: 16, padding: "15px 28px" }}
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Agenda una asesoría gratuita <span className="arr">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
