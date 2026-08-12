import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { X, Dumbbell, Check, QrCode, Sparkles, User, Mail, Phone } from 'lucide-react';

export const FreeTrialModal: React.FC = () => {
  const { isTrialModalOpen, closeTrialModal, showToast } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    goal: 'Weight Loss & Lean Muscle',
    preferredDay: 'Tomorrow',
    preferredTime: '08:00 AM'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [passCode, setPassCode] = useState('');

  if (!isTrialModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedPass = `FF-${Math.floor(100000 + Math.random() * 900000)}`;
    setPassCode(generatedPass);
    setIsSubmitted(true);
    showToast(`🎉 Congratulations ${formData.name || 'Athlete'}! Your 7-Day Free Pass is active.`, 'success');
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    closeTrialModal();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg glass-panel rounded-2xl p-6 md:p-8 shadow-2xl border border-red-500/20 bg-gray-900/95 text-white max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-white p-2 rounded-full hover:bg-gray-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-red-500/20 border border-red-500/30 rounded-xl text-red-500">
                <Dumbbell className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-red-400">7-Day Free VIP Pass</span>
                <h3 className="text-2xl font-bold font-heading text-white">Start Your ForgeFit Journey</h3>
              </div>
            </div>

            <p className="text-sm text-gray-400 mb-6">
              Experience 7 days of unrestricted access to our state-of-the-art facility, group fitness classes, infrared sauna, and cold plunge. No credit card required.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                  Primary Fitness Goal
                </label>
                <select
                  value={formData.goal}
                  onChange={e => setFormData({ ...formData, goal: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-800/80 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-red-500 text-sm"
                >
                  <option value="Weight Loss & Lean Muscle">Weight Loss & Lean Muscle</option>
                  <option value="Strength & Powerlifting">Strength & Powerlifting</option>
                  <option value="Athletic HIIT & Endurance">Athletic HIIT & Endurance</option>
                  <option value="Boxing & Combat Conditioning">Boxing & Combat Conditioning</option>
                  <option value="Mind & Body Yoga / Mobility">Mind & Body Yoga / Mobility</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                    Start Day
                  </label>
                  <select
                    value={formData.preferredDay}
                    onChange={e => setFormData({ ...formData, preferredDay: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-800/80 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-red-500 text-sm"
                  >
                    <option value="Today">Today</option>
                    <option value="Tomorrow">Tomorrow</option>
                    <option value="This Weekend">This Weekend</option>
                    <option value="Next Week">Next Week</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                    Preferred Time
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={e => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-800/80 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-red-500 text-sm"
                  >
                    <option value="06:00 AM">06:00 AM (Early Bird)</option>
                    <option value="09:00 AM">09:00 AM (Morning)</option>
                    <option value="01:00 PM">01:00 PM (Midday)</option>
                    <option value="05:30 PM">05:30 PM (Evening)</option>
                    <option value="07:30 PM">07:30 PM (Night)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                  Full Name
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Johnson"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 bg-gray-800/80 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-red-500 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                  <input
                    type="email"
                    required
                    placeholder="alex@example.com"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 bg-gray-800/80 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-red-500 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                  <input
                    type="tel"
                    required
                    placeholder="(555) 019-2834"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 bg-gray-800/80 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-red-500 text-sm"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-500 hover:to-orange-400 text-white font-bold rounded-xl shadow-lg glow-red transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-5 h-5" />
                  Claim My Free 7-Day Pass
                </button>
              </div>

              <p className="text-center text-xs text-gray-500 mt-2">
                🔒 We respect your privacy. No spam. Cancel anytime.
              </p>
            </form>
          </div>
        ) : (
          <div className="text-center py-4">
            <div className="w-16 h-16 bg-red-500/20 border border-red-500/40 rounded-full flex items-center justify-center mx-auto mb-4 text-red-500 animate-pulse">
              <Check className="w-8 h-8" />
            </div>

            <span className="inline-block px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-xs font-bold uppercase tracking-widest mb-2">
              Pass Active & Ready
            </span>

            <h3 className="text-2xl font-bold font-heading text-white mb-2">Welcome to ForgeFit!</h3>
            <p className="text-sm text-gray-300 mb-6">
              Show this digital pass at reception on your first visit to get your physical key fob.
            </p>

            {/* Digital Pass Card */}
            <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black p-6 rounded-2xl border border-red-500/40 text-left relative overflow-hidden shadow-2xl mb-6">
              <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-red-500/10 rounded-full blur-2xl"></div>

              <div className="flex justify-between items-start mb-4 border-b border-gray-800 pb-3">
                <div>
                  <h4 className="font-bold text-red-500 text-lg tracking-wider font-heading">FORGEFIT GYM</h4>
                  <p className="text-xs text-gray-400">7-DAY VIP GUEST PASS</p>
                </div>
                <span className="px-2.5 py-1 bg-red-500 text-white font-mono text-xs font-bold rounded">
                  {passCode}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                <div>
                  <span className="block text-xs text-gray-500">MEMBER NAME</span>
                  <span className="font-semibold text-white">{formData.name || 'VIP Guest'}</span>
                </div>
                <div>
                  <span className="block text-xs text-gray-500">GOAL</span>
                  <span className="font-semibold text-gray-200 text-xs">{formData.goal}</span>
                </div>
                <div>
                  <span className="block text-xs text-gray-500">START DATE</span>
                  <span className="font-semibold text-gray-200">{formData.preferredDay} ({formData.preferredTime})</span>
                </div>
                <div>
                  <span className="block text-xs text-gray-500">LOCATION</span>
                  <span className="font-semibold text-gray-200">124 Ironworks Blvd</span>
                </div>
              </div>

              <div className="pt-3 border-t border-gray-800 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <QrCode className="w-8 h-8 text-red-400" />
                  <span>Scan at Turnstile</span>
                </div>
                <span className="text-[10px] text-emerald-400 font-mono bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  STATUS: VERIFIED
                </span>
              </div>
            </div>

            <button
              onClick={handleResetAndClose}
              className="w-full py-3 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-xl transition-colors cursor-pointer"
            >
              Done & Return to Site
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
