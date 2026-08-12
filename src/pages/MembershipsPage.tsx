import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { MEMBERSHIPS_DATA, FAQS_DATA } from '../data/mockData';
import { Check, X, Sparkles, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export const MembershipsPage: React.FC = () => {
  const { openTrialModal, showToast } = useTheme();
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  const handleSelectPlan = (planName: string) => {
    openTrialModal();
    showToast(`Selected ${planName}. Claim your 7-day trial before confirming!`, 'info');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-red-500 bg-red-500/10 px-3.5 py-1.5 rounded-full border border-red-500/20">
          TRANSPARENT PRICING • NO HIDDEN FEES
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-white">
          CHOOSE YOUR <span className="text-gradient-red">FORGE MEMBERSHIP</span>
        </h1>
        <p className="text-sm sm:text-base text-gray-300">
          Invest in your physical strength and performance. All plans come with a 7-day free trial and 100% money-back guarantee within the first 14 days.
        </p>

        {/* Monthly vs Annual Billing Toggle Switch */}
        <div className="pt-4 flex items-center justify-center gap-3">
          <span className={`text-xs font-bold ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}>
            Monthly Billing
          </span>
          <button
            onClick={() => setBillingCycle(prev => (prev === 'monthly' ? 'annual' : 'monthly'))}
            className="w-14 h-8 rounded-full bg-gray-900 border border-gray-700 p-1 relative transition-colors cursor-pointer"
          >
            <div
              className={`w-6 h-6 rounded-full bg-gradient-to-r from-red-600 to-orange-500 transition-transform ${
                billingCycle === 'annual' ? 'translate-x-6' : 'translate-x-0'
              }`}
            />
          </button>
          <div className="flex items-center gap-1.5">
            <span className={`text-xs font-bold ${billingCycle === 'annual' ? 'text-white' : 'text-gray-400'}`}>
              Annual Billing
            </span>
            <span className="px-2 py-0.5 bg-red-500/20 text-red-400 text-[10px] font-extrabold rounded-full border border-red-500/30 uppercase">
              SAVE 20%
            </span>
          </div>
        </div>
      </div>

      {/* PRICING CARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {MEMBERSHIPS_DATA.map(plan => {
          const price = billingCycle === 'annual' ? plan.priceAnnual : plan.priceMonthly;
          return (
            <div
              key={plan.id}
              className={`glass-panel rounded-3xl p-8 flex flex-col justify-between relative transition-all duration-300 ${
                plan.popular
                  ? 'border-2 border-red-500 bg-gradient-to-b from-gray-900 via-gray-950 to-black shadow-2xl glow-red md:-translate-y-2'
                  : 'border border-gray-800 bg-gray-900/60 hover:border-gray-700'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-red-600 to-orange-500 text-white font-extrabold text-[10px] uppercase tracking-widest rounded-full shadow-lg">
                  {plan.tag}
                </div>
              )}

              <div>
                <div className="mb-6">
                  {!plan.popular && (
                    <span className="text-[10px] font-bold tracking-wider uppercase text-red-400 bg-red-500/10 px-2.5 py-1 rounded">
                      {plan.tag}
                    </span>
                  )}
                  <h3 className="text-2xl font-bold font-heading text-white mt-2">{plan.name}</h3>
                  <p className="text-xs text-gray-400 mt-1 min-h-[36px]">{plan.description}</p>
                </div>

                {/* Price Display */}
                <div className="mb-6 pb-6 border-b border-gray-800">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold font-heading text-white">${price}</span>
                    <span className="text-xs text-gray-400">/ month</span>
                  </div>
                  <p className="text-[10px] text-gray-500 mt-1">
                    {billingCycle === 'annual' ? 'Billed annually ($' + price * 12 + '/yr)' : 'Billed monthly, cancel anytime'}
                  </p>
                </div>

                {/* Features list */}
                <div className="space-y-3 mb-8">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-2">
                    INCLUDED PERKS:
                  </span>
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-gray-200">
                      <Check className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}

                  {plan.nonFeatures && plan.nonFeatures.length > 0 && (
                    <div className="pt-2 space-y-2">
                      {plan.nonFeatures.map((nf, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-gray-600 line-through">
                          <X className="w-4 h-4 text-gray-600 shrink-0 mt-0.5" />
                          <span>{nf}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <button
                onClick={() => handleSelectPlan(plan.name)}
                className={`w-full py-3.5 rounded-xl font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  plan.popular
                    ? 'bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-500 hover:to-orange-400 text-white shadow-lg glow-red'
                    : 'bg-gray-800 hover:bg-gray-700 text-white'
                }`}
              >
                <Sparkles className="w-4 h-4" />
                {plan.buttonText}
              </button>
            </div>
          );
        })}
      </div>

      {/* FEATURE COMPARISON MATRIX TABLE */}
      <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-gray-800 overflow-x-auto">
        <h3 className="text-2xl font-bold font-heading text-white mb-6">COMPARE ALL FEATURES</h3>
        <table className="w-full text-left border-collapse min-w-[600px]">
          <thead>
            <tr className="border-b border-gray-800 text-xs font-bold uppercase text-gray-400">
              <th className="py-4 px-4">Feature / Benefit</th>
              <th className="py-4 px-4 text-center">Basic Pass ($49)</th>
              <th className="py-4 px-4 text-center text-red-400">Pro Fitness ($89)</th>
              <th className="py-4 px-4 text-center">Elite VIP ($139)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800/60 text-xs text-gray-300">
            <tr>
              <td className="py-3.5 px-4 font-semibold text-white">Main Floor Weight & Cardio Access</td>
              <td className="py-3.5 px-4 text-center text-emerald-400 font-bold">✓ Unlimited</td>
              <td className="py-3.5 px-4 text-center text-emerald-400 font-bold">✓ Unlimited</td>
              <td className="py-3.5 px-4 text-center text-emerald-400 font-bold">✓ Unlimited</td>
            </tr>
            <tr>
              <td className="py-3.5 px-4 font-semibold text-white">45+ Group Fitness Classes (HIIT/Yoga)</td>
              <td className="py-3.5 px-4 text-center text-gray-600">—</td>
              <td className="py-3.5 px-4 text-center text-emerald-400 font-bold">✓ Unlimited</td>
              <td className="py-3.5 px-4 text-center text-emerald-400 font-bold">✓ Unlimited</td>
            </tr>
            <tr>
              <td className="py-3.5 px-4 font-semibold text-white">Infrared Sauna & Cold Plunge Suite</td>
              <td className="py-3.5 px-4 text-center text-gray-600">—</td>
              <td className="py-3.5 px-4 text-center text-emerald-400 font-bold">✓ Unlimited</td>
              <td className="py-3.5 px-4 text-center text-emerald-400 font-bold">✓ Unlimited</td>
            </tr>
            <tr>
              <td className="py-3.5 px-4 font-semibold text-white">Monthly 1-on-1 Personal Training Session</td>
              <td className="py-3.5 px-4 text-center text-gray-600">—</td>
              <td className="py-3.5 px-4 text-center text-gray-600">—</td>
              <td className="py-3.5 px-4 text-center text-emerald-400 font-bold">✓ 1 Session / Mo</td>
            </tr>
            <tr>
              <td className="py-3.5 px-4 font-semibold text-white">Guest Passes Per Month</td>
              <td className="py-3.5 px-4 text-center text-gray-600">0</td>
              <td className="py-3.5 px-4 text-center text-white">2 Passes</td>
              <td className="py-3.5 px-4 text-center text-emerald-400 font-bold">Unlimited</td>
            </tr>
            <tr>
              <td className="py-3.5 px-4 font-semibold text-white">InBody Composition Scans</td>
              <td className="py-3.5 px-4 text-center text-white">1 / Month</td>
              <td className="py-3.5 px-4 text-center text-emerald-400 font-bold">Unlimited</td>
              <td className="py-3.5 px-4 text-center text-emerald-400 font-bold">Unlimited</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* ACCORDION FAQ SECTION */}
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-red-500">GOT QUESTIONS?</span>
          <h2 className="text-3xl font-extrabold font-heading text-white">FREQUENTLY ASKED QUESTIONS</h2>
        </div>

        <div className="space-y-4">
          {FAQS_DATA.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="glass-panel rounded-2xl border border-gray-800 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex justify-between items-center gap-4 font-bold font-heading text-white text-base cursor-pointer hover:text-red-400 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-red-500 shrink-0" />
                    {faq.question}
                  </span>
                  {isOpen ? <ChevronUp className="w-5 h-5 text-red-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-gray-300 leading-relaxed border-t border-gray-800/60 animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
