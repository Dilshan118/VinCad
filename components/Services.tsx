import React from 'react';
import Section from './ui/Section';
import { SERVICE_CATEGORIES } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <Section id="services" className="bg-background">
      <div className="mb-16 md:mb-24">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Capabilities</h2>
        <p className="text-zinc-400 text-lg max-w-2xl">
          Comprehensive design solutions tailored to elevate your brand presence across every medium.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICE_CATEGORIES.map((category, index) => (
          <div 
            key={index}
            className={`group relative p-8 rounded-3xl bg-surface/50 border border-white/5 hover:border-white/10 transition-all duration-500 hover:bg-surfaceHighlight/50 backdrop-blur-sm ${category.colSpan || 'col-span-1'}`}
          >
            {/* Hover Gradient Effect */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div className="relative z-10 h-full flex flex-col">
              <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-500">
                <category.icon size={24} />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3">{category.title}</h3>
              <p className="text-zinc-400 mb-8">{category.description}</p>
              
              <div className="mt-auto grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4">
                {category.items.map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-zinc-300">
                    <CheckCircle2 size={16} className="text-zinc-600 mt-0.5 shrink-0 group-hover:text-primary transition-colors" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Services;