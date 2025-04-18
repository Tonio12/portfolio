import { NextRequest, NextResponse } from 'next/server';
import { getRedirects } from '@/lib/routes';

// This middleware handles redirects for route changes
// It helps maintain SEO by properly redirecting old URLs to new ones
export default function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const { pathname } = url;
  
  // Get redirects map from our routes configuration
  const redirects = getRedirects();
  
  // Check if the current path needs redirection
  if (pathname in redirects) {
    // Create a 301 (permanent) redirect to the new URL
    const newUrl = new URL(redirects[pathname], request.url);
    
    // Return the redirect response with 301 status code
    return NextResponse.redirect(newUrl, {
      status: 301, // Permanent redirect - best for SEO
    });
  }
  
  // Continue with the request if no redirect is needed
  return NextResponse.next();
}

// Configure which paths this middleware runs on
export const config = {
  // All paths except for API routes, Next.js internals, and static files
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /_static (static files)
     * 4. /_vercel (Vercel internals)
     * 5. /favicon.ico, /robots.txt, /sitemap.xml (SEO files)
     */
    '/((?!api|_next|_static|_vercel|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
}; 