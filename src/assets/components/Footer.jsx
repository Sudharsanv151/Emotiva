import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Footer = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <>
    {/* <div className='h-screen '>
    <footer className="flex h-16 w-full px-8 bg-slate-900 ring-1 ring-white text-white 
                      justify-between items-center  bottom-0 mx-auto rounded-2xl mt-7 
                      max-w-screen-xl">
      <div className="flex flex-col">
       
        <div className="flex justify-center gap-6 mb-2">
          <span className="cursor-pointer hover:text-green-500" onClick={() => navigate('/about')}>About Us</span>
          <span className="cursor-pointer hover:text-green-500" onClick={() => navigate('/services')}>Services</span>
          <span className="cursor-pointer hover:text-green-500" onClick={() => navigate('/contact')}>Contact</span>
          <span className="cursor-pointer hover:text-green-500" onClick={() => navigate('/privacy')}>Privacy Policy</span>
        </div>

        <div className="flex justify-center gap-6 mb-2">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">Instagram</a>
        </div>
      </div>

      
      <div className="text-center">
        <p>&copy; {new Date().getFullYear()} Emotiva. All rights reserved.</p>
      </div>
    </footer>
    </div> */}
    </>
  );
};

export default Footer;
