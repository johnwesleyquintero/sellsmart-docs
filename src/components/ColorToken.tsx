
import React from 'react';

interface ColorTokenProps {
  name: string;
  value: string;
  textColor?: string;
}

const ColorToken: React.FC<ColorTokenProps> = ({ 
  name, 
  value, 
  textColor = 'white' 
}) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg animate-scale-in">
      <div 
        className="h-24 w-full flex items-end p-3" 
        style={{ backgroundColor: value }}
      >
        <span className={`text-xs font-mono ${textColor === 'white' ? 'text-white/90' : 'text-neutral-900'}`}>
          {value}
        </span>
      </div>
      <div className="bg-neutral-800 p-3">
        <span className="text-sm font-medium">{name}</span>
      </div>
    </div>
  );
};

export default ColorToken;
