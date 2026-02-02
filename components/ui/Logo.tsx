import React from 'react';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "", iconOnly = false }) => {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Abstract 'V' Logo Icon */}
      <svg 
        width="32" 
        height="32" 
        viewBox="0 0 32 32" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 text-primary"
      >
        {/* Left Stroke */}
        <path 
          d="M6 6L16 26" 
          stroke="white" 
          strokeWidth="3.5" 
          strokeLinecap="round" 
        />
        {/* Right Stroke (Colored) */}
        <path 
          d="M26 6L16 26" 
          stroke="currentColor" 
          strokeWidth="3.5" 
          strokeLinecap="round" 
          className="opacity-90"
        />
        {/* Connection Dot/Node (Signifying Vector/CAD) */}
        <circle cx="6" cy="6" r="2" fill="currentColor" />
        <circle cx="26" cy="6" r="2" fill="white" />
        <circle cx="16" cy="26" r="3" fill="currentColor" stroke="white" strokeWidth="1" />
      </svg>

      {!iconOnly && (
        <div className="font-sans font-bold text-2xl tracking-tight text-white leading-none">
          vin<span className="text-primary font-serif italic">Cad</span>
        </div>
      )}
    </div>
  );
};

export default Logo;