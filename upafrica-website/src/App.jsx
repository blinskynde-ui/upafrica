import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Graveyard from './components/Graveyard';
import Solution from './components/Solution';
import Roadmap from './components/Roadmap';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-up-dark min-h-screen text-up-text-main font-sans selection:bg-up-neon-blue selection:text-up-dark">
      <Navbar />
      <main>
        <Hero />
        <Graveyard />
        <Solution />
        <Roadmap />
      </main>
      <Footer />
    </div>
  );
}

export default App;
