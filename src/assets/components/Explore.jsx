import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

// Deep Breathing Component
const DeepBreathing = () => (
  <div className="w-full h-full flex flex-col items-center justify-center">
    <h2 className="text-xl text-white text-center mb-4">Deep Breathing Exercise</h2>
    <iframe
      src="https://www.youtube.com/embed/tybOi4hjZFQ"
      className="w-3/4 h-96 rounded-lg border-2 border-white"
      title="Deep Breathing"
      allowFullScreen
    ></iframe>
  </div>
);

// Boost Your Mood Component
const BoostYourMood = () => (
  <div className="w-full h-full flex flex-col items-center justify-center">
    <h2 className="text-xl text-white text-center mb-4">Boost Your Mood</h2>
    <iframe
      src="https://www.youtube.com/embed/1pJQjiVBO4U"
      className="w-3/4 h-96 rounded-lg border-2 border-white"
      title="Boost Your Mood"
      allowFullScreen
    ></iframe>
  </div>
);

// Main Explore Item Component
const ExploreItem = ({ title, description, imageSrc, onClick }) => (
  <div
    onClick={onClick}
    className="w-72 h-80 rounded-lg overflow-hidden bg-slate-800/60 border border-white shadow-lg m-4 cursor-pointer hover:scale-105 duration-100"
  >
    <div className="w-full h-48 bg-gray-900">
      <img className="w-full h-full object-cover" src={imageSrc} alt={title} />
    </div>
    <div className="px-4 py-2 h-32">
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-white/80 text-sm">{description}</p>
    </div>
  </div>
);

// Explore Component
const Explore = () => {
  const [currentView, setCurrentView] = useState('main');
  const [selectedContent, setSelectedContent] = useState(null);

  const exploreItems = [
    { title: 'Mindful Breathing', description: 'Exercises to bring calmness to your mind', imageSrc: '/public/img/breathing.jpg' },
    { title: 'Relaxation Games', description: 'De-stress with interactive games', imageSrc: '/public/img/game.jpg' },
    { title: 'Micro Reads', description: 'Expand your awareness with micro reads', imageSrc: '/public/img/microreads.jpg' },
    { title: 'Daily Affirmations', description: 'Break negative thinking habits', imageSrc: '/public/img/dailyaff.png' },
    { title: 'Personalized Therapy', description: 'Book private therapy sessions', imageSrc: '/public/img/heartbrain.jpg' },
  ];

  const mindfulBreathing = [
    { name: 'Deep Breathing', component: <DeepBreathing /> },
    { name: 'Boost Your Mood', component: <BoostYourMood /> },
  ];

  const handleItemClick = (item) => {
    if (item.title === 'Mindful Breathing') setCurrentView('mindfulBreathing');
    
  };

  return (
    <div className="z-10 mx-20 justify-center items-center pt-20">
      <h1 className="text-4xl font-bold mb-4 text-white text-center">Explore</h1>
      <div className="z-10 mx-auto w-full p-10">
        {currentView === 'main' ? (
          <div className="flex justify-center">
            {exploreItems.map((item, index) => (
              <ExploreItem key={index} {...item} onClick={() => handleItemClick(item)} />
            ))}
          </div>
        ) : currentView === 'mindfulBreathing' && !selectedContent ? (
          <>
            <div className="flex w-60 items-center mb-2">
              <ArrowLeft className="mr-2 text-white" onClick={() => setCurrentView('main')} />
              <h1 className="text-2xl font-semibold text-white">Mindful Breathing</h1>
            </div>
            <div className="flex flex-wrap justify-center">
              {mindfulBreathing.map((exercise, index) => (
                <ExploreItem
                  key={index}
                  title={exercise.name}
                  description={`Practice ${exercise.name}`}
                  imageSrc={`/public/img/${exercise.name.toLowerCase().replace(' ', '')}.jpg`}
                  onClick={() => setSelectedContent(exercise.component)}
                />
              ))}
            </div>
          </>
        ) : selectedContent ? (
          <>
            <div className="flex w-60 items-center mb-2">
              <ArrowLeft className="mr-2 text-white" onClick={() => setSelectedContent(null)} />
              <h1 className="text-2xl font-semibold text-white">Mindful Exercise</h1>
            </div>
            {selectedContent}
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Explore;
