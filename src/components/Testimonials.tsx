
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  dogName: string;
  image: string;
  quote: string;
  rating: number;
  location?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    dogName: "Max",
    image: "https://images.unsplash.com/photo-1583511655826-05700442b31b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
    quote: "Max found his best friend through Match My Pup! The app made it so easy to connect with other dog owners nearby.",
    rating: 5,
    location: "San Francisco, CA"
  },
  {
    id: 2,
    name: "David Miller",
    dogName: "Bella",
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80",
    quote: "The app's AI matching is incredible! Bella found her perfect mate, and now we're expecting puppies soon.",
    rating: 5,
    location: "Chicago, IL"
  },
  {
    id: 3,
    name: "Michelle Lee",
    dogName: "Rocky",
    image: "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=812&q=80",
    quote: "Rocky was shy around other dogs, but the playdates we arranged through Match My Pup helped him become more social!",
    rating: 4,
    location: "Austin, TX"
  },
  {
    id: 4,
    name: "James Wilson",
    dogName: "Luna",
    image: "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    quote: "As a new dog parent, I was worried about finding good playmates for Luna. This app made everything so simple!",
    rating: 5,
    location: "Seattle, WA"
  }
];

const Testimonials = React.memo(() => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      
      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }
  }, [isPaused]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (testimonialsRef.current) {
      observer.observe(testimonialsRef.current);
    }
    
    return () => {
      if (testimonialsRef.current) {
        observer.unobserve(testimonialsRef.current);
      }
    };
  }, []);
  
  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 10000);
  };
  
  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 10000);
  };

  return (
    <section id="testimonials" className="section-padding bg-softGray/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-softGray/20 -z-10"></div>
      
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-5">
        <div className="absolute -top-20 right-10 w-60 h-60 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-warmOrange/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto" ref={testimonialsRef}>
        <div className="text-center mb-16 animate-on-scroll">
          <span className="bg-blue-500/10 text-blue-600 py-1 px-4 rounded-full text-sm font-medium inline-flex items-center mb-4">
            <Quote size={16} className="mr-2" />
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Loved by Dog Owners Everywhere 🐕</h2>
          <p className="text-lg text-charcoal/70 max-w-xl mx-auto text-balance">
            Join thousands of happy dogs and their owners already on Match My Pup
          </p>
        </div>
        
        <div className="relative">
          {/* Controls */}
          <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 z-10">
            <button 
              onClick={handlePrev} 
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-charcoal hover:text-warmOrange transition-colors hover:bg-warmOrange/5"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          
          <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
            <button 
              onClick={handleNext} 
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-charcoal hover:text-warmOrange transition-colors hover:bg-warmOrange/5"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          {/* Testimonial cards */}
          <div className="relative h-[450px] md:h-[350px] overflow-hidden rounded-3xl">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`absolute inset-0 transition-all duration-700 ease-in-out flex flex-col md:flex-row items-center glass-card p-8 ${
                  index === activeIndex 
                    ? 'opacity-100 translate-x-0 z-20' 
                    : index === (activeIndex + 1) % testimonials.length
                    ? 'opacity-0 translate-x-full z-10'
                    : 'opacity-0 -translate-x-full z-10'
                }`}
              >
                <div className="mb-6 md:mb-0 md:mr-8 relative">
                  <div className="w-28 h-28 md:w-36 md:h-36 rounded-2xl overflow-hidden border-4 border-white shadow-lg transform transition-transform group-hover:scale-105">
                    <img 
                      src={testimonial.image} 
                      alt={`${testimonial.name}'s dog ${testimonial.dogName}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-3 -right-3 bg-warmOrange text-white text-xs font-bold py-1 px-3 rounded-full shadow-md">
                    {testimonial.dogName}
                  </div>
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <div className="mb-2 text-warmOrange">
                    <Quote size={24} className="opacity-50 mb-1" />
                  </div>
                  
                  <p className="text-lg md:text-xl text-charcoal/90 italic mb-6 text-balance">"{testimonial.quote}"</p>
                  
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div>
                      <p className="font-bold text-charcoal text-lg">{testimonial.name}</p>
                      <p className="text-charcoal/60 text-sm">{testimonial.location}</p>
                    </div>
                    
                    <div className="flex items-center justify-center md:justify-start mt-3 md:mt-0">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={20} 
                          fill={i < testimonial.rating ? "#FF6B35" : "none"} 
                          className={i < testimonial.rating ? "text-warmOrange" : "text-gray-300"} 
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                  setIsPaused(true);
                  setTimeout(() => setIsPaused(false), 10000);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-warmOrange w-6' : 'bg-softGray hover:bg-warmOrange/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

export default Testimonials;
