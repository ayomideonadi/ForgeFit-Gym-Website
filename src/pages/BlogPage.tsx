import React, { useState, useMemo } from 'react';
import { BLOG_POSTS_DATA } from '../data/mockData';
import type { BlogPost } from '../types';
import { Clock, Tag, X } from 'lucide-react';

export const BlogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);

  const categories = ['All', 'Training', 'Nutrition', 'Recovery', 'Mindset'];

  const filteredPosts = useMemo(() => {
    if (selectedCategory === 'All') return BLOG_POSTS_DATA;
    return BLOG_POSTS_DATA.filter(p => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-red-500 bg-red-500/10 px-3.5 py-1.5 rounded-full border border-red-500/20">
          ATHLETIC PERFORMANCE & WELLNESS ARTICLES
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-white">
          THE <span className="text-gradient-red">FORGE JOURNAL</span>
        </h1>
        <p className="text-sm sm:text-base text-gray-300">
          Science-backed training advice, nutrition guidelines, and recovery protocols straight from our head coaches.
        </p>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-2 pt-4">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-red-600 text-white shadow-lg glow-red'
                  : 'bg-gray-900 border border-gray-800 text-gray-400 hover:text-white hover:bg-gray-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ARTICLES GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredPosts.map(post => (
          <div
            key={post.id}
            className="glass-panel rounded-3xl overflow-hidden border border-gray-800 hover:border-red-500/50 transition-all duration-300 flex flex-col justify-between group bg-gray-900/60"
          >
            <div>
              <div className="relative h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent"></div>
                <span className="absolute top-3 left-3 px-3 py-1 bg-red-600 text-white text-[10px] font-bold uppercase rounded-full tracking-wider">
                  {post.category}
                </span>
                <span className="absolute bottom-3 right-3 px-2.5 py-1 bg-black/70 text-gray-300 text-[10px] font-mono rounded flex items-center gap-1 border border-white/10">
                  <Clock className="w-3 h-3 text-orange-400" />
                  {post.readTime}
                </span>
              </div>

              <div className="p-6 space-y-3">
                <span className="text-[10px] text-gray-500 font-mono block">{post.date}</span>
                <h3 className="text-xl font-bold font-heading text-white group-hover:text-red-400 transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed line-clamp-3">{post.summary}</p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {post.tags.map((tag, idx) => (
                    <span key={idx} className="px-2 py-0.5 bg-gray-800 text-gray-300 text-[10px] rounded flex items-center gap-1">
                      <Tag className="w-2.5 h-2.5 text-red-400" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="px-6 pb-6 pt-2 border-t border-gray-800/80 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img
                  src={post.authorImage}
                  alt={post.authorName}
                  className="w-7 h-7 rounded-full object-cover border border-red-500/40"
                />
                <span className="text-xs text-gray-300 font-semibold">{post.authorName}</span>
              </div>
              <button
                onClick={() => setActiveArticle(post)}
                className="text-xs font-bold text-red-400 hover:text-red-300 transition-colors flex items-center gap-1 cursor-pointer"
              >
                Read Article →
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ARTICLE READER MODAL */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-3xl glass-panel rounded-3xl p-6 md:p-8 border border-gray-700 bg-gray-900/95 text-white max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-5 right-5 text-gray-400 hover:text-white p-2 rounded-full hover:bg-gray-800 transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
                <img
                  src={activeArticle.image}
                  alt={activeArticle.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="px-3 py-1 bg-red-600 text-white font-bold text-[10px] uppercase rounded-full">
                    {activeArticle.category}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold font-heading text-white mt-2">
                    {activeArticle.title}
                  </h2>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs text-gray-400 border-b border-gray-800 pb-4">
                <img
                  src={activeArticle.authorImage}
                  alt={activeArticle.authorName}
                  className="w-8 h-8 rounded-full object-cover border border-red-500/40"
                />
                <div>
                  <span className="font-semibold text-white block">{activeArticle.authorName}</span>
                  <span>{activeArticle.date} • {activeArticle.readTime}</span>
                </div>
              </div>

              <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
                {activeArticle.content.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              <div className="pt-4 border-t border-gray-800 flex justify-between items-center">
                <div className="flex gap-2">
                  {activeArticle.tags.map((t, idx) => (
                    <span key={idx} className="px-2.5 py-1 bg-gray-800 text-gray-300 text-xs rounded-lg">
                      #{t}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => setActiveArticle(null)}
                  className="px-5 py-2 bg-gray-800 hover:bg-gray-700 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
                >
                  Close Article
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
