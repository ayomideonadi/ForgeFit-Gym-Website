import React, { useState } from 'react';
import { MapPin, Navigation, Bus, Car } from 'lucide-react';

export const InteractiveMap: React.FC = () => {
  const [activePin, setActivePin] = useState<'main' | 'parking' | 'transit'>('main');

  return (
    <div className="rounded-2xl overflow-hidden glass-panel border border-gray-800 bg-gray-900/90 shadow-2xl">
      {/* Map Header */}
      <div className="p-4 bg-gray-950 border-b border-gray-800 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <MapPin className="w-5 h-5 text-red-500" />
          <span className="font-bold font-heading text-sm text-white">ForgeFit HQ Map & Directions</span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping"></span>
          <span className="text-emerald-400 font-semibold">OPEN NOW • Closes 11:00 PM</span>
        </div>
      </div>

      {/* Simulated Map Visual Canvas */}
      <div className="relative h-72 md:h-80 w-full bg-slate-950 overflow-hidden select-none">
        {/* Map Grid Lines Background */}
        <div className="absolute inset-0 bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>

        {/* Roads & Blocks Vector Visual */}
        <svg className="absolute inset-0 w-full h-full text-slate-800" xmlns="http://www.w3.org/2000/svg">
          {/* Main Avenue */}
          <rect x="0" y="110" width="100%" height="45" fill="#1e293b" />
          <line x1="0" y1="132" x2="100%" y2="132" stroke="#475569" strokeWidth="2" strokeDasharray="10 10" />

          {/* Cross Street */}
          <rect x="220" y="0" width="40" height="100%" fill="#1e293b" />
          <line x1="240" y1="0" x2="240" y2="100%" stroke="#475569" strokeWidth="2" strokeDasharray="10 10" />

          {/* Buildings */}
          <rect x="30" y="20" width="160" height="75" rx="8" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
          <rect x="280" y="20" width="180" height="75" rx="8" fill="#0f172a" stroke="#334155" strokeWidth="1.5" />
          
          {/* ForgeFit Main Compound */}
          <rect x="50" y="170" width="220" height="110" rx="12" fill="#111827" stroke="#ff2e4d" strokeWidth="2" />

          {/* Parking Lot */}
          <rect x="300" y="180" width="150" height="90" rx="8" fill="#0f172a" stroke="#334155" strokeWidth="1.5" strokeDasharray="4 4" />
        </svg>

        {/* Text Labels on Map */}
        <div className="absolute top-[125px] left-6 text-[10px] font-mono tracking-widest uppercase text-gray-400">
          IRONWORKS BLVD
        </div>
        <div className="absolute top-12 right-12 text-[10px] font-mono tracking-widest uppercase text-gray-400">
          METRO FITNESS DISTRICT
        </div>

        {/* Hotspot Pins */}
        {/* Main Gym Pin */}
        <button
          onClick={() => setActivePin('main')}
          className={`absolute top-[200px] left-[130px] -translate-x-1/2 -translate-y-1/2 transition-transform cursor-pointer ${
            activePin === 'main' ? 'scale-125 z-20' : 'scale-100 opacity-80 hover:opacity-100'
          }`}
        >
          <div className="relative flex flex-col items-center">
            <div className="px-3 py-1 bg-red-600 text-white font-bold text-xs rounded-full shadow-lg flex items-center gap-1 border border-white/20 whitespace-nowrap glow-red">
              <MapPin className="w-3.5 h-3.5" />
              ForgeFit HQ
            </div>
            <div className="w-2 h-3 bg-red-600 [clip-path:polygon(50%_100%,0_0,100%_0)]"></div>
          </div>
        </button>

        {/* Parking Pin */}
        <button
          onClick={() => setActivePin('parking')}
          className={`absolute top-[215px] left-[360px] -translate-x-1/2 -translate-y-1/2 transition-transform cursor-pointer ${
            activePin === 'parking' ? 'scale-125 z-20' : 'scale-100 opacity-80 hover:opacity-100'
          }`}
        >
          <div className="relative flex flex-col items-center">
            <div className="px-2.5 py-1 bg-blue-600 text-white font-bold text-[11px] rounded-full shadow-lg flex items-center gap-1 border border-white/20 whitespace-nowrap">
              <Car className="w-3.5 h-3.5" />
              Free Parking (200 spots)
            </div>
            <div className="w-2 h-2.5 bg-blue-600 [clip-path:polygon(50%_100%,0_0,100%_0)]"></div>
          </div>
        </button>

        {/* Transit Pin */}
        <button
          onClick={() => setActivePin('transit')}
          className={`absolute top-[45px] left-[110px] -translate-x-1/2 -translate-y-1/2 transition-transform cursor-pointer ${
            activePin === 'transit' ? 'scale-125 z-20' : 'scale-100 opacity-80 hover:opacity-100'
          }`}
        >
          <div className="relative flex flex-col items-center">
            <div className="px-2.5 py-1 bg-emerald-600 text-white font-bold text-[11px] rounded-full shadow-lg flex items-center gap-1 border border-white/20 whitespace-nowrap">
              <Bus className="w-3.5 h-3.5" />
              Metro Station (2 min walk)
            </div>
            <div className="w-2 h-2.5 bg-emerald-600 [clip-path:polygon(50%_100%,0_0,100%_0)]"></div>
          </div>
        </button>
      </div>

      {/* Map Footer Information */}
      <div className="p-4 bg-gray-900 border-t border-gray-800">
        {activePin === 'main' && (
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <div>
              <h4 className="font-bold text-white text-sm">ForgeFit Gym HQ</h4>
              <p className="text-xs text-gray-400">124 Ironworks Blvd, Metro Fitness District, NY 10001</p>
            </div>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5 shrink-0"
            >
              <Navigation className="w-3.5 h-3.5" />
              Get Directions
            </a>
          </div>
        )}

        {activePin === 'parking' && (
          <div>
            <h4 className="font-bold text-blue-400 text-sm flex items-center gap-1.5">
              <Car className="w-4 h-4" /> Member Parking Structure
            </h4>
            <p className="text-xs text-gray-300 mt-0.5">
              Covered multi-level garage free for 3 hours with key fob scan. EV charging stations available on Level 1.
            </p>
          </div>
        )}

        {activePin === 'transit' && (
          <div>
            <h4 className="font-bold text-emerald-400 text-sm flex items-center gap-1.5">
              <Bus className="w-4 h-4" /> Public Transit Access
            </h4>
            <p className="text-xs text-gray-300 mt-0.5">
              Central Station Line 4 & 7 exit directly at Ironworks Plaza, 150 meters from our main entrance.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
