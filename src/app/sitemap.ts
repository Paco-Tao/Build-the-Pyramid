import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

const indexableRoutes = new Set<string>(["/", "/about", "/guide", "/pharaoh"]);
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = siteConfig.domain.replace(/[/]+$/, "");
  return Array.from(indexableRoutes).sort().map((route) => ({
    url: `${origin}${route === "/" ? "/" : `${route}/`}`,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
