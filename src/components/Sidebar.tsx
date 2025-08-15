import React from 'react';

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, setActiveSection }) => {
  console.log('setActiveSection prop received:', setActiveSection); // Log the received prop

  const sections = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <aside className="w-64 bg-[#252526] text-white h-full border-r border-[#3e3e42]">
      <div className="p-4">
        <h2 className="text-lg font-bold text-[#cccccc] mb-4">Explorer</h2>
        <ul className="space-y-1">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => {
                  console.log(`Button clicked for section: ${section.id}`); // Log the button click
                  setActiveSection(section.id);
                }}
                className={`w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                  activeSection === section.id
                    ? 'bg-[#094771] text-white'
                    : 'text-[#cccccc] hover:bg-[#2a2d2e]'
                }`}
              >
                {section.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
