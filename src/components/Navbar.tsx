import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import type { PageId } from '../types';
import { Flame, Sun, Moon, Menu, X, Sparkles, Dumbbell } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme, activePage, setActivePage, openTrialModal } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'memberships', label: 'Memberships' },
    { id: 'classes', label: 'Classes' },
    { id: 'trainers', label: 'Coaches' },
    { id: 'calculator', label: 'Macro Calculator' },
    { id: 'blog', label: 'Journal' },
    { id: 'about', label: 'Facility' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (pageId: PageId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-gray-950/80 border-b border-gray-800/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 group text-left cursor-pointer focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-red-600 to-orange-500 flex items-center justify-center text-white shadow-lg glow-red group-hover:scale-105 transition-transform">
            <Flame className="w-6 h-6 fill-current" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold font-heading text-xl tracking-tight text-white">
                FORGE<span className="text-red-500">FIT</span>
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 bg-red-500/20 text-red-400 rounded border border-red-500/30">
                GYM
              </span>
            </div>
            <span className="text-[10px] text-gray-400 tracking-wider block uppercase font-mono">
              STRENGTH & ATHLETICS
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-gray-900/60 p-1.5 rounded-full border border-gray-800/80">
          {navItems.map(item => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3.5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                  isActive
                    ? 'bg-red-600 text-white shadow-md glow-red'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800/60'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full bg-gray-900 border border-gray-800 text-gray-300 hover:text-white hover:border-gray-700 transition-all cursor-pointer"
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-400" />}
          </button>

          {/* CTA Free Trial Pass */}
          <button
            onClick={openTrialModal}
            className="px-5 py-2.5 bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-500 hover:to-orange-400 text-white text-xs font-extrabold uppercase tracking-wider rounded-full shadow-lg glow-red transition-all flex items-center gap-2 cursor-pointer hover:scale-105"
          >
            <Sparkles className="w-4 h-4" />
            Free 7-Day Pass
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-900 border border-gray-800 text-gray-300"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-400" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-gray-900 border border-gray-800 text-gray-200 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-gray-950/95 border-b border-gray-800 px-4 py-6 space-y-3 animate-fade-in">
          <div className="space-y-1">
            {navItems.map(item => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
                    isActive ? 'bg-red-600 text-white font-bold' : 'text-gray-300 hover:bg-gray-900'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <Dumbbell className="w-4 h-4" />}
                </button>
              );
            })}
          </div>

          <div className="pt-4 border-t border-gray-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openTrialModal();
              }}
              className="w-full py-3.5 bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold text-sm rounded-xl shadow-lg flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              Claim Free 7-Day Pass
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
