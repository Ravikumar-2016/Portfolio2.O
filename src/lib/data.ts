export interface Project {
  title: string
  slug: string
  category: string
  description: string
  longDescription: string
  technologies: string[]
  features: string[]
  image: string
  github?: string
  liveUrl?: string
  featured?: boolean
}

export const projects: Project[] = [
  // ============ FEATURED PROJECTS ============
  {
    title: "SAVIOUR",
    slug: "saviour",
    category: "Disaster Management Platform",
    description:
      "Next-generation disaster management platform serving 10M+ disaster-affected people annually. Features real-time WebSocket alerts with sub-200ms latency, AI prediction with 87% accuracy, and offline-first architecture for network failures in disaster zones.",
    longDescription:
      "SAVIOUR is a next-generation disaster management platform that empowers communities to prepare for, respond to, and recover from emergencies with unprecedented efficiency. Built to address emergency needs of 10M+ disaster-affected people annually in India, the platform features a robust SOS emergency system supporting 9 emergency types with 3-level priority categorization, allowing users to broadcast emergencies with GPS location and image attachments. The real-time WebSocket alert system supports 1,000+ concurrent users with sub-200ms latency. An offline-first architecture enables critical functionality during network failures in disaster zones. The AI prediction algorithm using TensorFlow achieves 87% accuracy analyzing 5+ years of historical data. Geolocation-based smart routing reduces evacuation time by 35% for 500+ active users. The Admin Command Center with RBAC manages 50+ emergency responders, achieving 99.8% uptime. The interactive navigation system uses Leaflet maps to visualize all active SOS requests with color-coded markers and filtering capabilities. Real-time community chat enables city-based coordination with support for text, images, videos, and documents. The weather intelligence module combines data from WeatherAPI.com and OpenWeatherMap to provide comprehensive 5-day forecasts with hourly predictions. Additional features include a resource sharing marketplace across 8 categories, emergency contacts with one-tap calling and location sharing, and 12 detailed safety guides covering disasters from earthquakes to chemical emergencies.",
    technologies: [
      "Next.js 15",
      "React 18",
      "TypeScript",
      "TailwindCSS",
      "Firebase Auth",
      "Firestore",
      "WebSocket",
      "TensorFlow",
      "Leaflet",
      "WeatherAPI",
      "OpenWeatherMap",
      "Framer Motion",
      "shadcn/ui",
      "Radix UI",
      "Vercel",
    ],
    features: [
      "Real-time WebSocket Alert System - 1,000+ concurrent users with sub-200ms latency",
      "AI Prediction Algorithm - 87% accuracy using TensorFlow with 5+ years historical data",
      "Offline-First Architecture - Critical functionality during network failures",
      "SOS Emergency System - 9 emergency types with 3 priority levels and GPS tracking",
      "Geolocation Smart Routing - 35% reduction in evacuation time",
      "Admin Command Center - RBAC managing 50+ emergency responders with 99.8% uptime",
      "Interactive Leaflet Maps - Color-coded SOS markers with filtering capabilities",
      "City-based Community Chat - Multimedia sharing via Base64 encoding",
      "Dual Weather API System - 5-day forecasts with intelligent fallback",
      "Resource Sharing Marketplace - 8 categories with urgency-based prioritization",
      "Emergency Contacts - One-tap calling with location sharing",
      "12 Safety Guides - Comprehensive coverage with video tutorials",
      "Firebase Authentication - Google OAuth and email/password login",
      "Location Validation - OpenStreetMap Nominatim API integration",
      "5-Second Cancel Window - Prevents accidental emergency alerts",
      "Responsive Design - Mobile, tablet, and desktop optimized",
    ],
    image: "/saviour.jpg",
    github: "https://github.com/Ravikumar-2016/SaviourWeb",
    liveUrl: "https://saviour-web.vercel.app",
    featured: true,
  },
  {
    title: "FarmEase",
    slug: "farmease",
    category: "Agricultural Intelligence Platform",
    description:
      "Comprehensive AI-powered agricultural platform serving 4 user roles (Farmers, Laborers, Employees, Admins). Features PlantNet API disease detection, 95%+ accuracy crop recommendations, and government market data integration from agmarket.gov.in.",
    longDescription:
      "FarmEase is a comprehensive full-stack web platform revolutionizing agriculture through AI-powered insights, real-time data integration, and intelligent connectivity. The platform serves as a unified ecosystem for farmers, agricultural workers, support staff, and administrators, addressing critical challenges in modern farming. Key features include AI-powered Pesticide Detection integrating PlantNet API with MongoDB treatment database, providing verified pesticide recommendations, dosages, and organic alternatives. The intelligent crop recommendation engine achieves 95%+ accuracy using ML API integration, analyzing soil parameters (NPK, pH, temperature, humidity, rainfall, carbon, soil type). Real-time weather forecasting with automatic geolocation provides 24-hour/5-day predictions and agriculture-specific metrics. The AgroBridge workforce management module enables farmers to post work opportunities with real-time notification system for application tracking and labor coordination. Government market data integration from agmarket.gov.in provides live commodity prices across states with multi-filter search functionality. The machinery rental marketplace features 8+ equipment types with search, filtering, and availability tracking. Secure authentication system with JWT tokens, bcrypt password hashing, HTTP-only cookies, and OTP-based email verification. Multi-tier support system with user queries, employee tickets, and admin oversight for comprehensive platform governance. Deployed on Vercel with MongoDB Atlas, achieving responsive mobile-first design with Framer Motion animations and Radix UI accessible components.",
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Node.js",
      "MongoDB Atlas",
      "Tailwind CSS",
      "Framer Motion",
      "PlantNet API",
      "Weather API",
      "agmarket.gov.in API",
      "Cloudinary",
      "JWT Authentication",
      "bcryptjs",
      "Zod Validation",
      "Radix UI",
      "Lucide React",
      "Nodemailer",
    ],
    features: [
      "AI Pesticide Detection - PlantNet API with MongoDB treatment database",
      "Crop Recommendation Engine - 95%+ accuracy analyzing NPK, pH, soil parameters",
      "Multi-role Ecosystem - Farmers, Laborers, Employees, and Admins",
      "AgroBridge Workforce Hub - Smart farmer-worker matching with notifications",
      "Government Market Prices - Live data from agmarket.gov.in with filters",
      "Hyperlocal Weather - 24-hour/5-day forecasts with agricultural metrics",
      "Machinery Rental Marketplace - 8+ equipment types with availability tracking",
      "OTP-based Email Verification - Secure profile updates with Nodemailer",
      "Disease Treatment Database - Verified pesticides, dosages, organic alternatives",
      "Real-time Notifications - Application tracking and labor coordination",
      "Admin Analytics Dashboard - Comprehensive platform governance",
      "Multi-tier Support System - User queries, employee tickets, admin oversight",
      "JWT/bcrypt Security - HTTP-only cookies, secure authentication",
      "Mobile-first Design - Responsive with Framer Motion animations",
    ],
    image: "/farmease.jpg",
    github: "https://github.com/Ravikumar-2016/FarmEase",
    liveUrl: "https://farm-ease-umber.vercel.app/",
    featured: true,
  },
  {
    title: "MeetTask AI",
    slug: "meettask-ai",
    category: "AI-Powered Productivity Tool",
    description:
      "Full-stack meeting transcription & task management system reducing manual documentation by 75% for 200+ users. Features AssemblyAI speaker diarization, role-based dashboards, and Google Drive integration for task submissions.",
    longDescription:
      "MeetTask AI is a comprehensive full-stack application designed to streamline team meeting workflows. Managers can upload audio/video recordings which are automatically transcribed using AssemblyAI with speaker diarization. The system enables manual speaker-to-employee mapping, allowing managers to create and assign tasks to team members. Employees view assigned tasks, track progress, and submit completed work via Google Drive links with validation. The platform features a sophisticated dual-role system with real-time Firestore synchronization handling 1,000+ daily API requests. Technical highlights include React 19 with TypeScript for type-safe frontend development, Tailwind CSS 4 for responsive styling, Firebase for authentication and real-time database, Cloudinary for scalable media storage, AssemblyAI for AI transcription, and Vercel serverless functions for the backend API. The serverless architecture includes 9 optimized API endpoints handling authentication, webhook processing, and real-time task management. The webhook-based asynchronous processing system handles long-running transcription jobs with status tracking. Implemented secure file submission system with Google Drive link validation and permission verification. The architecture demonstrates proficiency in modern web development practices including webhook handling, JWT authentication, and real-time data synchronization.",
    technologies: [
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "Vite",
      "Firebase Auth",
      "Firebase Firestore",
      "AssemblyAI",
      "Cloudinary",
      "Vercel Serverless",
      "REST APIs",
      "JWT Authentication",
      "Webhook Integration",
    ],
    features: [
      "AI-Powered Transcription - AssemblyAI speech-to-text with speaker diarization",
      "Multi-format Upload - MP3, WAV, M4A, MP4, MOV, WebM support",
      "Speaker-to-Employee Mapping - Manual assignment after transcription",
      "Dual-Role System - Manager and Employee dashboards with RBAC",
      "9 Serverless API Endpoints - Auth, webhooks, task management",
      "Task Priority Levels - Critical, High, Medium, Low categorization",
      "Real-time Status Tracking - Pending → In Progress → Completed",
      "Google Drive Integration - File submission with link validation",
      "Webhook Processing - Async handling for long-running transcription",
      "Real-time Firestore Sync - 1,000+ daily API requests",
      "Cloudinary Media Storage - Scalable file handling",
      "Human-readable User IDs - MTAI001 format for easy reference",
      "JWT Token Verification - Secure authentication layer",
      "Responsive Design - Desktop and mobile optimized UI",
    ],
    image: "/MT-AI.jpg",
    github: "https://github.com/Ravikumar-2016/MeetTask-AI",
    liveUrl: "https://meet-task-ai.vercel.app/",
    featured: true,
  },
]
