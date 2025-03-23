
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';

type SidebarItemType = {
  title: string;
  id: string;
  subitems?: { title: string; id: string }[];
  isActive?: boolean;
};

const sidebarItems: SidebarItemType[] = [
  {
    title: "Introduction",
    id: "introduction",
    isActive: true,
  },
  {
    title: "Design Tokens",
    id: "design-tokens",
    subitems: [
      { title: "Color Scheme", id: "color-scheme" },
      { title: "Typography", id: "typography" },
      { title: "Spacing", id: "spacing" },
      { title: "Sizing", id: "sizing" },
    ],
  },
  {
    title: "Logo Usage",
    id: "logo-usage",
  },
  {
    title: "UI Components",
    id: "ui-components",
    subitems: [
      { title: "Buttons", id: "buttons" },
      { title: "Cards", id: "cards" },
      { title: "Forms", id: "forms" },
      { title: "Navigation", id: "navigation" },
    ],
  },
  {
    title: "Documentation Site",
    id: "documentation-site",
    subitems: [
      { title: "Dark Theme", id: "dark-theme" },
      { title: "Component Playground", id: "component-playground" },
      { title: "Design Assets", id: "design-assets" },
      { title: "Accessibility", id: "accessibility" },
      { title: "Responsive Layout", id: "responsive-layout" },
    ],
  },
  {
    title: "Operations Guides",
    id: "operations-guides",
    subitems: [
      { title: "FBM Inventory Management", id: "fbm-inventory-management" },
      { title: "FBA Department Operations", id: "fba-department-operations" },
      { title: "Wholesale Buyer's Guide", id: "wholesale-buyers-guide" },
    ],
  },
];

interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
  return (
    <aside className={cn("w-64 flex-shrink-0 hidden lg:block", className)}>
      <div className="h-full overflow-y-auto py-6 px-4 sticky top-20">
        <nav className="space-y-1">
          {sidebarItems.map((item) => (
            <div key={item.id} className="mb-4">
              <Link
                to={`#${item.id}`}
                className={cn(
                  "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  item.isActive
                    ? "text-white bg-brand-500/10 border-l-2 border-brand-500"
                    : "text-white/80 hover:text-white hover:bg-neutral-800"
                )}
              >
                {item.title}
                {item.subitems && (
                  <ChevronRight className="ml-auto h-4 w-4 text-white/50" />
                )}
              </Link>
              
              {item.subitems && (
                <div className="ml-4 mt-1 space-y-1">
                  {item.subitems.map((subitem) => (
                    <Link
                      key={subitem.id}
                      to={`#${subitem.id}`}
                      className="block pl-4 pr-3 py-1.5 text-sm text-white/70 hover:text-white rounded-md hover:bg-neutral-800 transition-colors border-l border-neutral-700"
                    >
                      {subitem.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
