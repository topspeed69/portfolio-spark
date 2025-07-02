
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";
import { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route");
  }, []);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/5 to-pink-500/5 rounded-full animate-float blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/5 to-orange-500/5 rounded-full animate-pulse blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-500/3 rounded-full animate-spin-slow blur-xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Animated Space Scene with Astronaut */}
        <div className="relative mb-12 animate-fade-in">
          {/* Enhanced Space Elements */}
          <div className="absolute -top-10 left-1/4 w-3 h-3 bg-orange-400 rounded-full animate-pulse shadow-lg shadow-orange-400/50"></div>
          <div className="absolute -top-5 right-1/3 w-2 h-2 bg-gray-300 rounded-full animate-pulse shadow-lg shadow-gray-300/50" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-5 left-1/6 w-2.5 h-2.5 bg-pink-400 rounded-full animate-pulse shadow-lg shadow-pink-400/50" style={{ animationDelay: '1s' }}></div>
          <div className="absolute -top-8 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-pulse shadow-lg shadow-purple-400/50" style={{ animationDelay: '1.5s' }}></div>
          
          {/* Enhanced Planet/Orbit */}
          <div className="absolute -top-20 left-1/3 w-20 h-20 border-2 border-orange-500/30 rounded-full animate-spin-slow shadow-lg shadow-orange-500/20">
            <div className="absolute top-7 left-7 w-6 h-6 bg-orange-500/40 rounded-full animate-pulse"></div>
            <div className="absolute top-2 right-3 w-2 h-2 bg-orange-300/60 rounded-full"></div>
          </div>

          {/* Enhanced Plus Signs */}
          <div className="absolute -top-12 left-1/5 text-orange-400/50 text-2xl animate-pulse filter drop-shadow-lg">✦</div>
          <div className="absolute top-8 right-1/5 text-gray-400/50 text-xl animate-pulse filter drop-shadow-lg" style={{ animationDelay: '0.8s' }}>✧</div>
          <div className="absolute -top-4 right-1/6 text-pink-400/50 text-lg animate-pulse filter drop-shadow-lg" style={{ animationDelay: '1.2s' }}>✦</div>
          
          {/* Enhanced Astronaut */}
          <div className="relative inline-block animate-float">
            <div className="w-32 h-40 mx-auto mb-8 relative filter drop-shadow-2xl">
              {/* Enhanced Helmet with Reflection */}
              <div className="w-24 h-24 bg-gradient-to-br from-gray-700 to-gray-900 border-3 border-gray-500 rounded-full mx-auto relative backdrop-blur-sm shadow-2xl">
                <div className="absolute inset-3 bg-gradient-to-br from-gray-800/40 to-gray-900/80 rounded-full border border-gray-400/50"></div>
                {/* Helmet Reflection */}
                <div className="absolute top-3 left-3 w-6 h-8 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-sm"></div>
                <div className="absolute top-7 left-7 w-3 h-3 bg-orange-400 rounded-full animate-pulse shadow-lg shadow-orange-400/60"></div>
                <div className="absolute top-9 right-8 w-1.5 h-1.5 bg-gray-300 rounded-full animate-pulse"></div>
              </div>
              
              {/* Enhanced Body */}
              <div className="w-20 h-24 bg-gradient-to-b from-gray-600 to-gray-800 mx-auto mt-3 rounded-xl border-2 border-gray-500 backdrop-blur-sm relative shadow-xl">
                <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-10 h-1.5 bg-orange-500/70 rounded shadow-lg"></div>
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gray-400/70 rounded"></div>
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-gray-400/70 rounded"></div>
                {/* Chest Panel */}
                <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-12 h-8 bg-gray-700/50 rounded border border-gray-500/50"></div>
              </div>
              
              {/* Enhanced Arms */}
              <div className="absolute top-20 -left-4 w-10 h-4 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full border-2 border-gray-500 backdrop-blur-sm shadow-lg"></div>
              <div className="absolute top-20 -right-4 w-10 h-4 bg-gradient-to-l from-gray-600 to-gray-700 rounded-full border-2 border-gray-500 backdrop-blur-sm shadow-lg"></div>
              
              {/* Enhanced Legs */}
              <div className="absolute -bottom-3 left-4 w-5 h-8 bg-gradient-to-b from-gray-600 to-gray-800 rounded-lg border-2 border-gray-500 backdrop-blur-sm shadow-lg"></div>
              <div className="absolute -bottom-3 right-4 w-5 h-8 bg-gradient-to-b from-gray-600 to-gray-800 rounded-lg border-2 border-gray-500 backdrop-blur-sm shadow-lg"></div>
              
              {/* Jetpack */}
              <div className="absolute top-12 left-1/2 transform -translate-x-1/2 translate-x-8 w-3 h-16 bg-gradient-to-b from-orange-500/30 to-orange-600/50 rounded-sm border border-orange-400/50 shadow-lg"></div>
            </div>
          </div>
        </div>

        {/* 404 Text */}
        <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-9xl font-thin text-white mb-4 tracking-wider">
            4<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500">0</span>4
          </h1>
          
          <h2 className="text-3xl font-light text-white mb-4">
            UH OH! You're <span className="text-orange-400">lost</span>.
          </h2>
          
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8 font-light leading-relaxed">
            The page you are looking for does not exist. Maybe you got here by
            <br />
            mistake, but you can click the button below to go back to the
            <br />
            homepage.
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Link to="/">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 text-lg font-normal shadow-2xl shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300 transform hover:scale-105 uppercase tracking-wider"
            >
              <Home className="w-5 h-5 mr-2" />
              HOME
            </Button>
          </Link>
          
          <Button 
            size="lg"
            variant="outline"
            onClick={() => window.history.back()}
            className="border-2 border-orange-500/50 text-orange-400 hover:bg-orange-500/10 hover:border-orange-500 px-8 py-4 text-lg font-normal backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Go Back
          </Button>
        </div>

        {/* Additional Space Elements */}
        <div className="absolute bottom-20 left-10 w-1 h-1 bg-orange-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '0.7s' }}></div>
        <div className="absolute bottom-16 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1.3s' }}></div>
        <div className="absolute bottom-28 left-1/4 text-gray-400/30 text-sm animate-pulse" style={{ animationDelay: '0.9s' }}>+</div>
      </div>
    </div>
  );
};

export default NotFound;
