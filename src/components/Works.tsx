
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";

const Works = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [expandedProjects, setExpandedProjects] = useState<Set<number>>(new Set());

  const filters = ["All", "AI/ML", "Hardware", "Web", "DBMS", "Systems"];

  const projects = [
    {
      title: "Justice AI",
      description: "Developed and trained AI models like InlegalBERT, T5, Gemma, LLama on Indian law for summarization, chat, clause classification, and contract generation.",
      fullDescription: "Engineered comprehensive legal tech solutions featuring document summarization, interactive legal consultation, clause classification, and automated contract generation capabilities. The project involved training state-of-the-art transformer models specifically on Indian legal corpus, implementing advanced NLP techniques for legal document analysis, and creating an intuitive interface for legal professionals to interact with AI-powered legal assistance tools.",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop",
      tags: ["Natural Language Processing", "Transformers", "Legal Tech", "Machine Learning"],
      category: "AI/ML"
    },
    {
      title: "Social Media Dashboard",
      description: "Comprehensive admin dashboard for social media platform management with CRUD operations, role-based access, and advanced database management.",
      fullDescription: "Built a scalable administrative dashboard supporting full CRUD operations, role-based access control, analytics integration, and real-time user management. The system features advanced user analytics, content moderation tools, automated reporting systems, and seamless integration with multiple social media APIs. Implemented robust security measures including JWT authentication, rate limiting, comprehensive audit logging, and optimized database architecture with complex relationship management and query optimization.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      tags: ["React", "Node.js", "MySQL", "Database Design", "Authentication", "Web Development", "DBMS"],
      category: "Web"
    },
    {
      title: "Lightweight VCS",
      description: "Developed a custom lightweight version control system with Huffman compression, lazy loading, and chunked file hashing for efficient storage.",
      fullDescription: "Architected and implemented a high-performance version control system featuring advanced Huffman compression algorithms, intelligent lazy loading mechanisms, and optimized chunked file hashing for superior storage efficiency. The system includes comprehensive file integrity verification, distributed repository management, branching and merging capabilities, and a user-friendly command-line interface. Optimized for both small and large repositories with minimal memory footprint.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      tags: ["C++", "Data Compression", "File Systems", "Algorithms"],
      category: "Systems"
    },
    {
      title: "Self-Driving Car Prototype",
      description: "Monocular vision-based autonomous vehicle prototype without distance sensors. Implemented real-time computer vision for navigation using OpenCV and neural networks.",
      fullDescription: "Developed a sophisticated autonomous navigation system using only monocular vision input, eliminating the need for traditional distance sensors. The system implements advanced computer vision algorithms including object detection, lane recognition, traffic sign identification, and obstacle avoidance. Features real-time processing capabilities running on Raspberry Pi 4 hardware with custom-trained neural networks for accurate path planning and decision making in various driving scenarios.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
      tags: ["Computer Vision", "Deep Learning", "Embedded Systems", "Real-time Processing"],
      category: "AI/ML"
    },
    {
      title: "Home Monitoring System",
      description: "IoT system that monitors gaseous content (butane, CO, CO2, O2) for safety alerts, plus temperature and humidity monitoring with real-time notifications.",
      fullDescription: "Engineered a comprehensive IoT-based environmental monitoring solution for real-time detection of hazardous gases including butane, carbon monoxide, carbon dioxide, and oxygen levels. The system features automated alert mechanisms, cloud data synchronization, mobile notifications, and historical data analysis. Includes temperature and humidity sensors with customizable thresholds, emergency shutdown capabilities, and integration with home automation systems for enhanced safety and convenience.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop",
      tags: ["IoT", "Sensor Integration", "Safety Systems", "Arduino"],
      category: "Hardware"
    }
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects.slice(0, 6) 
    : projects.filter(project => project.category === activeFilter);

  const toggleExpanded = (index: number) => {
    const newExpanded = new Set(expandedProjects);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedProjects(newExpanded);
  };

  return (
    <section className="py-24 bg-black border-t border-gray-800 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full animate-float blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/5 rounded-full animate-pulse blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-orange-500/10 rounded-full animate-spin-slow blur-xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light text-white mb-6 animate-fade-in">
            My <span className="text-orange-500">Works</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light animate-fade-in">
            A collection of projects showcasing expertise in AI/ML, hardware, web development, database management, and systems programming
          </p>
        </div>

        {/* Enhanced Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in">
          {filters.map((filter, index) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              className={`
                ${activeFilter === filter
                  ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/40 border-none glow-orange"
                  : "border border-gray-700/50 text-gray-300 hover:bg-gray-800/60 hover:border-orange-500/50 hover:text-orange-300 hover:shadow-lg hover:shadow-orange-500/20 backdrop-blur-sm bg-gray-900/30"
                } 
                font-normal transition-all duration-300 transform hover:scale-105 rounded-lg px-6 py-2 relative overflow-hidden
                before:absolute before:inset-0 before:bg-gradient-to-r before:from-orange-500/10 before:to-orange-600/10 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300
              `}
              onClick={() => setActiveFilter(filter)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="relative z-10">
                {filter} {filter === "All" && `(${Math.min(projects.length, 5)})`}
              </span>
            </Button>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-gray-900/50 backdrop-blur-sm border-gray-800 hover:border-orange-500/30 transition-all duration-500 overflow-hidden group animate-fade-in glass-morphism hover:shadow-2xl hover:shadow-orange-500/10 transform hover:scale-105 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-orange-500 text-sm font-medium px-2 py-1 bg-orange-500/10 rounded-full backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed font-light text-sm">
                  {expandedProjects.has(index) ? project.fullDescription : project.description}
                </p>
                
                {/* Read More Button */}
                <button
                  onClick={() => toggleExpanded(index)}
                  className="flex items-center gap-1 text-orange-400 hover:text-orange-300 text-xs font-medium transition-colors duration-200 mb-4"
                >
                  {expandedProjects.has(index) ? (
                    <>
                      <ChevronUp className="w-3 h-3" />
                      Read Less
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-3 h-3" />
                      Read More
                    </>
                  )}
                </button>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-gray-800/50 backdrop-blur-sm text-gray-300 text-xs font-light rounded hover:bg-gray-700/50 transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button size="sm" variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-normal text-xs transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25">
                    <Github className="h-3 w-3 mr-1" />
                    Code
                  </Button>
                  <Button size="sm" disabled className="bg-gray-600/50 text-gray-400 cursor-not-allowed font-normal text-xs opacity-50">
                    <ExternalLink className="h-3 w-3 mr-1" />
                    Live
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
