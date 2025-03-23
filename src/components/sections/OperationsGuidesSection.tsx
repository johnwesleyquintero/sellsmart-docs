
import React from 'react';

const OperationsGuidesSection = () => {
  return (
    <section id="operations-guides" className="mb-16">
      <div className="flex items-center space-x-2 mb-8">
        <div className="w-10 h-10 rounded-md bg-brand-500/10 flex items-center justify-center">
          <div className="w-5 h-5 border-2 border-brand-500 rounded-full"></div>
        </div>
        <h2 className="text-3xl font-bold">Operations Guides</h2>
      </div>
      
      <p className="text-white/80 mb-8">
        Our operations guides provide comprehensive instructions and best practices for various operational processes at SellSmart Hub. These guides aim to enhance efficiency, streamline workflows, and ensure consistency across all operational activities.
      </p>
      
      {/* FBM Inventory Management */}
      <section id="fbm-inventory-management" className="mb-12 p-6 border border-neutral-700 rounded-lg bg-neutral-800/20">
        <h3 className="text-2xl font-bold mb-4">FBM Inventory Management</h3>
        <p className="text-white/80 mb-4">
          This guide outlines the processes and best practices for managing FBM (Fulfilled by Merchant) inventory, aimed at enhancing operational efficiency by 40%.
        </p>
        
        <div className="mt-6 space-y-4">
          <div className="bg-neutral-800/40 p-4 rounded-md border border-neutral-700">
            <h4 className="text-lg font-semibold mb-2">Listing Management & Account Health</h4>
            <p className="text-white/70 text-sm">
              Detailed steps for managing product listings and strategies for maintaining account health.
            </p>
          </div>
          
          <div className="bg-neutral-800/40 p-4 rounded-md border border-neutral-700">
            <h4 className="text-lg font-semibold mb-2">SOP Document & Process Flow</h4>
            <p className="text-white/70 text-sm">
              Standard Operating Procedures (SOPs) for inventory management with process flow diagrams and explanations.
            </p>
          </div>
          
          <div className="bg-neutral-800/40 p-4 rounded-md border border-neutral-700">
            <h4 className="text-lg font-semibold mb-2">Enhanced Operational Efficiency</h4>
            <p className="text-white/70 text-sm">
              Key metrics and KPIs for measuring efficiency, with case studies of improved efficiency.
            </p>
          </div>
        </div>
      </section>
      
      {/* FBA Department Operations */}
      <section id="fba-department-operations" className="mb-12 p-6 border border-neutral-700 rounded-lg bg-neutral-800/20">
        <h3 className="text-2xl font-bold mb-4">FBA Department Operations</h3>
        <p className="text-white/80 mb-4">
          This guide provides a comprehensive overview of FBA (Fulfilled by Amazon) department operations, focusing on training and workflow planning to streamline team productivity by 35%.
        </p>
        
        <div className="mt-6 space-y-4">
          <div className="bg-neutral-800/40 p-4 rounded-md border border-neutral-700">
            <h4 className="text-lg font-semibold mb-2">Training & Workflow Planning</h4>
            <p className="text-white/70 text-sm">
              Training programs, materials, and workflow planning and optimization strategies.
            </p>
          </div>
          
          <div className="bg-neutral-800/40 p-4 rounded-md border border-neutral-700">
            <h4 className="text-lg font-semibold mb-2">SOP Document & Training Materials</h4>
            <p className="text-white/70 text-sm">
              Standard Operating Procedures (SOPs) for FBA operations with training materials and resources.
            </p>
          </div>
          
          <div className="bg-neutral-800/40 p-4 rounded-md border border-neutral-700">
            <h4 className="text-lg font-semibold mb-2">Streamlined Team Productivity</h4>
            <p className="text-white/70 text-sm">
              Metrics for measuring productivity with examples of productivity improvements.
            </p>
          </div>
        </div>
      </section>
      
      {/* Wholesale Buyer's Guide */}
      <section id="wholesale-buyers-guide" className="mb-12 p-6 border border-neutral-700 rounded-lg bg-neutral-800/20">
        <h3 className="text-2xl font-bold mb-4">Wholesale Buyer's Guide</h3>
        <p className="text-white/80 mb-4">
          This guide is designed to improve client engagement and inventory management, with a focus on best practices to achieve a client satisfaction rate of 95%.
        </p>
        
        <div className="mt-6 space-y-4">
          <div className="bg-neutral-800/40 p-4 rounded-md border border-neutral-700">
            <h4 className="text-lg font-semibold mb-2">Client Engagement & Inventory</h4>
            <p className="text-white/70 text-sm">
              Strategies for engaging with clients and best practices for inventory management.
            </p>
          </div>
          
          <div className="bg-neutral-800/40 p-4 rounded-md border border-neutral-700">
            <h4 className="text-lg font-semibold mb-2">SOP Document & Best Practices</h4>
            <p className="text-white/70 text-sm">
              Standard Operating Procedures (SOPs) for client engagement with best practices and guidelines.
            </p>
          </div>
          
          <div className="bg-neutral-800/40 p-4 rounded-md border border-neutral-700">
            <h4 className="text-lg font-semibold mb-2">Improved Client Satisfaction</h4>
            <p className="text-white/70 text-sm">
              Metrics for measuring client satisfaction with case studies of improved satisfaction rates.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default OperationsGuidesSection;
