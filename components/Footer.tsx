import React from 'react';
import Section from './ui/Section';
import { SOCIAL_LINKS } from '../constants';
import Button from './ui/Button';
import Logo from './ui/Logo';
import { Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-zinc-950 border-t border-white/10 pt-20 pb-10">
      <Section className="!py-0">
        <div className="flex flex-col items-center text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
            Ready to start <br />
            <span className="text-zinc-600">the next big thing?</span>
          </h2>
          <Button size="lg" className="h-16 px-10 text-lg rounded-full" onClick={() => window.location.href = 'mailto:hello@vincad.design'}>
            <Mail className="mr-3" />
            Hire Me
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 border-t border-white/10 pt-16">
          <div className="md:col-span-2">
            <a href="#" className="block mb-6 hover:opacity-90 transition-opacity">
              <Logo />
            </a>
            <p className="text-zinc-400 max-w-sm">
              We create digital experiences that blend aesthetic elegance with technical precision. Based in New York, working globally.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-3 text-zinc-400 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Branding & Identity</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Digital Marketing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Editorial Design</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Product Photography</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Connect</h4>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((social) => (
                <a 
                  key={social.platform} 
                  href={social.url}
                  className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 hover:scale-110 transition-all duration-300"
                  aria-label={social.platform}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
            <p className="mt-6 text-zinc-500 text-xs">
              &copy; {new Date().getFullYear()} vinCad.<br />All rights reserved.
            </p>
          </div>
        </div>
      </Section>
    </footer>
  );
};

export default Footer;