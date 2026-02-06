import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  const name = "Ryan Tido – Full Stack Developer";
  const short_name = "RyanTido";
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://ryantido.vercel.app";

  return {
    name,
    short_name,
    description:
      "Full Stack Developer specializing in scalable backend systems and intuitive UIs. Portfolio, projects, skills, and contact.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#0b0f1a",
    theme_color: "#0b0f1a",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    shortcuts: [
      { name: "Projects", url: "/projects" },
      { name: "Skills", url: "/skills" },
      { name: "Contact", url: "/contact" },
    ],
    id: base,
    prefer_related_applications: false,
  };
}
