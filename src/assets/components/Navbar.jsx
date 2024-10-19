import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Navbar = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <div className="flex h-16 w-full px-8 bg-slate-900 ring-1 ring-white text-white 
                    justify-between items-center sticky z-50 top-7 mx-auto rounded-2xl mt-7 
                    max-w-screen-xl">
      {/* Brand */}
      <h1 className="text-2xl font-bold cursor-pointer" onClick={() => navigate('/')}>
        EmotiVA
      </h1>

      {/* Navigation Links */}
      <nav>
          <ul className="flex gap-6">
            <li
              className="list-none hover:text-green-500 cursor-pointer"
              onClick={() => navigate('/')}
            >
              Home
            </li>
            <li
              className="list-none hover:text-green-500 cursor-pointer"
              onClick={() => navigate('/explore')}
            >
              Explore
            </li>
            <li
              className="list-none hover:text-green-500 cursor-pointer"
              onClick={() => navigate('/therapy')}
            >
              Therapy
            </li>
            <li
              className="list-none hover:text-green-500 cursor-pointer"
              onClick={() => navigate('/journal')}
            >
              Journal
            </li>
            <li
              className="list-none hover:text-green-500 cursor-pointer"
              onClick={() => navigate('/about')}
            >
              About
            </li>
            <li
              className="list-none hover:text-green-500 cursor-pointer"
              onClick={() => navigate('/login')}
            >
              Login
            </li>
          </ul>
        </nav>
    </div>
  );
};

export default Navbar;
