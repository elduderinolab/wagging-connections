
import React, { useEffect, useRef } from 'react';
import { UserPlus, Heart, MessageCircle } from 'lucide-react';

const HowItWorks = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="how-it-works" className="section-padding bg-softGray/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-softGray/30 -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">How It Works</h2>
          <p className="text-lg text-charcoal/70 max-w-xl mx-auto text-balance">Three simple steps to connect your pup with new friends</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10 relative">
          {/* Connection lines for desktop */}
          <div className="absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-warmOrange/30 hidden md:block"></div>
          
          {/* Step 1 */}
          <div className="glass-card p-8 flex flex-col items-center text-center relative animate-on-scroll" style={{transitionDelay: '0.1s'}}>
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-warmOrange text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg">1</div>
            <div className="w-16 h-16 bg-warmOrange/10 rounded-full flex items-center justify-center mb-6">
              <UserPlus size={28} className="text-warmOrange" />
            </div>
            <h3 className="text-xl font-bold text-charcoal mb-3">Create Your Pup's Profile 🐾</h3>
            <p className="text-charcoal/70 text-balance">Upload photos, add breed information, and set your preferences.</p>
          </div>
          
          {/* Step 2 */}
          <div className="glass-card p-8 flex flex-col items-center text-center relative animate-on-scroll" style={{transitionDelay: '0.3s'}}>
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-warmOrange text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg">2</div>
            <div className="w-16 h-16 bg-warmOrange/10 rounded-full flex items-center justify-center mb-6">
              <Heart size={28} className="text-warmOrange" />
            </div>
            <h3 className="text-xl font-bold text-charcoal mb-3">Swipe & Match ❤️</h3>
            <p className="text-charcoal/70 text-balance">Find compatible dogs near you for playdates or breeding.</p>
          </div>
          
          {/* Step 3 */}
          <div className="glass-card p-8 flex flex-col items-center text-center relative animate-on-scroll" style={{transitionDelay: '0.5s'}}>
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-warmOrange text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg">3</div>
            <div className="w-16 h-16 bg-warmOrange/10 rounded-full flex items-center justify-center mb-6">
              <MessageCircle size={28} className="text-warmOrange" />
            </div>
            <h3 className="text-xl font-bold text-charcoal mb-3">Chat & Connect 📍</h3>
            <p className="text-charcoal/70 text-balance">Set up meetings and grow your pet's social circle.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
