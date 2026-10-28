import type { SVGProps } from "react";

export function QuoteMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} width="44" height="44" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M7.2 6C4.9 7 3.5 9.2 3.5 12v6h6.2v-6H6.4c0-1.8.8-3 2.3-3.6zM17.7 6c-2.3 1-3.7 3.2-3.7 6v6h6.2v-6h-3.3c0-1.8.8-3 2.3-3.6z" />
    </svg>
  );
}
