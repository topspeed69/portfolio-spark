
const Experience = () => {
  const workHistory = [
    {
      period: "2023 - Present",
      company: "Visual Computing and Robotics Lab",
      position: "Core Team Member",
      location: "NIT Delhi",
      description: "Contributed to the core and planning teams, organizing events and participating in ongoing robotics projects. Led technical initiatives and collaborated on research projects.",
      status: "current"
    },
    {
      period: "2023 - 2024", 
      company: "Google Developer's Student Club",
      position: "Event Planning Team",
      location: "NIT Delhi",
      description: "Worked in the Event Planning team, organizing various technical events and workshops. Coordinated with industry experts and managed large-scale technical events.",
      status: "past"
    }
  ];

  const education = [
    {
      period: "2023 - Present",
      institution: "National Institute of Technology Delhi",
      degree: "Bachelor of Technology",
      field: "Computer Science and Engineering",
      grade: "CGPA: 7.95",
      status: "current"
    }
  ];

  const achievements = [
    "Participated in Technoxian World Robotics Championship 2024",
    "Engaged in multiple events hosted by the Robotics Club at NIT Delhi", 
    "Participated in Awadh-CPS Lab's IoT programme",
    "Contributing to open-source robotics projects",
    "Technical lead for multiple hackathon projects"
  ];

  return (
    <section className="py-24 bg-black border-t border-gray-800">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light text-white mb-6">
            Work <span className="text-orange-500">history</span>
          </h2>
          <p className="text-xl text-gray-400 font-light">
            My professional journey & work experience
          </p>
        </div>

        {/* Work Experience */}
        <div className="mb-20">
          <div className="space-y-8">
            {workHistory.map((work, index) => (
              <div key={index} className="flex gap-8 group">
                <div className="flex flex-col items-center">
                  <div className={`w-4 h-4 rounded-full ${work.status === 'current' ? 'bg-orange-500' : 'bg-gray-600'} mb-2`} />
                  <div className="w-px bg-gray-800 flex-1" />
                </div>
                <div className="flex-1 pb-8">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className={`px-3 py-1 text-xs font-medium rounded ${
                      work.status === 'current' 
                        ? 'bg-orange-500 text-white' 
                        : 'bg-gray-800 text-gray-300'
                    }`}>
                      {work.period}
                    </span>
                    <span className="text-orange-500 text-sm">•</span>
                    <span className="text-orange-500 font-medium">{work.company}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-orange-500 transition-colors">
                    {work.position}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3 font-light">{work.location}</p>
                  <p className="text-gray-300 font-light leading-relaxed">
                    {work.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-20">
          <h3 className="text-3xl font-light text-white mb-12 text-center">
            <span className="text-orange-500">Education</span>
          </h3>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="flex gap-8 group">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-orange-500 mb-2" />
                  <div className="w-px bg-gray-800 flex-1" />
                </div>
                <div className="flex-1 pb-8">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-3 py-1 text-xs font-medium rounded bg-orange-500 text-white">
                      {edu.period}
                    </span>
                    <span className="text-orange-500 text-sm">•</span>
                    <span className="text-orange-500 font-medium">{edu.institution}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-gray-400 text-sm mb-2 font-light">{edu.field}</p>
                  <p className="text-gray-300 font-light">{edu.grade}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8">
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">Key Achievements</h3>
          <div className="space-y-3">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-300 font-light">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
