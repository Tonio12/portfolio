"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "@/components/ModeToggle";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, Briefcase, FileText, Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", path: "/", icon: Home },
  { name: "About", path: "/about", icon: User },
  { name: "Portfolio", path: "/portfolio", icon: Briefcase },
  { name: "Articles", path: "/articles", icon: FileText },
];

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
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
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4">
          {navItems.map((item) => (
            <NavItem key={item.path} item={item} isActive={pathname === item.path} />
          ))}
        </nav>
        
        {/* Mobile Navigation Button */}
        <button 
          className="md:hidden text-foreground p-1 rounded-full hover:bg-accent"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
        
        {/* Site logo or name for mobile */}
        <div className="md:hidden flex-1 flex justify-center text-sm font-medium text-foreground">
          <Link href="/">Antonio Nelson</Link>
        </div>
        
        <ModeToggle />
      </motion.div>
      
      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-16 left-0 right-0 mx-4 p-4 rounded-lg border border-[#b69121]/30 bg-background/95 backdrop-blur-md shadow-lg dark:border-[#b69121]/50"
          >
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    pathname === item.path
                      ? "bg-[#b69121]/10 text-foreground dark:bg-[#b69121]/20"
                      : "text-muted-foreground hover:bg-accent hover:text-foreground"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="w-4 h-4 mr-3" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
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