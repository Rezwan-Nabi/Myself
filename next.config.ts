import type { NextConfig } from "next";

// Static export: `npm run build` writes a plain HTML/CSS/JS site to /out.
// No server, API routes or database are involved, so it can be hosted on
// any static host (Vercel, Netlify, GitHub Pages, Cloudflare Pages, S3).
const nextConfig: NextConfig = {
  output: "export",
  images: {
    // The built-in image optimizer needs a server. Photos in public/images
    // are pre-sized instead (keep them under ~1600px on the long edge).
    unoptimized: true,
  },
};

export default nextConfig;
