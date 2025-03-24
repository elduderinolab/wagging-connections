
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Apply animations when component mounts
    const headline = headlineRef.current;
    const subheadline = subheadlineRef.current;
    const cta = ctaRef.current;
    
    if (headline) headline.classList.add('animate-fade-in');
    
    // Staggered animations
    setTimeout(() => {
      if (subheadline) subheadline.classList.add('animate-fade-in');
    }, 200);
    
    setTimeout(() => {
      if (cta) cta.classList.add('animate-fade-in');
    }, 400);
  }, []);

  const handleHeadingClick = () => {
    navigate('/about');
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-softGray/20 to-white -z-10"></div>
      
      {/* Background circles */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-warmOrange/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-20 w-96 h-96 bg-warmOrange/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto grid md:grid-cols-2 gap-12 px-6 py-16 md:py-24">
        <div className="flex flex-col justify-center space-y-8">
          <h1 
            ref={headlineRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal opacity-0 text-balance text-center cursor-pointer transition-transform hover:scale-105 hover:text-warmOrange"
            onClick={handleHeadingClick}
          >
            Find the Perfect Match for Your Pup <span className="text-warmOrange">🐶</span>
          </h1>
          
          <p 
            ref={subheadlineRef}
            className="text-lg md:text-xl text-charcoal/80 max-w-md opacity-0 text-balance"
          >
            Whether you're looking for a mate, a playdate, or just a new furry friend, Match My Pup connects dog lovers effortlessly.
          </p>
          
          <div 
            ref={ctaRef}
            className="flex flex-col sm:flex-row gap-4 opacity-0"
          >
            <button className="btn-primary flex items-center justify-center gap-2 group">
              Get Started
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>
        
        <div className="hidden md:flex items-center justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-warmOrange/10 rounded-3xl blur-xl transform -rotate-6 scale-95"></div>
            <div className="glass-card p-3 transform rotate-3 animate-float">
              <img 
                src="https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Two happy dogs playing together" 
                className="rounded-2xl w-full h-auto object-cover shadow-lg" 
              />
            </div>
            <div className="absolute -bottom-6 -right-6 glass-card py-3 px-5 shadow-lg animate-float" style={{animationDelay: '0.2s'}}>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-warmOrange rounded-full"></div>
                <p className="font-medium text-charcoal">New matches nearby!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
