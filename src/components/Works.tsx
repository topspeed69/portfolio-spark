import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { projects as allProjects } from "@/data/projectsData";

const Works = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [expandedProjects, setExpandedProjects] = useState<Set<number>>(new Set());

  const filters = ["All", "AI/ML", "Hardware", "Web", "DBMS", "Systems"];

  // Use the imported projects data
  const projects = allProjects;

  const filteredProjects = activeFilter === "All"
    ? projects.slice(0, 6)
    : projects.filter(project => project.category.includes(activeFilter));

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
                  {expandedProjects.has(index) ? project.longDescription : project.description}
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
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      tabIndex={0}
                    >
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-normal text-xs transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25"
                      >
                        <Github className="h-3 w-3 mr-1" />
                        Code
                      </Button>
                    </a>
                  ) : (
                    <Button
                      size="sm"
                      variant="outline"
                      disabled
                      className="border-gray-700 text-gray-400 cursor-not-allowed font-normal text-xs opacity-50"
                    >
                      <Github className="h-3 w-3 mr-1" />
                      Code
                    </Button>
                  )}
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
