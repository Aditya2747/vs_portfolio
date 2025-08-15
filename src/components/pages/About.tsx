import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl">
      <h1 className="text-2xl font-bold mb-4 text-[#569cd6]">About Me</h1>
      
      <div className="mb-6">
        <span className="text-[#608b4e]">// Personal Information</span>
      </div>
      
      <div className="mb-4">
        <span className="text-[#9cdcfe]">const</span> 
        <span className="text-[#9cdcfe]"> aboutMe</span>
        <span className="text-[#d4d4d4]"> = </span>
        <span className="text-[#ce9178]">{`{`}</span>
      </div>
      
      <div className="ml-8 mb-2">
        <span className="text-[#9cdcfe]">name:</span> 
        <span className="text-[#ce9178]"> "Aditya Kumar"</span>
        <span className="text-[#d4d4d4]">,</span>
      </div>
      
      <div className="ml-8 mb-2">
        <span className="text-[#9cdcfe]">role:</span> 
        <span className="text-[#ce9178]"> "Full Stack Developer"</span>
        <span className="text-[#d4d4d4]">,</span>
      </div>
      
      <div className="ml-8 mb-2">
        <span className="text-[#9cdcfe]">location:</span> 
        <span className="text-[#ce9178]"> "San Francisco, CA"</span>
        <span className="text-[#d4d4d4]">,</span>
      </div>
      
      <div className="ml-8 mb-2">
        <span className="text-[#9cdcfe]">email:</span> 
        <span className="text-[#ce9178]"> "aditya@example.com"</span>
        <span className="text-[#d4d4d4]">,</span>
      </div>
      
      <div className="ml-8 mb-2">
        <span className="text-[#9cdcfe]">bio:</span> 
        <span className="text-[#ce9178]"> "Passionate developer with expertise in React, Node.js, and cloud technologies. I love building scalable web applications and solving complex problems."</span>
      </div>
      
      <div className="mb-4">
        <span className="text-[#ce9178]">{`};`}</span>
      </div>
      
      <div className="mt-8">
        <span className="text-[#608b4e]">// Technologies I work with</span>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <span className="text-[#569cd6]">Frontend:</span>
          <span className="text-[#d4d4d4]"> React, TypeScript, Tailwind CSS, Next.js</span>
        </div>
        <div>
          <span className="text-[#569cd6]">Backend:</span>
          <span className="text-[#d4d4d4]"> Node.js, Express, Python, PostgreSQL</span>
        </div>
        <div>
          <span className="text-[#569cd6]">Tools:</span>
          <span className="text-[#d4d4d4]"> Git, Docker, AWS, Vercel</span>
        </div>
        <div>
          <span className="text-[#569cd6]">Other:</span>
          <span className="text-[#d4d4d4]"> GraphQL, Redis, MongoDB</span>
        </div>
      </div>
    </div>
  );
};

export default About;
