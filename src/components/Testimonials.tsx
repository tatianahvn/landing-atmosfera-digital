import { QuoteMark } from "./illustrations/QuoteMark";
import { testimonials } from "@/lib/content";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="tstars" role="img" aria-label={`Calificación: ${rating} de 5 estrellas`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" className={i < rating ? "on" : ""}>
          <path d="M12 2.8l2.8 5.9 6.4.8-4.7 4.4 1.2 6.4L12 17.2l-5.7 3.1 1.2-6.4-4.7-4.4 6.4-.8z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="testimonios" style={{ paddingBottom: 96 }}>
      <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: 44 }}>
        <div className="sechead">
          <div className="eyebrow">TESTIMONIOS</div>
          <h2 className="h2">Lo que dicen los negocios con los que trabajamos.</h2>
        </div>
        <div className="tgrid">
          {testimonials.map((t) => (
            <figure key={t.title} className="card tcard">
              <div className="ttop">
                <QuoteMark className="qmark" />
                {t.illustrative && <span className="qtag">Ilustrativo</span>}
              </div>
              <Stars rating={t.rating} />
              <h3>{t.title}</h3>
              <p className="tmeta">
                {t.business} · {t.service}
              </p>
              <blockquote className="tquote">“{t.quote}”</blockquote>
              <figcaption className="tauthor">— {t.author}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
