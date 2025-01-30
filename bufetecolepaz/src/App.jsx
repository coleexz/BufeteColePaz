import { useState } from 'react';
import './App.css';

// Importing components
import Home from './components/Home/Home.jsx';
import AboutJuan from './components/AboutJuan/AboutJuan.jsx';
import Areas from './components/Areas/Areas.jsx';
import ContactUs from './components/ContactUs/ContactUs.jsx';
import AboutClaudia from './components/AboutClaudia/AboutClaudia.jsx';
import Email from './components/Email/Email.jsx';

function App() {
  const headerButtons = ['Home', 'About Us', 'Services', 'Contact Us'];
  const [menuOpen, setMenuOpen] = useState(false); // State for the hamburger menu

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="w-screen h-screen">
      {/* Header */}
      <header className="fixed top-0 flex items-center bg-[#000000] p-6 text-white w-screen z-50">
        {/* Logo */}
        <div className="pr-10">
          Logo
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden absolute right-6">
          <button
            onClick={toggleMenu}
            className="focus:outline-none text-white hover:text-[#B69D74]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-center gap-4">
          {headerButtons.map((button) => (
            <button
              className="rounded-full text-white hover:text-[#B69D74] px-4 break-words"
              key={button}
            >
              {button}
            </button>
          ))}
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-16 left-0 w-full bg-[#000000] p-6 z-40 md:hidden">
          <div className="flex flex-col gap-4">
            {headerButtons.map((button) => (
              <button
                className="text-white hover:text-[#B69D74] text-lg"
                key={button}
                onClick={() => setMenuOpen(false)} // Close the menu on button click
              >
                {button}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Main Content */}
      <div>
        <Home />
        <Areas />
        <AboutJuan />
        <AboutClaudia />
        <ContactUs />
        <Email />
      </div>
    </div>
  );
}

export default App;
