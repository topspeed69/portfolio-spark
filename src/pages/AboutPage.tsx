
import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code, Zap, Target, Award, BookOpen, Coffee } from "lucide-react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  const achievements = [
    {
      title: "AI/ML Projects",
      count: "3+",
      description: "Machine learning models and AI applications"
    },
    {
      title: "Programming Languages",
      count: "4+",
      description: "Proficient in multiple programming languages"
    },
    {
      title: "Years Learning",
      count: "3+",
      description: "Continuous learning and skill development"
    },
    {
      title: "Technologies",
      count: "10+",
      description: "Tools and frameworks mastered"
    }
  ];

  const timeline = [
    {
      year: "2024 - Present",
      title: "AI/ML Development",
      description: "Specialized in artificial intelligence and machine learning development, creating innovative solutions and intelligent systems"
    },
    {
      year: "2024",
      title: "Full-Stack & Systems Development",
      description: "Dabbled in embedded systems, systems programming with C++, beginner web development, and database management systems"
    },
    {
      year: "2023",
      title: "Hardware & IoT",
      description: "Started working with embedded systems, Arduino, and Internet of Things applications"
    }
  ];

  const interests = [
    "Artificial Intelligence","Robotics", "Database Design",
    "Photography","Trekking","Home Labs"
  ];

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
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/10 to-pink-500/10 backdrop-blur-sm border border-orange-500/20 rounded-full px-4 py-2 mb-6">
                <Code className="w-4 h-4 text-orange-400" />
                <span className="text-orange-400 font-medium">About Me</span>
              </div>
              <h1 className="text-6xl font-thin text-white mb-6">
                Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500">Future</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-8 font-light">
                I'm Vinay Mendole, a passionate software developer and AI enthusiast from Latur, Maharashtra. 
                I specialize in creating innovative solutions that bridge the gap between cutting-edge technology 
                and real-world applications.
              </p>
              <div className="flex gap-4">
                <Link to="/contact">
                  <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 font-normal shadow-lg shadow-orange-500/25">
                    Get In Touch
                  </Button>
                </Link>
                <Link to="/projects">
                  <Button variant="outline" className="border-orange-500/50 text-orange-400 hover:bg-orange-500/10 px-8 py-3 font-normal">
                    View Projects
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="aspect-square bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-pink-500/5"></div>
                <div className="relative z-10 h-full flex flex-col justify-center">
                  <div className="grid grid-cols-2 gap-6">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="text-center">
                        <div className="text-3xl font-bold text-orange-400 mb-2">{achievement.count}</div>
                        <div className="text-white font-medium mb-1">{achievement.title}</div>
                        <div className="text-gray-400 text-sm">{achievement.description}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 backdrop-blur-sm border border-orange-500/20 rounded-full px-4 py-2 mb-6">
              <Target className="w-4 h-4 text-orange-400" />
              <span className="text-orange-400 font-medium">My Journey</span>
            </div>
            <h2 className="text-4xl font-light text-white mb-4">
              The Path to <span className="text-orange-400">Innovation</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
              Every step has been a learning experience, building upon previous knowledge to create something extraordinary.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-orange-500 to-pink-500 opacity-30"></div>
            
            {timeline.map((item, index) => (
              <div 
                key={index} 
                className={`flex items-center mb-12 animate-fade-in ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <Card className="bg-gray-900/60 backdrop-blur-sm border-gray-800/50 hover:border-orange-500/40 transition-all duration-500">
                    <CardContent className="p-6">
                      <div className="text-orange-400 font-bold text-lg mb-2">{item.year}</div>
                      <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="w-2/12 flex justify-center">
                  <div className="w-4 h-4 bg-orange-500 rounded-full border-4 border-black shadow-lg shadow-orange-500/50"></div>
                </div>
                
                <div className="w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interests */}
      <section className="py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 backdrop-blur-sm border border-orange-500/20 rounded-full px-4 py-2 mb-6">
              <Zap className="w-4 h-4 text-orange-400" />
              <span className="text-orange-400 font-medium">Interests</span>
            </div>
            <h2 className="text-4xl font-light text-white mb-4">
              What Drives <span className="text-orange-400">Me</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
              These are the corners of tech I’ve been dabbling in—testing, learning, and evolving along the way..
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interests.map((interest, index) => (
              <Badge 
                key={interest}
                className={`
                  bg-gradient-to-r from-gray-900/60 to-gray-800/40 text-gray-300 
                  hover:from-orange-500/20 hover:to-pink-500/20 hover:text-white
                  border border-gray-700/50 hover:border-orange-500/50 backdrop-blur-sm
                  px-6 py-3 text-sm font-medium rounded-lg
                  transform hover:scale-105 transition-all duration-300
                  animate-fade-in justify-center
                `}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {interest}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/40 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-pink-500/5"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-orange-500/10 backdrop-blur-sm border border-orange-500/20 rounded-full px-4 py-2 mb-6">
                <BookOpen className="w-4 h-4 text-orange-400" />
                <span className="text-orange-400 font-medium">Philosophy</span>
              </div>
              <h3 className="text-3xl font-light text-white mb-6">
                My <span className="text-orange-400">Approach</span>
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
                "Every problem is an opportunity to learn something new. I believe in writing clean, 
                efficient code that not only solves today's challenges but also scales for tomorrow's needs. 
                My goal is to create technology that makes a meaningful impact on people's lives."
              </p>
              <div className="flex items-center justify-center gap-2 text-orange-400">
                <Coffee className="w-5 h-5" />
                <span className="text-sm font-medium">Fueled by curiosity and coffee</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative z-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-4xl font-light text-white mb-6">
            Let's Create Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">Amazing</span>
          </h3>
          <p className="text-xl text-gray-400 mb-8 font-light">
            Whether you have a project in mind or just want to chat about technology, I'd love to hear from you.
          </p>
          <Link to="/contact">
            <Button className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-12 py-4 text-lg font-normal shadow-2xl shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300 transform hover:scale-105">
              Start a Conversation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
