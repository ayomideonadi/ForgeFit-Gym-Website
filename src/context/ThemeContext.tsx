import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ThemeMode, PageId, TrainerItem, ToastState } from '../types';

interface ThemeContextType {
  theme: ThemeMode;
  toggleTheme: () => void;
  activePage: PageId;
  setActivePage: (page: PageId) => void;
  isTrialModalOpen: boolean;
  openTrialModal: () => void;
  closeTrialModal: () => void;
  selectedTrainer: TrainerItem | null;
  openTrainerModal: (trainer: TrainerItem) => void;
  closeTrainerModal: () => void;
  toast: ToastState;
  showToast: (message: string, type?: 'success' | 'info') => void;
  hideToast: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeMode>('dark');
  const [activePage, setActivePage] = useState<PageId>('home');
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
  const [selectedTrainer, setSelectedTrainer] = useState<TrainerItem | null>(null);
  const [toast, setToast] = useState<ToastState>({ show: false, message: '', type: 'success' });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
      root.classList.remove('dark');
    } else {
      root.classList.add('dark');
      root.classList.remove('light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const openTrialModal = () => setIsTrialModalOpen(true);
  const closeTrialModal = () => setIsTrialModalOpen(false);

  const openTrainerModal = (trainer: TrainerItem) => setSelectedTrainer(trainer);
  const closeTrainerModal = () => setSelectedTrainer(null);

  const showToast = (message: string, type: 'success' | 'info' = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast(prev => ({ ...prev, show: false }));
    }, 4000);
  };

  const hideToast = () => setToast(prev => ({ ...prev, show: false }));

  const navigateToPage = (page: PageId) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        activePage,
        setActivePage: navigateToPage,
        isTrialModalOpen,
        openTrialModal,
        closeTrialModal,
        selectedTrainer,
        openTrainerModal,
        closeTrainerModal,
        toast,
        showToast,
        hideToast,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
