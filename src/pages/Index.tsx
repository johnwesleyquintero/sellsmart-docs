
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/sections/HeroSection';
import IntroductionSection from '@/components/sections/IntroductionSection';
import DesignTokensSection from '@/components/sections/DesignTokensSection';
import LogoUsageSection from '@/components/sections/LogoUsageSection';
import UIComponentsSection from '@/components/sections/UIComponentsSection';
import DocumentationSiteSection from '@/components/sections/DocumentationSiteSection';
import OperationsGuidesSection from '@/components/sections/OperationsGuidesSection';
import AgencyFrameworkSection from '@/components/sections/AgencyFrameworkSection';

const Index = () => {
  // Smooth scrolling effect for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && link.hash && link.hash.startsWith('#')) {
        e.preventDefault();
        const id = link.hash.slice(1);
        const element = document.getElementById(id);
        
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          
          // Update URL without scroll
          window.history.pushState(null, '', link.hash);
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-16">
        {/* Hero section */}
        <HeroSection />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row gap-10">
            <Sidebar className="animate-slide-in" />
            
            <div className="flex-1 max-w-3xl">
              {/* Introduction */}
              <IntroductionSection />
              
              {/* Design Tokens */}
              <DesignTokensSection />
              
              {/* Logo Usage */}
              <LogoUsageSection />
              
              {/* UI Components */}
              <UIComponentsSection />
              
              {/* Documentation Site */}
              <DocumentationSiteSection />

              {/* Operations Guides */}
              <OperationsGuidesSection />

              {/* Agency Framework */}
              <AgencyFrameworkSection />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
