import React, { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.body.classList.toggle('dark', !isDark);
  };

  return (
    <header className="bg-[#2d2d30] text-white p-4 border-b border-[#3e3e42]">
      <nav className="flex justify-between items-center">
        <div className="text-lg font-bold text-[#cccccc]">VS Code Portfolio</div>
        <div className="flex items-center space-x-4 text-sm">
          <Link to="/" className="text-[#9cdcfe]">About</Link>
          <Link to="/projects" className="text-[#9cdcfe]">Projects</Link>
          <Link to="/skills" className="text-[#9cdcfe]">Skills</Link>
          <Link to="/contact" className="text-[#9cdcfe]">Contact</Link>
          <ThemeToggle toggleTheme={toggleTheme} isDark={isDark} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
