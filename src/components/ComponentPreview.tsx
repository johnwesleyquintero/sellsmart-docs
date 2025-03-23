
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown, Code, Copy, Check } from 'lucide-react';

interface ComponentPreviewProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  code: string;
  language?: string;
}

const ComponentPreview: React.FC<ComponentPreviewProps> = ({
  title,
  description,
  children,
  code,
  language = 'tsx',
}) => {
  const [isCodeVisible, setIsCodeVisible] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="bg-neutral-800/40 rounded-lg border border-neutral-700 overflow-hidden my-6 animate-fade-in">
      <div className="px-5 py-3 border-b border-neutral-700 flex items-center justify-between">
        <h3 className="text-sm font-medium text-white">{title}</h3>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsCodeVisible(!isCodeVisible)}
            className="flex items-center text-xs text-white/70 hover:text-white px-2 py-1 rounded hover:bg-neutral-700 transition-colors"
          >
            <Code className="h-3.5 w-3.5 mr-1.5" />
            <span>Code</span>
            <ChevronDown 
              className={cn(
                "h-3.5 w-3.5 ml-1 transition-transform", 
                isCodeVisible ? "transform rotate-180" : ""
              )} 
            />
          </button>
          <button
            onClick={copyToClipboard}
            className="flex items-center text-xs text-white/70 hover:text-white px-2 py-1 rounded hover:bg-neutral-700 transition-colors"
          >
            {isCopied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
          </button>
        </div>
      </div>

      <div className="p-5 flex items-center justify-center bg-neutral-900/50">
        <div className="relative w-full">
          {children}
        </div>
      </div>

      {description && (
        <div className="px-5 py-3 border-t border-neutral-700 text-sm text-white/70">
          {description}
        </div>
      )}

      {isCodeVisible && (
        <div className="border-t border-neutral-700">
          <pre className="language-tsx m-0 p-5 overflow-x-auto text-sm text-white/90 bg-neutral-900/70">
            <code>{code}</code>
          </pre>
        </div>
      )}
    </div>
  );
};

export default ComponentPreview;
