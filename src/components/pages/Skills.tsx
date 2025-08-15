import React from 'react';

interface Skill {
  name: string;
  icon: string;
  level: number;
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    { name: 'JavaScript', icon: '🟨', level: 95 },
    { name: 'TypeScript', icon: '🔷', level: 90 },
    { name: 'React', icon: '⚛️', level: 95 },
    { name: 'Next.js', icon: '▲', level: 85 },
    { name: 'Node.js', icon: '🟢', level: 90 },
    { name: 'Express', icon: '🚂', level: 85 },
    { name: 'Python', icon: '🐍', level: 80 },
    { name: 'PostgreSQL', icon: '🐘', level: 85 },
    { name: 'MongoDB', icon: '🍃', level: 80 },
    { name: 'Tailwind CSS', icon: '🌬️', level: 95 },
    { name: 'Git', icon: '🔀', level: 90 },
    { name: 'Docker', icon: '🐳', level: 75 },
    { name: 'AWS', icon: '☁️', level: 70 },
    { name: 'GraphQL', icon: '📊', level: 80 },
    { name: 'Redis', icon: '🔴', level: 75 },
  ];

  const skillCategories = {
    'Frontend': skills.slice(0, 4),
    'Backend': skills.slice(4, 8),
    'Tools & Others': skills.slice(8),
  };

  return (
    <div className="max-w-4xl">
      <h1 className="text-2xl font-bold mb-6 text-[#569cd6]">Skills</h1>
      
      {Object.entries(skillCategories).map(([category, categorySkills]) => (
        <div key={category} className="mb-8">
          <h2 className="text-lg font-semibold mb-4 text-[#9cdcfe]">{category}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {categorySkills.map((skill) => (
              <div
                key={skill.name}
                className="bg-[#252526] border border-[#3e3e42] rounded-lg p-4"
              >
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-2">{skill.icon}</span>
                  <span className="font-semibold text-[#d4d4d4]">{skill.name}</span>
                </div>
                <div className="w-full bg-[#3e3e42] rounded-full h-2">
                  <div
                    className="bg-[#0e639c] h-2 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <span className="text-xs text-[#969696] mt-1">{skill.level}%</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
