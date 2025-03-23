
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-neutral-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-md bg-brand-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">SS</span>
              </div>
              <span className="text-lg font-semibold text-white">SellSmart</span>
            </Link>
            <p className="mt-4 text-sm text-white/70 max-w-md">
              SellSmart Design System provides consistent, accessible, and beautiful components 
              for building modern applications.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/" className="text-sm text-white/70 hover:text-white transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="/" className="text-sm text-white/70 hover:text-white transition-colors">
                  Components
                </Link>
              </li>
              <li>
                <Link to="/" className="text-sm text-white/70 hover:text-white transition-colors">
                  Design Tokens
                </Link>
              </li>
              <li>
                <Link to="/" className="text-sm text-white/70 hover:text-white transition-colors">
                  UI Kit
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Support</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/" className="text-sm text-white/70 hover:text-white transition-colors">
                  GitHub
                </Link>
              </li>
              <li>
                <Link to="/" className="text-sm text-white/70 hover:text-white transition-colors">
                  Slack Channel
                </Link>
              </li>
              <li>
                <Link to="/" className="text-sm text-white/70 hover:text-white transition-colors">
                  Contact Team
                </Link>
              </li>
              <li>
                <Link to="/" className="text-sm text-white/70 hover:text-white transition-colors">
                  Updates
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white/50">
            © {currentYear} SellSmart. All rights reserved.
          </p>
          <p className="text-sm text-white/50 mt-4 md:mt-0">
            Updated: {new Date().toISOString().split('T')[0]}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
