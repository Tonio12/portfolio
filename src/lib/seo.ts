import type { Metadata } from "next";

// Base URL for absolute URLs
export const siteUrl = "https://www.antonionelson.tech/"; // Replace with your actual domain

// Default metadata values
export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Antonio Nelson | Software Engineer",
    template: "%s | Antonio Nelson"
  },
  description: "Software Engineer specializing in web and mobile development.",
  keywords: ["Software Engineer", "Web Developer", "Mobile Developer", "React", "Flutter", "Blockchain", "Web3"],
  authors: [{ name: "Antonio Nelson" }],
  creator: "Antonio Nelson",
  publisher: "Antonio Nelson",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Antonio Nelson Portfolio",
    title: "Antonio Nelson | Software Engineer",
    description: "Software Engineer specializing in web and mobile development, React, Flutter",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`, // Default OG image
        width: 1200,
        height: 630,
        alt: "Antonio Nelson - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Antonio Nelson | Software Engineer",
    description: "Software Engineer specializing in web and mobile development, React, Flutter, and blockchain technologies.",
    images: [`${siteUrl}/og-image.jpg`],
    creator: "@An_toni1", // Replace with your Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteUrl}/site.webmanifest`,
  alternates: {
    canonical: siteUrl,
  },
};

// Helper function to generate page-specific metadata
export function createMetadata({
  title,
  description,
  path = "",
  ogImage = "/og-image.jpg",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  path?: string;
  ogImage?: string;
  noIndex?: boolean;
}): Metadata {
  const url = `${siteUrl}${path}`;
  
  return {
    ...defaultMetadata,
    title: title,
    description: description || defaultMetadata.description,
    openGraph: {
      ...defaultMetadata.openGraph,
      title: title || defaultMetadata.openGraph?.title,
      description: description || defaultMetadata.openGraph?.description,
      url,
      images: [
        {
          url: `${siteUrl}${ogImage}`,
          width: 1200,
          height: 630,
          alt: title || "Antonio Nelson - Software Engineer",
        },
      ],
    },
    twitter: {
      ...defaultMetadata.twitter,
      title: title || defaultMetadata.twitter?.title,
      description: description || defaultMetadata.twitter?.description,
      images: [`${siteUrl}${ogImage}`],
    },
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : defaultMetadata.robots,
  };
} 