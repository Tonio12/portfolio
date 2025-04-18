"use client";

import { siteUrl } from "@/lib/seo";
import Script from "next/script";

interface JsonLdProps {
  data: Record<string, unknown>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <Script 
      id="json-ld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      strategy="afterInteractive"
    />
  );
}

// Helper function to create BlogPosting structured data
export function createArticleStructuredData(
  title: string,
  description: string,
  date: string,
  url: string,
  imageUrl?: string,
  authorName: string = "Antonio Nelson",
  publisherName: string = "Antonio Nelson",
  publisherLogo: string = `${siteUrl}/logo.png` // Replace with actual logo path
) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": description,
    "image": imageUrl ? `${siteUrl}${imageUrl}` : undefined,
    "datePublished": date,
    "author": {
      "@type": "Person",
      "name": authorName,
      "url": siteUrl
    },
    "publisher": {
      "@type": "Person",
      "name": publisherName,
      "logo": {
        "@type": "ImageObject",
        "url": publisherLogo
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    }
  };
}

// Person structured data for your portfolio
export function createPersonStructuredData(
  name: string = "Antonio Nelson",
  jobTitle: string = "Software Engineer",
  description: string = "Software Engineer specializing in web and mobile development",
  image: string = `${siteUrl}/profile.jpg`,
  url: string = siteUrl,
  sameAs: string[] = []
) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": name,
    "jobTitle": jobTitle,
    "description": description,
    "image": image,
    "url": url,
    "sameAs": sameAs
  };
}

// Collection of articles structured data
export function createArticleListStructuredData(articles: Array<{ link: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": articles.map((article, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "url": article.link
    }))
  };
} 