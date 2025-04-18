"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, BookOpen, Calendar, ExternalLink } from "lucide-react";
import { useState } from "react";
import { JsonLd, createArticleListStructuredData } from "@/components/json-ld";

// Metadata and SEO handled in separate file since this is a client component
// See metadata.ts in the same directory

interface ArticleTag {
  name: string;
  color: string;
}

interface Article {
  title: string;
  description: string;
  date: string;
  platform: "LinkedIn" | "Medium" | "Dev.to";
  tags: ArticleTag[];
  image?: string;
  readTime: string;
  featured?: boolean;
  link: string;
}

function LinkedInLogo() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      <circle cx="32" cy="32" r="32" fill="url(#gradient-linkedin)" />
      <path 
        d="M20 28H24V44H20V28ZM22 26C20.3431 26 19 24.6569 19 23C19 21.3431 20.3431 20 22 20C23.6569 20 25 21.3431 25 23C25 24.6569 23.6569 26 22 26Z" 
        fill="white" 
      />
      <path 
        d="M28 28H32V30H32.1C32.8 28.8 34.2 28 36 28C40.4 28 42 30.2 42 34V44H38V35C38 33.4 37.5 32 35.5 32C33.5 32 32 33.5 32 35.5V44H28V28Z" 
        fill="white" 
      />
      <defs>
        <linearGradient id="gradient-linkedin" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0077B5" />
          <stop offset="1" stopColor="#0E5A8A" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function MediumLogo() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      <circle cx="32" cy="32" r="32" fill="url(#gradient-medium)" />
      <path 
        d="M18 24C18 22.8954 18.8954 22 20 22H44C45.1046 22 46 22.8954 46 24V40C46 41.1046 45.1046 42 44 42H20C18.8954 42 18 41.1046 18 40V24Z" 
        fill="white" 
      />
      <path 
        d="M23 28H25V36H23V28ZM24 27C23.4477 27 23 26.5523 23 26C23 25.4477 23.4477 25 24 25C24.5523 25 25 25.4477 25 26C25 26.5523 24.5523 27 24 27Z" 
        fill="black" 
      />
      <path 
        d="M27 28H29V29H29.05C29.45 28.4 30.1 28 31 28C32.7 28 34 29.3 34 31V36H32V31.5C32 30.7 31.5 30 30.5 30C29.57 30 29 30.7 29 31.5V36H27V28Z" 
        fill="black" 
      />
      <path 
        d="M36 32C36 29.8 37.8 28 40 28C42.2 28 44 29.8 44 32C44 34.2 42.2 36 40 36C37.8 36 36 34.2 36 32ZM38 32C38 33.1 38.9 34 40 34C41.1 34 42 33.1 42 32C42 30.9 41.1 30 40 30C38.9 30 38 30.9 38 32Z" 
        fill="black" 
      />
      <defs>
        <linearGradient id="gradient-medium" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop stopColor="#12100E" />
          <stop offset="1" stopColor="#000000" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function DevToLogo() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
      <circle cx="32" cy="32" r="32" fill="#000000" />
      <path 
        d="M20.827 29.3117C20.5894 29.1269 20.351 29.0345 20.1126 29.0345H18.5V34.9655H20.1126C20.351 34.9655 20.5895 34.8731 20.827 34.6883C21.0638 34.5035 21.1822 34.2263 21.1822 33.857V30.142C21.1822 29.7737 21.0638 29.4965 20.827 29.3117ZM45.5 22H18.5C16.567 22 15 23.567 15 25.5V38.5C15 40.4329 16.567 42 18.5 42H45.5C47.4329 42 49 40.4329 49 38.5V25.5C49 23.567 47.4329 22 45.5 22ZM25.5833 33.9414C25.5833 35.5208 24.7143 38 21.0638 37.9918H16.6637V26.0719H21.1429C24.6549 26.0719 25.5833 28.5423 25.5833 30.1216V33.9414ZM35.0368 26.8484H31.4242V30.4603H33.2303V32.3248H31.4242V35.9366H35.0368V37.8091H30.8026C29.8738 37.8418 29.08 37.0798 29.0476 36.1515V27.6533C29.0152 26.7306 29.767 25.9699 30.6901 25.9377H35.0368V26.8484ZM44.5174 36.0845C43.4511 38.9036 41.3334 37.8745 40.5476 36.0845L37.6548 25.9376H39.7333L42.0142 34.0418L44.2865 25.9376H46.365L44.5174 36.0845Z" 
        fill="white" 
      />
    </svg>
  );
}

