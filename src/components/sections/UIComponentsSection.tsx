
import React from 'react';
import ComponentPreview from '@/components/ComponentPreview';

const UIComponentsSection = () => {
  return (
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
  );
};

export default UIComponentsSection;
