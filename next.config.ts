import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Sitio 100 % estático: se despliega en Vercel, Netlify o Cloudflare Pages.
  output: "export",
  trailingSlash: true,
  reactStrictMode: true,
  poweredByHeader: false,
  // El optimizador de next/image no funciona con output: "export"; las capturas ya van en WebP ligero.
  images: { unoptimized: true },
};

export default nextConfig;
