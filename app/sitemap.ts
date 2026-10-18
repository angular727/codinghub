import type { MetadataRoute } from "next";
import { products, services } from "@/lib/data";
import { caseStudies } from "@/lib/case-studies";
import { siteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const page = (path: string, priority: number, changeFrequency: "weekly" | "monthly" = "monthly") => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  });

  return [
    page("", 1, "weekly"),
    page("/services", 0.9),
    ...services.map((s) => page(`/services/${s.slug}`, 0.8)),
    page("/products", 0.9),
    ...products.map((p) => page(`/products/${p.slug}`, 0.8)),
    page("/projects", 0.9),
    ...caseStudies.map((c) => page(`/projects/${c.slug}`, 0.7)),
    page("/about", 0.6),
    page("/contact", 0.7),
  ];
}
