import React from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FreeTrialModal } from './components/FreeTrialModal';
import { TrainerDetailModal } from './components/TrainerDetailModal';
import { ToastNotification } from './components/ToastNotification';

import { HomePage } from './pages/HomePage';
import { MembershipsPage } from './pages/MembershipsPage';
import { ClassesPage } from './pages/ClassesPage';
import { TrainersPage } from './pages/TrainersPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { BlogPage } from './pages/BlogPage';
import { CalculatorPage } from './pages/CalculatorPage';
import { NotFoundPage } from './pages/NotFoundPage';

const MainContent: React.FC = () => {
  const { activePage } = useTheme();

  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-red-500 selection:text-white">
      <Navbar />

      <main className="flex-1">
        {activePage === 'home' && <HomePage />}
        {activePage === 'memberships' && <MembershipsPage />}
        {activePage === 'classes' && <ClassesPage />}
        {activePage === 'trainers' && <TrainersPage />}
        {activePage === 'about' && <AboutPage />}
        {activePage === 'contact' && <ContactPage />}
        {activePage === 'blog' && <BlogPage />}
        {activePage === 'calculator' && <CalculatorPage />}
        {activePage === '404' && <NotFoundPage />}
      </main>

      <Footer />

      {/* Global Modals & Overlays */}
      <FreeTrialModal />
      <TrainerDetailModal />
      <ToastNotification />
    </div>
  );
};

export function App() {
  return (
    <ThemeProvider>
      <MainContent />
    </ThemeProvider>
  );
}

export default App;
