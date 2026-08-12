import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import type { PageId } from '../types';
import { Flame, MapPin, Phone, Clock, Send, Share2, Globe, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  const { setActivePage, openTrialModal, showToast } = useTheme();
  const [emailInput, setEmailInput] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      showToast('🔥 Subscribed to ForgeFit Weekly Workout & Nutrition tips!', 'success');
      setEmailInput('');
    }
  };

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'memberships', label: 'Membership Plans' },
    { id: 'classes', label: 'Class Schedule' },
    { id: 'trainers', label: 'Expert Coaches' },
    { id: 'about', label: 'Facility & Story' },
    { id: 'contact', label: 'Contact Us' },
  ];

  return (
    <footer className="bg-gray-950 text-gray-400 border-t border-gray-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-red-600 to-orange-500 flex items-center justify-center text-white shadow-lg glow-red">
                <Flame className="w-6 h-6 fill-current" />
              </div>
              <span className="font-extrabold font-heading text-2xl tracking-tight text-white">
                FORGE<span className="text-red-500">FIT</span> GYM
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              ForgeFit is a premier strength, conditioning, and recovery facility designed to help athletes of all levels unlock their true physical potential.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a href="#social" title="Social Feed" className="w-9 h-9 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-red-400 hover:border-red-500/50 transition-colors">
                <Share2 className="w-4 h-4" />
              </a>
              <a href="#community" title="Member Forum" className="w-9 h-9 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-red-400 hover:border-red-500/50 transition-colors">
                <MessageCircle className="w-4 h-4" />
              </a>
              <a href="#website" title="Global Site" className="w-9 h-9 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-red-400 hover:border-red-500/50 transition-colors">
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold font-heading uppercase text-xs tracking-wider mb-4 border-l-2 border-red-500 pl-2">
              Explore Pages
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              {navLinks.map(link => (
                <li key={link.id}>
                  <button
                    onClick={() => setActivePage(link.id)}
                    className="hover:text-red-400 transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Hours */}
          <div>
            <h4 className="text-white font-bold font-heading uppercase text-xs tracking-wider mb-4 border-l-2 border-red-500 pl-2">
              Hours & Location
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>124 Ironworks Blvd, Metro District, NY 10001</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-semibold">Mon – Fri: 05:00 AM – 11:00 PM</p>
                  <p className="text-gray-400">Sat – Sun: 07:00 AM – 09:00 PM</p>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-red-500 shrink-0" />
                <span className="text-white font-semibold">(555) 892-3400</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscribe */}
          <div>
            <h4 className="text-white font-bold font-heading uppercase text-xs tracking-wider mb-4 border-l-2 border-red-500 pl-2">
              Join the Forge Newsletter
            </h4>
            <p className="text-xs text-gray-400 mb-3">
              Get weekly workout plans, nutrition guides, and class announcements straight to your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={emailInput}
                  onChange={e => setEmailInput(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-gray-900 border border-gray-800 rounded-xl text-xs text-white placeholder-gray-500 focus:outline-none focus:border-red-500"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 bottom-1.5 px-3 bg-red-600 hover:bg-red-500 text-white rounded-lg text-xs font-bold transition-colors flex items-center justify-center cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-gray-900 text-center md:flex md:justify-between md:items-center text-xs text-gray-500">
          <p>© 2026 ForgeFit Gym Inc. All rights reserved.</p>
          <div className="flex gap-6 justify-center mt-4 md:mt-0">
            <button onClick={openTrialModal} className="hover:text-red-400 transition-colors">Free Trial Terms</button>
            <button onClick={() => setActivePage('contact')} className="hover:text-red-400 transition-colors">Privacy Policy</button>
            <button onClick={() => setActivePage('contact')} className="hover:text-red-400 transition-colors">Contact Support</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
