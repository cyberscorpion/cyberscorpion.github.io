// Common data file for portfolio components
// This file contains all shared data arrays to avoid duplication

import React from 'react'

export interface Skill {
  name: string
  level: number
  category: string
}

export interface Experience {
  title: string
  company: string
  period: string
  description: string
  technologies: string[]
  logo?: React.ReactNode
  isCurrent?: boolean
  borderColor?: string
  textColor?: string
}

export interface Project {
  title: string
  description: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  featured?: boolean
  company?: string
  stats?: {
    stars: number
    forks: number
    views: number
  }
  appIcon?: string
  screenshot?: string
}

export interface WebProject {
  title: string
  description: string
  technologies: string[]
  githubUrl?: string | null
  liveUrl?: string
  icon?: string
  screenshot?: string | null
  image?: string
}

export interface Certification {
  title: string
  issuer: string
  category: string
  year: string
}

export interface Value {
  icon: React.ReactNode
  title: string
  description: string
}

export interface NavigationSection {
  id: string
  label: string
}

// Skills data
export const skills: Skill[] = [
  { name: "iOS Development", level: 90, category: "Mobile" },
  { name: "Swift", level: 85, category: "Mobile" },
  { name: "React", level: 90, category: "Frontend" },
  { name: "TypeScript", level: 85, category: "Frontend" },
  { name: "JavaScript", level: 88, category: "Frontend" },
  { name: "Azure", level: 75, category: "Cloud" },
  { name: "M365 Platform", level: 80, category: "Platform" },
  { name: "Design Systems", level: 82, category: "Frontend" }
]

// Skills categorized for web resume
export const skillsCategories = {
  "Languages & Frameworks": ["Python", "Java", "Swift", "JavaScript/TypeScript", "ReactJS", "React Native", "VueJS", "HTML/CSS", "C/C++", "SQL", "PHP"],
  "Back-End & API": ["Django & REST", "Node/MERN", "Microservices", "API Design", "Design Patterns"],
  "Cloud & DevOps": ["Azure AI Foundry", "Oracle Cloud", "AWS", "Nginx", "Docker", "CI/CD"],
  "Data & AI": ["Machine Learning", "Data Visualization", "Analytics", "AI Foundations"],
  "Other Tools": ["Photoshop", "SCSS", "Bootstrap", "MongoDB", "Web Scraping", "Linux", "Git"]
}

// Experience data
export const experience: Experience[] = [
  {
    title: "Software Engineer 2",
    company: "Microsoft",
    period: "Oct 2021 - Present",
    description: "Leading development on Microsoft Designer, architecting and shipping core Web and iOS functionalities. Working on iOS platform for Designer and M365 Copilot applications.",
    technologies: ["iOS", "Swift", "React", "TypeScript", "Azure", "M365"],
    isCurrent: true,
    borderColor: "border-l-blue-500",
    textColor: "text-blue-600 dark:text-blue-400"
  },
  {
    title: "Software Development Engineer",
    company: "Amazon", 
    period: "Feb 2020 - Sep 2021",
    description: "Built Tier-1 services for Amazon DSP, transforming invoicing and launching in new regions (CA, EU). Developed Bulksheet management for advertisers.",
    technologies: ["Java", "React", "AWS", "Microservices"],
    borderColor: "border-l-orange-500",
    textColor: "text-orange-600 dark:text-orange-400"
  },
  {
    title: "Full-Stack Developer",
    company: "The Solar Labs",
    period: "May 2019 - Nov 2019",
    description: "Designed Django/VueJS applications, integrated Google APIs, and managed AWS deployments.",
    technologies: ["Django", "Vue.js", "Python", "AWS"],
    borderColor: "border-l-green-500",
    textColor: "text-green-600 dark:text-green-400"
  },
  {
    title: "Full-Stack Developer & Mentor",
    company: "Creesync Software (FarziEngineer)",
    period: "Nov 2018 - May 2019",
    description: "Delivered web applications from scratch, managed production deployments, and mentored junior developers in full-stack development practices.",
    technologies: ["Web Development", "Mentoring", "Production", "Full-Stack"],
    borderColor: "border-l-purple-500",
    textColor: "text-purple-600 dark:text-purple-400"
  }
]

