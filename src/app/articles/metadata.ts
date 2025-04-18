import { createMetadata } from "@/lib/seo";
import { routes } from "@/lib/routes";

export default createMetadata({
  title: "Articles & Insights",
  description: "Thoughts and insights on software development, emerging technologies, and best practices for building modern applications.",
  path: routes.articles,
  ogImage: "/images/articles-og.jpg" // Replace with an actual image path when available
}); 