import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [showProfilePopup, setShowProfilePopup] = useState(false);
  const popupRef = useRef(null);  

  const handleLogout = () => {
    logout();
    navigate('/signin');
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowProfilePopup(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="flex h-16 w-full px-8 bg-slate-900 ring-1 ring-white text-white 
                    justify-between items-center sticky z-50 top-7 mx-auto rounded-2xl mt-7 
                    max-w-screen-xl">
      <h1 className="text-2xl font-bold cursor-pointer" onClick={() => navigate('/')}>
        EmotiVA
      </h1>

      <nav>
        <ul className="flex gap-6">
          <li className="list-none hover:text-green-500 cursor-pointer" onClick={() => navigate('/')}>
            Home
          </li>
          <li className="list-none hover:text-green-500 cursor-pointer" onClick={() => navigate('/explore')}>
            Explore
          </li>
          <li className="list-none hover:text-green-500 cursor-pointer" onClick={() => navigate('/therapy')}>
            Therapy
          </li>
          <li className="list-none hover:text-green-500 cursor-pointer" onClick={() => navigate('/journal')}>
            Journal
          </li>
          <li className="list-none hover:text-green-500 cursor-pointer" onClick={() => navigate('/about')}>
            About
          </li>

          {!user ? (
            <li
              className="list-none hover:text-green-500 cursor-pointer"
              onClick={() => navigate('/signin')}
            >
              Login
            </li>
          ) : (
            <div className="relative">
              <FaUserCircle
                className="text-3xl cursor-pointer hover:text-green-500"
                onClick={() => setShowProfilePopup((prev) => !prev)}
              />
              {showProfilePopup && (
                <div
                  ref={popupRef} 
                  className="absolute right-0 mt-5 w-48 bg-slate-900 ring-white rounded-lg shadow-lg p-4"
                >
                  <p className="font-semibold">{user.name}</p>
                  <p className="text-sm text-gray-500">{user.email}</p>
                  <hr className="my-2" />
                  <button
                    onClick={() => navigate('/profile')}
                    className="w-full text-left px-2 py-1 text-blue-500 hover:bg-gray-100 rounded"
                  >
                    View Profile
                  </button>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-2 py-1 text-red-500 hover:bg-gray-100 rounded"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