// Certifications data
export const certifications: Certification[] = [
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    issuer: "Oracle",
    category: "AI/ML",
    year: "2025"
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle", 
    category: "AI/ML",
    year: "2025"
  },
  {
    title: "Microsoft Certified: Azure AI Fundamentals",
    issuer: "Microsoft",
    category: "Cloud AI",
    year: "2025"
  },
  {
    title: "Advanced Design Patterns: Design Principles",
    issuer: "Professional",
    category: "Software Design",
    year: "2022"
  },
  {
    title: "Microsoft Certified: AZ-900- Microsoft Azure Fundamentals 2020",
    issuer: "Microsoft",
    category: "Azure Cloud",
    year: "2020"
  },
  {
    title: "Oracle Cloud Certifications (1Z0-931, 1Z0-1072)",
    issuer: "Oracle",
    category: "Cloud",
    year: "2020"
  },
  {
    title: "CCDSAP – Certified Foundation Level",
    issuer: "CodeChef",
    category: "Data Structures",
    year: "2019"
  },
  {
    title: "Infosys Certified Software Programmer",
    issuer: "Infosys",
    category: "Programming",
    year: "2019"
  },
  {
    title: "CodeChef Certified Foundation Level Exam",
    issuer: "CodeChef",
    category: "Programming",
    year: "2019"
  },
]

// Projects data (basic structure that can be extended in specific components)
export const basicProjects: Project[] = [
  {
    title: "Microsoft Designer",
    description: "Core experience for a next-gen design app with AI-powered tools and real-time collaboration",
    technologies: ["ReactJS", "React Native", "iOS", "Swift", "Azure", "AI"],
    company: "Microsoft"
  },
  {
    title: "Amazon DSP - Bulksheet Management", 
    description: "Streamlined campaign setup for advertisers, automating workflows and saving time",
    technologies: ["Java", "ReactJS", "AWS", "Microservices"],
    company: "Amazon"
  },
  {
    title: "Publication Management Portal",
    description: "End-to-end academic solution for managing research publications and workflows",
    technologies: ["VueJS", "Django", "PostgreSQL"]
  },
  {
    title: "GoldGali E-commerce Platform",
    description: "Full-stack e-commerce platform with shopping cart and payment integration",
    technologies: ["React", "Node.js", "MongoDB", "Express"]
  },
  {
    title: "SIH19: GVA Management Platform",
    description: "Smart India Hackathon winning project for government data management",
    technologies: ["Python", "Django", "PostgreSQL", "React"]
  },
  {
    title: "Land Registration & Bargaining",
    description: "Blockchain-based property transaction system for transparency",
    technologies: ["Blockchain", "Solidity", "Web3", "React"]
  }
]

// Web projects data for resume web projects section
export const webProjects: WebProject[] = [
  {
    title: "Designer Web App",
    description: "Worked on canvas editor for Microsoft Designer web platform, focusing on user-facing features and intuitive design tools.",
    technologies: ["React", "Node.js", "TypeScript"],
    githubUrl: null,
    liveUrl: "https://designer.microsoft.com",
    image: "/src/assets/images/web-projects/Designer-web-Screenshot-1.png",
    icon: "🎨"
  },
  {
    title: "GVA Data Management",
    description: "Government data management platform for Govt. of India with comprehensive data handling and analytics capabilities.",
    technologies: ["Vue.js", "Django", "PostgreSQL", "REST API", "Docker"],
    githubUrl: "https://github.com/cyberscorpion",
    liveUrl: undefined,
    icon: "📚"
  }
]

// Navigation sections for resume
export const resumeNavigationSections: NavigationSection[] = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'education', label: 'Education' }
]

// Navigation sections for main site
export const mainNavigationSections: NavigationSection[] = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'education', label: 'Education' }
]

// Personal values - used in about component
export const personalValues = [
  {
    title: "Problem Solver",
    description: "I love tackling complex challenges and finding elegant solutions"
  },
  {
    title: "User-Focused", 
    description: "Building experiences that truly matter to users drives my passion"
  },
  {
    title: "Continuous Learner",
    description: "Always exploring new technologies and improving my craft"
  }
]

// Contact information
export const contactInfo = {
  email: "codense.in@gmail.com",
  location: "Delhi/Noida/NCR, India",
  github: "https://github.com/cyberscorpion",
  linkedin: "https://linkedin.com/in/rajatjain-cs/",
  linktree: "https://linktr.ee/RajatJain",
  youtube: "https://www.youtube.com/@codense"
}

// Education data
export const education = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "Jaypee Institute Of Information Technology",
    period: "2016 — 2020",
    description: "Relevant coursework: Data Structures, Algorithms, Software Engineering, Database Systems, Computer Networks, Web Development"
  }
]
