
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 py-4
                ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2">
          <span className="text-warmOrange font-bold text-2xl">MatchMyPup</span>
        </a>
        
        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-charcoal hover:text-warmOrange transition-colors">Home</a>
          <a href="#how-it-works" className="text-charcoal hover:text-warmOrange transition-colors">How It Works</a>
          <a href="#features" className="text-charcoal hover:text-warmOrange transition-colors">Features</a>
          <a href="#testimonials" className="text-charcoal hover:text-warmOrange transition-colors">Testimonials</a>
        </div>
        
        <div className="hidden md:block">
          <button className="btn-primary">Get Started</button>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-charcoal"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg p-4 flex flex-col space-y-4 animate-fade-in">
          <a href="#home" className="text-charcoal hover:text-warmOrange transition-colors p-2" onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a href="#how-it-works" className="text-charcoal hover:text-warmOrange transition-colors p-2" onClick={() => setMobileMenuOpen(false)}>How It Works</a>
          <a href="#features" className="text-charcoal hover:text-warmOrange transition-colors p-2" onClick={() => setMobileMenuOpen(false)}>Features</a>
          <a href="#testimonials" className="text-charcoal hover:text-warmOrange transition-colors p-2" onClick={() => setMobileMenuOpen(false)}>Testimonials</a>
          <button className="btn-primary w-full" onClick={() => setMobileMenuOpen(false)}>Get Started</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
