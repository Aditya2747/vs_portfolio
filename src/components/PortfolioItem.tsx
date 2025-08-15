import React from 'react';

interface PortfolioItemProps {
  title: string;
  description: string;
  image: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ title, description, image }) => {
  return (
    <div className="bg-[#252526] border border-[#3e3e42] rounded-lg p-4 hover:border-[#0078d4] transition-colors">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-semibold text-[#9cdcfe] mb-2">{title}</h3>
      <p className="text-[#d4d4d4] text-sm">{description}</p>
    </div>
  );
};

export default PortfolioItem;
