
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled ? "bg-neutral-900/80 backdrop-blur-lg border-b border-neutral-800" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-md bg-brand-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">SS</span>
              </div>
              <span className="text-lg font-semibold text-white">SellSmart</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium text-white/90 hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/" className="text-sm font-medium text-white/90 hover:text-white transition-colors">
              Design Tokens
            </Link>
            <Link to="/" className="text-sm font-medium text-white/90 hover:text-white transition-colors">
              Components
            </Link>
            <Link to="/" className="text-sm font-medium text-white/90 hover:text-white transition-colors">
              Guidelines
            </Link>
            <button className="text-sm font-medium text-white/90 hover:text-white transition-colors flex items-center">
              <Search className="w-4 h-4 mr-1" />
              <span>Search</span>
            </button>
          </nav>
          
          <div className="flex md:hidden">
            <button 
              onClick={toggleMenu} 
              className="text-white hover:text-brand-300 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={cn(
        "md:hidden fixed inset-0 bg-neutral-900/95 backdrop-blur-lg z-40 transition-all duration-300 transform",
        isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      )}>
        <div className="pt-20 px-4 pb-8 h-full flex flex-col">
          <nav className="flex flex-col space-y-6">
            <Link 
              to="/" 
              className="text-xl font-medium text-white hover:text-brand-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/" 
              className="text-xl font-medium text-white hover:text-brand-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Design Tokens
            </Link>
            <Link 
              to="/" 
              className="text-xl font-medium text-white hover:text-brand-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Components
            </Link>
            <Link 
              to="/" 
              className="text-xl font-medium text-white hover:text-brand-300 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Guidelines
            </Link>
          </nav>
          
          <div className="mt-auto">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search documentation..." 
                className="w-full bg-neutral-800 border border-neutral-700 rounded-md py-2 px-4 text-white placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-brand-500"
              />
              <Search className="absolute right-3 top-2.5 text-neutral-400 w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
