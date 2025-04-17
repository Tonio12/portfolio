"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "@/components/ModeToggle";
import { motion } from "framer-motion";
import { Home, User, Briefcase, FileText } from "lucide-react";

const navItems = [
  { name: "Home", path: "/", icon: Home },
  { name: "About", path: "/about", icon: User },
  { name: "Portfolio", path: "/portfolio", icon: Briefcase },
  { name: "Articles", path: "/articles", icon: FileText },
];

export function Header() {
  const pathname = usePathname();
  
  return (
    <motion.header
      className="fixed top-6 left-0 right-0 z-50 mx-auto max-w-3xl px-4"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <motion.div 
        className="flex items-center justify-between rounded-full border border-[#b69121]/30 bg-background/80 px-4 py-2 backdrop-blur-md shadow-sm hover:shadow-md transition-all dark:border-[#b69121]/50"
        whileHover={{ boxShadow: "0 8px 30px rgba(182, 145, 33, 0.15)" }}
        transition={{ duration: 0.2 }}
      >
        <nav className="flex items-center space-x-4">
          {navItems.map((item) => (
            <NavItem key={item.path} item={item} isActive={pathname === item.path} />
          ))}
        </nav>
        <ModeToggle />
      </motion.div>
    </motion.header>
  );
}

interface NavItemProps {
  item: {
    name: string;
    path: string;
    icon: React.ElementType;
  };
  isActive: boolean;
}

function NavItem({ item, isActive }: NavItemProps) {
  const Icon = item.icon;
  
  return (
    <Link
      href={item.path}
      className={`relative px-3 py-2 text-sm font-medium transition-colors flex items-center ${
        isActive 
          ? "text-foreground dark:text-foreground" 
          : "text-muted-foreground hover:text-foreground dark:text-muted-foreground dark:hover:text-foreground"
      }`}
    >
      <Icon className="w-4 h-4 mr-1" />
      <span>{item.name}</span>
      {isActive && (
        <motion.span 
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#b69121] dark:bg-[#edc531]"
          layoutId="navbar-indicator"
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30,
          }}
        />
      )}
    </Link>
  );
} 