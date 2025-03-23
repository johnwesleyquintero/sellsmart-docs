
import React from 'react';

const AgencyFrameworkSection = () => {
  return (
    <section id="agency-framework" className="mb-16">
      <div className="flex items-center space-x-2 mb-8">
        <div className="w-10 h-10 rounded-md bg-brand-500/10 flex items-center justify-center">
          <div className="w-5 h-5 border-2 border-brand-500 rounded-full"></div>
        </div>
        <h2 className="text-3xl font-bold">Agency Framework</h2>
      </div>
      
      <p className="text-white/80 mb-8">
        SellSmart is your all-in-one Amazon agency dedicated to helping sellers succeed on the world's largest e-commerce platform. Our comprehensive services and innovative web app provide everything you need to thrive on Amazon.
      </p>
      
      {/* Agency Introduction */}
      <section id="agency-introduction" className="mb-12 p-6 border border-neutral-700 rounded-lg bg-neutral-800/20">
        <h3 className="text-2xl font-bold mb-4">Introduction</h3>
        <p className="text-white/80 mb-4">
          Welcome to SellSmart, your all-in-one Amazon agency dedicated to helping sellers succeed on the world's largest e-commerce platform. Whether you're just starting out or looking to scale your existing business, our comprehensive services and innovative web app provide everything you need to thrive on Amazon.
        </p>
      </section>
      
      {/* Our Services */}
      <section id="our-services" className="mb-12 p-6 border border-neutral-700 rounded-lg bg-neutral-800/20">
        <h3 className="text-2xl font-bold mb-4">Our Services</h3>
        
        <div className="mt-6 space-y-6">
          <div className="bg-neutral-800/40 p-4 rounded-md border border-neutral-700">
            <h4 className="text-lg font-semibold mb-2">Supplier and Brand Relationship Building</h4>
            <ul className="text-white/70 text-sm space-y-1 list-disc list-inside">
              <li>Supplier Research: We identify and evaluate reliable suppliers</li>
              <li>Negotiation Support: Our team assists in negotiating terms</li>
              <li>Relationship Management: We foster strong, ongoing relationships</li>
            </ul>
          </div>
          
          <div className="bg-neutral-800/40 p-4 rounded-md border border-neutral-700">
            <h4 className="text-lg font-semibold mb-2">Product Sourcing and Catalog Building</h4>
            <ul className="text-white/70 text-sm space-y-1 list-disc list-inside">
              <li>Product Selection: We help you identify profitable products</li>
              <li>Catalog Management: Our team creates and optimizes product listings</li>
              <li>Inventory Management: We implement inventory tracking and forecasting</li>
            </ul>
          </div>
          
          <div className="bg-neutral-800/40 p-4 rounded-md border border-neutral-700">
            <h4 className="text-lg font-semibold mb-2">SEO and Listing Optimization</h4>
            <ul className="text-white/70 text-sm space-y-1 list-disc list-inside">
              <li>Keyword Research: We identify relevant keywords</li>
              <li>Listing Optimization: Our team optimizes product listings</li>
              <li>A+ Content: We create enhanced content</li>
            </ul>
          </div>
          
          <div className="bg-neutral-800/40 p-4 rounded-md border border-neutral-700">
            <h4 className="text-lg font-semibold mb-2">PPC Advertising and Bidding Strategies</h4>
            <ul className="text-white/70 text-sm space-y-1 list-disc list-inside">
              <li>Campaign Setup: We create and manage PPC campaigns</li>
              <li>Bid Management: Our team optimizes bids to maximize ROI</li>
              <li>Performance Tracking: We monitor and analyze campaign performance</li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* Our Web App */}
      <section id="our-web-app" className="mb-12 p-6 border border-neutral-700 rounded-lg bg-neutral-800/20">
        <h3 className="text-2xl font-bold mb-4">Our Web App</h3>
        <p className="text-white/80 mb-4">
          Our web application is built using Astro and TypeScript, providing a modern, efficient, and type-safe experience for our users.
        </p>
        
        <div className="mt-6 space-y-6">
          <div className="bg-neutral-800/40 p-4 rounded-md border border-neutral-700">
            <h4 className="text-lg font-semibold mb-2">Features for Non-API Sellers</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm text-white/80">
                <thead>
                  <tr className="border-b border-neutral-700">
                    <th className="py-2 px-4 text-left">Feature</th>
                    <th className="py-2 px-4 text-left">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-neutral-700">
                    <td className="py-2 px-4 font-medium">Data Entry</td>
                    <td className="py-2 px-4">Manual data entry via forms or templates.</td>
                  </tr>
                  <tr className="border-b border-neutral-700">
                    <td className="py-2 px-4 font-medium">Inventory Management</td>
                    <td className="py-2 px-4">Manual inventory updates via CSV uploads or direct entry.</td>
                  </tr>
                  <tr className="border-b border-neutral-700">
                    <td className="py-2 px-4 font-medium">PPC Campaigns</td>
                    <td className="py-2 px-4">Manual campaign setup and management with regular performance reports.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-neutral-800/40 p-4 rounded-md border border-neutral-700">
            <h4 className="text-lg font-semibold mb-2">Features for API Sellers</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm text-white/80">
                <thead>
                  <tr className="border-b border-neutral-700">
                    <th className="py-2 px-4 text-left">Feature</th>
                    <th className="py-2 px-4 text-left">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-neutral-700">
                    <td className="py-2 px-4 font-medium">Data Entry</td>
                    <td className="py-2 px-4">Automated data entry via API integration.</td>
                  </tr>
                  <tr className="border-b border-neutral-700">
                    <td className="py-2 px-4 font-medium">Inventory Management</td>
                    <td className="py-2 px-4">Real-time inventory tracking and automated updates.</td>
                  </tr>
                  <tr className="border-b border-neutral-700">
                    <td className="py-2 px-4 font-medium">PPC Campaigns</td>
                    <td className="py-2 px-4">Automated campaign setup, management, and real-time performance tracking.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      
      {/* Free Tools */}
      <section id="agency-free-tools" className="mb-12 p-6 border border-neutral-700 rounded-lg bg-neutral-800/20">
        <h3 className="text-2xl font-bold mb-4">Free Tools</h3>
        <p className="text-white/80 mb-4">
          To attract potential subscribers, we offer a range of free tools designed to provide value and demonstrate the capabilities of our premium services.
        </p>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-neutral-800/40 p-4 rounded-md border border-neutral-700">
            <h4 className="text-lg font-semibold mb-2">Free Keyword Research Tool</h4>
            <p className="text-white/70 text-sm">
              Identify high-volume, relevant keywords to optimize your product listings.
            </p>
          </div>
          
          <div className="bg-neutral-800/40 p-4 rounded-md border border-neutral-700">
            <h4 className="text-lg font-semibold mb-2">Free Inventory Tracker</h4>
            <p className="text-white/70 text-sm">
              Track inventory levels and receive alerts for low stock and restocking needs.
            </p>
          </div>
          
          <div className="bg-neutral-800/40 p-4 rounded-md border border-neutral-700">
            <h4 className="text-lg font-semibold mb-2">Free Listing Optimization Checker</h4>
            <p className="text-white/70 text-sm">
              Analyze your product listings and receive optimization suggestions.
            </p>
          </div>
          
          <div className="bg-neutral-800/40 p-4 rounded-md border border-neutral-700">
            <h4 className="text-lg font-semibold mb-2">Free PPC Campaign Audit</h4>
            <p className="text-white/70 text-sm">
              Get insights into your PPC campaign performance and recommendations for improvement.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Us */}
      <section id="contact-us" className="mb-12 p-6 border border-neutral-700 rounded-lg bg-neutral-800/20">
        <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
        <p className="text-white/80 mb-4">
          Ready to take your Amazon business to the next level? Contact SellSmart today to learn more about our services and how we can help you succeed on Amazon.
        </p>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-neutral-800/40 p-4 rounded-md border border-neutral-700">
            <h4 className="text-lg font-semibold mb-2">Email</h4>
            <p className="text-white/70 text-sm">
              smartsmartecommerce@gmail.com
            </p>
          </div>
          
          <div className="bg-neutral-800/40 p-4 rounded-md border border-neutral-700">
            <h4 className="text-lg font-semibold mb-2">Phone</h4>
            <p className="text-white/70 text-sm">
              +63 09504469156
            </p>
          </div>
          
          <div className="bg-neutral-800/40 p-4 rounded-md border border-neutral-700">
            <h4 className="text-lg font-semibold mb-2">Website</h4>
            <p className="text-white/70 text-sm">
              <a href="http://www.SellSmart.vercel.app" className="text-brand-400 hover:text-brand-300" target="_blank" rel="noopener noreferrer">
                www.SellSmart.vercel.app
              </a>
            </p>
          </div>
          
          <div className="bg-neutral-800/40 p-4 rounded-md border border-neutral-700">
            <h4 className="text-lg font-semibold mb-2">Address</h4>
            <p className="text-white/70 text-sm">
              123 Main Street, Suite 456, Anytown, Country 12345
            </p>
          </div>
        </div>
      </section>
      
      {/* Client Success Stories */}
      <section id="client-success-stories" className="mb-12 p-6 border border-neutral-700 rounded-lg bg-neutral-800/20">
        <h3 className="text-2xl font-bold mb-4">Client Success Stories</h3>
        
        <div className="mt-6 space-y-6">
          <div className="bg-neutral-800/40 p-4 rounded-md border border-neutral-700">
            <h4 className="text-lg font-semibold mb-2">Case Study 1: Outdoor Gear Supplier</h4>
            <p className="text-white/70 text-sm mb-2">
              <strong>Challenge:</strong> Low conversion rates (1.2%) on flagship product
            </p>
            <p className="text-white/70 text-sm mb-2">
              <strong>Solution:</strong> Implemented our SEO optimization and PPC competitive analysis
            </p>
            <p className="text-white/70 text-sm mb-2">
              <strong>Results:</strong>
            </p>
            <ul className="text-white/70 text-sm list-disc list-inside ml-2">
              <li>🚀 Conversion rate increased to 4.8% within 90 days</li>
              <li>📈 320% ROI on advertising spend</li>
              <li>📦 Inventory turnover improved from 45 to 28 days</li>
            </ul>
          </div>
          
          <div className="bg-neutral-800/40 p-4 rounded-md border border-neutral-700">
            <h4 className="text-lg font-semibold mb-2">Case Study 2: Home Decor Brand</h4>
            <p className="text-white/70 text-sm mb-2">
              <strong>Challenge:</strong> Inconsistent supplier relationships causing stockouts
            </p>
            <p className="text-white/70 text-sm mb-2">
              <strong>Solution:</strong> Our full operational support package
            </p>
            <p className="text-white/70 text-sm mb-2">
              <strong>Results:</strong>
            </p>
            <ul className="text-white/70 text-sm list-disc list-inside ml-2">
              <li>🤝 Established relationships with 3 reliable suppliers</li>
              <li>⏱️ Lead time reduced from 60 to 35 days</li>
              <li>💰 15% cost reduction through negotiated contracts</li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* Brand Guidelines */}
      <section id="brand-guidelines" className="mb-12 p-6 border border-neutral-700 rounded-lg bg-neutral-800/20">
        <h3 className="text-2xl font-bold mb-4">Brand Guidelines</h3>
        <p className="text-white/80 mb-4">
          The SellSmart brand represents professionalism and expertise in e-commerce. Our brand guidelines ensure consistency and cohesiveness across all communications.
        </p>
        
        <div className="mt-6 space-y-6">
          <div className="bg-neutral-800/40 p-4 rounded-md border border-neutral-700">
            <h4 className="text-lg font-semibold mb-2">Logo</h4>
            <p className="text-white/70 text-sm mb-2">
              <strong>Logo Variations:</strong>
            </p>
            <ul className="text-white/70 text-sm list-disc list-inside ml-2">
              <li>Full Logo: "SellSmart"</li>
              <li>Abbreviated Logo: "SS"</li>
              <li>Alternative Spelling: "SellSmrt"</li>
            </ul>
          </div>
          
          <div className="bg-neutral-800/40 p-4 rounded-md border border-neutral-700">
            <h4 className="text-lg font-semibold mb-2">Color Palette</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-3">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-md bg-[#0077BE]"></div>
                <p className="text-xs text-white/70 mt-1">Deep Sky Blue</p>
                <p className="text-xs text-white/70">#0077BE</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-md bg-[#008B8B]"></div>
                <p className="text-xs text-white/70 mt-1">Dark Cyan</p>
                <p className="text-xs text-white/70">#008B8B</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-md bg-[#FFD700]"></div>
                <p className="text-xs text-white/70 mt-1">Gold</p>
                <p className="text-xs text-white/70">#FFD700</p>
              </div>
            </div>
          </div>
          
          <div className="bg-neutral-800/40 p-4 rounded-md border border-neutral-700">
            <h4 className="text-lg font-semibold mb-2">Typography</h4>
            <p className="text-white/70 text-sm mb-2">
              <strong>Primary Typeface:</strong> Roboto Regular
            </p>
            <p className="text-white/70 text-sm mb-2">
              <strong>Secondary Typeface:</strong> Lato Regular
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default AgencyFrameworkSection;
