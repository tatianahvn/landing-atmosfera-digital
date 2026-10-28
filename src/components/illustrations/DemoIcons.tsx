import type { SVGProps } from "react";

const base = {
  width: 64,
  height: 64,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.3,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

export function ToothIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M12 5.5C10.5 4 8.6 3.4 6.9 3.9 4.6 4.6 3.6 7 4.2 9.6c.4 1.7 1.1 3 1.4 4.6.4 2.2.6 4.6 1.6 6.1.7 1 1.9.8 2.3-.4.5-1.6.8-4.2 2.5-4.2s2 2.6 2.5 4.2c.4 1.2 1.6 1.4 2.3.4 1-1.5 1.2-3.9 1.6-6.1.3-1.6 1-2.9 1.4-4.6.6-2.6-.4-5-2.7-5.7-1.7-.5-3.6.1-5.1 1.6z" />
      <path d="M9 7.2c1 .5 2 .8 3 .8" />
    </svg>
  );
}

export function NewSiteIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="2.5" y="4" width="19" height="16" rx="2.5" strokeDasharray="2.4 2.2" />
      <path d="M12 9v6M9 12h6" />
    </svg>
  );
}
