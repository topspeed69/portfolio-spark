export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  detailedInfo: string;
  image: string;
  tags: string[];
  category: string;
  timeline: string;
  impact: string;
  techStack: string[];
  featured: boolean;
  github?: string | null; // Added github field
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Legal AI Assistant", // Renamed from Justice AI
    subtitle: "Legal Intelligence Platform",
    description: "Advanced AI models including InlegalBERT, T5, Gemma, and LLama trained on Indian legal corpus for document summarization, consultation, and contract generation.",
    longDescription: "Engineered comprehensive legal tech solutions featuring document summarization, interactive legal consultation, clause classification, and automated contract generation capabilities using state-of-the-art transformer models.",
    detailedInfo: "This project revolutionizes legal document processing by implementing cutting-edge NLP techniques specifically designed for Indian legal language. The system can process complex legal documents, extract key clauses, provide intelligent summaries, and even generate contract templates based on user requirements. The models were trained on a massive corpus of Indian legal documents, ensuring high accuracy and relevance for the Indian legal system. Features include real-time document analysis, clause extraction, legal precedent matching, and automated contract generation with customizable templates.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop",
    tags: ["Natural Language Processing", "Transformers", "Machine Learning", "Legal Tech"],
    category: "AI/ML",
    timeline: "6 months",
    impact: "95% accuracy in legal document classification",
    techStack: ["Python", "TensorFlow", "Transformers", "BERT", "Gemma", "LLama"],
    featured: false,
    github: "https://github.com/topspeed69/Legal-AI-Assistant"
  },
  {
    id: 2,
    title: "Self Driving Car Prototype", // Renamed from Autonomous Vehicle
    subtitle: "Navigation System",
    description: "Monocular vision-based autonomous navigation without traditional distance sensors using OpenCV and deep neural networks.",
    longDescription: "Developed sophisticated real-time computer vision algorithms for object detection, path planning, and obstacle avoidance on Raspberry Pi 4 hardware.",
    detailedInfo: "This innovative autonomous vehicle system challenges traditional approaches by relying solely on monocular vision for navigation. The system processes video feeds in real-time, identifying roads, obstacles, traffic signs, and other vehicles using advanced computer vision algorithms. The neural network was trained on diverse driving scenarios to ensure robust performance across different weather conditions and road types. Key features include lane detection, traffic sign recognition, pedestrian detection, and adaptive cruise control with emergency braking capabilities.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
    tags: ["Computer Vision", "Deep Learning", "Embedded Systems", "Real-time Processing"],
    category: "AI/ML",
    timeline: "4 months",
    impact: "Real-time processing at 30 FPS",
    techStack: ["Python", "OpenCV", "Raspberry Pi", "Neural Networks", "TensorFlow"],
    featured: false,
    github: null // No GitHub link, disables button
  },
  {
    id: 3,
    title: "Lightweight VCS",
    subtitle: "Version Control System",
    description: "High-performance version control with Huffman compression, lazy loading, and chunked file hashing.",
    longDescription: "Architected and implemented advanced compression algorithms with comprehensive file integrity verification and distributed repository management.",
    detailedInfo: "Built from the ground up to be lightweight yet powerful, this version control system implements advanced data compression techniques to minimize storage requirements while maintaining full version history. The system features intelligent file tracking, efficient branching and merging algorithms, and a distributed architecture that enables seamless collaboration across multiple developers. Advanced features include delta compression, binary file support, conflict resolution, and integration with popular IDEs.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop",
    tags: ["Systems Programming", "Data Compression", "Distributed Systems"],
    category: "Systems",
    timeline: "3 months",
    impact: "70% storage reduction",
    techStack: ["C++", "CMake", "Compression Algorithms", "Git Protocol"],
    featured: false,
    github: "https://github.com/topspeed69/VCS"
  },
  {
    id: 4,
    title: "Social Media Admin Dashboard", // Renamed for clarity
    subtitle: "Full-Stack Management Platform",
    description: "Comprehensive administrative dashboard with CRUD operations, role-based access control, advanced database architecture, and analytics integration.",
    longDescription: "Built scalable full-stack architecture supporting comprehensive CRUD operations, role-based access control, optimized database management, and real-time analytics processing using modern web technologies.",
    detailedInfo: "This enterprise-grade dashboard provides comprehensive social media management capabilities with advanced user analytics, content moderation tools, and automated reporting systems. The platform features robust database architecture with optimized queries, indexing strategies, and data warehousing. Backend includes scalable API development with JWT authentication, rate limiting, and audit logging. Frontend offers intuitive user management interface with real-time updates and comprehensive analytics dashboard. The system handles massive datasets with horizontal scaling capabilities and includes monitoring and alerting systems for performance optimization.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
    tags: ["Full-Stack Development", "Database Design", "API Development", "Authentication", "TypeScript", "Analytics", "MySQL", "Query Optimization"],
    category: "Web",
    timeline: "5 months",
    impact: "Manages 10K+ users efficiently",
    techStack: ["TypeScript", "MySQL", "Prisma ORM", "Node.js", "React", "Redis", "Data Pipeline"],
    featured: false,
    github: "https://github.com/topspeed69/Social-Media-Admin-Dashboard"
  },
  {
    id: 5,
    title: "Home Monitoring System", // Renamed from IoT Monitoring
    subtitle: "Environmental System",
    description: "Real-time detection of hazardous gases, temperature, and humidity with automated alerts and cloud sync.",
    longDescription: "Engineered comprehensive IoT solution for safety-critical applications with automated alert systems, cloud data synchronization, and mobile notifications.",
    detailedInfo: "This safety-focused IoT system monitors environmental conditions in real-time, detecting potentially dangerous gas concentrations and environmental changes. The system features customizable alert thresholds, emergency shutdown capabilities, and integration with home automation systems for enhanced safety and convenience. Advanced features include predictive analytics, historical data analysis, mobile app integration, and cloud-based monitoring dashboard with real-time notifications.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=600&fit=crop",
    tags: ["Internet of Things", "Sensor Integration", "Safety Systems"],
    category: "Hardware",
    timeline: "2 months",
    impact: "24/7 environmental monitoring",
    techStack: ["Arduino", "ESP32", "C", "Cloud Services", "Mobile App"],
    featured: false,
    github: null // No GitHub link, disables button
  }
];

// Update categories to include DBMS which will show the Social Media Dashboard
export const categories = ["All", "AI/ML", "Web", "Systems", "Hardware", "DBMS"];
