
import React from 'react';

const IntroductionSection = () => {
  return (
    <section id="introduction" className="mb-16 animate-fade-in">
      <h2 className="text-3xl font-bold mb-6">Introduction</h2>
      <p className="text-white/80 mb-4">
        The SellSmart Design System is a collection of reusable components, guidelines, and design tokens that ensure consistency and accessibility across all SellSmart products. This documentation serves as the single source of truth for designers and developers working on SellSmart applications.
      </p>
      <p className="text-white/80 mb-4">
        By following these guidelines, we can create cohesive user experiences that align with our brand identity while improving development efficiency and product quality.
      </p>
      <div className="mt-8 p-5 bg-neutral-800/40 rounded-lg border border-neutral-700">
        <h4 className="font-medium mb-2 flex items-center">
          <div className="w-4 h-4 rounded-full bg-accent-500 mr-2"></div>
          Getting Started
        </h4>
        <p className="text-sm text-white/70">
          Begin by exploring our design tokens to understand the foundational elements of our design system. Then, check out the component documentation for implementation details.
        </p>
      </div>
    </section>
  );
};

export default IntroductionSection;
