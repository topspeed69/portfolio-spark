import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";

const SkillsPage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeCategory, setActiveCategory] = useState("All");

  const skillCategories = [
    { name: "All", count: 0 },
    { name: "Languages", count: 0 },
    { name: "AI/ML", count: 0 },
    { name: "Frontend", count: 0 },
    { name: "Backend", count: 0 },
    { name: "Database", count: 0 },
    { name: "DevOps", count: 0 },
    { name: "Hardware", count: 0 },
    { name: "Tools", count: 0 }
  ];

  const skills = [
    // Programming Languages
    { 
      name: "Python", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      category: "Languages",
      proficiency: "Advanced",
      projects: ["Justice AI", "Autonomous Vehicle", "MLOps Pipeline"]
    },
    { 
      name: "C++", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      category: "Languages",
      proficiency: "Intermediate",
      projects: ["Version Control System", "Embedded Systems"]
    },
    { 
      name: "JavaScript", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      category: "Languages",
      proficiency: "Intermediate",
      projects: ["Social Media Dashboard", "Web Applications"]
    },
    { 
      name: "TypeScript", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      category: "Languages",
      proficiency: "Intermediate",
      projects: ["React Applications", "API Development"]
    },
    { 
      name: "C", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
      category: "Languages",
      proficiency: "Intermediate",
      projects: ["Embedded Systems", "Hardware Programming"]
    },

    // AI/ML Technologies
    { 
      name: "TensorFlow", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
      category: "AI/ML",
      proficiency: "Beginner",
      projects: ["Justice AI", "Autonomous Vehicle", "Neural Networks"]
    },
    { 
      name: "PyTorch", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
      category: "AI/ML",
      proficiency: "Beginner",
      projects: ["Deep Learning Models", "Computer Vision"]
    },
    { 
      name: "OpenCV", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
      category: "AI/ML",
      proficiency: "Beginner",
      projects: ["Autonomous Vehicle", "Computer Vision"]
    },
    { 
      name: "Scikit-learn", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
      category: "AI/ML",
      proficiency: "Intermediate",
      projects: ["Machine Learning", "Data Analysis"]
    },
    { 
      name: "Pandas", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
      category: "AI/ML",
      proficiency: "Advanced",
      projects: ["Data Processing", "ML Pipeline"]
    },
    { 
      name: "NumPy", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
      category: "AI/ML",
      proficiency: "Advanced",
      projects: ["Scientific Computing", "ML Models"]
    },

    // Frontend Technologies
    { 
      name: "React", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      category: "Frontend",
      proficiency: "Intermediate",
      projects: ["Social Media Dashboard", "Web Applications"]
    },
    { 
      name: "Next.js", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      category: "Frontend",
      proficiency: "Beginner",
      projects: ["Full-stack Applications"]
    },
    { 
      name: "Tailwind CSS", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      category: "Frontend",
      proficiency: "Intermediate",
      projects: ["Modern UI Design", "Responsive Layouts"]
    },
    { 
      name: "HTML5", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      category: "Frontend",
      proficiency: "Intermediate",
      projects: ["Web Development"]
    },
    { 
      name: "CSS3", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      category: "Frontend",
      proficiency: "Intermediate",
      projects: ["Styling & Animations"]
    },

    // Backend Technologies
    { 
      name: "Node.js", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      category: "Backend",
      proficiency: "Beginner",
      projects: ["API Development", "Server Applications"]
    },
    { 
      name: "Express.js", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      category: "Backend",
      proficiency: "Beginner",
      projects: ["REST APIs", "Web Services"]
    },
    { 
      name: "FastAPI", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
      category: "Backend",
      proficiency: "Intermediate",
      projects: ["Python APIs", "ML Services"]
    },

    // Database Technologies
    { 
      name: "MySQL", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      category: "Database",
      proficiency: "Intermediate",
      projects: ["Social Media Dashboard", "Data Storage"]
    },
    { 
      name: "PostgreSQL", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      category: "Database",
      proficiency: "Intermediate",
      projects: ["Production Databases"]
    },
    { 
      name: "MongoDB", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      category: "Database",
      proficiency: "Intermediate",
      projects: ["NoSQL Applications"]
    },
    { 
      name: "Prisma ORM", 
      logo: "https://www.vectorlogo.zone/logos/prismaio/prismaio-icon.svg",
      category: "Database",
      proficiency: "Intermediate",
      projects: ["Database Management", "Type-safe Queries"]
    },

    // DevOps & Tools
    { 
      name: "Docker", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      category: "DevOps",
      proficiency: "Intermediate",
      projects: ["MLOps Pipeline", "Containerization"]
    },
    { 
      name: "Git", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      category: "Tools",
      proficiency: "Advanced",
      projects: ["Version Control", "Collaboration"]
    },
    { 
      name: "GitHub", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      category: "Tools",
      proficiency: "Advanced",
      projects: ["Code Repository", "CI/CD"]
    },
    { 
      name: "VS Code", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      category: "Tools",
      proficiency: "Advanced",
      projects: ["Development Environment"]
    },
    { 
      name: "CMake", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cmake/cmake-original.svg",
      category: "Tools",
      proficiency: "Beginner",
      projects: ["C++ Build System"]
    },

    // Hardware & Embedded
    { 
      name: "Arduino", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg",
      category: "Hardware",
      proficiency: "Intermediate",
      projects: ["IoT Monitoring", "Embedded Systems"]
    },
    { 
      name: "Raspberry Pi", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg",
      category: "Hardware",
      proficiency: "Intermediate",
      projects: ["Autonomous Vehicle", "Edge Computing"]
    },
    { 
      name: "ESP32", 
      logo: "https://docs.espressif.com/projects/esp-idf/en/latest/esp32/_images/esp32-devkitC-v4-front.jpg",
      category: "Hardware",
      proficiency: "Intermediate",
      projects: ["IoT Devices", "Wireless Communication"]
    }
  ];

  // Update category counts
  skillCategories.forEach(category => {
    if (category.name === "All") {
      category.count = skills.length;
    } else {
      category.count = skills.filter(skill => skill.category === category.name).length;
    }
  });

  const filteredSkills = activeCategory === "All" 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  const getProficiencyColor = (proficiency: string) => {
    switch (proficiency) {
      case "Advanced": return "from-green-500 to-emerald-500";
      case "Intermediate": return "from-blue-500 to-cyan-500";
      case "Beginner": return "from-yellow-500 to-orange-500";
      default: return "from-gray-500 to-gray-600";
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <Navigation />
      
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-96 h-96 bg-gradient-radial from-orange-500/8 to-transparent rounded-full pointer-events-none transition-all duration-700 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
        <div className="absolute top-20 left-10 w-80 h-80 bg-orange-500/5 rounded-full animate-float blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/3 rounded-full animate-pulse blur-3xl"></div>
      </div>

      {/* Header Section */}
      <section className="pt-32 pb-12 relative z-10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 backdrop-blur-sm border border-orange-500/20 rounded-full px-4 py-2 mb-6">
            <span className="text-orange-400 text-sm font-medium">Technical Arsenal</span>
          </div>
          <h1 className="text-6xl font-light text-white mb-6 animate-fade-in">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">Technologies</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed mb-8">
            A comprehensive collection of programming languages, frameworks, and tools 
            mastered through hands-on project development and continuous learning.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-8 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {skillCategories.map((category, index) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.name
                    ? "bg-orange-500 text-white shadow-lg shadow-orange-500/25"
                    : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white backdrop-blur-sm border border-gray-700/50"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="pb-20 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filteredSkills.map((skill, index) => (
              <Card
                key={skill.name}
                className="bg-gray-900/60 backdrop-blur-sm border border-gray-800/50 hover:border-orange-500/40 transition-all duration-500 group animate-fade-in hover:shadow-xl hover:shadow-orange-500/10"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center relative">
                    <img 
                      src={skill.logo} 
                      alt={skill.name}
                      className="w-full h-full object-contain filter group-hover:brightness-110 transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">
                      {skill.name}
                    </h3>
                    
                    <Badge className={`bg-gradient-to-r ${getProficiencyColor(skill.proficiency)} text-white text-xs px-2 py-1 font-medium border-0 mb-3`}>
                      {skill.proficiency}
                    </Badge>
                    
                    <Badge className="bg-gray-800/50 text-gray-400 text-xs px-2 py-1 font-light border border-gray-700 block">
                      {skill.category}
                    </Badge>
                  </div>

                  {/* Projects count on hover */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-xs text-gray-500">
                      Used in {skill.projects.length} project{skill.projects.length !== 1 ? 's' : ''}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Infinity Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="relative">
            <h3 className="text-4xl font-thin text-white mb-6">
              Beyond <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500 animate-glow">Infinity</span>
            </h3>
            <p className="text-gray-400 text-lg mb-8 font-light">
              Constantly evolving, perpetually learning, infinitely creating
            </p>
            
            {/* Infinity Symbol */}
            <div className="relative w-32 h-16 mx-auto mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-full animate-spin-slow opacity-50 blur-sm"></div>
              <div className="absolute inset-2 bg-black rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl text-orange-400">∞</div>
            </div>
            
            {/* Future Tech Badges */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {["Quantum Computing", "Web3 & Blockchain", "AR/VR Development", "Edge AI", "5G Applications", "Biotechnology"].map((tech, index) => (
                <Badge 
                  key={tech}
                  className={`
                    bg-gradient-to-r from-gray-800/60 to-gray-900/60 text-gray-300 
                    hover:from-orange-500/20 hover:to-pink-500/20 hover:text-white
                    border border-gray-700 hover:border-orange-500/50 backdrop-blur-sm
                    px-4 py-2 text-sm font-light
                    transform hover:scale-105 transition-all duration-300
                    animate-fade-in
                  `}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {tech}
                </Badge>
              ))}
            </div>

            {/* Relevant Tech Tags */}
            <div className="border-t border-gray-800/50 pt-8">
              <h4 className="text-xl font-light text-white mb-4">Currently Exploring</h4>
              <div className="flex flex-wrap justify-center gap-3">
                {["Generative AI", "Vector Databases", "Microservices", "Cloud Native", "DevSecOps", "MLOps", "GraphQL", "Serverless", "Kubernetes", "Rust Programming", "WebAssembly", "JAMstack"].map((tag, index) => (
                  <Badge 
                    key={tag}
                    className={`
                      bg-orange-500/10 text-orange-400 border border-orange-500/30 
                      hover:bg-orange-500/20 hover:text-orange-300
                      px-3 py-1 text-xs font-medium rounded-full
                      transition-all duration-300 animate-fade-in
                    `}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-800/50">
              <p className="text-gray-500 text-sm font-light">
                "The only way to make sense out of change is to plunge into it, move with it, and join the dance." - Alan Watts
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkillsPage;
