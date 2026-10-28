import { QuoteMark } from "./illustrations/QuoteMark";
import { testimonial } from "@/lib/content";

export function Testimonial() {
  return (
    <section style={{ paddingBottom: 96 }}>
      <div className="wrap">
        <figure className="card quote" style={{ margin: 0 }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 12,
            }}
          >
            <QuoteMark className="qmark" />
            {testimonial.illustrative && <span className="qtag">Testimonio ilustrativo</span>}
          </div>
          <blockquote className="qtext" style={{ margin: 0 }}>
            “{testimonial.quote}”
          </blockquote>
          <figcaption style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div className="qavatar" aria-hidden="true">
              {testimonial.initials}
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 16 }}>{testimonial.name}</div>
              <div style={{ color: "#3F4D66" }}>{testimonial.role}</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
