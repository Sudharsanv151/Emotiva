import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ExploreItem = ({ title, description, imageSrc, onClick }) => (
  <div
  onClick={onClick}
  className="w-72 h-80 rounded-lg overflow-hidden bg-slate-800/60 border border-white shadow-lg m-4 cursor-pointer hover:scale-105 duration-100"
>
  <div className="w-full h-48 overflow-hidden bg-gray-900">
    <img 
      className="w-full h-full object-cover" 
      src={imageSrc} 
      alt={title} 
    />
  </div>
  <div className="px-4 py-2 h-32">
    <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
    <p className="text-white/80 text-sm">{description}</p>
  </div>
</div>

);

const MindfulBreathingItem = ({ title, description }) => (
  <div className="bg-slate-800/90 rounded-2xl p-2 mb-3 shadow-lg \">
    <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
    <p className="text-white/80 text-sm">{description}</p>
  </div>
);

const Explore = () => {
  const [currentView, setCurrentView] = useState('main');

  const exploreItems = [
    {
      title: 'Mindful Breathing',
      description: 'Find simple guided exercises to bring peace and calmness to your mind',
      imageSrc: '/public/img/breathing.jpg',
    },
    {
      title: 'Relaxation Games',
      description: 'Discover fun ways to de-stress yourself whenever you need to',
      imageSrc: '/public/img/game.jpg',
    },
    {
      title: 'Micro Reads',
      description: 'Gain deep understanding of your mind to expand your awareness and share wisdom',
      imageSrc: '/public/img/microreads.jpg',
    },
    {
      title: 'Daily Affirmations',
      description: 'Empower yourself with positive affirmations to break negative thinking habits.',
      imageSrc: '/public/img/dailyaff.png',
    },
    {
      title: 'Personalized Therapy',
      description: 'Book private counseling sessions with a compassionate therapist.',
      imageSrc: '/public/img/heartbrain.jpg',
    },
  ];

  const mindfulBreathingItems = [
    { title: 'Deep Breathing', description: 'Pay attention to your breath and get to know yourself better.' },
    { title: 'Boost Your Mood', description: 'Increase oxygen flow to the brain and feel relaxation.' },
    { title: 'Kick Start Your Morning', description: 'Start your day feeling energized and full of optimism.' },
    { title: 'Find Focus', description: 'Improve concentration by syncing with your breathing rhythm.' },
    { title: 'Manage your Anger', description: 'Reflect on emotions and release anger with mindful breath.' },
  ];

  return (
    <div className=" z-10 mx-20 justify-center items-center pt-20">
      <h1 className="text-4xl sm:text-4xl lg:text-4xl font-bold mb-4 text-white text-center">
        Explore
      </h1>
      <div className="z-10 mx-auto w-full p-10">
        {currentView === 'main' ? (
          <div className="flex  justify-center ">
            {exploreItems.map((item, index) => (
              <ExploreItem
                key={index}
                {...item}
                onClick={() => item.title === 'Mindful Breathing' && setCurrentView('mindfulBreathing')}
              />
            ))}
          </div>
        ) : (
          <>
            <div className="flex w-60 items-center mb-2 w">
              <ArrowLeft
                className="mr-2 text-white"
                onClick={() => setCurrentView('main')}
              />
              <h1 className="text-2xl font-semibold text-white ">Mindful Breathing</h1>
            </div>
            {mindfulBreathingItems.map((item, index) => (
              <MindfulBreathingItem key={index} {...item} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Explore;
