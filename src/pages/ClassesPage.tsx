import React, { useState, useMemo } from 'react';
import { useTheme } from '../context/ThemeContext';
import { CLASSES_DATA } from '../data/mockData';
import { Search, Calendar, Flame as BurnIcon, Clock, Users, MapPin, Sparkles, Filter, RefreshCw } from 'lucide-react';

export const ClassesPage: React.FC = () => {
  const { openTrialModal, showToast } = useTheme();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDay, setSelectedDay] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');

  const daysList = ['All', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const categoriesList = ['All', 'Strength', 'HIIT', 'Yoga', 'Boxing', 'Recovery'];

  const filteredClasses = useMemo(() => {
    return CLASSES_DATA.filter(cls => {
      const matchesSearch =
        cls.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cls.trainerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cls.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesDay = selectedDay === 'All' || cls.day === selectedDay;
      const matchesCategory = selectedCategory === 'All' || cls.category === selectedCategory;
      const matchesDifficulty = selectedDifficulty === 'All' || cls.difficulty === selectedDifficulty;

      return matchesSearch && matchesDay && matchesCategory && matchesDifficulty;
    });
  }, [searchQuery, selectedDay, selectedCategory, selectedDifficulty]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedDay('All');
    setSelectedCategory('All');
    setSelectedDifficulty('All');
  };

  const handleReserve = (className: string) => {
    openTrialModal();
    showToast(`Spot reserved for ${className}! Complete your free trial pass below.`, 'success');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-red-500 bg-red-500/10 px-3.5 py-1.5 rounded-full border border-red-500/20">
          FILTERABLE WEEKLY SCHEDULE
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-white">
          CLASSES & <span className="text-gradient-red">WORKOUT SESSIONS</span>
        </h1>
        <p className="text-sm sm:text-base text-gray-300">
          From high-velocity HIIT and barbell powerlifting to soothing infrared recovery, explore our weekly roster coached by industry experts.
        </p>
      </div>

      {/* FILTER CONTROLS BAR */}
      <div className="glass-panel p-6 rounded-3xl border border-gray-800 space-y-6">
        
        {/* Search Bar & Difficulty Select */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-8 relative">
            <Search className="w-5 h-5 text-gray-400 absolute left-4 top-3.5" />
            <input
              type="text"
              placeholder="Search class by name, workout type, or coach..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-red-500 text-sm"
            />
          </div>

          <div className="md:col-span-4 flex items-center gap-2">
            <select
              value={selectedDifficulty}
              onChange={e => setSelectedDifficulty(e.target.value)}
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl text-white focus:outline-none focus:border-red-500 text-sm"
            >
              <option value="All">Difficulty: All Levels</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>

            {(searchQuery || selectedDay !== 'All' || selectedCategory !== 'All' || selectedDifficulty !== 'All') && (
              <button
                onClick={handleResetFilters}
                className="p-3 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-xl transition-colors cursor-pointer shrink-0"
                title="Reset Filters"
              >
                <RefreshCw className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        {/* Day Pills */}
        <div>
          <label className="block text-[10px] font-extrabold uppercase tracking-wider text-gray-400 mb-2">
            Filter by Day of the Week:
          </label>
          <div className="flex flex-wrap gap-2">
            {daysList.map(day => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedDay === day
                    ? 'bg-red-600 text-white shadow-lg glow-red'
                    : 'bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:bg-gray-800'
                }`}
              >
                {day === 'All' ? 'All Days' : day}
              </button>
            ))}
          </div>
        </div>

        {/* Category Pills */}
        <div>
          <label className="block text-[10px] font-extrabold uppercase tracking-wider text-gray-400 mb-2">
            Filter by Training Discipline:
          </label>
          <div className="flex flex-wrap gap-2">
            {categoriesList.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-red-600 to-orange-500 text-white shadow-lg'
                    : 'bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:bg-gray-800'
                }`}
              >
                {cat === 'All' ? 'All Categories' : cat}
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* RESULTS COUNT & CARDS GRID */}
      <div className="space-y-6">
        <div className="flex justify-between items-center text-xs text-gray-400">
          <span>Showing <strong className="text-white font-mono">{filteredClasses.length}</strong> matching class sessions</span>
        </div>

        {filteredClasses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredClasses.map(cls => {
              const spotsLeft = cls.capacity - cls.enrolled;
              return (
                <div
                  key={cls.id}
                  className="glass-panel rounded-2xl p-6 border border-gray-800 hover:border-red-500/50 transition-all flex flex-col justify-between group bg-gray-900/60"
                >
                  <div>
                    {/* Top Row Badges */}
                    <div className="flex justify-between items-center mb-3">
                      <span className="px-3 py-1 bg-red-500/20 text-red-400 font-bold text-[10px] uppercase rounded-full border border-red-500/30">
                        {cls.category}
                      </span>
                      <span className="px-2.5 py-0.5 bg-gray-800 text-gray-300 text-[10px] font-bold rounded uppercase">
                        {cls.difficulty}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold font-heading text-white mb-2 group-hover:text-red-400 transition-colors">
                      {cls.title}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed mb-4">{cls.description}</p>

                    {/* Class Specs */}
                    <div className="grid grid-cols-2 gap-2 text-xs text-gray-300 bg-gray-950 p-3 rounded-xl border border-gray-800 mb-4">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-red-400" />
                        <span className="font-semibold text-white">{cls.day}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-orange-400" />
                        <span>{cls.time}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <BurnIcon className="w-3.5 h-3.5 text-amber-400" />
                        <span>~{cls.burnKcal} Kcal</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                        <span className="truncate">{cls.room}</span>
                      </div>
                    </div>

                    {/* Coach Avatar */}
                    <div className="flex items-center justify-between pt-2 border-t border-gray-800 mb-4">
                      <div className="flex items-center gap-2">
                        <img
                          src={cls.trainerImage}
                          alt={cls.trainerName}
                          className="w-8 h-8 rounded-full object-cover border border-red-500/40"
                        />
                        <span className="text-xs text-gray-300 font-semibold">{cls.trainerName}</span>
                      </div>
                      <div className="flex items-center gap-1 text-[11px] text-gray-400">
                        <Users className="w-3.5 h-3.5 text-gray-500" />
                        <span>{spotsLeft} spots left</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => handleReserve(cls.title)}
                    className="w-full py-3 bg-red-600 hover:bg-red-500 text-white font-bold rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md glow-red"
                  >
                    <Sparkles className="w-4 h-4" />
                    Reserve Free Spot
                  </button>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="glass-panel p-12 text-center rounded-3xl border border-gray-800 space-y-4">
            <div className="w-16 h-16 bg-gray-800 text-gray-400 rounded-full flex items-center justify-center mx-auto">
              <Filter className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold font-heading text-white">No classes matched your filters</h3>
            <p className="text-xs text-gray-400 max-w-sm mx-auto">
              Try adjusting your day, category, or search term to see more scheduled sessions.
            </p>
            <button
              onClick={handleResetFilters}
              className="px-6 py-2.5 bg-red-600 text-white font-bold text-xs rounded-xl hover:bg-red-500 transition-colors cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>

    </div>
  );
};
