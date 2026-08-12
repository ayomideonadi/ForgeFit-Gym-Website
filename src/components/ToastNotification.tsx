import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { CheckCircle2, Info, X } from 'lucide-react';

export const ToastNotification: React.FC = () => {
  const { toast, hideToast } = useTheme();

  if (!toast.show) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce-short">
      <div className="glass-panel px-5 py-4 rounded-xl shadow-2xl flex items-center gap-3 border border-red-500/30 max-w-md bg-gray-900/90 text-white">
        {toast.type === 'success' ? (
          <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
        ) : (
          <Info className="w-6 h-6 text-cyan-400 shrink-0" />
        )}
        <p className="text-sm font-medium text-gray-100 flex-1">{toast.message}</p>
        <button
          onClick={hideToast}
          className="text-gray-400 hover:text-white p-1 rounded-lg transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
