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
      "A full-stack disaster management platform providing real-time emergency alerts, location-based shelter finding, resource tracking, and community coordination to improve disaster response and save lives.",
    longDescription:
      "SAVIOUR 2.0 is a comprehensive disaster management system that revolutionizes emergency response coordination through advanced technology integration. The platform serves as a critical infrastructure for disaster preparedness, response, and recovery operations. It features real-time communication systems, advanced resource tracking capabilities, and community engagement tools that work together to create a robust emergency response network. The system includes predictive analytics for disaster forecasting, automated alert systems, and integration with government emergency services. Built with scalability in mind, it can handle large-scale disasters while maintaining performance and reliability. The platform supports multiple user roles including citizens, volunteers, and administrators, each with tailored dashboards and functionalities.",
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
      "A comprehensive AI-powered agriculture platform connecting farmers, laborers, and agricultural employees with intelligent crop recommendations, real-time market data, weather integration, and workforce management.",
    longDescription:
      "FarmEase is a revolutionary agricultural intelligence platform designed to transform modern farming through AI-powered insights, real-time data integration, and intelligent connectivity. Serving as a unified ecosystem for farmers, agricultural workers, support staff, and administrators, FarmEase streamlines operations, maximizes yields, and creates meaningful connections across the agricultural supply chain. The platform features 95%+ accurate crop and fertilizer recommendations based on soil, climate, and environmental data. With hyperlocal weather integration, live government-verified market prices, and the AgroBridge workforce matching system, FarmEase addresses critical challenges faced by modern farmers while providing growth opportunities for the entire agricultural community.",
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
      "An intelligent meeting transcription and task management system that converts meeting recordings to text with speaker diarization, enables task assignment, and streamlines team workflow management.",
    longDescription:
      "MeetTask AI is an innovative productivity platform that streamlines the meeting-to-task workflow for teams. The system allows managers to upload meeting recordings (audio or video), automatically transcribes them using AssemblyAI with speaker diarization, and facilitates task assignment to team members. Built with a modern tech stack including React 19, TypeScript, and serverless architecture, the platform features role-based access for managers and employees, real-time status updates via Firestore, and secure file submission through Google Drive integration. The application demonstrates expertise in full-stack development, third-party API integration, and modern cloud deployment practices.",
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
