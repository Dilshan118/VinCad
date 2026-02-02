import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  fullWidth?: boolean;
}

const Section: React.FC<SectionProps> = ({ id, className = '', children, fullWidth = false }) => {
  return (
    <section id={id} className={`py-20 md:py-32 relative ${className}`}>
      <div className={`mx-auto px-6 md:px-12 ${fullWidth ? 'max-w-none' : 'max-w-7xl'}`}>
        {children}
      </div>
    </section>
  );
};

export default Section;