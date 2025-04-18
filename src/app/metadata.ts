import { createMetadata } from "@/lib/seo";
import { routes } from "@/lib/routes";

export default createMetadata({
  title: "Home",
  description: "Antonio Nelson - Software Engineer specializing in fullstack development, creating seamless experiences across platforms with modern technologies.",
  path: routes.home,
  // The home page should use the default OG image
}); 