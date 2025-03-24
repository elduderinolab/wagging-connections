
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, Pencil, Globe, Mail } from 'lucide-react';
import { Separator } from './ui/separator';

const Navbar = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    // In a real implementation, you would apply the theme change to the document
  };

  return (
    <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50">
      <div className="relative flex h-16 items-center justify-center px-4 text-foreground">
        <div className="supports-backdrop-blur:bg-white/10 mx-auto mt-8 flex h-[58px] w-max justify-center gap-2 rounded-2xl border p-2 backdrop-blur-md items-center bg-white/90 shadow-lg">
          {/* Home Link */}
          <div className="flex aspect-square cursor-pointer items-center justify-center rounded-full group" style={{ padding: '8px', width: '58.8571px', height: '58.8571px' }}>
            <Link
              aria-label="Home"
              className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground size-12 rounded-full text-foreground relative group-hover:text-warmOrange"
              to="/"
            >
              <Home className="size-4 relative z-10" />
              <span className="absolute inset-0 bg-warmOrange/0 rounded-full transition-all duration-300 group-hover:bg-warmOrange/10 group-hover:shadow-[0_0_15px_3px_rgba(255,107,53,0.3)] z-0"></span>
            </Link>
          </div>

          {/* About Link */}
          <div className="flex aspect-square cursor-pointer items-center justify-center rounded-full group" style={{ padding: '8px', width: '54.2857px', height: '54.2857px' }}>
            <Link
              aria-label="About"
              className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground size-12 rounded-full text-foreground relative group-hover:text-warmOrange"
              to="/about"
            >
              <Pencil className="size-4 relative z-10" />
              <span className="absolute inset-0 bg-warmOrange/0 rounded-full transition-all duration-300 group-hover:bg-warmOrange/10 group-hover:shadow-[0_0_15px_3px_rgba(255,107,53,0.3)] z-0"></span>
            </Link>
          </div>

          <Separator orientation="vertical" className="h-8" />

          {/* Website Link */}
          <div className="flex aspect-square cursor-pointer items-center justify-center rounded-full group" style={{ padding: '8px', width: '46.1429px', height: '46.1429px' }}>
            <a
              aria-label="Website"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground size-12 rounded-full text-foreground relative group-hover:text-warmOrange"
              href="https://matchmypup.com/"
            >
              <Globe className="size-4 relative z-10" />
              <span className="absolute inset-0 bg-warmOrange/0 rounded-full transition-all duration-300 group-hover:bg-warmOrange/10 group-hover:shadow-[0_0_15px_3px_rgba(255,107,53,0.3)] z-0"></span>
            </a>
          </div>

          {/* Contact Link */}
          <div className="flex aspect-square cursor-pointer items-center justify-center rounded-full group" style={{ padding: '8px', width: '40px', height: '40px' }}>
            <a
              aria-label="Send Email"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground size-12 rounded-full text-foreground relative group-hover:text-warmOrange"
              href="mailto:info@matchmypup.com"
            >
              <Mail className="size-4 relative z-10" />
              <span className="absolute inset-0 bg-warmOrange/0 rounded-full transition-all duration-300 group-hover:bg-warmOrange/10 group-hover:shadow-[0_0_15px_3px_rgba(255,107,53,0.3)] z-0"></span>
            </a>
          </div>

          <Separator orientation="vertical" className="h-8" />

          {/* Theme Toggle */}
          <div className="flex aspect-square cursor-pointer items-center justify-center rounded-full group" style={{ padding: '8px', width: '40px', height: '40px' }}>
            <button 
              className="theme-toggle p-2 rounded-lg relative group-hover:text-warmOrange"
              onClick={toggleTheme}
            >
              <svg 
                stroke="currentColor" 
                fill="currentColor" 
                strokeWidth="0" 
                viewBox="0 0 512 512" 
                height="19" 
                width="19" 
                xmlns="http://www.w3.org/2000/svg"
                className="relative z-10"
              >
                <path d="M401.4 354.2c-2.9.1-5.8.2-8.7.2-47.9 0-93-18.9-126.8-53.4-33.9-34.4-52.5-80.1-52.5-128.8 0-27.7 6.1-54.5 17.5-78.7 3.1-6.6 9.3-16.6 13.6-23.4 1.9-2.9-.5-6.7-3.9-6.1-6 .9-15.2 2.9-27.7 6.8C135.1 95.5 80 168.7 80 255c0 106.6 85.1 193 190.1 193 58 0 110-26.4 144.9-68.1 6-7.2 11.5-13.8 16.4-21.8 1.8-3-.7-6.7-4.1-6.1-8.5 1.7-17.1 1.8-25.9 2.2z"></path>
              </svg>
              <span className="absolute inset-0 bg-warmOrange/0 rounded-full transition-all duration-300 group-hover:bg-warmOrange/10 group-hover:shadow-[0_0_15px_3px_rgba(255,107,53,0.3)] z-0"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
