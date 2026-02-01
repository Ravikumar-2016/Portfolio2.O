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
    title: "SAVIOUR 2.0",
    slug: "saviour-2-0",
    category: "Disaster Management Platform",
    description:
      "AI-powered disaster management platform addressing emergency needs of 10M+ disaster-affected people in India with real-time WebSocket alerts, geolocation routing, and 99.8% uptime.",
    longDescription:
      "SAVIOUR 2.0 is a comprehensive disaster management system that revolutionizes emergency response coordination through advanced technology integration. Built to address the emergency needs of 10M+ disaster-affected people annually in India, the platform serves as critical infrastructure for disaster preparedness, response, and recovery operations. Engineered a real-time WebSocket alert system supporting 1,000+ concurrent users with sub-200ms latency. Implemented offline-first architecture enabling critical functionality during network failures in disaster zones. Developed AI prediction algorithm using TensorFlow with 87% accuracy analyzing 5+ years of historical data. Integrated geolocation-based smart routing reducing evacuation time by 35% for 500+ active users. Created Admin Command Center with RBAC managing 50+ emergency responders, achieving 99.8% uptime.",
    technologies: [
      "React",
      "Node.js",
      "Firebase",
      "MongoDB",
      "Tailwind CSS",
      "Real-time APIs",
      "Push Notifications",
      "WebSocket",
      "PWA",
      "Google Maps API",
    ],
    features: [
      "Real-time emergency coordination and SOS alert systems",
      "Advanced user location tracking and mapping with GPS",
      "Intelligent nearby shelter and resource finder",
      "Comprehensive admin dashboard for command centers",
      "Community communication and safety check-in system",
      "Detailed safety instructions and preparedness guidelines",
      "Multi-device support (Web, iOS, Android) with PWA",
      "Secure contact and location data management",
      "Integration with government emergency services",
      "Predictive analytics for disaster forecasting",
      "Automated notification systems for timely alerts",
      "Resource allocation and inventory tracking tools",
      "Volunteer coordination and management system",
      "Post-disaster recovery planning and reporting tools",
    ],
    image: "/saviour.jpg",
    github: "https://github.com/Ravikumar-2016/Saviour-2.O",
    liveUrl: "https://saviour-ten.vercel.app/",
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
