import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const About = () => {
  const navigate = useNavigate();

  const handleNavigation = (path, sectionId = '') => {
    if (path === '/') {
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
  };

  return (
    <>
      <div className="h-auto text-white px-6 sm:px-20 py-8 sm:py-16">
        <div className="max-w-screen-lg mx-auto text-center">
          <h1 className="text-xl sm:text-2xl font-bold mb-4">About EmotiVA</h1>
          <p className="text-base sm:text-lg text-white/80 text-left">
            EmotiVA is a platform designed to enhance emotional well-being and mindfulness.
            We empower individuals to explore tools and practices for stress relief, personal growth, and inner peace.
          </p>
        </div>
        <div className="mt-10 sm:mt-20 max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
          <div className="bg-slate-800/60 p-4 sm:p-5 rounded-xl ring-1 ring-slate-300 shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Guided Practices</h3>
            <p className="text-sm sm:text-base text-white/70">
              Explore various relaxation techniques, including mindful breathing and fun de-stress games, designed to support your mental well-being.
            </p>
          </div>
          <div className="bg-slate-800/60 p-4 sm:p-5 ring-1 ring-slate-300 rounded-xl shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Daily Affirmations</h3>
            <p className="text-sm sm:text-base text-white/70">
              Empower yourself with positive affirmations to reframe your mindset and develop healthy thought patterns.
            </p>
          </div>
          <div className="bg-slate-800/60 p-4 sm:p-5 ring-1 ring-slate-300 rounded-xl shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Personalized Therapy</h3>
            <p className="text-sm sm:text-base text-white/70">
              Book one-on-one therapy sessions tailored to your needs, guided by compassionate professionals.
            </p>
          </div>
          <div className="bg-slate-800/60 p-4 sm:p-5 ring-1 ring-slate-300 rounded-xl shadow-lg">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Journaling Tools</h3>
            <p className="text-sm sm:text-base text-white/70">
              Use our integrated journaling features to reflect on your thoughts, track your progress, and set goals for personal growth.
            </p>
          </div>
        </div>
        <div className="mt-10 sm:mt-20 text-center">
          <h2 className="text-lg sm:text-xl font-semibold mb-2">Join the EmotiVA Community</h2>
          <p className="text-sm sm:text-base text-white/70">
            Embrace the journey to a better, more mindful version of yourself with EmotiVA.
          </p>
        </div>
      </div>

      <div className="w-5/6 md:w-full mx-auto max-w-screen-xl px-4 sm:px-6 py-6 bg-slate-900 ring-1 ring-white rounded-2xl mt-16 mb-7">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          <div className="col-span-2 sm:col-span-1">
            <h3 className="text-base font-bold text-white mb-2">EmotiVA</h3>
            <p className="text-base text-white/70">
              Empowering emotional well-being through mindfulness.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-base font-semibold text-white">Links</h3>
            <ul className="space-y-1">
              <li className="text-base hover:text-green-500 cursor-pointer text-white/70"
                onClick={() => handleNavigation('/')}>Home</li>
              <li className="text-base hover:text-green-500 cursor-pointer text-white/70"
                onClick={() => handleNavigation('/', 'therapy-section')}>Therapy</li>
              <li className="text-base hover:text-green-500 cursor-pointer text-white/70"
                onClick={() => handleNavigation('/', 'journal-section')}>Journal</li>
              <li className="text-base hover:text-green-500 cursor-pointer text-white/70"
                onClick={() => handleNavigation('/', 'explore-section')}>Explore</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-base font-semibold text-white">Contact</h3>
            <ul className="space-y-1">
              <li className="text-base text-white/70">
                <a href="mailto:sudharsanv151@gmail.com" className="hover:text-white">
                  sudharsanv151
                </a>
              </li>

            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-base font-semibold text-white">Connect</h3>
            <div className="flex space-x-3">
              <FaTwitter className="text-2xl text-white/70 hover:text-green-500 cursor-pointer" />
              <FaFacebook className="text-2xl text-white/70 hover:text-green-500 cursor-pointer" />
              <FaInstagram className="text-2xl text-white/70 hover:text-green-500 cursor-pointer" />
              <FaLinkedin className="text-2xl text-white/70 hover:text-green-500 cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="mt-6 pt-4 border-t border-white/10 text-center">
          <p className="text-base text-white/70">&copy; EmotiVA. All rights reserved.</p>
        </div>
      </div>
    </>
  );
};

export default About;