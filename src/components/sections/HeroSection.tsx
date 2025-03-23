
import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-neutral-900 border-b border-neutral-800">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 right-0 h-[400px] bg-gradient-to-br from-brand-500/20 via-accent-600/10 to-transparent z-0"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZ2LTRoLTJ2NGgyek01MCAxMnYyMkg0OFYxMmgyem0wIDI0djEwSDQ4VjM2aDJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30 z-0"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-200 text-xs font-medium mb-6 animate-fade-in">
            Design System & Documentation
          </div>
          <h1 className="text-balance text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight animate-fade-in">
            SellSmart Docs <span className="text-gradient">Design % Documentation</span>
          </h1>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto text-balance animate-fade-in">
            A comprehensive guide to our design tokens, components, and principles for creating consistent and beautiful user interfaces and sellsmart's framework documentation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <a href="#design-tokens" className="px-5 py-2.5 rounded-md bg-brand-500 hover:bg-brand-400 text-white font-medium transition-colors shadow-lg shadow-brand-500/25">
              Explore Design Tokens
            </a>
            <a href="#ui-components" className="px-5 py-2.5 rounded-md bg-neutral-800 hover:bg-neutral-700 text-white font-medium transition-colors border border-neutral-700">
              View Components
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
