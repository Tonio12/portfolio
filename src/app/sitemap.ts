import { createFullUrl } from "@/lib/routes";
import { routes } from "@/lib/routes";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  // Get main routes from our routes configuration
  const mainRoutes = [
    routes.home,
    routes.about,
    routes.articles,
    routes.portfolio,
  ];
  
  // Create the sitemap entries
  return mainRoutes.map((route) => ({
    url: createFullUrl(route),
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === routes.home ? 1 : 0.8,
  }));
} 