import { createMetadata } from "@/lib/seo";
import { routes } from "@/lib/routes";

export default createMetadata({
  title: "Portfolio",
  description: "Explore Antonio Nelson's portfolio of projects spanning web development, mobile applications, and blockchain technology.",
  path: routes.portfolio,
  ogImage: "/images/portfolio-og.jpg" // Replace with an actual image path when available
}); 