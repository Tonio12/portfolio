"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import React from "react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  logo: React.ReactNode;
  color: string;
  github: string | null;
  demo: string | null;
}

// Custom Logo Components with better visual appeal
function GhostmodeLogo() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="32" fill="url(#gradient-ghost)" />
      <path
        d="M32 18C25.373 18 20 23.373 20 30V46L24 42H28L32 46L36 42H40L44 46V30C44 23.373 38.627 18 32 18Z"
        fill="white"
        className="drop-shadow"
      />
      <circle cx="26" cy="30" r="2" fill="#4285F4" />
      <circle cx="38" cy="30" r="2" fill="#4285F4" />
      <defs>
        <linearGradient id="gradient-ghost" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4285F4" />
          <stop offset="1" stopColor="#34A853" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function BookWiseLogo() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="32" fill="url(#gradient-book)" />
      <path
        d="M20 18C20 16.8954 20.8954 16 22 16H42C43.1046 16 44 16.8954 44 18V46C44 47.1046 43.1046 48 42 48H22C20.8954 48 20 47.1046 20 46V18Z"
        fill="white"
      />
      <path d="M32 16V48" stroke="#9C44FF" strokeWidth="2" />
      <path d="M24 24H30" stroke="#9C44FF" strokeWidth="2" strokeLinecap="round" />
      <path d="M24 32H30" stroke="#9C44FF" strokeWidth="2" strokeLinecap="round" />
      <path d="M24 40H30" stroke="#9C44FF" strokeWidth="2" strokeLinecap="round" />
      <path d="M34 24H40" stroke="#9C44FF" strokeWidth="2" strokeLinecap="round" />
      <path d="M34 32H40" stroke="#9C44FF" strokeWidth="2" strokeLinecap="round" />
      <path d="M34 40H40" stroke="#9C44FF" strokeWidth="2" strokeLinecap="round" />
      <defs>
        <linearGradient id="gradient-book" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop stopColor="#9C44FF" />
          <stop offset="1" stopColor="#6721C7" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function A2ChatLogo() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="32" cy="32" r="32" fill="url(#gradient-chat)" />
      <rect x="22" y="16" width="20" height="32" rx="4" fill="white" />
      <rect x="24" y="20" width="16" height="20" rx="2" fill="#FF9500" />
      <circle cx="32" cy="44" r="2" fill="#FF9500" />
      <defs>
        <linearGradient id="gradient-chat" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF9500" />
          <stop offset="1" stopColor="#FF3B30" />
        </linearGradient>
      </defs>
    </svg>
  );
}

const projects: Project[] = [
  {
    title: "Ghostmode.ai",
    description: "An API app that integrates directly into your communication platforms like Gmail, serving as a texting assistant. It helps you say just the right thing when you don't know what to say.",
    tech: ["Next.js", "Google API", "Shadcn/UI", "Tailwind CSS", "OpenAI API"],
    logo: <GhostmodeLogo />,
    color: "#4285F4",
    github: "https://github.com/Tonio12/Ghostmode.ai",
    demo: "https://ghostmode-ai.vercel.app/",
  },
  {
    title: "BookWise",
    description: "A university library system built with React and Next.js. Features include authentication, email notifications, scheduled workflows, rate limiting, and optimized image/video storage and display.",
    tech: ["Next.js", "NextAuth", "Resend", "QStash", "Redis", "ImageKit"],
    logo: <BookWiseLogo />,
    color: "#8C52FF",
    github: null,
    demo: "https://charlottes-library.vercel.app/sign-in",
  },
  {
    title: "A2Chat",
    description: "A video calling application built with Flutter. Features background operation, foreground notifications, and push notifications even when the app is terminated, using Firebase Cloud Messaging integrations.",
    tech: ["Flutter", "Firebase", "FCM", "ZegoCloud SDK", "Push Notifications"],
    logo: <A2ChatLogo />,
    color: "#FF9500",
    github: "https://github.com/Tonio12/flutterVideoChatAppWithCallSignalling",
    demo: null,
  },
];

export default function Portfolio() {
  return (
    <div className="container py-24 mx-auto">
      <motion.div 
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold tracking-tight mb-6 text-[#b69121] dark:text-[#edc531]">
          My Projects
        </h1>
        
        <p className="text-lg text-muted-foreground max-w-2xl mb-16">
          Here are some of the projects I&apos;ve worked on, showcasing my skills in full-stack development, 
          mobile app development, and integration with various APIs and services.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.title} 
              project={project} 
              index={index} 
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div 
      className="group flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Logo */}
      <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-card shadow-md border border-[#b69121]/10 dark:border-[#b69121]/20">
        <div className="h-10 w-10">
          {project.logo}
        </div>
      </div>
      
      {/* Content */}
      <div className="mt-6 space-y-4">
        <h2 className="text-xl font-semibold group-hover:text-[#b69121] dark:group-hover:text-[#edc531] transition-colors">
          {project.demo ? (
            <Link href={project.demo} target="_blank" rel="noopener noreferrer">
              {project.title}
            </Link>
          ) : (
            project.title
          )}
        </h2>
        
        <p className="text-muted-foreground line-clamp-3">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 pt-1">
          {project.tech.slice(0, 3).map((tech) => (
            <span 
              key={tech} 
              className="bg-[#b69121]/10 dark:bg-[#b69121]/20 text-[#b69121] dark:text-[#edc531] rounded-full px-2 py-0.5 text-xs font-medium"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="text-xs text-muted-foreground">+{project.tech.length - 3} more</span>
          )}
        </div>
        
        <div className="pt-4 flex items-center text-sm text-muted-foreground group-hover:text-[#b69121] dark:group-hover:text-[#edc531] transition-colors">
          {project.github && (
            <Link href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center mr-4">
              <Github className="h-4 w-4 mr-1" />
              <span>GitHub</span>
            </Link>
          )}
          
          {project.demo && (
            <Link href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center">
              <ExternalLink className="h-4 w-4 mr-1" />
              <span>View Project</span>
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
} 