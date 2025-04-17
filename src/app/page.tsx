"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code, Sparkles, Palette, MousePointer, ChevronRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

// Custom animated gradient text component
function CustomGradientText({ 
  children, 
  className 
}: { 
  children: ReactNode; 
  className?: string;
}) {
  return (
    <span
      className={cn(
        "bg-clip-text text-transparent bg-gradient-to-r from-[#b69121] via-[#edc531] to-[#b69121] bg-[length:300%_100%] animate-gradient",
        className
      )}
    >
      {children}
    </span>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr_400px] lg:gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }} 
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col gap-4"
            >
              
              <div className="group relative w-fit inline-flex items-center justify-center rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#b6912115] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#b6912130]">
                <span
                  className={cn(
                    "absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-[#b69121]/50 via-[#edc531]/50 to-[#b69121]/50 bg-[length:300%_100%] p-[1px]",
                  )}
                  style={{
                    WebkitMask:
                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "destination-out",
                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    maskComposite: "subtract",
                    WebkitClipPath: "padding-box",
                  }}
                />
                💻 <hr className="mx-2 h-4 w-px shrink-0 bg-neutral-500" />
                <CustomGradientText className="text-sm font-medium">
                  Fullstack Engineer
                </CustomGradientText>
                <ChevronRight
                  className="ml-1 size-4 stroke-[#b69121] dark:stroke-[#edc531] transition-transform
                  duration-300 ease-in-out group-hover:translate-x-0.5"
                />
              </div>
              
              <motion.h1 
                className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Crafting <span className="text-[#b69121] dark:text-[#edc531]">Powerful Solutions</span> for Web & Mobile
              </motion.h1>
              
              <motion.p 
                className="max-w-[600px] text-muted-foreground md:text-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Software engineer specializing in fullstack development, creating seamless experiences across platforms with modern technologies.
              </motion.p>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Link 
                  href="/portfolio" 
                  className="inline-flex h-10 items-center justify-center rounded-md bg-[#b69121] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[#b69121]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#b69121]"
                >
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link 
                  href="/contact" 
                  className="inline-flex h-10 items-center justify-center rounded-md border border-[#b69121]/30 bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-[#b69121]/10 hover:text-[#b69121] focus-visible:outline-none focus-visible:ring-1 dark:border-[#b69121]/20 dark:hover:bg-[#b69121]/10 dark:hover:text-[#edc531]"
                >
                  Get in Touch
                </Link>
              </div>
            </motion.div>
            
            {/* Animated graphics area */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="relative h-[400px] w-full rounded-lg bg-[#b69121]/5 dark:bg-[#b69121]/10"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <SkillOrb icon={<Code />} text="Backend" top="10%" left="20%" delay={0.6} />
                  <SkillOrb icon={<Palette />} text="Frontend" top="30%" left="70%" delay={0.8} />
                  <SkillOrb icon={<Sparkles />} text="Mobile" top="70%" left="30%" delay={1.0} />
                  <SkillOrb icon={<MousePointer />} text="APIs" top="60%" left="65%" delay={1.2} />
                  
                  {/* Central glow effect */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-[#b69121]/20 dark:bg-[#b69121]/30 blur-xl" />
                  
                  {/* Golden lines connecting orbs */}
                  <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <motion.path 
                      d="M90,40 L280,120 L150,280 L260,240" 
                      stroke="url(#goldGradient)" 
                      strokeWidth="1" 
                      fill="none"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.5 }}
                      transition={{ duration: 1.5, delay: 1.2 }}
                    />
                    <defs>
                      <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#b69121" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#edc531" stopOpacity="0.3" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

interface SkillOrbProps {
  icon: React.ReactNode;
  text: string;
  top: string;
  left: string;
  delay: number;
}

function SkillOrb({ icon, text, top, left, delay }: SkillOrbProps) {
  return (
    <motion.div 
      className="absolute flex flex-col items-center gap-2"
      style={{ top, left }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <motion.div 
        className="flex h-12 w-12 items-center justify-center rounded-full bg-background border border-[#b69121]/30 text-[#b69121] shadow-sm dark:border-[#b69121]/20 dark:text-[#edc531]"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {icon}
      </motion.div>
      <span className="text-xs font-medium">{text}</span>
    </motion.div>
  );
}
