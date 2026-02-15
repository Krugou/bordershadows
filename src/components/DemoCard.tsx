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
      className={`relative p-[1px] rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer shadow-sm hover:shadow-xl dark:shadow-none ${isActive ? 'scale-[1.02]' : ''} ${className}`}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      onMouseMove={handleMouseMove}
      onClick={onClick}
    >
      {/* Background layer for special effects like Gradient Border */}
      <div className={`absolute inset-0 transition-opacity duration-500 ${effectClass}`} />

      {/* Spotlight layer */}
      {showSpotlight && isActive && (
        <div
          className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-20"
          style={{
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(139, 92, 246, 0.15), transparent 80%)`,
          }}
        />
      )}

      {/* Content container */}
      <div className="relative p-6 rounded-[calc(1rem-1px)] bg-white dark:bg-gray-950 h-full flex flex-col transition-colors duration-500">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{title}</h3>
          <p className="text-slate-500 dark:text-gray-400 text-sm leading-relaxed">{description}</p>
        </div>
        <div className="flex-grow flex items-center justify-center min-h-[140px] bg-slate-50 dark:bg-gray-900/50 rounded-xl p-4 mt-auto transition-colors duration-500">
          {children || <span className="text-slate-400 dark:text-gray-600 text-xs italic">Hover to interact</span>}
        </div>
      </div>
    </div>
  );
};
