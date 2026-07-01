export interface Project {
  title: string
  slug: string
  category: string
  description: string
  longDescription: string
  technologies: string[]
  features: string[]
  challengesSolved?: string
  image: string
  github?: string
  liveUrl?: string
  featured?: boolean
}

export interface Experience {
  role: string
  organization: string
  period: string
  location: string
  points: string[]
}

export interface Achievement {
  title: string
  description: string
  iconName: string
}

export const projects: Project[] = [
  {
    title: "SAVIOUR",
    slug: "saviour",
    category: "Disaster Management Platform",
    description: "AI-assisted disaster management platform with role-based dashboards, SOS reporting, weather integration and interactive maps.",
    longDescription: "SAVIOUR is a web platform designed to streamline emergency response and disaster preparedness. It enables users to report SOS situations with location details and image attachments, receive real-time notifications during critical events, and access interactive map visualizations. The platform also integrates dual-source weather forecasts and detailed safety guides to help communities prepare for and respond to emergencies.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Firebase Auth",
      "Firestore",
      "WebSocket",
      "TensorFlow",
      "Leaflet",
      "WeatherAPI",
      "OpenWeatherMap",
      "Framer Motion",
      "shadcn/ui"
    ],
    features: [
      "SOS Emergency System: Broadcast emergencies with GPS location and image attachments.",
      "Real-time Alerts: WebSocket integration to propagate urgent warnings and updates to active users.",
      "Interactive Maps: Leaflet map integration to visualize active SOS requests with color-coded markers.",
      "Admin Command Center: Role-based dashboard for emergency responders to coordinate operations.",
      "Dual Weather API System: Forecast integration combining data from multiple services with fallback.",
      "Resource Sharing Marketplace: Interface for local communities to coordinate supplies and shelter.",
      "Safety Guides: Interactive guides covering safety procedures for various disaster scenarios."
    ],
    challengesSolved: "Implemented an offline-first data caching strategy to handle intermittent network connectivity in simulated disaster zones. Optimized coordinate plotting on interactive Leaflet maps by utilizing coordinates clustering, which prevented layout stutter during high marker densities.",
    image: "/saviour.jpg",
    github: "https://github.com/Ravikumar-2016/SaviourWeb",
    liveUrl: "https://saviour-web.vercel.app",
    featured: true
  },
  {
    title: "FarmEase",
    slug: "farmease",
    category: "Agricultural Intelligence Platform",
    description: "Full Stack agricultural platform with disease detection, crop recommendation, labour management and machinery rental.",
    longDescription: "FarmEase is a comprehensive full-stack web platform built to support agricultural operations. It serves multiple user roles (Farmers, Laborers, Employees, and Admins) to solve operational bottlenecks. The platform features automated crop disease detection through plant image analysis, data-driven crop recommendations based on soil health metrics, live government commodity prices, and marketplaces for machinery rentals and labor hiring.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB Atlas",
      "Tailwind CSS",
      "Framer Motion",
      "PlantNet API",
      "Weather API",
      "agmarket.gov.in API",
      "Cloudinary",
      "JWT Authentication",
      "bcryptjs"
    ],
    features: [
      "AI Pesticide & Disease Detection: Integrates the PlantNet API with a MongoDB database of verified treatments and dosages.",
      "Crop Recommendation Engine: Evaluates soil conditions (NPK, pH, temperature, humidity, rainfall) to suggest optimal crops.",
      "AgroBridge Workforce Module: Connects farmers with temporary laborers, supporting application tracking and notifications.",
      "Machinery Rental: Marketplace for agricultural equipment leasing with real-time availability status.",
      "Government Market Prices: Live commodity data query interface powered by government agmarket APIs.",
      "Secure Role-based Access Control: Robust login system utilizing JWTs, HTTP-only cookies, and encrypted passwords."
    ],
    challengesSolved: "Designed a multi-role RBAC security mechanism protecting routes via custom middleware. Solved slow load times caused by image uploads by integrating Cloudinary and implementing client-side compression prior to API dispatch.",
    image: "/farmease.jpg",
    github: "https://github.com/Ravikumar-2016/FarmEase",
    liveUrl: "https://farm-ease-umber.vercel.app/",
    featured: true
  },
  {
    title: "MeetTask AI",
    slug: "meettask-ai",
    category: "AI Meeting & Task Organizer",
    description: "AI meeting transcription and task management application using AssemblyAI.",
    longDescription: "MeetTask AI is a full-stack application designed to streamline team meeting workflows and task assignment. It allows managers to upload audio and video recordings of meetings, which are automatically transcribed using the AssemblyAI speech-to-text model. The system maps transcription speakers to active team members, enabling direct task creation, automated assignment, and tracking via a real-time dashboard with Google Drive file submission verification.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "Firebase Auth",
      "Firebase Firestore",
      "AssemblyAI",
      "Cloudinary",
      "Vercel Serverless",
      "REST APIs",
      "JWT"
    ],
    features: [
      "AI Transcription: Speech-to-text transcription with speaker diarization using AssemblyAI.",
      "Speaker-to-Employee Mapping: Interactive dashboard to associate speakers in the transcript with project members.",
      "Dual-Role Dashboard: Unique customized interfaces for Managers (to assign tasks) and Employees (to view and track work).",
      "Task Tracking & Lifecycle: Monitor tasks through Pending, In Progress, and Completed states.",
      "Google Drive Integration: File delivery workflow with URL validation for completed task submissions.",
      "Serverless Architecture: Optimized backend APIs deployed on Vercel handling webhooks and database synchronizations."
    ],
    challengesSolved: "Implemented an asynchronous webhook handling system to process long-running transcription jobs, preventing API timeout errors on serverless routes. Structured a link-parsing and security validation layer for Google Drive task attachments.",
    image: "/MT-AI.jpg",
    github: "https://github.com/Ravikumar-2016/MeetTask-AI",
    liveUrl: "https://meet-task-ai.vercel.app/",
    featured: true
  },
  {
    title: "SkyNow",
    slug: "skynow",
    category: "Weather Application",
    description: "Weather application.",
    longDescription: "SkyNow is a sleek, responsive weather application that provides real-time meteorological updates and multi-day forecasts. It queries current atmospheric conditions including UV index, humidity, wind patterns, and daily sunrise/sunset schedules, rendering them in a highly interactive, minimal UI.",
    technologies: ["HTML5", "CSS3", "JavaScript", "OpenWeather API"],
    features: [
      "Real-time Tracking: Direct weather information mapping for cities globally.",
      "Detailed Meteorological Indices: View indices like humidity levels, UV exposure, and wind velocity.",
      "Adaptive UI States: Layout adapts visually to reflect active weather conditions (sunny, rainy, overcast, etc.).",
      "Sunrise & Sunset Coordinates: Precise timings calculated per location."
    ],
    challengesSolved: "Created client-side caching mechanism for weather queries to minimize redundant API requests and respect open weather API free-tier quotas.",
    image: "/skynow.png",
    github: "https://github.com/Ravikumar-2016/SkyNow",
    liveUrl: "https://sky-now-three.vercel.app/",
    featured: false
  },
  {
    title: "SoilSense",
    slug: "soilsense",
    category: "Agriculture Recommendation Platform",
    description: "Agriculture recommendation platform.",
    longDescription: "SoilSense is an AI-driven agricultural advisory tool. It analyzes critical environmental and chemical soil profiles (such as Nitrogen, Phosphorus, Potassium, pH, and precipitation) using machine learning models to suggest the most suitable crops and optimal fertilizer usage for enhanced yields.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Python", "Flask", "Machine Learning API"],
    features: [
      "Crop Recommendation Model: Evaluates environmental and chemical parameters to output appropriate crop types.",
      "Nutrient Deficiency Diagnosis: Advises fertilizer usage based on soil composition values.",
      "Interactive Dashboard: Simplifies telemetry input and displays ML predictions clearly."
    ],
    challengesSolved: "Established secure communication channels between the Next.js React frontend and a Python Flask backend executing ML scripts, handling model output serialization and parsing constraints.",
    image: "/soilsense.png",
    github: "https://github.com/Ravikumar-2016/SoilSense",
    liveUrl: "https://soil-sense-phi.vercel.app/",
    featured: false
  },
  {
    title: "Driver Drowsiness Detection",
    slug: "driver-drowsiness-detection",
    category: "Computer Vision Project",
    description: "Computer Vision project.",
    longDescription: "Driver Drowsiness Detection is a real-time computer vision system designed to prevent road accidents due to driver fatigue. It monitors the driver's eyes and facial landmarks using a live camera feed. If signs of drowsiness (such as prolonged eye closure) are detected, the system immediately triggers an audio alarm to alert the driver.",
    technologies: ["Python", "OpenCV", "MediaPipe", "TensorFlow", "Keras", "NumPy"],
    features: [
      "Live Face Landmark Tracking: Tracks facial landmarks and orientation via camera feed.",
      "Eye Aspect Ratio (EAR) Evaluation: Analyzes blink patterns and tracks eye closure durations.",
      "Deep Learning Integration: Localized CNN classification verifying eye state under low light.",
      "Instant Alarm Audios: Audio notifications that activate when fatigue thresholds are met."
    ],
    challengesSolved: "Achieved optimal performance on edge hardware by swapping computational-heavy face mesh algorithms for a lightweight facial landmark predictor, reducing frame processing latency.",
    image: "/drowsiness_detection.png",
    github: "https://github.com/Ravikumar-2016/Traditional-Driver-Drowsiness-Detection-System",
    liveUrl: "https://github.com/Ravikumar-2016/Trained-Model-DDD-System",
    featured: false
  }
]

