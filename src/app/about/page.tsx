"use client";

import Image from "next/image"
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Download, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

// Image imports
const image1 = "/images/formal.webp";
const image2 = "/images/family.webp";
const image3 = "/images/golf.webp";
const image4 = "/images/zebra.webp";
const image5 = "/images/food.webp";

function Photos() {
  const rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2'];

  return (
    <div className="mt-16 sm:mt-20 -mx-4 sm:-mx-6 md:-mx-8 lg:w-screen lg:max-w-none lg:-ml-[calc(50vw-50%+1rem)] lg:-mr-[calc(50vw-50%+1rem)]">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image}
            className={cn(
              'relative aspect-9/10 w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image}
              alt=""
              width={500}
              height={600}
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function About() {
  return (
    <div className="container py-24 mx-auto">
      <motion.div 
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="space-y-6 text-lg text-muted-foreground max-w-2xl mx-auto">
           <h1 className="text-4xl font-bold tracking-tight mb-6 text-[#b69121] dark:text-[#edc531]">
          About Me
        </h1>
          <p>
            My name is Antonio Nelson. I am from Ghana. Ever since I was a kid, I loved mathematics. 
            I loved challenges and solving complex problems.
          </p>
          <p>
            When it got to university, I almost offered dentistry but I chose engineering (computer engineering) — 
            the best choice of my life.
          </p>
          <p>
            As a software engineer, I combine my passion for problem-solving with technical expertise to build 
            innovative solutions. I enjoy the process of transforming complex requirements into elegant, 
            functional applications.
          </p>
        </div>
        
        {/* Photo Gallery */}
        <Photos />
        
        {/*  Sections Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {/* Work Experience */}
          <motion.div 
            className="border border-[#b69121]/30 dark:border-[#b69121]/20 rounded-xl p-6 shadow-sm"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Experience</h2>
            <div className="space-y-5 mb-6 max-h-[400px] overflow-y-auto pr-2">
              <div>
                <h3 className="font-medium">Software Engineer</h3>
                <p className="text-sm text-muted-foreground">Akadenia • 07/2024 - Present • California, US</p>
              </div>
              
              <div>
                <h3 className="font-medium">Mobile Developer</h3>
                <p className="text-sm text-muted-foreground">Axxend Corporation • 08/2024 - Present • Accra, Ghana</p>
              </div>
              
              <div>
                <h3 className="font-medium">Software Developer (Contract)</h3>
                <p className="text-sm text-muted-foreground">Freelance • 04/2025 - Present • Ghana</p>
              </div>
              
              <div>
                <h3 className="font-medium">STEM Facilitator</h3>
                <p className="text-sm text-muted-foreground">Makerplace • 11/2022 - 02/2024 • Accra, Ghana</p>
              </div>
              
              <div>
                <h3 className="font-medium">Web Developer</h3>
                <p className="text-sm text-muted-foreground">Cambridge Center for Excellence • 06/2021 - 06/2022 • Accra, Ghana</p>
              </div>
            </div>
            
            <Button 
              className="flex items-center bg-[#b69121] hover:bg-[#b69121]/90 text-white"
              asChild
            >
              <a 
                href="https://drive.google.com/file/d/16AdC2qb2cpa6N8RlzaPgEt-XXBAqkgIO/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </Button>
          </motion.div>
          
          {/* Social Links */}
          <motion.div 
            className="border border-[#b69121]/30 dark:border-[#b69121]/20 rounded-xl p-6 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Connect With Me</h2>
            <div className="space-y-4">
              <Link href="https://github.com/Tonio12" target="_blank" rel="noopener noreferrer" className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
                <Github className="mr-2 h-5 w-5" />
                <span>GitHub</span>
              </Link>
              <Link href="https://www.linkedin.com/in/jaf-nelson/" target="_blank" rel="noopener noreferrer" className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="mr-2 h-5 w-5" />
                <span>LinkedIn</span>
              </Link>
              <Link href="https://x.com/An_toni1" target="_blank" rel="noopener noreferrer" className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="mr-2 h-5 w-5" />
                <span>Twitter</span>
              </Link>
              <Link href="mailto:nelson.antonio.an@gmail.com" className="flex items-center text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="mr-2 h-5 w-5" />
                <span>Email</span>
              </Link>
            </div>
          </motion.div>
          
          {/* Education and Skills */}
          <motion.div 
            className="border border-[#b69121]/30 dark:border-[#b69121]/20 rounded-xl p-6 shadow-sm"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold mb-4">Education & Skills</h2>
            <div className="space-y-6 max-h-[400px] overflow-y-auto pr-2">
              {/* Education */}
              <div>
                <h3 className="font-medium">Education</h3>
                <div className="mt-2">
                  <h4 className="text-sm font-medium">Bachelor of Science in Engineering (Computer Engineering)</h4>
                  <p className="text-sm text-muted-foreground">University of Ghana • 08/2018 - 10/2022</p>
                  <a 
                    href="https://www.ug.edu.gh/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-xs text-[#b69121] hover:underline mt-1 inline-block"
                  >
                    www.ug.edu.gh
                  </a>
                </div>
              </div>
              
              {/* Language Skills */}
              <div>
                <h3 className="font-medium">Language Skills</h3>
                <p className="text-sm mt-2">
                  <span className="text-muted-foreground">Mother tongue:</span> English
                </p>
              </div>
              
              {/* Technical Skills */}
              <div>
                <h3 className="font-medium">Technical Skills</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {[
                    "JavaScript", 
                    "Node.js", 
                    "Express.js", 
                    "React/Next.js",
                    "React Native",
                    "MongoDB", 
                    "SQL", 
                    "GraphQL", 
                    "PostgreSQL", 
                    "HTML5", 
                    "CSS", 
                    "jQuery", 
                    "Zoom"
                  ].map((skill) => (
                    <span 
                      key={skill} 
                      className="bg-[#b69121]/10 dark:bg-[#b69121]/20 text-[#b69121] dark:text-[#edc531] rounded-full px-3 py-1 text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}