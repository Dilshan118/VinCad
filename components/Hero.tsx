import React from 'react';
import { ArrowRight, MoveDown } from 'lucide-react';
import Button from './ui/Button';
import BlurText from './ui/BlurText';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-600/10 rounded-full blur-[100px] mix-blend-screen" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-zinc-300 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Available for new projects
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1.1] mb-8">
            <BlurText
              text="Visualizing Your"
              animateBy="words"
              direction="bottom"
              delay={0.1}
              className="block"
            />
            <BlurText
              text="Brand's Identity."
              animateBy="words"
              direction="bottom"
              delay={0.15}
              elementClassName="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-400 to-zinc-600"
            />
          </h1>

          <div className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-12 leading-relaxed">
            <BlurText
              text="We transform abstract concepts into tangible, high-impact designs. From minimalist logos to complex marketing campaigns, we build visual languages that speak louder than words."
              animateBy="words"
              direction="bottom"
              delay={0.02}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <Button size="lg" icon={<ArrowRight size={18} />} onClick={() => document.getElementById('portfolio')?.scrollIntoView()}>
              View Work
            </Button>
            <Button variant="outline" size="lg" onClick={() => document.getElementById('services')?.scrollIntoView()}>
              Our Services
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500 animate-bounce">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <MoveDown size={20} />
      </div>
    </section>
  );
};

export default Hero;