
import React from 'react';

const DocumentationSiteSection = () => {
  return (
    <section id="documentation-site" className="mb-16">
      <div className="flex items-center space-x-2 mb-8">
        <div className="w-10 h-10 rounded-md bg-brand-500/10 flex items-center justify-center">
          <div className="w-5 h-5 border-2 border-brand-500 rounded-full"></div>
        </div>
        <h2 className="text-3xl font-bold">Documentation Site</h2>
      </div>
      
      <p className="text-white/80 mb-8">
        This documentation site follows our design principles and showcase our components in a real-world context. Here are the key features of our documentation site implementation.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="p-5 border border-neutral-700 rounded-lg bg-neutral-800/40">
          <h4 className="text-lg font-semibold mb-2 flex items-center">
            <div className="w-3 h-3 rounded-full bg-brand-500 mr-2"></div>
            Dark Theme First
          </h4>
          <p className="text-sm text-white/70">
            Our documentation is built with a dark theme first approach, optimized for reduced eye strain during extended use.
          </p>
        </div>
        
        <div className="p-5 border border-neutral-700 rounded-lg bg-neutral-800/40">
          <h4 className="text-lg font-semibold mb-2 flex items-center">
            <div className="w-3 h-3 rounded-full bg-accent-500 mr-2"></div>
            Interactive Playground
          </h4>
          <p className="text-sm text-white/70">
            The component playground allows developers to see components in action and view the code used to create them.
          </p>
        </div>
        
        <div className="p-5 border border-neutral-700 rounded-lg bg-neutral-800/40">
          <h4 className="text-lg font-semibold mb-2 flex items-center">
            <div className="w-3 h-3 rounded-full bg-brand-500 mr-2"></div>
            Versioned Assets
          </h4>
          <p className="text-sm text-white/70">
            Design assets are versioned, allowing teams to access both current and previous versions of the design system.
          </p>
        </div>
        
        <div className="p-5 border border-neutral-700 rounded-lg bg-neutral-800/40">
          <h4 className="text-lg font-semibold mb-2 flex items-center">
            <div className="w-3 h-3 rounded-full bg-accent-500 mr-2"></div>
            Accessibility
          </h4>
          <p className="text-sm text-white/70">
            All components are designed with accessibility in mind, ensuring they meet WCAG 2.1 AA standards.
          </p>
        </div>
      </div>
      
      <p className="text-white/80 mb-4">
        To ensure consistency and accessibility, our documentation site uses the same components that are used in our products. This helps designers and developers understand how components behave in a real-world context.
      </p>
    </section>
  );
};

export default DocumentationSiteSection;
