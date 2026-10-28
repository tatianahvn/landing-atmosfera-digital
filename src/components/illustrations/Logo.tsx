import type { SVGProps } from "react";

export function LogoMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} width="28" height="28" viewBox="0 0 36 36" aria-hidden="true">
      <defs>
        <linearGradient id="lg1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#123A7A" />
          <stop offset="1" stopColor="#2F6FD0" />
        </linearGradient>
      </defs>
      <rect width="36" height="36" rx="10" fill="url(#lg1)" />
      <path d="M8 24a10 10 0 0 1 20 0" fill="none" stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M6 28h24" stroke="#8FE9E5" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}
