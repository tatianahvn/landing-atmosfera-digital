import type { SVGProps } from "react";

export function SiteIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} width="60" height="60" viewBox="0 0 64 64" aria-hidden="true">
      <rect x="6" y="12" width="52" height="40" rx="7" fill="#FFFFFF" stroke="#C9D6EA" strokeWidth="1.5" />
      <path d="M6 23h52" stroke="#E3EBF6" strokeWidth="1.5" />
      <circle cx="13" cy="17.5" r="1.8" fill="#C9D6EA" />
      <circle cx="19" cy="17.5" r="1.8" fill="#C9D6EA" />
      <rect className="h-bar" x="12" y="29" width="22" height="4" rx="2" fill="#123A7A" />
      <rect className="h-bar hb2" x="12" y="36" width="16" height="3" rx="1.5" fill="#C9D6EA" />
      <rect className="w-btn" x="12" y="43" width="13" height="5" rx="2.5" fill="#14A3A0" />
      <rect className="w-img" x="39" y="29" width="13" height="19" rx="3" fill="#2F6FD0" />
    </svg>
  );
}

export function ToolsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} width="60" height="60" viewBox="0 0 64 64" aria-hidden="true">
      <rect x="8" y="14" width="48" height="6" rx="3" fill="#C9D6EA" />
      <rect className="s-fill s1f" x="8" y="14" width="44" height="6" rx="3" fill="#14A3A0" />
      <circle className="s-knob s1k" cx="52" cy="17" r="6.5" fill="#FFFFFF" stroke="#0B8A87" strokeWidth="2.5" />
      <rect x="8" y="29" width="48" height="6" rx="3" fill="#C9D6EA" />
      <rect className="s-fill s2f" x="8" y="29" width="44" height="6" rx="3" fill="#2F6FD0" />
      <circle className="s-knob s2k" cx="52" cy="32" r="6.5" fill="#FFFFFF" stroke="#2F6FD0" strokeWidth="2.5" />
      <rect x="8" y="44" width="48" height="6" rx="3" fill="#C9D6EA" />
      <rect className="s-fill s3f" x="8" y="44" width="44" height="6" rx="3" fill="#123A7A" />
      <circle className="s-knob s3k" cx="52" cy="47" r="6.5" fill="#FFFFFF" stroke="#123A7A" strokeWidth="2.5" />
    </svg>
  );
}

export function GoogleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} width="60" height="60" viewBox="0 0 64 64" aria-hidden="true">
      <rect x="6" y="20" width="52" height="36" rx="7" fill="#FFFFFF" stroke="#C9D6EA" strokeWidth="1.5" />
      <path d="M23 20v36 M41 20v36" stroke="#E3EBF6" strokeWidth="1.5" />
      <path
        className="m-road"
        d="M6 44l17-8 18 9 17-9"
        fill="none"
        stroke="#BFE6E4"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className="m-pin"
        d="M32 4c-6.8 0-11.5 5-11.5 11 0 7.4 11.5 18 11.5 18s11.5-10.600 11.5-18C43.500 9 38.800 4 32 4z"
        fill="#14A3A0"
      />
      <circle className="m-pin" cx="32" cy="15" r="4.500" fill="#FFFFFF" />
    </svg>
  );
}

export function BookingIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} width="60" height="60" viewBox="0 0 64 64" aria-hidden="true">
      <rect x="8" y="12" width="48" height="44" rx="8" fill="#FFFFFF" stroke="#C9D6EA" strokeWidth="1.5" />
      <path d="M8 20a8 8 0 0 1 8-8h32a8 8 0 0 1 8 8v6H8z" fill="#14A3A0" />
      <rect x="19" y="6" width="5" height="12" rx="2.500" fill="#123A7A" />
      <rect x="40" y="6" width="5" height="12" rx="2.500" fill="#123A7A" />
      <rect x="15" y="33" width="9" height="6" rx="2" fill="#E3EBF6" />
      <rect x="28" y="33" width="9" height="6" rx="2" fill="#E3EBF6" />
      <rect x="41" y="33" width="9" height="6" rx="2" fill="#E3EBF6" />
      <rect x="15" y="43" width="9" height="6" rx="2" fill="#E3EBF6" />
      <rect className="c-sel" x="28" y="43" width="22" height="7" rx="3.500" fill="#2F6FD0" />
      <path
        className="c-check"
        d="M33 46.500l3 2.500 6-5"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="2.200"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function WhatsappIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} width="60" height="60" viewBox="0 0 64 64" aria-hidden="true">
      <path
        d="M13 8h34a7 7 0 0 1 7 7v20a7 7 0 0 1-7 7H28l-11 10v-10h-4a7 7 0 0 1-7-7V15a7 7 0 0 1 7-7z"
        fill="#FFFFFF"
        stroke="#C9D6EA"
        strokeWidth="1.5"
      />
      <rect className="b-line bt" x="14" y="17" width="22" height="4.500" rx="2.250" fill="#123A7A" />
      <rect className="b-line bl1" x="14" y="26" width="30" height="3" rx="1.500" fill="#C9D6EA" />
      <rect className="b-line bl2" x="14" y="33" width="17" height="3" rx="1.500" fill="#C9D6EA" />
      <rect className="b-btn" x="36" y="38" width="24" height="17" rx="8.500" fill="#14A3A0" />
      <path
        className="b-arr"
        d="M42 46.500h11 M49 42l4.500 4.500L49 51"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="2.400"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function QrIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} width="60" height="60" viewBox="0 0 64 64" aria-hidden="true">
      <rect x="7" y="7" width="50" height="50" rx="9" fill="#FFFFFF" stroke="#C9D6EA" strokeWidth="1.5" />
      <rect x="15" y="15" width="15" height="15" rx="3.500" fill="#123A7A" />
      <rect x="19.500" y="19.500" width="6" height="6" rx="1.500" fill="#FFFFFF" />
      <rect x="34" y="15" width="15" height="15" rx="3.500" fill="#123A7A" />
      <rect x="38.500" y="19.500" width="6" height="6" rx="1.500" fill="#FFFFFF" />
      <rect x="15" y="34" width="15" height="15" rx="3.500" fill="#123A7A" />
      <rect x="19.500" y="38.500" width="6" height="6" rx="1.500" fill="#FFFFFF" />
      <rect className="q-d q1" x="34" y="34" width="7" height="7" rx="2" fill="#14A3A0" />
      <rect className="q-d q2" x="42.500" y="42.500" width="7" height="7" rx="2" fill="#2F6FD0" />
      <rect className="q-d q3" x="42.500" y="34" width="7" height="7" rx="2" fill="#123A7A" />
      <rect className="q-d q4" x="34" y="42.500" width="7" height="7" rx="2" fill="#2F6FD0" />
    </svg>
  );
}
