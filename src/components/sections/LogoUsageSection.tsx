
import React from 'react';

const LogoUsageSection = () => {
  return (
    <section id="logo-usage" className="mb-16">
      <div className="flex items-center space-x-2 mb-8">
        <div className="w-10 h-10 rounded-md bg-brand-500/10 flex items-center justify-center">
          <div className="w-5 h-5 bg-brand-500 rounded-sm"></div>
        </div>
        <h2 className="text-3xl font-bold">Logo Usage</h2>
      </div>
      
      <p className="text-white/80 mb-6">
        Our logo represents our brand identity and should be used consistently across all platforms. Follow these guidelines to ensure proper implementation.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="p-6 border border-neutral-700 rounded-lg bg-neutral-800/40">
          <img src="/logo.svg" alt="SellSmart logo" className="h-16 w-16" />
          <h4 className="text-lg font-semibold mb-2">Primary Logo</h4>
          <p className="text-sm text-white/70">
            Use on white or light backgrounds. Maintain proper clearance space around the logo.
          </p>
        </div>
        
        <div className="p-6 border border-neutral-700 rounded-lg bg-neutral-800/40">
          <img src="/logo.svg" alt="SellSmart logo" className="h-16 w-16" />
          <h4 className="text-lg font-semibold mb-2">Monochrome Logo</h4>
          <p className="text-sm text-white/70">
            Use on colored backgrounds. White version for dark backgrounds, dark version for light backgrounds.
          </p>
        </div>
      </div>
      
      <ul className="list-disc list-inside text-white/80 mb-8 ml-4 space-y-2">
        <li>Always maintain 24px clearance space around the logo</li>
        <li>Use the monochrome version on colored backgrounds</li>
        <li>Minimum size: 32px for digital applications, 0.5" for print</li>
        <li>Do not stretch, distort, or alter the logo's proportions</li>
        <li>Do not change the logo colors outside of the approved variations</li>
        <li>Do not contain the logo within shapes that suggest it is part of the logo</li>
        <li>Avoid backgrounds that obstruct visibility</li>
      </ul>
    </section>
  );
};

export default LogoUsageSection;
