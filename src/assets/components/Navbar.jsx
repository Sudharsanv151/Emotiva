import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import { FaUserCircle, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useAuth();
  const [showProfilePopup, setShowProfilePopup] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const popupRef = useRef(null);

  const handleLogout = () => {
    logout();
    navigate('/signin');
  };

  const handleNavigation = (path, sectionId = '') => {
    if (location.pathname === '/' && sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (path === '/') {
      navigate(path);
      if (sectionId) {
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    } else {
      navigate(path);
    }
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setTimeout(() => {
          setShowProfilePopup(false);
        }, 100);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);


  return (
    <div className="flex h-16 w-5/6 md:w-full px-8 bg-slate-900 ring-1 ring-white text-white 
                    justify-between items-center sticky z-50 top-7 mx-auto rounded-2xl mt-7 
                    max-w-screen-xl">
      <h1 className="text-xl md:text-2xl font-bold cursor-pointer" onClick={() => handleNavigation('/')}>
        EmotiVA
      </h1>

      <nav className="hidden md:flex items-center gap-6">
        <ul className="flex gap-6">
          <li className="list-none hover:text-green-500 cursor-pointer"
            onClick={() => handleNavigation('/')}>Home</li>
          <li className="list-none hover:text-green-500 cursor-pointer"
            onClick={() => handleNavigation('/', 'explore-section')}>Explore</li>
          <li className="list-none hover:text-green-500 cursor-pointer"
            onClick={() => handleNavigation('/', 'therapy-section')}>Therapy</li>
          <li className="list-none hover:text-green-500 cursor-pointer"
            onClick={() => handleNavigation('/', 'journal-section')}>Journal</li>
          <li className="list-none hover:text-green-500 cursor-pointer"
            onClick={() => handleNavigation('/', 'about-section')}>About</li>
        </ul>

        {!user ? (
          <li className="list-none hover:text-green-500 cursor-pointer"
            onClick={() => navigate('/signin')}>Login</li>
        ) : (
          <div className="relative">
            <FaUserCircle
              className="text-3xl cursor-pointer hover:text-green-500"
              onClick={() => setShowProfilePopup((prev) => !prev)}
            />
            {showProfilePopup && (
              <div
                ref={popupRef}
                onClick={(e) => e.stopPropagation()} // Prevents click from closing popup immediately
                className="absolute right-0 mt-2 w-48 bg-slate-900 ring-1 ring-white rounded-2xl shadow-lg">
                <div className="p-6 flex flex-col gap-4">
                  <div className="space-y-2">
                    <p className="font-semibold">{user.name}</p>
                    <p className="text-sm text-gray-500">{user.email}</p>
                  </div>
                  <hr className="border-white/10" />
                  <button
                    onClick={() => navigate('/profile')}
                    className="w-full text-left hover:text-green-500">View Profile</button>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left text-red-500 hover:text-red-400">Logout</button>
                </div>
              </div>
            )}

          </div>
        )}
      </nav>

      <div className="flex items-center gap-4 md:hidden">
        {isMobileMenuOpen ? (
          <FaTimes className="text-xl cursor-pointer" onClick={() => setIsMobileMenuOpen(false)} />
        ) : (
          <FaBars className="text-xl cursor-pointer" onClick={() => setIsMobileMenuOpen(true)} />
        )}
        {user && (
          <div className="relative">
            <FaUserCircle
              className="text-2xl cursor-pointer hover:text-green-500"
              onClick={() => setShowProfilePopup((prev) => !prev)}
            />
            {showProfilePopup && (
              <div
                ref={popupRef}
                className="absolute right-0 mt-7 w-48 bg-slate-900 ring-1 ring-white rounded-2xl shadow-lg z-50">
                <div className="p-6 flex flex-col gap-4">
                  <div className="space-y-2">
                    <p className="font-semibold">{user.name}</p>
                    <p className="text-sm text-gray-500">{user.email}</p>
                  </div>
                  <hr className="border-white/10" />
                  <button
                    onClick={() => navigate('/profile')}
                    className="w-full text-left hover:text-green-500">View Profile</button>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left text-red-500 hover:text-red-400">Logout</button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-slate-900 ring-1 ring-white rounded-2xl mt-2 z-40">
          <ul className="flex flex-col gap-4 p-6">
            <li className="list-none hover:text-green-500 cursor-pointer" onClick={() => handleNavigation('/')}>Home</li>
            <li className="list-none hover:text-green-500 cursor-pointer" onClick={() => handleNavigation('/', 'explore-section')}>Explore</li>
            <li className="list-none hover:text-green-500 cursor-pointer" onClick={() => handleNavigation('/', 'therapy-section')}>Therapy</li>
            <li className="list-none hover:text-green-500 cursor-pointer" onClick={() => handleNavigation('/', 'journal-section')}>Journal</li>
            <li className="list-none hover:text-green-500 cursor-pointer" onClick={() => handleNavigation('/', 'about-section')}>About</li>
            {!user && (
              <li className="list-none hover:text-green-500 cursor-pointer" onClick={() => navigate('/signin')}>Login</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;