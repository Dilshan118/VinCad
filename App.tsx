import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-background text-zinc-200 min-h-screen relative font-sans selection:bg-primary/30 selection:text-white">
      <div className="fixed inset-0 bg-noise opacity-[0.03] pointer-events-none z-[60]" />
      
      <Navbar />
      
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;