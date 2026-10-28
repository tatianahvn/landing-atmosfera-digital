import type { SVGProps } from "react";

export function HeroIllustration(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 520 520"
      role="img"
      aria-label="Ilustración de una página web, una gráfica de crecimiento y una tienda local"
    >
      <defs>
        <linearGradient id="hv-area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#14A3A0" stopOpacity=".35" />
          <stop offset="1" stopColor="#14A3A0" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="hv-blue" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#123A7A" />
          <stop offset="1" stopColor="#2F6FD0" />
        </linearGradient>
        <linearGradient id="hv-teal" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0B8A87" />
          <stop offset="1" stopColor="#14A3A0" />
        </linearGradient>
      </defs>
      <rect x="16" y="56" width="400" height="330" rx="20" fill="#FFFFFF" stroke="#D5E0F0" />
      <path d="M16 100h400" stroke="#E3EBF6" />
      <circle cx="40" cy="78" r="5" fill="#D5E0F0" />
      <circle cx="58" cy="78" r="5" fill="#D5E0F0" />
      <circle cx="76" cy="78" r="5" fill="#D5E0F0" />
      <rect x="100" y="68" width="220" height="20" rx="10" fill="#EEF4FB" />
      <rect className="hk" x="44" y="124" width="170" height="14" rx="7" fill="#0F1B33" />
      <rect className="hk hk2" x="44" y="148" width="130" height="14" rx="7" fill="#0F1B33" />
      <rect className="hk hk3" x="44" y="176" width="150" height="8" rx="4" fill="#C9D6EA" />
      <rect className="hk hk4" x="44" y="192" width="120" height="8" rx="4" fill="#C9D6EA" />
      <rect className="hbtn" x="44" y="216" width="96" height="30" rx="10" fill="#14A3A0" />
      <rect x="250" y="118" width="138" height="130" rx="14" fill="url(#hv-blue)" />
      <g
        transform="translate(282 143) scale(3.2)"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 4h16l1 5a3 3 0 0 1-6 0 3 3 0 0 1-6 0 3 3 0 0 1-6 0z" />
        <path d="M5 12v8h14v-8" />
        <path d="M10 20v-4h4v4" />
      </g>
      <rect x="44" y="270" width="344" height="96" rx="14" fill="#F4F8FD" />
      <path
        className="harea"
        d="M60 346L110 334L150 340L200 316L250 320L300 296L346 286L372 284L372 358L60 358Z"
        fill="url(#hv-area)"
      />
      <path
        className="hline"
        pathLength="1"
        d="M60 346L110 334L150 340L200 316L250 320L300 296L346 286L372 284"
        fill="none"
        stroke="#14A3A0"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle className="hdot" cx="372" cy="284" r="6" fill="#14A3A0" stroke="#FFFFFF" strokeWidth="3" />
      <rect x="392" y="20" width="64" height="64" rx="18" fill="url(#hv-teal)" />
      <g
        transform="translate(408 36) scale(1.35)"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z" />
        <path d="M12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
      </g>
      <rect x="240" y="346" width="264" height="158" rx="18" fill="#FFFFFF" stroke="#D5E0F0" />
      <rect x="258" y="364" width="32" height="32" rx="9" fill="#EEF4FB" />
      <g
        transform="translate(262 368) scale(1)"
        fill="none"
        stroke="#2F6FD0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" transform="scale(.66) translate(2 2)" />
        <circle cx="12" cy="12" r="2" transform="scale(.66) translate(2 2)" />
      </g>
      <text
        x="302"
        y="376"
        style={{ fontFamily: "var(--font-body), system-ui, sans-serif" }}
        fontSize="13"
        fontWeight="700"
        fill="#0F1B33"
      >
        Visibilidad
      </text>
      <rect x="302" y="384" width="172" height="8" rx="4" fill="#E3EBF6" />
      <rect className="hbar" x="302" y="384" width="70" height="8" rx="4" fill="#2F6FD0" />
      <rect x="258" y="412" width="32" height="32" rx="9" fill="#EEF4FB" />
      <g
        transform="translate(264 418) scale(.8)"
        fill="none"
        stroke="#0B8A87"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <path d="M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </g>
      <text
        x="302"
        y="424"
        style={{ fontFamily: "var(--font-body), system-ui, sans-serif" }}
        fontSize="13"
        fontWeight="700"
        fill="#0F1B33"
      >
        Clientes
      </text>
      <rect x="302" y="432" width="172" height="8" rx="4" fill="#E3EBF6" />
      <rect className="hbar hb2" x="302" y="432" width="112" height="8" rx="4" fill="#14A3A0" />
      <rect x="258" y="460" width="32" height="32" rx="9" fill="#EEF4FB" />
      <g
        transform="translate(264 466) scale(.8)"
        fill="none"
        stroke="#123A7A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 17l6-6 4 4 8-8" />
        <path d="M15 7h6v6" />
      </g>
      <text
        x="302"
        y="472"
        style={{ fontFamily: "var(--font-body), system-ui, sans-serif" }}
        fontSize="13"
        fontWeight="700"
        fill="#0F1B33"
      >
        Ventas
      </text>
      <rect x="302" y="480" width="172" height="8" rx="4" fill="#E3EBF6" />
      <rect className="hbar hb3" x="302" y="480" width="150" height="8" rx="4" fill="#123A7A" />
    </svg>
  );
}
