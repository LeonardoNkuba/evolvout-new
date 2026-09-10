import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/docs", "/support", "/privacy", "/terms", "/cookies"];
  return pages.map((path) => ({
    url: `https://www.evolvout.com${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.5,
  }));
}
