import React from 'react';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Impact from './components/Impact';
import Roadmap from './components/Roadmap';
import CTA from './components/CTA';

function App() {
  return (
    <div className="bg-up-dark min-h-screen text-up-text selection:bg-up-neon selection:text-up-dark">
      {/* Navigation placeholder */}
      <nav className="absolute top-0 w-full z-50 p-6 flex justify-between items-center max-w-7xl mx-auto left-0 right-0">
        <div className="text-2xl font-bold text-up-white tracking-tighter">
          Up<span className="text-up-neon">Africa</span>
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium">
            <a href="#" className="hover:text-up-neon transition-colors">Mission</a>
            <a href="#" className="hover:text-up-neon transition-colors">Solution</a>
            <a href="#" className="hover:text-up-neon transition-colors">Roadmap</a>
            <a href="#" className="text-up-neon border border-up-neon px-4 py-2 rounded hover:bg-up-neon hover:text-up-dark transition-colors">Login</a>
        </div>
      </nav>

      <main>
        <Hero />
        <Problem />
        <Solution />
        <Impact />
        <Roadmap />
        <CTA />
      </main>

      <footer className="bg-black py-8 text-center text-sm text-gray-600">
        <p>&copy; 2025 UpAfrica. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
