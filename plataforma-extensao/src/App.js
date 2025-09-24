import React, { useState } from 'react';
import HomePage from './components/views/Homepage';
import JobListingPage from './components/views/JobListingPage';
import CoursesPage from './components/views/CoursesPage';
import LoginPage from './components/views/LoginPage';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';

function App() {
  const [page, setPage] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleNavigate = (pageName) => {
    setPage(pageName);
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setPage('vagas');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setPage('home');
  };

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'login':
      case 'cadastrar':
        return <LoginPage onLoginSuccess={handleLoginSuccess} />;
      case 'vagas':
        return isLoggedIn ? <JobListingPage /> : <LoginPage onLoginSuccess={handleLoginSuccess} />;
      case 'cursos':
        return isLoggedIn ? <CoursesPage /> : <LoginPage onLoginSuccess={handleLoginSuccess} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header
        onNavigate={handleNavigate}
        isLoggedIn={isLoggedIn}
        onLogout={handleLogout}
      />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;