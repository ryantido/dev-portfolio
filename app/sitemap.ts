import type { MetadataRoute } from "next";
import { links } from "@/constants";

// Build a list of top-level routes using the existing nav links and known static pages
const staticRoutes = [
  "/",
  ...links.map((l) => l.href),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://ryantido.vercel.app";

  // De-duplicate and normalize unique paths
  const paths = Array.from(new Set(staticRoutes)).map((p) => p.replace(/\/$/, "") || "/");

  const now = new Date();

  return paths.map((path) => ({
    url: `${base}${path === "/" ? "" : path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
