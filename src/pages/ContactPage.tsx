import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { InteractiveMap } from '../components/InteractiveMap';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, MessageSquare, User, Sparkles } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { showToast, openTrialModal } = useTheme();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'General Inquiry / Tour',
    message: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Valid email is required';
    if (!formData.phone.trim()) errs.phone = 'Phone number is required';
    if (!formData.message.trim() || formData.message.length < 10) errs.message = 'Please enter at least 10 characters';
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      showToast(`🔥 Thanks ${formData.name}! Your message has been sent to our desk staff.`, 'success');
    }, 1000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-red-500 bg-red-500/10 px-3.5 py-1.5 rounded-full border border-red-500/20">
          WE’RE HERE TO HELP YOU FORGE AHEAD
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-white">
          GET IN <span className="text-gradient-red">TOUCH WITH US</span>
        </h1>
        <p className="text-sm sm:text-base text-gray-300">
          Have questions about memberships, personal coaching, group fitness, or facility tours? Send us a message or pop in today!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* LEFT COLUMN: CONTACT DETAILS & INTERACTIVE MAP */}
        <div className="lg:col-span-6 space-y-8">
          
          <div className="glass-panel p-8 rounded-3xl border border-gray-800 space-y-6 bg-gray-900/60">
            <h3 className="text-2xl font-bold font-heading text-white border-b border-gray-800 pb-4">
              FORGEFIT HQ INFO
            </h3>

            <ul className="space-y-5 text-sm text-gray-300">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center border border-red-500/30 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white font-heading">Gym Location</h4>
                  <p className="text-xs text-gray-400 mt-0.5">124 Ironworks Blvd, Metro Fitness District, NY 10001</p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center border border-orange-500/30 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white font-heading">Operating Hours</h4>
                  <p className="text-xs text-gray-400 mt-0.5">Monday – Friday: 05:00 AM – 11:00 PM</p>
                  <p className="text-xs text-gray-400">Saturday – Sunday: 07:00 AM – 09:00 PM</p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center border border-cyan-500/30 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white font-heading">Direct Phone</h4>
                  <p className="text-xs text-gray-400 mt-0.5">(555) 892-3400 • Front Desk Line</p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white font-heading">General Email</h4>
                  <p className="text-xs text-gray-400 mt-0.5">info@forgefitgym.com</p>
                </div>
              </li>
            </ul>

            <div className="pt-2 border-t border-gray-800">
              <button
                onClick={openTrialModal}
                className="w-full py-3 bg-red-600/20 border border-red-500/40 hover:bg-red-600 text-red-400 hover:text-white font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                Claim Your Free 7-Day Pass Instant Access
              </button>
            </div>
          </div>

          {/* Interactive Map */}
          <InteractiveMap />

        </div>

        {/* RIGHT COLUMN: VALIDATED CONTACT FORM */}
        <div className="lg:col-span-6">
          <div className="glass-panel p-8 md:p-10 rounded-3xl border border-gray-800 bg-gray-900/80 shadow-2xl relative">
            
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-red-400">SEND A DIRECT MESSAGE</span>
              <h2 className="text-2xl font-bold font-heading text-white mt-1">HOW CAN WE ASSIST YOU?</h2>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                    Your Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      placeholder="e.g. Jordan Miller"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full pl-10 pr-4 py-3 bg-gray-800/90 border rounded-xl text-white placeholder-gray-500 focus:outline-none text-sm ${
                        errors.name ? 'border-red-500' : 'border-gray-700 focus:border-red-500'
                      }`}
                    />
                  </div>
                  {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                      <input
                        type="email"
                        placeholder="jordan@example.com"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full pl-10 pr-4 py-3 bg-gray-800/90 border rounded-xl text-white placeholder-gray-500 focus:outline-none text-sm ${
                          errors.email ? 'border-red-500' : 'border-gray-700 focus:border-red-500'
                        }`}
                      />
                    </div>
                    {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                      <input
                        type="tel"
                        placeholder="(555) 019-2834"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full pl-10 pr-4 py-3 bg-gray-800/90 border rounded-xl text-white placeholder-gray-500 focus:outline-none text-sm ${
                          errors.phone ? 'border-red-500' : 'border-gray-700 focus:border-red-500'
                        }`}
                      />
                    </div>
                    {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                    Primary Interest / Inquiry Type
                  </label>
                  <select
                    value={formData.interest}
                    onChange={e => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-800/90 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-red-500 text-sm"
                  >
                    <option value="General Inquiry / Tour">General Inquiry / Tour</option>
                    <option value="Membership Pricing & Trial">Membership Pricing & Trial</option>
                    <option value="Personal Coaching Consultation">Personal Coaching Consultation</option>
                    <option value="Group Classes & Schedule">Group Classes & Schedule</option>
                    <option value="Corporate / Partnership">Corporate / Partnership</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                    Your Message *
                  </label>
                  <div className="relative">
                    <MessageSquare className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                    <textarea
                      rows={4}
                      placeholder="Tell us about your fitness goals or questions..."
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full pl-10 pr-4 py-3 bg-gray-800/90 border rounded-xl text-white placeholder-gray-500 focus:outline-none text-sm ${
                        errors.message ? 'border-red-500' : 'border-gray-700 focus:border-red-500'
                      }`}
                    />
                  </div>
                  {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message}</p>}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-500 hover:to-orange-400 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg glow-red transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Direct Message
                      </>
                    )}
                  </button>
                </div>

              </form>
            ) : (
              <div className="text-center py-8 space-y-4 animate-fade-in">
                <div className="w-16 h-16 bg-red-500/20 text-red-500 border border-red-500/40 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-white">Message Received!</h3>
                <p className="text-xs text-gray-300 max-w-sm mx-auto">
                  Thank you, <strong>{formData.name}</strong>. Our front desk staff will review your message and reply via email or phone within 2 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', phone: '', interest: 'General Inquiry / Tour', message: '' });
                  }}
                  className="px-6 py-2.5 bg-gray-800 hover:bg-gray-700 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            )}

          </div>
        </div>

      </div>

    </div>
  );
};
