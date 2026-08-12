import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { X, Award, Calendar, Quote, CheckCircle2, Dumbbell } from 'lucide-react';

export const TrainerDetailModal: React.FC = () => {
  const { selectedTrainer, closeTrainerModal, openTrialModal, showToast } = useTheme();

  if (!selectedTrainer) return null;

  const handleBookSession = () => {
    closeTrainerModal();
    openTrialModal();
    showToast(`Requesting private session setup with ${selectedTrainer.name}`, 'info');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl glass-panel rounded-2xl p-6 md:p-8 shadow-2xl border border-gray-700 bg-gray-900/95 text-white max-h-[90vh] overflow-y-auto">
        <button
          onClick={closeTrainerModal}
          className="absolute top-5 right-5 text-gray-400 hover:text-white p-2 rounded-full hover:bg-gray-800 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col md:flex-row gap-6 items-start">
          {/* Trainer Image */}
          <div className="w-full md:w-5/12 rounded-xl overflow-hidden shadow-lg border border-gray-800 shrink-0">
            <img
              src={selectedTrainer.image}
              alt={selectedTrainer.name}
              className="w-full h-72 md:h-80 object-cover"
            />
            <div className="bg-gray-950 p-4 border-t border-gray-800">
              <span className="text-xs font-semibold uppercase tracking-wider text-red-400 block mb-1">
                Specialty: {selectedTrainer.specialty}
              </span>
              <div className="flex items-center gap-1.5 text-xs text-gray-300">
                <Award className="w-4 h-4 text-amber-400" />
                <span>{selectedTrainer.experienceYears}+ Years Coaching</span>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="w-full md:w-7/12 space-y-4">
            <div>
              <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-xs font-bold uppercase tracking-wider">
                {selectedTrainer.title}
              </span>
              <h2 className="text-3xl font-bold font-heading text-white mt-2">{selectedTrainer.name}</h2>
            </div>

            <div className="p-4 bg-gray-800/40 rounded-xl border border-gray-800 italic text-sm text-gray-300 relative">
              <Quote className="w-6 h-6 text-red-500/30 absolute top-2 right-2" />
              "{selectedTrainer.quote}"
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Biography & Focus</h4>
              <p className="text-sm text-gray-300 leading-relaxed">{selectedTrainer.bio}</p>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Certifications</h4>
              <ul className="space-y-1.5">
                {selectedTrainer.certifications.map((cert, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0" />
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>

            {selectedTrainer.schedule && selectedTrainer.schedule.length > 0 && (
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Weekly Class Times</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedTrainer.schedule.map((item, idx) => (
                    <div key={idx} className="px-3 py-1.5 bg-gray-800 rounded-lg text-xs border border-gray-700 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-red-400" />
                      <span className="font-semibold text-white">{item.day} {item.time}</span>
                      <span className="text-gray-400">({item.className})</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="pt-2 flex gap-3">
              <button
                onClick={handleBookSession}
                className="flex-1 py-3 bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-500 hover:to-orange-400 text-white font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer text-sm"
              >
                <Dumbbell className="w-4 h-4" />
                Book Session with {selectedTrainer.name.split(' ')[0]}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
