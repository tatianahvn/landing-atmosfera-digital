import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Sitio 100 % estático: se despliega en Vercel, Netlify o Cloudflare Pages.
  output: "export",
  trailingSlash: true,
  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;
