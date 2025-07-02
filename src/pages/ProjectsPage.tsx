
import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Zap, Code } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CategoryFilter from "@/components/projects/CategoryFilter";
import ProjectCard from "@/components/projects/ProjectCard";
import { projects, categories } from "@/data/projectsData";

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => {
        // Show Social Media Dashboard in both Web and DBMS categories
        if (project.title === "Social Media Dashboard") {
          return activeCategory === "Web" || activeCategory === "DBMS";
        }
        return project.category === activeCategory;
      });

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <Navigation />
      
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/5 to-pink-500/5 rounded-full animate-float blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/5 to-orange-500/5 rounded-full animate-pulse blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-500/3 rounded-full animate-spin-slow blur-xl"></div>
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/10 to-pink-500/10 backdrop-blur-sm border border-orange-500/20 rounded-full px-6 py-3 mb-8">
              <Zap className="w-5 h-5 text-orange-400" />
              <span className="text-orange-400 font-medium">Project Collection</span>
            </div>
            <h1 className="text-7xl font-thin text-white mb-8 animate-fade-in">
              Creative <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500">Solutions</span>
            </h1>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
              Exploring innovative technologies across AI/ML, systems programming, database management, and web development
            </p>
          </div>
        </div>
      </section>

      {/* All Projects Section */}
      <section className="pb-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <Code className="w-8 h-8 text-orange-400" />
            <h2 className="text-4xl font-light text-white">Complete Collection</h2>
            <div className="flex-1 h-px bg-gradient-to-r from-orange-500/50 to-transparent"></div>
          </div>

          <CategoryFilter 
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative z-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="relative">
            <h3 className="text-5xl font-thin text-white mb-6">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">Collaborate?</span>
            </h3>
            <p className="text-xl text-gray-400 mb-8 font-light">
              Let's build something extraordinary together
            </p>
            <Link to="/contact">
              <Button className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-12 py-4 text-lg font-normal shadow-2xl shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300 transform hover:scale-105">
                Start a Project
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
