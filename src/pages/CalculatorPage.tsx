import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Calculator, Sparkles } from 'lucide-react';

export const CalculatorPage: React.FC = () => {
  const { openTrialModal } = useTheme();

  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [age, setAge] = useState<number>(28);
  const [weightLbs, setWeightLbs] = useState<number>(175);
  const [heightFeet, setHeightFeet] = useState<number>(5);
  const [heightInches, setHeightInches] = useState<number>(10);
  const [activity, setActivity] = useState<number>(1.55); // 1.2, 1.375, 1.55, 1.725, 1.9
  const [fitnessGoal, setFitnessGoal] = useState<'cut' | 'maintain' | 'bulk'>('cut');

  // Calculation Logic (Mifflin-St Jeor)
  const weightKg = weightLbs * 0.453592;
  const heightCm = (heightFeet * 12 + heightInches) * 2.54;

  let bmr = 0;
  if (gender === 'male') {
    bmr = 10 * weightKg + 6.25 * heightCm - 5 * age + 5;
  } else {
    bmr = 10 * weightKg + 6.25 * heightCm - 5 * age - 161;
  }

  const tdee = Math.round(bmr * activity);

  let targetCalories = tdee;
  if (fitnessGoal === 'cut') targetCalories = Math.round(tdee - 500);
  if (fitnessGoal === 'bulk') targetCalories = Math.round(tdee + 400);

  // Macro distribution: 30% Protein, 40% Carbs, 30% Fats
  const proteinGrams = Math.round((targetCalories * 0.30) / 4);
  const carbsGrams = Math.round((targetCalories * 0.40) / 4);
  const fatsGrams = Math.round((targetCalories * 0.30) / 9);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-red-500 bg-red-500/10 px-3.5 py-1.5 rounded-full border border-red-500/20">
          INTERACTIVE MACRO & CALORIE CALCULATOR
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-white">
          CALCULATE YOUR <span className="text-gradient-red">DAILY TARGETS</span>
        </h1>
        <p className="text-sm sm:text-base text-gray-300">
          Determine your Basal Metabolic Rate (BMR), Total Daily Energy Expenditure (TDEE), and custom macronutrient split tuned for your specific body goal.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* INPUT FORM */}
        <div className="lg:col-span-6">
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-gray-800 space-y-6 bg-gray-900/80">
            <h3 className="text-xl font-bold font-heading text-white flex items-center gap-2 border-b border-gray-800 pb-3">
              <Calculator className="w-5 h-5 text-red-500" />
              Body Specs & Activity Level
            </h3>

            {/* Gender Selection */}
            <div>
              <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">Gender</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setGender('male')}
                  className={`py-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    gender === 'male' ? 'bg-red-600 text-white shadow-lg glow-red' : 'bg-gray-800 text-gray-400'
                  }`}
                >
                  Male
                </button>
                <button
                  type="button"
                  onClick={() => setGender('female')}
                  className={`py-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    gender === 'female' ? 'bg-red-600 text-white shadow-lg glow-red' : 'bg-gray-800 text-gray-400'
                  }`}
                >
                  Female
                </button>
              </div>
            </div>

            {/* Age & Weight */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">Age (Years)</label>
                <input
                  type="number"
                  min="16"
                  max="80"
                  value={age}
                  onChange={e => setAge(Number(e.target.value))}
                  className="w-full px-4 py-3 bg-gray-800/90 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-red-500 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">Weight (lbs)</label>
                <input
                  type="number"
                  min="80"
                  max="400"
                  value={weightLbs}
                  onChange={e => setWeightLbs(Number(e.target.value))}
                  className="w-full px-4 py-3 bg-gray-800/90 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-red-500 text-sm"
                />
              </div>
            </div>

            {/* Height Feet & Inches */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">Height (Feet)</label>
                <input
                  type="number"
                  min="4"
                  max="7"
                  value={heightFeet}
                  onChange={e => setHeightFeet(Number(e.target.value))}
                  className="w-full px-4 py-3 bg-gray-800/90 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-red-500 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">Height (Inches)</label>
                <input
                  type="number"
                  min="0"
                  max="11"
                  value={heightInches}
                  onChange={e => setHeightInches(Number(e.target.value))}
                  className="w-full px-4 py-3 bg-gray-800/90 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-red-500 text-sm"
                />
              </div>
            </div>

            {/* Activity Level */}
            <div>
              <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">Weekly Activity Level</label>
              <select
                value={activity}
                onChange={e => setActivity(Number(e.target.value))}
                className="w-full px-4 py-3 bg-gray-800/90 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-red-500 text-sm"
              >
                <option value={1.2}>Sedentary (Desk Job, Little Exercise)</option>
                <option value={1.375}>Lightly Active (1-3 Workouts/Wk)</option>
                <option value={1.55}>Moderately Active (3-5 Gym Sessions/Wk)</option>
                <option value={1.725}>Very Active (6-7 Hard Classes/Wk)</option>
                <option value={1.9}>Athlete / Heavy Manual Labor</option>
              </select>
            </div>

            {/* Fitness Goal */}
            <div>
              <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">Primary Goal</label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setFitnessGoal('cut')}
                  className={`py-3 px-2 rounded-xl text-xs font-bold transition-all cursor-pointer text-center ${
                    fitnessGoal === 'cut' ? 'bg-red-600 text-white shadow-lg glow-red' : 'bg-gray-800 text-gray-400'
                  }`}
                >
                  Fat Loss (-500 kcal)
                </button>

                <button
                  type="button"
                  onClick={() => setFitnessGoal('maintain')}
                  className={`py-3 px-2 rounded-xl text-xs font-bold transition-all cursor-pointer text-center ${
                    fitnessGoal === 'maintain' ? 'bg-red-600 text-white shadow-lg glow-red' : 'bg-gray-800 text-gray-400'
                  }`}
                >
                  Maintenance
                </button>

                <button
                  type="button"
                  onClick={() => setFitnessGoal('bulk')}
                  className={`py-3 px-2 rounded-xl text-xs font-bold transition-all cursor-pointer text-center ${
                    fitnessGoal === 'bulk' ? 'bg-red-600 text-white shadow-lg glow-red' : 'bg-gray-800 text-gray-400'
                  }`}
                >
                  Muscle Gain (+400 kcal)
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* RESULTS CARD */}
        <div className="lg:col-span-6 space-y-6">
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-red-500/30 bg-gradient-to-br from-gray-900 via-gray-950 to-black shadow-2xl relative overflow-hidden space-y-6">
            <div className="flex items-center justify-between border-b border-gray-800 pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-red-400">CALCULATED ESTIMATES</span>
                <h3 className="text-2xl font-bold font-heading text-white mt-0.5">YOUR METABOLIC PROFILE</h3>
              </div>
              <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-xs font-bold uppercase font-mono">
                {fitnessGoal.toUpperCase()} PROTOCOL
              </span>
            </div>

            {/* Top Stat Cards */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-gray-900/90 p-4 rounded-2xl border border-gray-800 text-center">
                <span className="block text-2xl font-extrabold font-heading text-white">{Math.round(bmr)}</span>
                <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">BMR (kcal)</span>
              </div>

              <div className="bg-gray-900/90 p-4 rounded-2xl border border-gray-800 text-center">
                <span className="block text-2xl font-extrabold font-heading text-white">{tdee}</span>
                <span className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">TDEE (kcal)</span>
              </div>

              <div className="bg-gradient-to-r from-red-600 to-orange-500 p-4 rounded-2xl text-center text-white shadow-lg glow-red">
                <span className="block text-2xl font-extrabold font-heading">{targetCalories}</span>
                <span className="text-[10px] uppercase font-extrabold tracking-wider">Target kcal</span>
              </div>
            </div>

            {/* Macro Breakdown */}
            <div className="space-y-4 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">RECOMMENDED DAILY MACROS:</h4>

              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span className="text-red-400">PROTEIN (30%)</span>
                    <span className="text-white font-mono">{proteinGrams}g ({proteinGrams * 4} kcal)</span>
                  </div>
                  <div className="w-full bg-gray-800 h-2.5 rounded-full overflow-hidden">
                    <div className="bg-red-500 h-full w-[30%]"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span className="text-amber-400">CARBOHYDRATES (40%)</span>
                    <span className="text-white font-mono">{carbsGrams}g ({carbsGrams * 4} kcal)</span>
                  </div>
                  <div className="w-full bg-gray-800 h-2.5 rounded-full overflow-hidden">
                    <div className="bg-amber-400 h-full w-[40%]"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span className="text-cyan-400">HEALTHY FATS (30%)</span>
                    <span className="text-white font-mono">{fatsGrams}g ({fatsGrams * 9} kcal)</span>
                  </div>
                  <div className="w-full bg-gray-800 h-2.5 rounded-full overflow-hidden">
                    <div className="bg-cyan-400 h-full w-[30%]"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4 border-t border-gray-800 space-y-3">
              <p className="text-xs text-gray-300">
                Want our head coaches to craft a personalized meal plan around these exact macro numbers?
              </p>
              <button
                onClick={openTrialModal}
                className="w-full py-3.5 bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-500 hover:to-orange-400 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg glow-red transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                Claim Pass & Get Custom Nutrition Assessment
              </button>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
