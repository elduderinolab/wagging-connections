
import { Button } from "./ui/button";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import React from "react";

const Hero = React.memo(() => {
  const navigate = useNavigate();
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const elements = [
      { ref: headlineRef, delay: 0 },
      { ref: subheadlineRef, delay: 200 },
      { ref: ctaRef, delay: 400 },
      { ref: imageContainerRef, delay: 600 }
    ];

    const timeouts: NodeJS.Timeout[] = [];

    elements.forEach(({ ref, delay }) => {
      const element = ref.current;
      if (!element) return;

      const timeout = setTimeout(() => {
        element.style.transform = 'translateY(0)';
        element.style.opacity = '1';
      }, delay);

      timeouts.push(timeout);
    });

    return () => {
      timeouts.forEach(clearTimeout);
      elements.forEach(({ ref }) => {
        const element = ref.current;
        if (element) {
          element.style.transform = '';
          element.style.opacity = '';
        }
      });
    };
  }, []);

  const handleHeadingClick = () => {
    navigate('/about');
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative pt-20 overflow-hidden">
      {/* Dynamic background */}
      <div className="absolute inset-0 bg-gradient-to-br from-softGray/10 via-white to-warmOrange/5 -z-10"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-5">
        <div className="absolute top-20 right-10 w-64 h-64 bg-warmOrange/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-warmOrange/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-blue-200/10 rounded-full blur-2xl animate-float" style={{animationDelay: '0.7s'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-green-200/10 rounded-full blur-2xl animate-float" style={{animationDelay: '1.2s'}}></div>
        {/* Floating hearts */}
        <div className="absolute top-1/4 right-1/3 text-red-400/30 text-4xl animate-float" style={{animationDelay: '0.3s'}}>❤️</div>
        <div className="absolute top-2/3 left-1/3 text-red-400/20 text-5xl animate-float" style={{animationDelay: '1.8s'}}>❤️</div>
        <div className="absolute top-1/2 right-1/4 text-red-400/25 text-3xl animate-float" style={{animationDelay: '1.1s'}}>❤️</div>
        <div className="absolute bottom-1/3 left-1/4 text-red-400/30 text-4xl animate-float" style={{animationDelay: '0.9s'}}>❤️</div>
        <div className="absolute top-1/3 right-1/2 text-red-400/20 text-5xl animate-float" style={{animationDelay: '1.5s'}}>❤️</div>
      </div>
      
      <div className="container mx-auto grid md:grid-cols-2 gap-12 px-6 py-16 md:py-24">
        <div className="flex flex-col justify-center space-y-8">
          <div className="flex items-center justify-center md:justify-start mb-2">
            <span className="bg-warmOrange/10 text-warmOrange py-1 px-4 rounded-full text-sm font-medium flex items-center">
              <Sparkles size={16} className="mr-2" />
              Launching Soon! 
            </span>
          </div>
          
          <h1 
            ref={headlineRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal opacity-0 text-balance md:text-left text-center cursor-pointer transition-transform duration-300 will-change-transform hover:scale-105 hover:text-warmOrange"
            onClick={handleHeadingClick}
          >
            Find the Perfect Match for Your Pup <span className="text-warmOrange inline-block animate-pulse">🐶</span>
          </h1>
          
          <p 
            ref={subheadlineRef}
            className="text-lg md:text-xl text-charcoal/80 max-w-md opacity-0 text-balance md:text-left text-center"
          >
            Be among the first to join our exclusive community of dog lovers. Sign up for our waitlist and get early access when we launch!
          </p>
          
          <div 
            ref={ctaRef}
            className="flex flex-col sm:flex-row gap-4 opacity-0 md:justify-start justify-center"
          >
            <button className="btn-primary flex items-center justify-center gap-2 group">
              Get Waitlisted Now
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="btn-secondary hover:bg-warmOrange/10 transition-colors">Learn More</button>
          </div>
        </div>
        
        <div 
          ref={imageContainerRef}
          className="hidden md:flex items-center justify-center opacity-0"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-warmOrange/20 to-blue-200/20 rounded-3xl blur-xl transform -rotate-6 scale-95"></div>
            <div className="glass-card p-3 transform rotate-3 animate-float hover:rotate-0 transition-transform duration-500 cursor-pointer will-change-transform">
              <img 
                src="https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Two happy dogs playing together" 
                className="rounded-2xl w-full h-auto object-cover shadow-lg" 
              />
              <div className="absolute top-2 right-2 bg-white/80 p-1 rounded-full shadow-md">
                <span className="flex items-center justify-center w-8 h-8 bg-warmOrange text-white rounded-full text-xs font-bold">
                  PRO
                </span>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 glass-card py-3 px-5 shadow-lg animate-float hover:scale-105 transition-transform cursor-pointer will-change-transform" style={{animationDelay: '0.2s'}}>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-warmOrange rounded-full"></div>
                <p className="font-medium text-charcoal">New matches nearby!</p>
              </div>
            </div>
            <div className="absolute -top-6 -left-6 glass-card py-2 px-4 shadow-lg animate-float hover:scale-105 transition-transform cursor-pointer will-change-transform" style={{animationDelay: '0.5s'}}>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <p className="font-medium text-sm text-charcoal">5 friends online</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Hero;