const articles: Article[] = [
  {
    title: "Web3 And The Ethereum Network",
    description: "An exploration of the Ethereum blockchain network, its history from Bitcoin, and how developers can connect to it using web3.js or MetaMask for building decentralized applications.",
    date: "November 8, 2024",
    platform: "LinkedIn",
    tags: [
      { name: "Web3", color: "#F6851B" },
      { name: "Ethereum", color: "#627EEA" },
      { name: "Blockchain", color: "#9B51E0" }
    ],
    readTime: "3 min read",
    featured: true,
    image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=2832&auto=format&fit=crop",
    link: "https://www.linkedin.com/pulse/web3-ethereum-network-antonio-nelson-albkf/?trackingId=8CmL1Z0bTL%2BoPelIGL%2BAPQ%3D%3D",
  },
  {
    title: "Building a Flutter Video Call Application Using Tencent SDK",
    description: "A technical guide on developing a video calling application with Flutter, focusing on implementation of Tencent's real-time communication SDK for reliable video calling functionality.",
    date: "March 8, 2024",
    platform: "Medium",
    tags: [
      { name: "Flutter", color: "#02569B" },
      { name: "Mobile", color: "#FF2D55" },
      { name: "Video SDK", color: "#4CAF50" }
    ],
    readTime: "15 min read",
    link: "https://medium.com/@nelson.antonio.an/building-a-flutter-video-call-application-using-tencent-sdk-486744b3f8a6",
  },
];

