import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import SafetyPoints from './components/SafetyPoints';
import Results from './components/Results';
import Testimonials from './components/Testimonials';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-gray-800">
      <Header />
      <Hero />
      <About />
      <SafetyPoints />
      <Results />
      <Testimonials />
      <Features />
      <Pricing />
      <Contact />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;