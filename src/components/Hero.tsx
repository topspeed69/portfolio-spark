
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500/10 rounded-full animate-pulse blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-500/5 rounded-full animate-float blur-2xl"></div>
        <div className="absolute top-1/2 left-10 w-64 h-64 bg-orange-500/8 rounded-full animate-spin-slow blur-xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <div className="mb-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-green-500/10 backdrop-blur-sm border border-green-500/20 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-400 text-sm font-medium">Available for opportunities</span>
          </div>
          
          <h1 className="text-7xl md:text-8xl font-thin text-white mb-6 leading-tight">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 animate-gradient-x">
              Vinay
            </span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-300 mb-8 font-light">
            AI Engineer & Full-Stack Developer
          </p>
          
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
            Crafting intelligent solutions through machine learning, computer vision, and modern web technologies. 
            Passionate about building systems that make a difference.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <Link to="/contact">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 text-lg font-normal shadow-2xl shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </Button>
          </Link>
          <Link to="/projects">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-orange-500/50 text-orange-400 hover:bg-orange-500/10 hover:border-orange-500 px-8 py-4 text-lg font-normal backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
            >
              View Projects
            </Button>
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <button 
            onClick={() => scrollToSection('skills')}
            className="flex flex-col items-center gap-2 text-gray-400 hover:text-orange-500 transition-colors duration-300 mx-auto"
          >
            <span className="text-sm font-light">Scroll to explore</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
