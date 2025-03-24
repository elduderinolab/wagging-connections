
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Pencil, Globe, Mail, Moon, Sun } from 'lucide-react';
import { Separator } from './ui/separator';
import { useTheme } from 'next-themes';

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50">
      <div className="relative flex h-16 items-center justify-center px-4 text-foreground">
        <div className="supports-backdrop-blur:bg-white/10 mx-auto mt-8 flex h-[58px] w-max justify-center gap-2 rounded-2xl border p-2 backdrop-blur-md items-center bg-white/90 shadow-lg">
          {/* Home Link */}
          <div className="flex aspect-square cursor-pointer items-center justify-center rounded-full group hover:scale-110 transition-transform duration-300" style={{ padding: '8px', width: '58.8571px', height: '58.8571px' }}>
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
              href="mailto:matchmypup.info@gmail.com"
            >
              <Mail className="size-4 relative z-10" />
              <span className="absolute inset-0 bg-warmOrange/0 rounded-full transition-all duration-300 group-hover:bg-warmOrange/10 group-hover:shadow-[0_0_15px_3px_rgba(255,107,53,0.3)] z-0"></span>
            </a>
          </div>

          <Separator orientation="vertical" className="h-8" />

          {/* Theme Toggle */}
          <div className="flex aspect-square cursor-pointer items-center justify-center rounded-full group hover:scale-110 transition-transform duration-300" style={{ padding: '8px', width: '40px', height: '40px' }}>
            <button 
              className="theme-toggle p-2 rounded-lg relative group-hover:text-warmOrange"
              onClick={toggleTheme}
            >
              {theme === 'dark' ? (
                <Sun className="size-4 relative z-10" />
              ) : (
                <Moon className="size-4 relative z-10" />
              )}
              <span className="absolute inset-0 bg-warmOrange/0 rounded-full transition-all duration-300 group-hover:bg-warmOrange/10 group-hover:shadow-[0_0_15px_3px_rgba(255,107,53,0.3)] z-0"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
