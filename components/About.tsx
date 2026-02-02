import React from 'react';
import Section from './ui/Section';
import BlurText from './ui/BlurText';
import { FEATURES } from '../constants';

const About: React.FC = () => {
  return (
    <Section id="process" className="bg-background overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
            <BlurText
              text="Design that"
              animateBy="words"
              direction="bottom"
              delay={0.1}
              className="block"
            />
            <span className="text-zinc-500">
              <BlurText
                text="Moves Business."
                animateBy="words"
                direction="bottom"
                delay={0.15}
              />
            </span>
          </h2>
          <div className="text-lg text-zinc-400 mb-6 leading-relaxed">
            <BlurText
              text="We are a boutique design studio obsessed with quality. In a world of templates and shortcuts, we believe in bespoke craftsmanship tailored to your specific market position."
              animateBy="words"
              direction="bottom"
              delay={0.015}
            />
          </div>
          <div className="text-lg text-zinc-400 mb-12 leading-relaxed">
            <BlurText
              text="Our process is transparent, collaborative, and fiercely efficient. We strip away the agency bloat to focus entirely on what matters: your brand's impact."
              animateBy="words"
              direction="bottom"
              delay={0.015}
            />
          </div>

          <div className="grid gap-8">
            {FEATURES.map((feature, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-full bg-surfaceHighlight flex items-center justify-center text-white border border-white/5">
                  <feature.icon size={20} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary opacity-20 blur-3xl rounded-full" />
          <div className="relative rounded-3xl overflow-hidden border border-white/10 aspect-square lg:aspect-[4/5]">
            <img
              src="https://picsum.photos/800/1000?grayscale"
              alt="Studio Workspace"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-zinc-950/20" />

            {/* Floating Stats Card */}
            <div className="absolute bottom-8 left-8 right-8 bg-zinc-900/90 backdrop-blur-xl border border-white/10 p-6 rounded-2xl">
              <div className="flex justify-between items-center text-center">
                <div>
                  <div className="text-3xl font-bold text-white">5+</div>
                  <div className="text-xs text-zinc-500 uppercase tracking-wide mt-1">Years Exp</div>
                </div>
                <div className="w-px h-10 bg-white/10" />
                <div>
                  <div className="text-3xl font-bold text-white">150+</div>
                  <div className="text-xs text-zinc-500 uppercase tracking-wide mt-1">Projects</div>
                </div>
                <div className="w-px h-10 bg-white/10" />
                <div>
                  <div className="text-3xl font-bold text-white">100%</div>
                  <div className="text-xs text-zinc-500 uppercase tracking-wide mt-1">Client Sat</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;