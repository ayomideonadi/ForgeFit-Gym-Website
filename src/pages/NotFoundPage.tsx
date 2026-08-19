import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Flame, Home, Calendar, Sparkles, ArrowLeft } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  const { setActivePage, openTrialModal } = useTheme();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center space-y-8">
      
      {/* Visual Badge */}
      <div className="relative inline-block">
        <div className="w-24 h-24 bg-red-500/10 border-2 border-red-500/30 rounded-3xl flex items-center justify-center mx-auto text-red-500 shadow-2xl glow-red animate-pulse">
          <Flame className="w-12 h-12 fill-current" />
        </div>
        <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-red-600 text-white font-mono text-xs font-bold rounded-full">
          404 ERROR
        </span>
      </div>

      <div className="space-y-3">
        <h1 className="text-4xl sm:text-6xl font-extrabold font-heading text-white">
          PAGE NOT <span className="text-gradient-red">FORGED YET</span>
        </h1>
        <p className="text-sm sm:text-base text-gray-300 max-w-lg mx-auto leading-relaxed">
          Looks like you wandered off the training floor! The route or page you are looking for doesn't exist or has been moved.
        </p>
      </div>

      {/* Quick Links Card */}
      <div className="glass-panel p-8 rounded-3xl border border-gray-800 max-w-xl mx-auto space-y-4 bg-gray-900/80">
        <h3 className="text-sm font-bold uppercase tracking-wider text-gray-400">WHERE WOULD YOU LIKE TO GO?</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <button
            onClick={() => setActivePage('home')}
            className="py-3 px-4 bg-gray-800 hover:bg-gray-700 text-white text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Home className="w-4 h-4 text-red-400" />
            Return Home
          </button>

          <button
            onClick={() => setActivePage('classes')}
            className="py-3 px-4 bg-gray-800 hover:bg-gray-700 text-white text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-orange-400" />
            Class Schedule
          </button>

          <button
            onClick={openTrialModal}
            className="py-3 px-4 bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-500 hover:to-orange-400 text-white text-xs font-extrabold rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-lg glow-red"
          >
            <Sparkles className="w-4 h-4" />
            Free Trial Pass
          </button>
        </div>
      </div>

      <div>
        <button
          onClick={() => setActivePage('home')}
          className="text-xs font-semibold text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Safety
        </button>
      </div>

    </div>
  );
};
