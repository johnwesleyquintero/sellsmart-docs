
import React from 'react';
import { cn } from '@/lib/utils';
import { ExternalLink } from 'lucide-react';

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  return (
    <header className={cn("fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-neutral-800", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img src="/logo.svg" alt="SellSmart logo" className="h-8 w-8 rounded-md" />
            </div>
            <div className="ml-4">
              <span className="text-white font-medium text-lg">SellSmart Docs</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <a 
              href="https://sellsmart-hub.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center text-white/80 hover:text-white text-sm transition-colors"
            >
              <span>Main Web App</span>
              <ExternalLink className="ml-1 h-3 w-3" />
            </a>
            <a href="#introduction" className="text-white/80 hover:text-white text-sm transition-colors">Documentation</a>
            <a href="https://github.com/johnwesleyquintero/sellsmart-docs" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white text-sm transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
