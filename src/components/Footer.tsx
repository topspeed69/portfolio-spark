
import { Heart, Code } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800/50 py-12 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-orange-500/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-orange-500/3 rounded-full blur-xl animate-float"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center space-y-6">
          {/* Main Acknowledgment */}
          <div className="space-y-3">
            <div className="flex items-center justify-center gap-2 text-gray-400">
              <Code className="w-4 h-4 text-orange-400" />
              <span className="text-sm">Built with passion and powered by innovation</span>
            </div>
            
            <p className="text-gray-300 text-sm max-w-2xl mx-auto leading-relaxed">
              UI and basic structure crafted with the assistance of{" "}
              <a 
                href="https://lovable.dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-orange-400 hover:text-orange-300 transition-colors duration-300 font-medium"
              >
                Lovable AI
              </a>
              . Project concept, implementation, and completion by{" "}
              <span className="text-white font-medium">Vinay Mendole</span>.
            </p>
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gray-800"></div>
            <Heart className="w-4 h-4 text-orange-400 animate-pulse" />
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gray-800"></div>
          </div>

          {/* Copyright */}
          <div className="pt-4">
            <p className="text-gray-500 text-xs">
              © {new Date().getFullYear()} Vinay Mendole. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
