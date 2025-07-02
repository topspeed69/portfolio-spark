
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const technicalSkills = [
    { category: "Languages", skills: ["C++", "Python", "JavaScript", "TypeScript", "C"] },
    { category: "ML/AI", skills: ["TensorFlow", "OpenCV", "PyTorch", "Neural Networks"] },
    { category: "Web", skills: ["Node.js", "React", "MySQL", "Prisma ORM", "Tailwind CSS"] },
    { category: "Hardware", skills: ["Raspberry Pi", "Arduino", "ESP32 Family", "STM32 Family", "Embedded Systems"] }
  ];

  return (
    <section className="py-24 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-light text-white mb-6 animate-fade-in">
            Technical <span className="text-orange-500">Expertise</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light animate-fade-in">
            Core technologies and skills I work with to build innovative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {technicalSkills.map((category, index) => (
            <div 
              key={index} 
              className="text-center animate-fade-in hover-scale"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h4 className="text-lg font-semibold text-orange-500 mb-4">{category.category}</h4>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="text-gray-300 font-light hover:text-white transition-colors duration-200">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
