import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md hover:bg-[#37373d] transition-colors"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun size={18} className="text-[#ffbd2e]" /> : <Moon size={18} className="text-[#569cd6]" />}
    </button>
  );
};

export default ThemeToggle;
