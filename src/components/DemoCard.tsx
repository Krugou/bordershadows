import React, { useState, useRef } from 'react';

interface DemoCardProps {
  title: string;
  description: string;
  effectClass?: string;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  showSpotlight?: boolean;
}

export const DemoCard: React.FC<DemoCardProps> = ({
  title,
  description,
  effectClass = '',
  children,
  className = '',
  onClick,
  showSpotlight = false,
}) => {
  const [isActive, setIsActive] = useState(false);
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

  return (
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
        <div className="mb-5">
          <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-2 tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-slate-500 dark:text-gray-400 text-sm leading-relaxed font-medium">
            {description}
          </p>
        </div>
        <div className="flex-grow flex items-center justify-center min-h-[160px] bg-slate-50 dark:bg-gray-900/40 rounded-xl p-6 mt-auto transition-all duration-500 group-hover:bg-white dark:group-hover:bg-gray-800/60 border border-slate-100 dark:border-gray-800/50">
          {children || <span className="text-slate-400 dark:text-gray-600 text-xs italic">Hover to interact</span>}
        </div>
      </div>
    </div>
  );
};
