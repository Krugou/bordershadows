import React, { useState, useRef } from 'react';
import { Code, X, Check, Copy } from 'lucide-react';

interface DemoCardProps {
  title: string;
  description: string;
  effectClass?: string;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  showSpotlight?: boolean;
  codeSnippet?: string;
}

export const DemoCard: React.FC<DemoCardProps> = ({
  title,
  description,
  effectClass = '',
  children,
  className = '',
  onClick,
  showSpotlight = false,
  codeSnippet,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!codeSnippet) return;
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <div
        ref={cardRef}
        className={`group relative p-[1px] rounded-2xl transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1) cursor-pointer shadow-sm hover:shadow-2xl dark:shadow-none ${isActive ? 'scale-[1.03] -translate-y-1' : ''} ${className}`}
        onMouseEnter={() => setIsActive(true)}
        onMouseLeave={() => setIsActive(false)}
        onMouseMove={handleMouseMove}
        onClick={onClick}
      >
        {/* Background layer for special effects like Gradient Border */}
        <div className={`absolute inset-0 transition-opacity duration-700 ${effectClass}`} />

        {/* Shine layer */}
        <div className={`absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000 overflow-hidden`}>
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-[200%] transition-transform duration-[1500ms] ease-in-out" />
        </div>

        {/* Spotlight layer */}
        {showSpotlight && (
          <div
            className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${isActive ? 'opacity-40 dark:opacity-30' : 'opacity-0'}`}
            style={{
              background: `radial-gradient(500px circle at ${mousePos.x}px ${mousePos.y}px, rgba(139, 92, 246, 0.2), transparent 70%)`,
            }}
          />
        )}

        {/* Content container */}
        <div className="relative p-7 rounded-[calc(1rem-1px)] bg-white dark:bg-gray-950 h-full flex flex-col transition-all duration-500 overflow-hidden shadow-inner">
          <div className="mb-5 flex justify-between items-start">
            <div className="flex-grow">
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-2 tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                {title}
              </h3>
              <p className="text-slate-500 dark:text-gray-400 text-sm leading-relaxed font-medium">
                {description}
              </p>
            </div>
            {codeSnippet && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowCode(true);
                }}
                className="ml-2 p-2 rounded-lg bg-slate-100 dark:bg-gray-900 text-slate-400 dark:text-gray-600 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
                title="View Code"
              >
                <Code className="w-5 h-5" />
              </button>
            )}
          </div>
          <div className="flex-grow flex items-center justify-center min-h-[160px] bg-slate-50 dark:bg-gray-900/40 rounded-xl p-6 mt-auto transition-all duration-500 group-hover:bg-white dark:group-hover:bg-gray-800/60 border border-slate-100 dark:border-gray-800/50">
            {children || <span className="text-slate-400 dark:text-gray-600 text-xs italic">Hover to interact</span>}
          </div>
        </div>
      </div>

      {/* Code Modal */}
      {showCode && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md transition-opacity animate-in fade-in duration-300"
          onClick={() => setShowCode(false)}
        >
          <div
            className="relative w-full max-w-2xl max-h-[80vh] bg-white dark:bg-gray-950 rounded-3xl border border-slate-200 dark:border-gray-800 shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 border-b border-slate-200 dark:border-gray-800 flex justify-between items-center bg-slate-50/50 dark:bg-gray-900/50">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-500">
                  <Code className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">{title} Code</h4>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white font-bold text-sm transition-all active:scale-95"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  {copied ? 'Copied!' : 'Copy Snippet'}
                </button>
                <button
                  onClick={() => setShowCode(false)}
                  className="p-2 rounded-xl bg-slate-100 dark:bg-gray-900 text-slate-400 dark:text-gray-600 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="flex-grow overflow-auto p-6 bg-slate-50 dark:bg-gray-900/30">
              <pre className="text-sm font-mono text-slate-700 dark:text-gray-300 whitespace-pre-wrap break-all leading-relaxed p-4 rounded-xl bg-slate-100/50 dark:bg-black/50 border border-slate-200/50 dark:border-white/5 shadow-inner">
                {codeSnippet}
              </pre>
            </div>

            <div className="p-4 border-t border-slate-200 dark:border-gray-800 text-center">
              <p className="text-xs text-slate-400 dark:text-gray-500">
                Tip: These tailwind classes are compatible with Tailwind CSS v4.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
