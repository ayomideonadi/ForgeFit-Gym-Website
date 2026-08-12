import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { CLASSES_DATA, TRAINERS_DATA, TESTIMONIALS_DATA } from '../data/mockData';
import { Flame, Sparkles, ArrowRight, ShieldCheck, Flame as BurnIcon, Trophy, Star, ChevronLeft, ChevronRight, Dumbbell, HeartPulse } from 'lucide-react';

export const HomePage: React.FC = () => {
  const { setActivePage, openTrialModal, openTrainerModal, showToast } = useTheme();
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);

  const featuredClasses = CLASSES_DATA.slice(0, 3);
  const featuredTrainers = TRAINERS_DATA.slice(0, 3);

  const nextTestimonial = () => {
    setActiveTestimonialIdx(prev => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonialIdx(prev => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  const handleReserveClass = (className: string) => {
    openTrialModal();
    showToast(`Reserving spot for ${className}. Claim your free pass below!`, 'info');
  };

  return (
    <div className="space-y-20 pb-16">
      
      {/* HERO SECTION */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-gradient-hero">
        {/* Background Decorative Ambient Circles */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-40 right-10 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-widest">
                <Flame className="w-4 h-4 fill-current animate-pulse text-red-500" />
                #1 Voted Premier Fitness & Conditioning Gym
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-heading tracking-tight leading-[1.08] text-white">
                FORGE YOUR <br />
                <span className="text-gradient-red">STRONGEST SELF</span>
              </h1>

              <p className="text-base sm:text-lg text-gray-300 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Elevate your training with world-class barbell strength floors, high-burn HIIT turf sessions, elite Olympic coaches, and luxury infrared recovery suites.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={openTrialModal}
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-500 hover:to-orange-400 text-white font-extrabold text-sm uppercase tracking-wider rounded-xl shadow-xl glow-red transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-105"
                >
                  <Sparkles className="w-5 h-5" />
                  Start 7-Day Free Trial
                </button>
                <button
                  onClick={() => setActivePage('memberships')}
                  className="w-full sm:w-auto px-8 py-4 bg-gray-900/90 hover:bg-gray-800 border border-gray-700 text-white font-bold text-sm rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  View Membership Plans
                  <ArrowRight className="w-4 h-4 text-red-500" />
                </button>
              </div>

              {/* Live Proof Counter */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-gray-800/80">
                <div>
                  <span className="block text-2xl sm:text-3xl font-extrabold font-heading text-white">2,500+</span>
                  <span className="text-xs text-gray-400 font-medium">Active Members</span>
                </div>
                <div>
                  <span className="block text-2xl sm:text-3xl font-extrabold font-heading text-white">45+</span>
                  <span className="text-xs text-gray-400 font-medium">Classes Weekly</span>
                </div>
                <div>
                  <span className="block text-2xl sm:text-3xl font-extrabold font-heading text-white">12</span>
                  <span className="text-xs text-gray-400 font-medium">Pro Coaches</span>
                </div>
                <div>
                  <span className="block text-2xl sm:text-3xl font-extrabold font-heading text-white flex items-center justify-center lg:justify-start gap-1">
                    4.9 <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                  </span>
                  <span className="text-xs text-gray-400 font-medium">Google Rating</span>
                </div>
              </div>

            </div>

            {/* Right Media Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-red-500/30 shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80"
                  alt="ForgeFit Training Floor"
                  className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent"></div>

                {/* Floating Badge 1 */}
                <div className="absolute top-6 right-6 glass-panel px-4 py-2.5 rounded-2xl flex items-center gap-2.5 shadow-xl border border-white/10">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full animate-ping"></div>
                  <span className="text-xs font-bold text-white">Turf Zone Open</span>
                </div>

                {/* Floating Card Bottom */}
                <div className="absolute bottom-6 left-6 right-6 glass-panel p-5 rounded-2xl border border-red-500/30">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-red-600/30 border border-red-500/50 flex items-center justify-center text-red-400">
                        <Dumbbell className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white font-heading">Heavy Barbell & HIIT Floor</h4>
                        <p className="text-xs text-gray-300">Eleiko Equipment • Rogue Sleds • Sauna</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* VALUE PROPOSITION PILLARS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-red-500 bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">
            WHY FORGEFIT?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-white mt-3">
            BUILT DIFFERENT FOR MAXIMUM RESULTS
          </h2>
          <p className="text-sm text-gray-400 mt-2">
            Every square foot of ForgeFit is engineered for performance, community support, and holistic health.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="glass-panel p-6 rounded-2xl border border-gray-800 hover:border-red-500/40 transition-all hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-red-500/20 border border-red-500/30 flex items-center justify-center text-red-500 mb-4">
              <Dumbbell className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold font-heading text-white mb-2">State-of-the-Art Arsenal</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              10 Eleiko power racks, calibrated competition plates, curved Woodway treadmills, and custom cable rigs.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-gray-800 hover:border-red-500/40 transition-all hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-500 mb-4">
              <Trophy className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold font-heading text-white mb-2">Elite Certified Coaches</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Train alongside Division I athletes, powerlifting record holders, and master mobility specialists.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-gray-800 hover:border-red-500/40 transition-all hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4">
              <HeartPulse className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold font-heading text-white mb-2">Infrared & Cold Plunge</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Accelerate muscle repair and reduce inflammation with our Finnish saunas and 44°F cold plunge tubs.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-gray-800 hover:border-red-500/40 transition-all hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold font-heading text-white mb-2">Transparent Contracts</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Flexible month-to-month passes with zero hidden sign-up fees or predatory cancellation rules.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED CLASSES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-red-500 bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">
              WEEKLY SCHEDULE HIGHLIGHTS
            </span>
            <h2 className="text-3xl font-extrabold font-heading text-white mt-2">FEATURED CLASSES</h2>
          </div>
          <button
            onClick={() => setActivePage('classes')}
            className="text-xs font-bold text-red-400 hover:text-red-300 flex items-center gap-1 cursor-pointer"
          >
            Explore All 45+ Weekly Classes <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredClasses.map(cls => (
            <div
              key={cls.id}
              className="glass-panel rounded-2xl overflow-hidden border border-gray-800 hover:border-red-500/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={cls.trainerImage}
                    alt={cls.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent"></div>
                  
                  <span className="absolute top-3 left-3 px-3 py-1 bg-red-600 text-white font-bold text-[10px] uppercase rounded-full tracking-wider shadow">
                    {cls.category}
                  </span>

                  <span className="absolute bottom-3 right-3 px-2.5 py-1 bg-black/70 backdrop-blur text-gray-200 text-xs font-mono rounded flex items-center gap-1 border border-white/10">
                    <BurnIcon className="w-3.5 h-3.5 text-orange-400" />
                    ~{cls.burnKcal} Kcal
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-center text-xs text-gray-400 mb-2">
                    <span className="font-semibold text-red-400">{cls.day} • {cls.time}</span>
                    <span className="px-2 py-0.5 bg-gray-800 text-gray-300 rounded text-[10px] uppercase font-bold">{cls.difficulty}</span>
                  </div>

                  <h3 className="text-xl font-bold font-heading text-white mb-2">{cls.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed mb-4">{cls.description}</p>

                  <div className="flex items-center gap-2 pt-2 border-t border-gray-800 text-xs text-gray-300">
                    <span className="text-gray-500">Coach:</span>
                    <span className="font-semibold text-white">{cls.trainerName}</span>
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2">
                <button
                  onClick={() => handleReserveClass(cls.title)}
                  className="w-full py-2.5 bg-gray-800 hover:bg-red-600 text-white font-semibold rounded-xl text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  Reserve Free Spot
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MEET OUR COACHES SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-red-500 bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">
              WORLD-CLASS MENTORS
            </span>
            <h2 className="text-3xl font-extrabold font-heading text-white mt-2">MEET OUR HEAD COACHES</h2>
          </div>
          <button
            onClick={() => setActivePage('trainers')}
            className="text-xs font-bold text-red-400 hover:text-red-300 flex items-center gap-1 cursor-pointer"
          >
            View Full Roster <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredTrainers.map(trainer => (
            <div
              key={trainer.id}
              onClick={() => openTrainerModal(trainer)}
              className="glass-panel rounded-2xl overflow-hidden border border-gray-800 hover:border-red-500/50 transition-all duration-300 cursor-pointer group"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/30 to-transparent"></div>
                
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="px-2.5 py-1 bg-red-600/90 text-white font-bold text-[10px] uppercase rounded tracking-wider">
                    {trainer.specialty} Specialist
                  </span>
                  <h3 className="text-xl font-bold font-heading text-white mt-1">{trainer.name}</h3>
                  <p className="text-xs text-gray-300">{trainer.title}</p>
                </div>
              </div>
              <div className="p-4 bg-gray-950 flex items-center justify-between text-xs text-gray-400 border-t border-gray-800">
                <span>{trainer.experienceYears}+ Yrs Experience</span>
                <span className="text-red-400 font-semibold group-hover:translate-x-1 transition-transform">
                  View Bio & Schedule →
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MEMBER TRANSFORMATIONS & REVIEWS CAROUSEL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-3xl p-8 md:p-12 border border-red-500/30 relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-950 to-black">
          <div className="max-w-3xl mx-auto text-center">
            
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
              ))}
            </div>

            <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-xs font-bold uppercase tracking-widest">
              {TESTIMONIALS_DATA[activeTestimonialIdx].result}
            </span>

            <blockquote className="text-xl md:text-2xl font-medium text-white italic my-6 leading-relaxed">
              "{TESTIMONIALS_DATA[activeTestimonialIdx].quote}"
            </blockquote>

            <div className="flex items-center justify-center gap-3">
              <img
                src={TESTIMONIALS_DATA[activeTestimonialIdx].avatar}
                alt={TESTIMONIALS_DATA[activeTestimonialIdx].name}
                className="w-12 h-12 rounded-full border-2 border-red-500 object-cover"
              />
              <div className="text-left">
                <h4 className="font-bold text-white text-base font-heading">
                  {TESTIMONIALS_DATA[activeTestimonialIdx].name}
                </h4>
                <p className="text-xs text-gray-400">
                  {TESTIMONIALS_DATA[activeTestimonialIdx].role} • Member since 2025
                </p>
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="p-2.5 rounded-full bg-gray-900 border border-gray-800 text-gray-300 hover:text-white hover:border-gray-700 transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex gap-2">
                {TESTIMONIALS_DATA.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTestimonialIdx(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                      idx === activeTestimonialIdx ? 'w-8 bg-red-500' : 'bg-gray-700'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="p-2.5 rounded-full bg-gray-900 border border-gray-800 text-gray-300 hover:text-white hover:border-gray-700 transition-colors cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* FINAL CONVERSION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl p-10 md:p-16 overflow-hidden bg-gradient-to-r from-red-600 via-red-700 to-orange-600 text-white shadow-2xl text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <span className="px-3 py-1 bg-white/20 text-white text-xs font-extrabold uppercase tracking-widest rounded-full">
              NO CREDIT CARD REQUIRED
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold font-heading tracking-tight">
              READY TO CLAIM YOUR 7-DAY VIP PASS?
            </h2>
            <p className="text-red-100 text-sm">
              Step into ForgeFit today. Train with our equipment, join any class, and feel the energy of our community.
            </p>
          </div>

          <button
            onClick={openTrialModal}
            className="px-8 py-4 bg-white hover:bg-gray-100 text-red-600 font-extrabold text-sm uppercase tracking-wider rounded-xl shadow-2xl transition-all cursor-pointer shrink-0 hover:scale-105"
          >
            Claim Free Pass Now
          </button>
        </div>
      </section>

    </div>
  );
};
