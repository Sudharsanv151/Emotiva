import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

const ExploreItem = ({ title, description, onClick }) => (
  <div onClick={onClick} className="bg-white/20  rounded-lg p-4 flex items-center mb-4 cursor-pointer backdrop-blur-md">
    <div className="flex-grow">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="text-sm text-white/80">{description}</p>
    </div>
    
  </div>
);

const MindfulBreathingItem = ({ title, description, icon, locked }) => (
  <div className="bg-white/20 rounded-lg p-4 flex items-center mb-4 backdrop-blur-md">
    <div className="flex-grow">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="text-sm text-white/80">{description}</p>
    </div>
  
  </div>
);

const Explore = () => {
  const [currentView, setCurrentView] = useState('main');

  const exploreItems = [
    { title: 'Mindful Breathing', description: 'Find simple guided exercises to bring peace and calmness to your mind' },
    { title: 'Relaxation Games', description: 'Discover fun ways to de-stress yourself whenever you need to' },
    { title: 'Micro Reads', description: 'Gain deeper understanding of your mind to expand your awareness and share wisdom'},
    { title: 'Daily Affirmations', description: 'Empower yourself with positive affirmations and break away from any negative thinking habits you may have.'},
    { title: 'Personalized Therapy', description: 'Book private 1-to-1 counseling sessions with a compassionate therapist who will provide you a secure environment' },
  ];

  const mindfulBreathingItems = [
    { title: 'Deep Breathing', description: 'Pay attention to your breath and get to know yourself better.'},
    { title: 'Boost Your Mood', description: 'Increase oxygen flow to the brain and sense relaxation in your body.'},
    { title: 'Kick Start Your Morning', description: 'Start each morning by feeling inspired, energized, and full of optimism.'},
    { title: 'Find Focus', description: 'Improve your concentration by slowing down, and paying attention to your breathing rhythm.'},
    { title: 'Manage your Anger', description: 'Take a moment to reflect on your emotions and then release your anger.'},
  ];

  return (
    <div className="pl-28 pr-28 ml-20 mr-24">
      <h1 className="text-6xl font-sans font-semibold text-white mb-6">Explore</h1>
      <div className="z-10 shared-container mx-auto w-full border-2 border-slate-400  bg-slate-800/60 p-10">
        {currentView === 'main' ? (
          <>
            {exploreItems.map((item, index) => (
              <ExploreItem 
                key={index} 
                {...item} 
                onClick={() => item.title === 'Mindful Breathing' && setCurrentView('mindfulBreathing')}
              />
            ))}
          </>
        ) : (
          <>
            <div className="flex items-center mb-6">
              <ArrowLeft className="mr-2 cursor-pointer text-white" onClick={() => setCurrentView('main')} />
              <h1 className="text-2xl font-semibold text-white">Mindful Breathing</h1>
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