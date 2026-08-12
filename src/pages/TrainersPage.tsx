import React, { useState, useMemo } from 'react';
import { useTheme } from '../context/ThemeContext';
import { TRAINERS_DATA } from '../data/mockData';
import { Award, Dumbbell, Sparkles } from 'lucide-react';

export const TrainersPage: React.FC = () => {
  const { openTrainerModal, openTrialModal } = useTheme();
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('All');

  const specialtiesList = ['All', 'Strength', 'HIIT', 'Yoga', 'Combat'];

  const filteredTrainers = useMemo(() => {
    if (selectedSpecialty === 'All') return TRAINERS_DATA;
    return TRAINERS_DATA.filter(t => t.specialty === selectedSpecialty);
  }, [selectedSpecialty]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-red-500 bg-red-500/10 px-3.5 py-1.5 rounded-full border border-red-500/20">
          WORLD-CLASS COACHING STAFF
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-white">
          MEET THE <span className="text-gradient-red">FORGEFIT COACHES</span>
        </h1>
        <p className="text-sm sm:text-base text-gray-300">
          Our team consists of Division I athletes, state powerlifting record holders, E-RYT yoga masters, and certified boxing coaches committed to your physical growth.
        </p>

        {/* Specialty Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 pt-4">
          {specialtiesList.map(spec => (
            <button
              key={spec}
              onClick={() => setSelectedSpecialty(spec)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                selectedSpecialty === spec
                  ? 'bg-red-600 text-white shadow-lg glow-red'
                  : 'bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:bg-gray-800'
              }`}
            >
              {spec === 'All' ? 'All Specialties' : `${spec} Coaches`}
            </button>
          ))}
        </div>
      </div>

      {/* TRAINERS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredTrainers.map(trainer => (
          <div
            key={trainer.id}
            className="glass-panel rounded-3xl overflow-hidden border border-gray-800 hover:border-red-500/50 transition-all duration-300 flex flex-col justify-between group bg-gray-900/60"
          >
            <div>
              {/* Photo Header */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent"></div>

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-red-600/90 text-white font-bold text-[10px] uppercase rounded-full tracking-wider shadow">
                    {trainer.specialty}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold font-heading text-white">{trainer.name}</h3>
                  <p className="text-xs text-red-400 font-semibold">{trainer.title}</p>
                </div>
              </div>

              {/* Bio snippet & certs */}
              <div className="p-6 space-y-4">
                <p className="text-xs text-gray-300 leading-relaxed line-clamp-3">{trainer.bio}</p>

                <div className="p-3 bg-gray-950 rounded-xl border border-gray-800/80 flex items-center justify-between text-xs text-gray-400">
                  <div className="flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-amber-400" />
                    <span>{trainer.experienceYears}+ Years Coaching</span>
                  </div>
                  <span className="text-[10px] text-gray-500 font-mono">{trainer.certifications.length} Certs</span>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="px-6 pb-6 pt-2 flex gap-3">
              <button
                onClick={() => openTrainerModal(trainer)}
                className="flex-1 py-3 bg-gray-800 hover:bg-gray-700 text-white font-semibold text-xs rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                View Profile & Schedule
              </button>

              <button
                onClick={openTrialModal}
                className="p-3 bg-red-600 hover:bg-red-500 text-white rounded-xl transition-colors cursor-pointer shadow-md glow-red"
                title="Book 1-on-1 Session"
              >
                <Dumbbell className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* COACHING PHILOSOPHY BANNER */}
      <div className="glass-panel rounded-3xl p-8 md:p-12 border border-red-500/30 text-center max-w-4xl mx-auto space-y-4 bg-gradient-to-br from-gray-900 to-black">
        <Sparkles className="w-8 h-8 text-red-500 mx-auto animate-pulse" />
        <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
          WANT 1-ON-1 PERSONAL COACHING?
        </h2>
        <p className="text-sm text-gray-300 max-w-xl mx-auto">
          Our coaches offer tailored 1-on-1 strength programming, nutrition accountability, and technique assessment for members seeking targeted acceleration.
        </p>
        <button
          onClick={openTrialModal}
          className="px-8 py-3.5 bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-500 hover:to-orange-400 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg glow-red transition-all cursor-pointer"
        >
          Book a Free Coaching Consultation
        </button>
      </div>

    </div>
  );
};
