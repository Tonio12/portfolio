import { Metadata } from "next";
import { siteUrl } from "@/lib/seo";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: "About Me | Antonio Nelson",
  description: "Learn more about Antonio Nelson - my background, experience, skills and approach to software development.",
  openGraph: {
    title: "About Me | Antonio Nelson",
    description: "Learn more about Antonio Nelson - my background, experience, skills and approach to software development.",
    url: `${siteUrl}${routes.about}`,
    images: [
      {
        url: `${siteUrl}/images/about-og.jpg`,
        width: 1200,
        height: 630,
        alt: "About Antonio Nelson",
      },
    ],
  },
  twitter: {
    title: "About Me | Antonio Nelson",
    description: "Learn more about Antonio Nelson - my background, experience, skills and approach to software development.",
    images: [`${siteUrl}/images/about-og.jpg`],
  },
  alternates: {
    canonical: `${siteUrl}${routes.about}`,
  }
}; 