import React, { useState } from 'react';
import Section from './ui/Section';
import { PROJECTS, PORTFOLIO_CATEGORIES } from '../constants';
import { PortfolioCategory } from '../types';
import { ExternalLink, Eye } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<PortfolioCategory>('All');

  const filteredProjects = activeFilter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeFilter);

  return (
    <Section id="portfolio" className="bg-zinc-950/50">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Selected Work</h2>
          <p className="text-zinc-400">A curation of recent brand success stories.</p>
        </div>
        
        {/* Filters */}
        <div className="flex flex-wrap gap-2">
          {PORTFOLIO_CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-white text-black'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
        {filteredProjects.map((project) => (
          <div 
            key={project.id}
            className={`group relative rounded-2xl overflow-hidden bg-zinc-900 border border-white/5 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 ${
              project.size === 'large' ? 'md:col-span-2 md:row-span-2' : 
              project.size === 'tall' ? 'md:row-span-2' : 
              'col-span-1 row-span-1'
            }`}
          >
            {/* Image */}
            <img 
              src={project.imageUrl} 
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-primary text-xs font-bold uppercase tracking-wider mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                <button className="inline-flex items-center gap-2 text-sm text-white border-b border-white/30 pb-1 hover:border-white transition-colors">
                  View Case Study <ExternalLink size={14} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {filteredProjects.length === 0 && (
        <div className="py-20 text-center text-zinc-500">
          No projects found in this category.
        </div>
      )}
    </Section>
  );
};

export default Portfolio;