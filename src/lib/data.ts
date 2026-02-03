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
      "Comprehensive disaster management platform designed to save lives and strengthen community resilience during emergencies. Enables real-time coordination, instant alerts, and efficient resource management with modern web technologies.",
    longDescription:
      "SAVIOUR is a comprehensive disaster management platform designed to save lives and strengthen community resilience during emergencies. When disaster strikes, every second counts—SAVIOUR connects communities, coordinates resources, and saves lives through technology. The platform features a one-tap SOS emergency broadcast system with GPS tracking and priority levels (High/Medium/Low), real-time location sharing, and instant push notifications. Smart mapping capabilities include interactive maps to visualize emergencies and resources, safe zone identification, evacuation points, and route planning to navigate to safety. Weather intelligence integrates dual API system (WeatherAPI.com for 3-day primary + OpenWeatherMap for 5-day fallback/extended) providing combined forecasts up to 5 days with hourly predictions and transparent source indicators. The Community Hub enables local chat rooms for neighbor coordination, resource sharing (offer/request supplies), volunteer network connections, and admin dashboard management. Comprehensive safety resources include disaster guides with step-by-step protocols, video tutorials for first aid and safety, offline access for critical info without internet, and multi-language inclusive support. Built on Firebase Auth with Google & Email login, role-based access (User & Admin), data encryption, and GDPR compliance.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "TailwindCSS",
      "Framer Motion",
      "shadcn/ui",
      "Firebase",
      "Vercel",
      "WeatherAPI",
      "OpenWeatherMap",
      "Leaflet",
      "Gemini AI",
      "React Query",
    ],
    features: [
      "SOS Alerts - One-tap emergency broadcast with GPS tracking",
      "Priority Levels - High/Medium/Low emergency categorization",
      "Real-time Tracking - Live location sharing during emergencies",
      "Push Notifications - Instant alert delivery system",
      "Interactive Maps - Visualize emergencies and resources",
      "Safe Zones - Identify evacuation points and shelter locations",
      "Resource Locations - Find nearby supplies and aid centers",
      "Route Planning - Navigate to safety with smart routing",
      "Dual Weather API - 5-day forecasts with hourly predictions",
      "Local Chat Rooms - Coordinate with neighbors in real-time",
      "Resource Sharing - Offer/request supplies within community",
      "Volunteer Network - Connect helpers with those in need",
      "Admin Dashboard - Manage community and monitor alerts",
      "Disaster Guides - Step-by-step safety protocols",
      "Video Tutorials - First aid and safety instruction videos",
      "Offline Access - Critical information without internet",
      "Multi-language Support - Inclusive accessibility",
      "Role-based Access - User and Admin role management",
      "Firebase Auth - Secure Google and Email authentication",
      "GDPR Compliant - Privacy-first data encryption",
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
      "Agricultural intelligence platform connecting 600+ farmers with laborers, addressing 58% labor shortage affecting Indian farmers. Features 88% accurate fertilizer recommendation system and market dashboard spanning 100+ markets.",
    longDescription:
      "FarmEase is a revolutionary agricultural intelligence platform designed to transform modern farming through AI-powered insights and intelligent connectivity. Addressed agricultural labor shortage affecting 58% of Indian farmers by connecting 600+ farmers with laborers through the AgroBridge hiring module. Built real-time weather integration serving 500+ users with location-based insights. Developed fertilizer recommendation system analyzing 20+ soil parameters with 88% accuracy. Created market price dashboard aggregating data from 100+ markets, helping increase farmer profits by 25%. Implemented JWT/bcrypt security and mobile-first design achieving 80% mobile traffic and 4.5/5 rating. Optimized MongoDB queries by 50%, handling 10,000+ daily transactions with sub-3s page loads.",
    technologies: [
      "Next.js 15",
      "TypeScript",
      "Node.js",
      "MongoDB Atlas",
      "Tailwind CSS",
      "Framer Motion",
      "Weather API",
      "JWT Authentication",
      "Machine Learning",
      "Radix UI",
    ],
    features: [
      "Multi-role ecosystem for Farmers, Laborers, Employees, and Admins",
      "AI-powered crop and fertilizer recommendations (95%+ accuracy)",
      "Hyperlocal weather integration with 24-hour and 5-day forecasts",
      "Live government-verified market prices from agmarket.gov.in",
      "AgroBridge workforce hub for smart farmer-worker matching",
      "Advanced crop management and tracking with yield analytics",
      "Geo-based search for labor and agricultural services",
      "Real-time smart notifications for all stakeholders",
      "Comprehensive admin dashboard with analytics",
      "AI Disease Detection for crop health monitoring",
      "Query resolution and ticket support system",
      "Mobile-responsive design for field use",
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
      "Meeting transcription & task management reducing manual documentation by 75% for 200+ users. Integrated AssemblyAI for automated transcription of 100+ hours of audio with 92% accuracy NLP-based task extraction.",
    longDescription:
      "MeetTask AI is an innovative productivity platform that streamlines the meeting-to-task workflow for teams, directly addressing workplace productivity challenges. Solved workplace productivity challenges by reducing manual meeting documentation by 75% for 200+ users. Integrated AssemblyAI API for automated transcription with speaker diarization, processing 100+ hours of audio. Built NLP-based task extraction achieving 92% accuracy, reducing follow-up time by 60%. Developed role-based dashboards with real-time Firestore sync handling 1,000+ daily API requests. Implemented Vercel Blob storage managing 500+ files (2GB+ data) with 99.9% reliability. Engineered serverless architecture with 9 optimized API routes for seamless media processing and task management.",
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
    ],
    features: [
      "Audio/video meeting upload (MP3, WAV, M4A, MP4, MOV, WebM)",
      "AI-powered speech-to-text transcription with AssemblyAI",
      "Automatic speaker diarization and detection",
      "Manual speaker-to-employee mapping interface",
      "Role-based access control (Manager & Employee)",
      "Task creation with priority levels (Critical, High, Medium, Low)",
      "Real-time task status tracking (Pending → In Progress → Completed)",
      "Google Drive integration for file submissions",
      "Human-readable user IDs (e.g., MTAI001)",
      "Real-time updates via Firestore",
      "Secure JWT token verification",
      "Responsive design for desktop and mobile",
    ],
    image: "/MT-AI.jpg",
    github: "https://github.com/Ravikumar-2016/MeetTask-AI",
    liveUrl: "https://meet-task-ai.vercel.app/",
    featured: true,
  },
]
