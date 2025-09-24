import React from 'react';
import logo from '../../assets/logo.png';

const Header = ({ onNavigate, isLoggedIn, onLogout }) => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6">
      <div className="container mx-auto flex flex-col items-center space-y-4"> 
        <a href="/" onClick={() => onNavigate('home')}>
          <img 
            src={logo} 
            alt="Logo da Plataforma Jovem" 
            className="h-25 md:h-30 w-auto cursor-pointer transition-transform duration-200 hover:scale-105" 
          />
        </a>
        <nav className="space-x-4 flex items-center">
          {isLoggedIn ? (
            <>
              <button
                onClick={() => onNavigate('vagas')}
                className="text-white hover:text-gray-300 transition-colors duration-200"
              >
                Vagas
              </button>
              <button
                onClick={() => onNavigate('cursos')}
                className="text-white hover:text-gray-300 transition-colors duration-200"
              >
                Cursos
              </button>
              <button
                onClick={onLogout}
                className="btn-secondary ml-4"
              >
                Sair
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => onNavigate('login')}
                className="btn-secondary"
              >
                Login
              </button>
                <button
                onClick={() => onNavigate('cadastrar')} 
                className="btn-primary"
              >
                Cadastrar
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;