export const experiences: Experience[] = [
  {
    role: "Web Developer Intern",
    organization: "IIITDM Jabalpur – Fusion Platform Development",
    period: "August 2025 – MAY 2026",
    location: "Jabalpur, Madhya Pradesh, India",
    points: [
      "Contributed to the campus ERP platform (Fusion), specifically developing features for the Scholarship Management module.",
      "Designed and implemented responsive frontend interfaces using React.js and Tailwind CSS to simplify application processes for students.",
      "Developed secure backend APIs to handle student details, eligibility checks, document routing, and approval workflows.",
      "Collaborated with administrative officers to implement complex validation rules for scholarship allocation.",
      "Managed version control and team code reviews using Git and GitHub within an agile workflow."
    ]
  }
]

export const achievements: Achievement[] = [
  {
    title: "JEE Mains - 98.2 Percentile",
    description: "Secured a position in the top 1.8% among 1.2 million candidates nationwide, demonstrating exceptional problem-solving and analytical skills.",
    iconName: "Award"
  },
  {
    title: "Fusion ERP Development",
    description: "Selected to contribute to the official institute portal (Fusion), developing frontend pages and backend APIs for critical campus services.",
    iconName: "Code"
  },
  {
    title: "Multiple Full Stack Projects",
    description: "Designed, developed, and deployed complete web applications spanning disaster management, agriculture, and meeting transcription.",
    iconName: "Laptop"
  },
  {
    title: "GitHub Portfolio",
    description: "Consistently committing to open source repositories, maintaining clean codebases and documenting architectural structures.",
    iconName: "Github"
  }
]