export default function Articles() {
  const [filter, setFilter] = useState<string | null>(null);
  
  const filteredArticles = filter 
    ? articles.filter(article => article.tags.some(tag => tag.name === filter))
    : articles;
  
  const featuredArticle = articles.find(article => article.featured);

  const uniqueTags = Array.from(new Set(
    articles.flatMap(article => article.tags.map(tag => tag.name))
  ));

  return (
    <div className="container py-24 mx-auto">
      {/* JSON-LD Structured Data */}
      <JsonLd data={createArticleListStructuredData(articles)} />
      
      <motion.div 
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold tracking-tight mb-6 text-[#b69121] dark:text-[#edc531]">
          Articles & Insights
        </h1>
        
        <p className="text-lg text-muted-foreground max-w-2xl mb-12">
          Sharing thoughts and experiences on software development, emerging technologies,
          and best practices for building modern applications.
        </p>

        {/* Tag Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          <button
            onClick={() => setFilter(null)}
            className={`px-3 py-1 text-sm rounded-full transition-colors ${
              filter === null 
                ? "bg-[#b69121] dark:bg-[#edc531] text-white dark:text-black" 
                : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            All
          </button>
          {uniqueTags.map(tag => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-3 py-1 text-sm rounded-full transition-colors ${
                filter === tag
                  ? "bg-[#b69121] dark:bg-[#edc531] text-white dark:text-black"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
        
        {/* Featured Article */}
        {featuredArticle && !filter && (
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="rounded-xl overflow-hidden bg-card border shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {featuredArticle.image && (
                  <div className="relative h-48 md:h-full">
                    <div 
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${featuredArticle.image})` }}
                    />
                    <div className="absolute inset-0 bg-black/20" />
                  </div>
                )}
                
                <div className="p-6 md:p-8 flex flex-col">
                  <div className="flex items-center mb-4">
                    <span className="inline-flex items-center rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
                      Featured
                    </span>
                    <span className="mx-2 text-muted-foreground">•</span>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-3.5 w-3.5 mr-1" />
                      {featuredArticle.date}
                    </div>
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-3 line-clamp-2 hover:text-[#b69121] dark:hover:text-[#edc531] transition-colors">
                    <Link href={featuredArticle.link} target="_blank" rel="noopener noreferrer">
                      {featuredArticle.title}
                    </Link>
                  </h2>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {featuredArticle.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredArticle.tags.map(tag => (
                      <span 
                        key={tag.name}
                        className="px-2.5 py-0.5 text-xs rounded-full"
                        style={{ 
                          backgroundColor: `${tag.color}20`, 
                          color: tag.color 
                        }}
                      >
                        {tag.name}
                      </span>
                    ))}
                  </div>
                  
                  <div className="mt-auto flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="h-8 w-8 mr-3">
                        {featuredArticle.platform === "LinkedIn" && <LinkedInLogo />}
                        {featuredArticle.platform === "Medium" && <MediumLogo />}
                        {featuredArticle.platform === "Dev.to" && <DevToLogo />}
                      </div>
                      <div className="text-sm font-medium">
                        {featuredArticle.platform}
                      </div>
                    </div>
                    
                    <div className="flex items-center text-sm text-muted-foreground">
                      <BookOpen className="h-3.5 w-3.5 mr-1" />
                      {featuredArticle.readTime}
                    </div>
                  </div>
                  
                  <Link 
                    href={featuredArticle.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-6 flex items-center text-sm font-medium text-[#b69121] dark:text-[#edc531] hover:underline"
                  >
                    Read article <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
        
        {/* Article Grid - Modified for fewer articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredArticles
            .filter(article => !article.featured || filter)
            .map((article, index) => (
              <ArticleCard 
                key={article.title} 
                article={article} 
                index={index} 
              />
            ))}
        </div>
        
        {filteredArticles.length === 0 && (
          <div className="text-center py-16 text-muted-foreground">
            No articles found for this filter.
          </div>
        )}
        
        {/* Coming Soon Section - Added for fewer articles */}
        {filteredArticles.filter(article => !article.featured || filter).length < 2 && !filter && (
          <motion.div 
            className="mt-16 text-center py-16 border border-dashed rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-medium mb-3">More Articles Coming Soon</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              I&apos;m working on more articles about software development, emerging technologies, and best practices.
              Stay tuned!
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

interface ArticleCardProps {
  article: Article;
  index: number;
}

function ArticleCard({ article, index }: ArticleCardProps) {
  return (
    <motion.div 
      className="group flex flex-col h-full rounded-lg overflow-hidden bg-card border shadow-sm hover:shadow-md transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
    >
      {/* Logo and Date */}
      <div className="px-6 pt-6 flex justify-between items-center">
        <div className="flex items-center">
          <div className="h-8 w-8 mr-2 rounded-full overflow-hidden">
            {article.platform === "LinkedIn" && <LinkedInLogo />}
            {article.platform === "Medium" && <MediumLogo />}
            {article.platform === "Dev.to" && <DevToLogo />}
          </div>
          <span className="text-sm font-medium">
            {article.platform}
          </span>
        </div>
        <div className="text-xs text-muted-foreground flex items-center">
          <Calendar className="h-3 w-3 mr-1" />
          {article.date}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-3 group-hover:text-[#b69121] dark:group-hover:text-[#edc531] transition-colors line-clamp-2">
          <Link href={article.link} target="_blank" rel="noopener noreferrer">
            {article.title}
          </Link>
        </h3>
        
        <p className="text-muted-foreground mb-6 line-clamp-3">{article.description}</p>
        
        <div className="flex flex-wrap gap-2 mt-auto mb-4">
          {article.tags.map(tag => (
            <span 
              key={tag.name}
              className="px-2.5 py-0.5 text-xs rounded-full"
              style={{ 
                backgroundColor: `${tag.color}20`, 
                color: tag.color 
              }}
            >
              {tag.name}
            </span>
          ))}
        </div>
        
        <div className="flex items-center justify-between mt-auto pt-4 border-t">
          <div className="flex items-center text-xs text-muted-foreground">
            <BookOpen className="h-3.5 w-3.5 mr-1" />
            {article.readTime}
          </div>
          
          <Link 
            href={article.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center text-sm text-[#b69121] dark:text-[#edc531] hover:underline"
          >
            <ExternalLink className="h-3.5 w-3.5 mr-1" />
            <span>Read</span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
} 