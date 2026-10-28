import type { ReactElement } from "react";
import { cases } from "@/lib/content";
import { FoodIcon, ScissorsIcon, ShirtIcon, WrenchIcon } from "./illustrations/CaseIcons";

const icons: Record<(typeof cases)[number]["key"], ReactElement> = {
  food: <FoodIcon />,
  wrench: <WrenchIcon />,
  scissors: <ScissorsIcon />,
  shirt: <ShirtIcon />,
};

export function Cases() {
  return (
    <section id="casos" style={{ paddingBottom: 96 }}>
      <div className="wrap" style={{ display: "flex", flexDirection: "column", gap: 44 }}>
        <div className="sechead">
          <div className="eyebrow">CASOS DE ÉXITO</div>
          <h2 className="h2">Historias reales, negocios que crecen.</h2>
        </div>
        <div className="grid">
          {cases.map((c) => (
            <article key={c.key} className="card case">
              <div className={`cvis ${c.tone}`}>{icons[c.key]}</div>
              <div className="cbody">
                <h3>{c.title}</h3>
                <span className="cnote">{c.note}</span>
              </div>
            </article>
          ))}
        </div>
        <a className="more" href="#contacto">
          Ver más casos <span className="arr">→</span>
        </a>
      </div>
    </section>
  );
}
