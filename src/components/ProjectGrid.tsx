
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";

interface Project {
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
}

interface ProjectGridProps {
  projects: Project[];
  activeCategory: string;
}

const ProjectGrid = ({ projects, activeCategory }: ProjectGridProps) => {
  const [expandedProjects, setExpandedProjects] = useState<Set<number>>(new Set());

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const toggleExpanded = (projectId: number) => {
    const newExpanded = new Set(expandedProjects);
    if (newExpanded.has(projectId)) {
      newExpanded.delete(projectId);
    } else {
      newExpanded.add(projectId);
    }
    setExpandedProjects(newExpanded);
  };

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
      {filteredProjects.map((project, index) => (
        <Card 
          key={project.id}
          className="group bg-gray-900/60 backdrop-blur-sm border border-gray-800/50 hover:border-orange-500/40 transition-all duration-500 overflow-hidden animate-fade-in hover:shadow-xl hover:shadow-orange-500/10 transform hover:scale-105"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="aspect-video overflow-hidden relative cursor-pointer">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            
            <div className="absolute top-4 left-4">
              <Badge className="bg-gray-800/80 text-gray-300 border border-gray-600 px-2 py-1 text-xs backdrop-blur-sm">
                {project.category}
              </Badge>
            </div>

            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-orange-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-orange-400 text-xs">{project.subtitle}</p>
            </div>
          </div>

          <CardContent className="p-6">
            <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
              {expandedProjects.has(project.id) ? project.longDescription : project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.slice(0, 3).map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-2 py-1 bg-gray-800/50 text-gray-400 text-xs rounded border border-gray-700/50"
                >
                  {tag}
                </span>
              ))}
              {project.tags.length > 3 && (
                <span className="px-2 py-1 bg-orange-500/20 text-orange-400 text-xs rounded border border-orange-500/30">
                  +{project.tags.length - 3}
                </span>
              )}
            </div>

            <button
              onClick={() => toggleExpanded(project.id)}
              className="flex items-center gap-1 text-orange-400 hover:text-orange-300 text-xs font-medium transition-colors duration-200 mb-4"
            >
              {expandedProjects.has(project.id) ? (
                <>
                  <ChevronUp className="w-3 h-3" />
                  Show Less
                </>
              ) : (
                <>
                  <ChevronDown className="w-3 h-3" />
                  View Details
                </>
              )}
            </button>

            {expandedProjects.has(project.id) && (
              <div className="space-y-3 animate-fade-in">
                <div className="pt-3 border-t border-gray-800">
                  <div className="flex justify-between items-center text-xs text-gray-400 mb-2">
                    <span>Timeline: {project.timeline}</span>
                    <span className="text-orange-400">{project.impact}</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-orange-500/10 text-orange-400 text-xs rounded border border-orange-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            <div className="flex gap-2 mt-4">
              <Button size="sm" variant="outline" className="flex-1 border-orange-500/50 text-orange-400 hover:bg-orange-500/10 text-xs">
                <Github className="w-3 h-3 mr-1" />
                Code
              </Button>
              <Button size="sm" className="flex-1 bg-orange-500/20 text-orange-400 hover:bg-orange-500/30 border border-orange-500/30 text-xs">
                <ExternalLink className="w-3 h-3 mr-1" />
                Demo
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ProjectGrid;
