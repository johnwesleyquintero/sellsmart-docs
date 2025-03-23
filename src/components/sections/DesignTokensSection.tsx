
import React from 'react';
import ColorToken from '@/components/ColorToken';
import CodeBlock from '@/components/CodeBlock';

const DesignTokensSection = () => {
  return (
    <section id="design-tokens" className="mb-16">
      <div className="flex items-center space-x-2 mb-8">
        <div className="w-10 h-10 rounded-md bg-brand-500/10 flex items-center justify-center">
          <div className="w-5 h-5 rounded-full bg-brand-500"></div>
        </div>
        <h2 className="text-3xl font-bold">Design Tokens</h2>
      </div>
      
      <p className="text-white/80 mb-8">
        Design tokens are the visual design atoms of the design system — specifically, they are named entities that store visual design attributes. We use design tokens in place of hard-coded values to ensure flexibility and consistency across all our platforms.
      </p>
      
      {/* Color Scheme */}
      <section id="color-scheme" className="mb-12">
        <h3 className="text-2xl font-bold mb-4">Color Scheme</h3>
        <p className="text-white/80 mb-6">
          Our color palette consists of primary blues, accent teals, neutral grays, and functional colors for error, warning, and success states. All colors meet WCAG 2.1 AA standards for accessibility.
        </p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
          <ColorToken name="Primary Blue" value="#2D5BFF" />
          <ColorToken name="Secondary Teal" value="#00C9A7" />
          <ColorToken name="Neutral Dark" value="#1A1D26" />
          <ColorToken name="Surface" value="#2D3250" />
          <ColorToken name="Error" value="#FF4D4D" />
          <ColorToken name="Success" value="#00CC88" />
        </div>
        
        <h4 className="text-xl font-semibold mb-3">Primary Shades</h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-8">
          <ColorToken name="Brand 300" value="#748BFF" />
          <ColorToken name="Brand 400" value="#506DFF" />
          <ColorToken name="Brand 500" value="#2D5BFF" />
          <ColorToken name="Brand 600" value="#0039FF" />
          <ColorToken name="Brand 700" value="#002ED4" />
        </div>
        
        <h4 className="text-xl font-semibold mb-3">Secondary Shades</h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-8">
          <ColorToken name="Accent 300" value="#4DFFDC" textColor="black" />
          <ColorToken name="Accent 400" value="#1AFFD2" textColor="black" />
          <ColorToken name="Accent 500" value="#00E6C0" />
          <ColorToken name="Accent 600" value="#00C9A7" />
          <ColorToken name="Accent 700" value="#009D82" />
        </div>
        
        <CodeBlock 
          filename="colors.ts"
          code={`// Primary Blue
export const brandBlue = "#2D5BFF";

// Secondary Teal
export const accentTeal = "#00C9A7";

// Neutral Dark
export const neutralDark = "#1A1D26";

// Surface
export const surface = "#2D3250";

// Functional Colors
export const error = "#FF4D4D";
export const success = "#00CC88";`}
          language="typescript" 
        />
      </section>
      
      {/* Typography */}
      <section id="typography" className="mb-12">
        <h3 className="text-2xl font-bold mb-4">Typography</h3>
        <p className="text-white/80 mb-6">
          Our typography system uses Inter as the primary font, with a size scale based on the Perfect Fourth ratio (1.333). This creates a clear visual hierarchy while maintaining readability across all screen sizes.
        </p>
        
        <div className="space-y-6 mb-8">
          <div className="p-4 border border-neutral-700 rounded-lg bg-neutral-800/40">
            <div className="text-sm text-white/60 mb-1">Heading 1 (2.369rem)</div>
            <h1 className="h1">Design with precision</h1>
          </div>
          
          <div className="p-4 border border-neutral-700 rounded-lg bg-neutral-800/40">
            <div className="text-sm text-white/60 mb-1">Heading 2 (1.777rem)</div>
            <h2 className="h2">Design with precision</h2>
          </div>
          
          <div className="p-4 border border-neutral-700 rounded-lg bg-neutral-800/40">
            <div className="text-sm text-white/60 mb-1">Heading 3 (1.333rem)</div>
            <h3 className="h3">Design with precision</h3>
          </div>
          
          <div className="p-4 border border-neutral-700 rounded-lg bg-neutral-800/40">
            <div className="text-sm text-white/60 mb-1">Body Text (1rem)</div>
            <p>The quick brown fox jumps over the lazy dog. This sentence contains all the letters in the English alphabet.</p>
          </div>
          
          <div className="p-4 border border-neutral-700 rounded-lg bg-neutral-800/40">
            <div className="text-sm text-white/60 mb-1">Code (0.875rem)</div>
            <code>const designSystem = "SellSmart";</code>
          </div>
        </div>
        
        <CodeBlock 
          filename="typography.css"
          code={`/* Typography scale based on perfect fourth (1.333) */
h1, .h1 {
  font-size: 2.369rem;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

h2, .h2 {
  font-size: 1.777rem;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.01em;
}

h3, .h3 {
  font-size: 1.333rem;
  font-weight: 600;
  line-height: 1.3;
}

body {
  font-family: "Inter", system-ui, sans-serif;
  font-size: 1rem;
  line-height: 1.5;
}

code {
  font-family: "Lato", monospace;
  font-size: 0.875rem;
}`}
          language="css" 
        />
      </section>
    </section>
  );
};

export default DesignTokensSection;
