
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Star, Clock } from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Justice AI - Legal Intelligence Platform",
      description: "Engineered advanced AI models including InlegalBERT, T5, Gemma, and LLama specifically trained on Indian legal corpus. Developed comprehensive legal tech solutions featuring document summarization, interactive legal consultation, clause classification, and automated contract generation capabilities.",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop",
      tags: ["Natural Language Processing", "Transformers", "Legal Technology", "Machine Learning", "Python", "TensorFlow"],
      category: "AI/ML",
      status: "Featured",
      duration: "6 months"
    },
    {
      title: "Autonomous Vehicle Navigation System",
      description: "Developed a sophisticated monocular vision-based autonomous navigation system without traditional distance sensors. Implemented real-time computer vision algorithms using OpenCV and deep neural networks for object detection, path planning, and obstacle avoidance on Raspberry Pi 4 hardware.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
      tags: ["Computer Vision", "Deep Learning", "Embedded Systems", "Real-time Processing", "OpenCV", "Python"],
      category: "AI/ML",
      status: "Production",
      duration: "4 months"
    },
    {
      title: "Enterprise Version Control System",
      description: "Architected and implemented a high-performance version control system featuring advanced Huffman compression algorithms, lazy loading mechanisms, and chunked file hashing for optimal storage efficiency. Integrated comprehensive file integrity verification and distributed repository management.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      tags: ["Systems Programming", "Data Compression", "Distributed Systems", "C++", "CMake"],
      category: "Systems",
      status: "Completed",
      duration: "3 months"
    },
    {
      title: "Social Media Management Dashboard",
      description: "Designed and developed a comprehensive administrative dashboard for social media platform management. Built with scalable architecture supporting full CRUD operations, role-based access control, analytics integration, and real-time user management capabilities using modern web technologies.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      tags: ["Database Design", "API Development", "Authentication", "TypeScript", "MySQL", "Prisma ORM"],
      category: "Web Dev",
      status: "Active",
      duration: "5 months"
    },
    {
      title: "IoT Environmental Monitoring System",
      description: "Engineered a comprehensive IoT-based environmental monitoring solution for real-time detection of hazardous gases (butane, CO, CO2, O2), temperature, and humidity. Implemented automated alert systems, cloud data synchronization, and mobile notifications for safety-critical applications.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop",
      tags: ["Internet of Things", "Sensor Integration", "Safety Systems", "Arduino", "ESP32", "Embedded C"],
      category: "Hardware",
      status: "Deployed",
      duration: "2 months"
    },
    {
      title: "Machine Learning Operations Pipeline",
      description: "Built end-to-end MLOps infrastructure for automated model training, validation, and deployment. Implemented continuous integration/continuous deployment (CI/CD) pipelines with automated model monitoring, performance tracking, and scalable cloud deployment using containerization technologies.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      tags: ["MLOps", "Cloud Computing", "DevOps", "Model Deployment", "Docker", "Python"],
      category: "AI/ML",
      status: "Production",
      duration: "4 months"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Featured": return "bg-gradient-to-r from-orange-500 to-red-500";
      case "Production": return "bg-gradient-to-r from-green-500 to-emerald-500";
      case "Active": return "bg-gradient-to-r from-blue-500 to-cyan-500";
      case "Deployed": return "bg-gradient-to-r from-purple-500 to-pink-500";
      default: return "bg-gradient-to-r from-gray-500 to-gray-600";
    }
  };

  return (
    <section className="py-24 bg-black border-t border-gray-800 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-orange-500/5 rounded-full blur-2xl animate-float"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-500/5 rounded-full blur-xl animate-spin-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 backdrop-blur-sm border border-orange-500/20 rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-orange-500" />
            <span className="text-orange-400 text-sm font-medium">Featured Work</span>
          </div>
          <h2 className="text-6xl font-light text-white mb-6 animate-fade-in">
            Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">Showcase</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
            Innovative solutions spanning AI/ML, systems architecture, and full-stack development.
            Each project represents a unique challenge conquered through cutting-edge technology.
          </p>
        </div>

        {/* New Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-xl border border-gray-700/50 hover:border-orange-500/50 transition-all duration-500 overflow-hidden animate-fade-in hover:shadow-2xl hover:shadow-orange-500/20"
              style={{ animationDelay: `${index * 0.15}s` }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image with Overlay */}
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <Badge className={`${getStatusColor(project.status)} text-white border-0 font-medium px-3 py-1`}>
                    {project.status}
                  </Badge>
                </div>

                {/* Duration Badge */}
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-gray-300" />
                  <span className="text-xs text-gray-300 font-light">{project.duration}</span>
                </div>

                {/* Category Badge */}
                <div className="absolute bottom-4 left-4">
                  <span className="text-orange-400 text-sm font-medium bg-orange-500/20 backdrop-blur-sm border border-orange-500/30 rounded-full px-3 py-1">
                    {project.category}
                  </span>
                </div>
              </div>

              <CardContent className="p-6 space-y-4">
                {/* Project Title */}
                <h3 className="text-xl font-semibold text-white group-hover:text-orange-400 transition-colors duration-300 line-clamp-2">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 group-hover:text-gray-300 transition-colors duration-300">
                  {project.description}
                </p>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 4).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-gray-800/60 backdrop-blur-sm text-gray-300 text-xs rounded-md border border-gray-700/50 hover:bg-gray-700/60 hover:border-orange-500/30 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-2 py-1 bg-orange-500/20 text-orange-400 text-xs rounded-md border border-orange-500/30">
                      +{project.tags.length - 4} more
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1 border-orange-500/50 text-orange-400 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-300 group/btn"
                  >
                    <Github className="h-3 w-3 mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
                    <span className="font-normal text-xs">View Code</span>
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white border-0 transition-all duration-300 group/btn shadow-lg shadow-orange-500/25"
                  >
                    <ExternalLink className="h-3 w-3 mr-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                    <span className="font-normal text-xs">Live Demo</span>
                  </Button>
                </div>
              </CardContent>

              {/* Enhanced Hover Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${hoveredProject === index ? 'animate-pulse' : ''}`}></div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-16 pt-16 border-t border-gray-800/50">
          <p className="text-gray-400 text-lg mb-6 font-light">
            Interested in collaborating on innovative projects?
          </p>
          <Button className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-8 py-3 text-sm font-normal shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300">
            Let's Build Something Amazing
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
