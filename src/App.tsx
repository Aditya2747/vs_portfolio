import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import StatusBar from './components/StatusBar';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Skills from './components/pages/Skills';
import Contact from './components/pages/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  const handleSetActiveSection = (section: string) => {
    console.log(`Setting active section to: ${section}`); // Log the section being set
    setActiveSection(section);
  };

  const renderSection = () => {
    console.log(`Rendering section: ${activeSection}`); // Log the section being rendered
    switch (activeSection) {
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'skills':
        return <Skills />;
      case 'contact':
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div className="h-screen flex flex-col bg-[#1e1e1e] text-white">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar activeSection={activeSection} setActiveSection={handleSetActiveSection} />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="flex-1 overflow-y-auto p-6">
            {renderSection()}
          </main>
          <StatusBar />
        </div>
      </div>
    </div>
  );
}

export default App;
