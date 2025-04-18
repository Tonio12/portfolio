# SEO-Friendly Routing System

This document explains how to use the centralized routing system in the project for maintaining SEO-friendly URLs and handling route changes properly.

## Why Centralized Routing?

When building a website, it's crucial to maintain consistent URLs for search engine optimization (SEO). Changing URLs without proper redirects can lead to:

- Lost search engine rankings
- Broken links from external websites
- Poor user experience
- Loss of social shares and backlinks

Our centralized routing system helps prevent these issues by:

1. Defining all routes in a single file
2. Providing mechanisms for proper URL redirection
3. Ensuring consistent URL usage throughout the app

## How to Use the Routes Configuration

### Accessing Routes

Always import routes from the routes configuration file:

```typescript
import routes from "@/lib/routes";

// Then use them in your components
<Link href={routes.about}>About Me</Link>
```

### Current Route Structure

Our current routes are:

- Home: `/` (routes.home)
- About: `/about` (routes.about)
- Articles: `/articles` (routes.articles)
- Portfolio: `/portfolio` (routes.portfolio)

### Dynamic Routes

For dynamic routes, use the route functions:

```typescript
// For an article page
<Link href={routes.article("my-article-slug")}>Read Article</Link>

// For a project page
<Link href={routes.project("project-name")}>View Project</Link>
```

### Contact Information

Instead of a contact page, we use a mailto link:

```typescript
import { getMailtoUrl } from "@/lib/routes";

// Basic usage
<a href={getMailtoUrl()}>Email Me</a>

// With a subject line
<a href={getMailtoUrl("Job Opportunity")}>Contact About Jobs</a>
```

## Updating Routes

If you need to change a route path, follow these steps to maintain SEO:

### 1. Update the Route in the Configuration File

Change the route path in `src/lib/routes.ts`:

```typescript
// Before
export const routes = {
  about: "/about",
  // other routes...
}

// After
export const routes = {
  about: "/about-me", // Changed
  // other routes...
}
```

### 2. Add a Redirect for the Old Route

In the same file, add a redirect in the `getRedirects()` function:

```typescript
export const getRedirects = (): Record<string, string> => {
  return {
    // Add redirect from old path to new path
    "/about": routes.about, // This will redirect /about to /about-me
    // other redirects...
  };
};
```

### 3. Update Any Static File References

If you have static files or external links referring to the old route, update them if possible.

### 4. Create or Move the Page File

Move your page component to the new directory structure in the `app` directory.

## SEO Benefits

This system ensures:

1. All links in your application consistently use the same URL structure
2. Old URLs properly redirect to new ones with 301 (permanent) redirects
3. Search engines can update their indexes properly
4. Users following old links will be directed to the correct page
5. SEO value and link equity is preserved during site changes

## Troubleshooting

If you're experiencing issues with routes or redirects:

1. Check the `src/lib/routes.ts` file to ensure routes are defined correctly
2. Verify redirects are set up in the `getRedirects()` function
3. Confirm the Next.js middleware (`src/middleware.ts`) is properly configured
4. Test redirects in an incognito/private browsing window to avoid caching issues

## External Resources

For more information on SEO-friendly URL practices:

- [Google's URL Structure Guidelines](https://developers.google.com/search/docs/advanced/guidelines/url-structure)
- [Moz's URL Best Practices](https://moz.com/learn/seo/url)
- [Next.js Redirects Documentation](https://nextjs.org/docs/api-reference/next.config.js/redirects) 