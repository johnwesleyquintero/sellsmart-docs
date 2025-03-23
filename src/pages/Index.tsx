
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';
import ColorToken from '@/components/ColorToken';
import ComponentPreview from '@/components/ComponentPreview';
import CodeBlock from '@/components/CodeBlock';
import { cn } from '@/lib/utils';

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
        <section className="relative overflow-hidden bg-neutral-900 border-b border-neutral-800">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 left-0 right-0 h-[400px] bg-gradient-to-br from-brand-500/20 via-accent-600/10 to-transparent z-0"></div>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZ2LTRoLTJ2NGgyek01MCAxMnYyMkg0OFYxMmgyem0wIDI0djEwSDQ4VjM2aDJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30 z-0"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-block px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-200 text-xs font-medium mb-6 animate-fade-in">
                Design System Documentation
              </div>
              <h1 className="text-balance text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight animate-fade-in">
                SellSmart Hub <span className="text-gradient">Design System</span>
              </h1>
              <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto text-balance animate-fade-in">
                A comprehensive guide to our design tokens, components, and principles for creating consistent and beautiful user interfaces.
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
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row gap-10">
            <Sidebar className="animate-slide-in" />
            
            <div className="flex-1 max-w-3xl">
              {/* Introduction */}
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
              
              {/* Design Tokens */}
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
              
              {/* Logo Usage */}
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
                    <div className="mb-4 h-16 w-16 bg-brand-500 rounded-md flex items-center justify-center">
                      <span className="text-white font-bold text-xl">SS</span>
                    </div>
                    <h4 className="text-lg font-semibold mb-2">Primary Logo</h4>
                    <p className="text-sm text-white/70">
                      Use on white or light backgrounds. Maintain proper clearance space around the logo.
                    </p>
                  </div>
                  
                  <div className="p-6 border border-neutral-700 rounded-lg bg-neutral-800/40">
                    <div className="mb-4 h-16 w-16 bg-white rounded-md flex items-center justify-center">
                      <span className="text-brand-500 font-bold text-xl">SS</span>
                    </div>
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
                </ul>
              </section>
              
              {/* UI Components */}
              <section id="ui-components" className="mb-16">
                <div className="flex items-center space-x-2 mb-8">
                  <div className="w-10 h-10 rounded-md bg-brand-500/10 flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-brand-500 rounded"></div>
                  </div>
                  <h2 className="text-3xl font-bold">UI Components</h2>
                </div>
                
                <p className="text-white/80 mb-8">
                  Our component library provides consistent UI elements that follow our design principles. Each component is designed to be accessible, responsive, and consistent with our visual language.
                </p>
                
                {/* Buttons Component */}
                <section id="buttons" className="mb-12">
                  <h3 className="text-2xl font-bold mb-4">Buttons</h3>
                  <p className="text-white/80 mb-6">
                    Buttons communicate actions that users can take. They are typically placed throughout your UI, in dialogs, forms, cards, and toolbars.
                  </p>
                  
                  <ComponentPreview 
                    title="Primary Button"
                    description="Use for primary actions that are the main goal of a page."
                    code={`<button className="px-4 py-2 bg-brand-500 hover:bg-brand-400 text-white rounded-md transition-colors">
  Primary Button
</button>`}
                  >
                    <div className="flex flex-wrap gap-4 justify-center">
                      <button className="px-4 py-2 bg-brand-500 hover:bg-brand-400 text-white rounded-md transition-colors">
                        Primary Button
                      </button>
                    </div>
                  </ComponentPreview>
                  
                  <ComponentPreview 
                    title="Secondary Button"
                    description="Use for secondary actions alongside a primary button."
                    code={`<button className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-md border border-neutral-700 transition-colors">
  Secondary Button
</button>`}
                  >
                    <div className="flex flex-wrap gap-4 justify-center">
                      <button className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-md border border-neutral-700 transition-colors">
                        Secondary Button
                      </button>
                    </div>
                  </ComponentPreview>
                  
                  <ComponentPreview 
                    title="Button Variants"
                    description="Different button styles for various use cases."
                    code={`// Primary Button
<button className="px-4 py-2 bg-brand-500 hover:bg-brand-400 text-white rounded-md transition-colors">
  Primary
</button>

// Secondary Button
<button className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-md border border-neutral-700 transition-colors">
  Secondary
</button>

// Accent Button
<button className="px-4 py-2 bg-accent-600 hover:bg-accent-500 text-white rounded-md transition-colors">
  Accent
</button>

// Outline Button
<button className="px-4 py-2 bg-transparent hover:bg-brand-500/10 text-brand-400 border border-brand-500 rounded-md transition-colors">
  Outline
</button>

// Ghost Button
<button className="px-4 py-2 bg-transparent hover:bg-white/5 text-white/80 hover:text-white rounded-md transition-colors">
  Ghost
</button>`}
                  >
                    <div className="flex flex-wrap gap-4 justify-center">
                      <button className="px-4 py-2 bg-brand-500 hover:bg-brand-400 text-white rounded-md transition-colors">
                        Primary
                      </button>
                      <button className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-md border border-neutral-700 transition-colors">
                        Secondary
                      </button>
                      <button className="px-4 py-2 bg-accent-600 hover:bg-accent-500 text-white rounded-md transition-colors">
                        Accent
                      </button>
                      <button className="px-4 py-2 bg-transparent hover:bg-brand-500/10 text-brand-400 border border-brand-500 rounded-md transition-colors">
                        Outline
                      </button>
                      <button className="px-4 py-2 bg-transparent hover:bg-white/5 text-white/80 hover:text-white rounded-md transition-colors">
                        Ghost
                      </button>
                    </div>
                  </ComponentPreview>
                </section>
                
                {/* Cards Component */}
                <section id="cards" className="mb-12">
                  <h3 className="text-2xl font-bold mb-4">Cards</h3>
                  <p className="text-white/80 mb-6">
                    Cards contain content and actions about a single subject. They're used to group related information and actions.
                  </p>
                  
                  <ComponentPreview 
                    title="Basic Card"
                    description="Standard card with title, content, and action."
                    code={`<div className="bg-neutral-800 border border-neutral-700 rounded-lg overflow-hidden shadow-card">
  <div className="p-5">
    <h3 className="text-lg font-semibold mb-2">Card Title</h3>
    <p className="text-white/70 text-sm">
      This is a basic card component from the SellSmart Design System.
      Cards can contain various elements and actions.
    </p>
    <div className="mt-4 pt-4 border-t border-neutral-700">
      <button className="px-4 py-1.5 bg-brand-500 hover:bg-brand-400 text-white text-sm rounded transition-colors">
        Action
      </button>
    </div>
  </div>
</div>`}
                  >
                    <div className="max-w-sm mx-auto">
                      <div className="bg-neutral-800 border border-neutral-700 rounded-lg overflow-hidden shadow-card">
                        <div className="p-5">
                          <h3 className="text-lg font-semibold mb-2">Card Title</h3>
                          <p className="text-white/70 text-sm">
                            This is a basic card component from the SellSmart Design System.
                            Cards can contain various elements and actions.
                          </p>
                          <div className="mt-4 pt-4 border-t border-neutral-700">
                            <button className="px-4 py-1.5 bg-brand-500 hover:bg-brand-400 text-white text-sm rounded transition-colors">
                              Action
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ComponentPreview>
                  
                  <ComponentPreview 
                    title="Media Card"
                    description="Card with image, title, and content."
                    code={`<div className="bg-neutral-800 border border-neutral-700 rounded-lg overflow-hidden shadow-card">
  <div className="h-48 bg-gradient-to-r from-brand-500 to-accent-600"></div>
  <div className="p-5">
    <h3 className="text-lg font-semibold mb-2">Media Card</h3>
    <p className="text-white/70 text-sm">
      This card includes a media area at the top, which can be used for images
      or other media content.
    </p>
    <div className="mt-4 flex justify-between">
      <span className="text-xs text-white/50">Last updated: Today</span>
      <button className="text-brand-400 hover:text-brand-300 text-sm transition-colors">
        Learn more
      </button>
    </div>
  </div>
</div>`}
                  >
                    <div className="max-w-sm mx-auto">
                      <div className="bg-neutral-800 border border-neutral-700 rounded-lg overflow-hidden shadow-card">
                        <div className="h-48 bg-gradient-to-r from-brand-500 to-accent-600"></div>
                        <div className="p-5">
                          <h3 className="text-lg font-semibold mb-2">Media Card</h3>
                          <p className="text-white/70 text-sm">
                            This card includes a media area at the top, which can be used for images
                            or other media content.
                          </p>
                          <div className="mt-4 flex justify-between">
                            <span className="text-xs text-white/50">Last updated: Today</span>
                            <button className="text-brand-400 hover:text-brand-300 text-sm transition-colors">
                              Learn more
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ComponentPreview>
                </section>
                
                {/* Forms Component */}
                <section id="forms" className="mb-12">
                  <h3 className="text-2xl font-bold mb-4">Forms</h3>
                  <p className="text-white/80 mb-6">
                    Form components allow users to input data. We provide various input types with consistent styling and behavior.
                  </p>
                  
                  <ComponentPreview 
                    title="Text Input"
                    description="Standard text input with label and placeholder."
                    code={`<div className="space-y-2">
  <label htmlFor="name" className="block text-sm font-medium">
    Name
  </label>
  <input
    id="name"
    type="text"
    placeholder="Enter your name"
    className="w-full px-3 py-2 bg-neutral-900 border border-neutral-700 rounded-md focus:outline-none focus:ring-1 focus:ring-brand-500 focus:border-brand-500 text-white placeholder-white/50"
  />
</div>`}
                  >
                    <div className="max-w-md mx-auto w-full">
                      <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-medium">
                          Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          placeholder="Enter your name"
                          className="w-full px-3 py-2 bg-neutral-900 border border-neutral-700 rounded-md focus:outline-none focus:ring-1 focus:ring-brand-500 focus:border-brand-500 text-white placeholder-white/50"
                        />
                      </div>
                    </div>
                  </ComponentPreview>
                  
                  <ComponentPreview 
                    title="Form Group"
                    description="A simple form with multiple inputs and a submit button."
                    code={`<form className="space-y-4">
  <div className="space-y-2">
    <label htmlFor="email" className="block text-sm font-medium">
      Email
    </label>
    <input
      id="email"
      type="email"
      placeholder="you@example.com"
      className="w-full px-3 py-2 bg-neutral-900 border border-neutral-700 rounded-md focus:outline-none focus:ring-1 focus:ring-brand-500 focus:border-brand-500 text-white placeholder-white/50"
    />
  </div>
  
  <div className="space-y-2">
    <label htmlFor="password" className="block text-sm font-medium">
      Password
    </label>
    <input
      id="password"
      type="password"
      placeholder="••••••••"
      className="w-full px-3 py-2 bg-neutral-900 border border-neutral-700 rounded-md focus:outline-none focus:ring-1 focus:ring-brand-500 focus:border-brand-500 text-white placeholder-white/50"
    />
  </div>
  
  <div className="flex items-center">
    <input
      id="remember"
      type="checkbox"
      className="h-4 w-4 border border-neutral-700 rounded bg-neutral-900 focus:ring-brand-500 focus:ring-offset-neutral-900"
    />
    <label htmlFor="remember" className="ml-2 block text-sm">
      Remember me
    </label>
  </div>
  
  <button
    type="submit"
    className="w-full px-4 py-2 bg-brand-500 hover:bg-brand-400 text-white rounded-md transition-colors"
  >
    Sign in
  </button>
</form>`}
                  >
                    <div className="max-w-md mx-auto w-full">
                      <form className="space-y-4">
                        <div className="space-y-2">
                          <label htmlFor="email" className="block text-sm font-medium">
                            Email
                          </label>
                          <input
                            id="email"
                            type="email"
                            placeholder="you@example.com"
                            className="w-full px-3 py-2 bg-neutral-900 border border-neutral-700 rounded-md focus:outline-none focus:ring-1 focus:ring-brand-500 focus:border-brand-500 text-white placeholder-white/50"
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <label htmlFor="password" className="block text-sm font-medium">
                            Password
                          </label>
                          <input
                            id="password"
                            type="password"
                            placeholder="••••••••"
                            className="w-full px-3 py-2 bg-neutral-900 border border-neutral-700 rounded-md focus:outline-none focus:ring-1 focus:ring-brand-500 focus:border-brand-500 text-white placeholder-white/50"
                          />
                        </div>
                        
                        <div className="flex items-center">
                          <input
                            id="remember"
                            type="checkbox"
                            className="h-4 w-4 border border-neutral-700 rounded bg-neutral-900 focus:ring-brand-500 focus:ring-offset-neutral-900"
                          />
                          <label htmlFor="remember" className="ml-2 block text-sm">
                            Remember me
                          </label>
                        </div>
                        
                        <button
                          type="button"
                          className="w-full px-4 py-2 bg-brand-500 hover:bg-brand-400 text-white rounded-md transition-colors"
                        >
                          Sign in
                        </button>
                      </form>
                    </div>
                  </ComponentPreview>
                </section>
              </section>
              
              {/* Documentation Site */}
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
                      All components meet WCAG 2.1 AA standards with a minimum contrast ratio of 4.5:1 for text elements.
                    </p>
                  </div>
                  
                  <div className="p-5 border border-neutral-700 rounded-lg bg-neutral-800/40">
                    <h4 className="text-lg font-semibold mb-2 flex items-center">
                      <div className="w-3 h-3 rounded-full bg-brand-500 mr-2"></div>
                      Responsive Layout
                    </h4>
                    <p className="text-sm text-white/70">
                      The documentation site is built with a mobile-first approach, ensuring usability across all device sizes.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
