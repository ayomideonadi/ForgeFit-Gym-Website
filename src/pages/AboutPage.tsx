import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { FACILITIES_DATA } from '../data/mockData';
import { HeartPulse, Coffee, Lock, Award, CheckCircle2 } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { openTrialModal } = useTheme();
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Weight Floor', 'Cardio Zone', 'Turf Track', 'Recovery', 'Boxing'];

  const filteredPhotos = activeCategory === 'All'
    ? FACILITIES_DATA
    : FACILITIES_DATA.filter(f => f.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-red-500 bg-red-500/10 px-3.5 py-1.5 rounded-full border border-red-500/20">
          FORGED IN GRIT • DRIVEN BY PURPOSE
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-white">
          THE <span className="text-gradient-red">FORGEFIT STORY</span> & FACILITY
        </h1>
        <p className="text-sm sm:text-base text-gray-300">
          Founded in 2021, ForgeFit was built to bridge the gap between hard-core athletic performance centers and luxury wellness clubs.
        </p>
      </div>

      {/* MISSION & VISION BANNER */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-6 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-red-400">OUR CORE PHILOSOPHY</span>
          <h2 className="text-3xl font-extrabold font-heading text-white">
            WE BELIEVE STRENGTH IS THE FOUNDATION OF HEALTH
          </h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            At ForgeFit, we reject generic commercial gym models filled with broken machines and silent crowds. We created a high-energy compound where lifting heavy, sweating hard, and prioritizing recovery are celebrated every day.
          </p>
          <p className="text-sm text-gray-300 leading-relaxed">
            Whether your goal is competing in powerlifting, shedding 30 pounds, building lean muscle, or simply moving without back pain, our facility provides the exact tools and community to get you there.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-white">
              <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
              <span>15,000 Sq. Ft. Training Floor</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-white">
              <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
              <span>Eleiko & Rogue Certified Facility</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-white">
              <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
              <span>24/7 Keyless App Entry</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-white">
              <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
              <span>Finnish Cedar Saunas</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="relative rounded-3xl overflow-hidden border border-red-500/30 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80"
              alt="ForgeFit Interior"
              className="w-full h-80 md:h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 glass-panel p-4 rounded-xl border border-white/10 text-xs text-gray-200">
              <span className="font-bold text-white block">Main Lifting Arena</span>
              Custom Eleiko lifting platforms & Rogue dumbell racks up to 150 lbs.
            </div>
          </div>
        </div>
      </div>

      {/* AMENITIES HIGHLIGHTS GRID */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-red-500">PREMIUM PERKS</span>
          <h2 className="text-3xl font-extrabold font-heading text-white">WORLD-CLASS AMENITIES</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="glass-panel p-6 rounded-2xl border border-gray-800 space-y-3 bg-gray-900/60">
            <div className="w-10 h-10 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center border border-red-500/30">
              <HeartPulse className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold font-heading text-white">Sauna & Cold Plunge</h3>
            <p className="text-xs text-gray-400">
              Dual Finnish cedar saunas and 44°F cold immersion plunges for optimal inflammation control.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-gray-800 space-y-3 bg-gray-900/60">
            <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center border border-orange-500/30">
              <Coffee className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold font-heading text-white">Organic Protein Bar</h3>
            <p className="text-xs text-gray-400">
              Fresh post-workout whey & vegan protein smoothies, cold brew on tap, and healthy macros.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-gray-800 space-y-3 bg-gray-900/60">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center border border-cyan-500/30">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold font-heading text-white">Luxury Locker Rooms</h3>
            <p className="text-xs text-gray-400">
              Keyless pin-lock lockers, rainfall showers, complimentary towel service, and Malin+Goetz products.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-gray-800 space-y-3 bg-gray-900/60">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold font-heading text-white">InBody 770 Analyzer</h3>
            <p className="text-xs text-gray-400">
              Medical-grade body composition scanning measuring visceral fat, segmental lean mass, and hydration.
            </p>
          </div>
        </div>
      </div>

      {/* FACILITY PHOTO GALLERY */}
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-red-500">FACILITY TOUR</span>
            <h2 className="text-3xl font-extrabold font-heading text-white mt-1">INTERACTIVE PHOTO GALLERY</h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-red-600 text-white shadow-md glow-red'
                    : 'bg-gray-900 border border-gray-800 text-gray-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map(photo => (
            <div
              key={photo.id}
              className="glass-panel rounded-2xl overflow-hidden border border-gray-800 hover:border-red-500/50 transition-all duration-300 group bg-gray-900/60"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                <span className="absolute top-3 left-3 px-2.5 py-1 bg-red-600/90 text-white text-[10px] font-bold uppercase rounded tracking-wider">
                  {photo.category}
                </span>
              </div>
              <div className="p-5 space-y-1">
                <h3 className="font-bold font-heading text-white text-lg">{photo.title}</h3>
                <p className="text-xs text-gray-400 line-clamp-2">{photo.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM CTA */}
      <div className="glass-panel rounded-3xl p-8 text-center max-w-3xl mx-auto space-y-4 border border-red-500/30">
        <h3 className="text-2xl font-extrabold font-heading text-white">SEE THE FACILITY IN PERSON</h3>
        <p className="text-xs text-gray-300">
          Book your 7-Day Free Pass and take a guided tour with one of our head coaches today.
        </p>
        <button
          onClick={openTrialModal}
          className="px-8 py-3 bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-500 hover:to-orange-400 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg glow-red transition-all cursor-pointer"
        >
          Schedule Tour & Claim Pass
        </button>
      </div>

    </div>
  );
};
