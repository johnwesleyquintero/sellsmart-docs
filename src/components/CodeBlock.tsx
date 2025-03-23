
import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ 
  code, 
  language = 'tsx',
  filename 
}) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="relative group rounded-lg overflow-hidden bg-neutral-800 my-4">
      {filename && (
        <div className="px-4 py-2 text-xs font-mono text-white/60 bg-neutral-700/40 border-b border-neutral-700">
          {filename}
        </div>
      )}
      <pre className="overflow-x-auto p-4 text-sm">
        <code className={`language-${language}`}>{code}</code>
      </pre>
      <button 
        onClick={copyToClipboard}
        className="absolute top-3 right-3 p-2 rounded-md bg-neutral-700/50 hover:bg-neutral-700 text-white/70 hover:text-white transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100"
        aria-label="Copy code"
      >
        {isCopied ? (
          <Check className="h-4 w-4" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
      </button>
    </div>
  );
};

export default CodeBlock;
