
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  const ctaRef = useRef<HTMLDivElement>(null);
  
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
    
    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }
    
    return () => {
      if (ctaRef.current) {
        observer.unobserve(ctaRef.current);
      }
    };
  }, []);

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-softGray/20 to-white -z-10"></div>
      <div className="absolute -bottom-48 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-warmOrange/5 rounded-full blur-3xl"></div>
      
      <div 
        ref={ctaRef}
        className="max-w-4xl mx-auto glass-card p-12 md:p-16 text-center animate-on-scroll"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">
          Join thousands of dog owners finding the perfect match for their pup!
        </h2>
        
        <p className="text-lg text-charcoal/70 mb-8 max-w-2xl mx-auto text-balance">
          Create your profile today and start connecting with other dog lovers in your area. Your pup's new best friend is just a swipe away!
        </p>
        
        <button className="btn-primary mx-auto flex items-center gap-2 group px-8 py-4 text-lg">
          Get Started Now
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>
        
        <p className="mt-6 text-lightGray">No credit card required • Free to join</p>
      </div>
    </section>
  );
};

export default CallToAction;
