import React from 'react';

const StatusBar: React.FC = () => {
  return (
    <div className="bg-[#0078d4] text-white px-4 py-1 flex items-center justify-between text-sm">
      <div className="flex items-center space-x-4">
        <div className="flex items-center">
          <span>✓</span>
          <span className="ml-1">Prettier</span>
        </div>
        <div className="flex items-center">
          <span>⚡</span>
          <span className="ml-1">main</span>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <span>Ln 1, Col 1</span>
        <span>Spaces: 2</span>
        <span>UTF-8</span>
        <div className="flex items-center">
          <span>⚠</span>
          <span className="ml-1">0</span>
        </div>
      </div>
      
      <div>
        <span>VS Code Portfolio - React + Tailwind</span>
      </div>
    </div>
  );
};

export default StatusBar;
