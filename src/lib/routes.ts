import { siteUrl } from "./seo";

// Define all application routes here
// This makes it easy to update routes in one place and maintain SEO
export const routes = {
  // Base routes
  home: "/",
  about: "/about",
  articles: "/articles",
  portfolio: "/portfolio",
  
  // Dynamic routes (functions)
  article: (slug: string) => `/articles/${slug}`,
  project: (slug: string) => `/portfolio/${slug}`,
  
  // External routes and contact info
  social: {
    github: "https://github.com/yourUsername",
    linkedin: "https://linkedin.com/in/yourUsername",
    twitter: "https://twitter.com/An_toni1",
  },
  
  // Contact info
  email: "nelson.antonio.an@gmail.com" 
};

// Helper for generating full URLs (useful for SEO, sitemap, etc)
export const createFullUrl = (path: string): string => {
  return `${siteUrl}${path}`;
};

export const getMailtoUrl = (subject?: string): string => {
  const encodedSubject = subject ? `?subject=${encodeURIComponent(subject)}` : '';
  return `mailto:${routes.email}${encodedSubject}`;
};

// Helper for handling redirects or route changes
export const getRedirects = (): Record<string, string> => {
  // Map of old routes to new routes for redirects
  // This helps maintain SEO when changing URL structure
  return {
    // Example: "/old-about-page": routes.about,
    // Example: "/blog": routes.articles,
    
    // If you had a contact page before, redirect to home
    "/contact": routes.home,
  };
};

// For use in Link components throughout the app
export default routes; 