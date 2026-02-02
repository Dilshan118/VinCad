import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  icon,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-white text-black hover:bg-zinc-200 border border-transparent shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]",
    secondary: "bg-surfaceHighlight text-white hover:bg-zinc-700 border border-white/5",
    outline: "bg-transparent text-white border border-white/20 hover:border-white/50 hover:bg-white/5",
    ghost: "bg-transparent text-zinc-400 hover:text-white hover:bg-white/5"
  };

  const sizes = {
    sm: "text-sm px-4 py-2 gap-2",
    md: "text-base px-6 py-3 gap-2.5",
    lg: "text-lg px-8 py-4 gap-3"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
      {icon && <span className="text-current opacity-80">{icon}</span>}
    </button>
  );
};

export default Button;