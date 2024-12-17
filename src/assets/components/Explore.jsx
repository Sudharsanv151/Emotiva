import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

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

const MicroReads = () => (
  <div className="w-full h-full flex flex-col items-center justify-center">
    <h2 className="text-xl text-white text-center mb-4">Micro Reads</h2>
    <div className="bg-slate-800/60 border border-white rounded-lg p-4 w-3/4">
      <p className="text-white text-center mb-4">Short readings to expand your awareness.</p>
      <ul className="list-disc list-inside">
        <li><a href="#micro-read-1" className="text-blue-500">The Power of Now</a></li>
        <li><a href="#micro-read-2" className="text-blue-500">Atomic Habits</a></li>
        <li><a href="#micro-read-3" className="text-blue-500">Mindfulness for Beginners</a></li>
      </ul>
    </div>
  </div>
);

const DailyAffirmations = () => (
  <div className="w-full h-full flex flex-col items-center justify-center">
    <h2 className="text-xl text-white text-center mb-4">Daily Affirmations</h2>
    <div className="bg-slate-800/60 border border-white rounded-lg p-4 w-3/4">
      <p className="text-white text-center mb-4">Positive affirmations to break negative thinking habits.</p>
      <ul className="list-disc list-inside mb-4">
        <li className="text-white">"I am capable of achieving my goals."</li>
        <li className="text-white">"I deserve happiness and success."</li>
        <li className="text-white">"I am enough just as I am."</li>
      </ul>
      <a href="#book-therapy" className="text-blue-500 underline">Book a Session</a>
    </div>
  </div>
);

const PersonalizedTherapy = () => (
  <div className="w-full h-full flex flex-col items-center justify-center">
    <h2 className="text-xl text-white text-center mb-4">Personalized Therapy</h2>
    <div className="bg-slate-800/60 border border-white rounded-lg p-4 w-3/4">
      <p className="text-white text-center mb-4">Book private therapy sessions tailored to your needs.</p>
      <a href="#book-therapy" className="text-blue-500 underline">Click here to book a session</a>
    </div>
  </div>
);

const GameItem = ({ title, description, url, imageSrc, onClick }) => (
  <div
    onClick={onClick}
    className="w-72 h-96 rounded-lg overflow-hidden bg-slate-800/60 border border-white shadow-lg m-4 cursor-pointer hover:scale-105 duration-100"
  >
    <div className="w-full h-28 bg-gray-900">
      <img className="w-full h-56 object-cover" src={imageSrc} alt={title} />
    </div>
    <div className="flex flex-col items-center justify-center h-full px-4 py-2">
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-white/80 text-sm mb-4">{description}</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Play Now</button>
    </div>
  </div>
);

const RelaxationGames = ({ onSelectGame }) => {
  const games = [
    { 
      title: 'Little Alchemy 2', 
      description: 'Combine elements to create new ones!', 
      url: 'https://littlealchemy2.com/', 
      imageSrc: 'https://littlealchemy2.com/static/img/little-alchemy-2-fb-thumbnail.jpg' 
    },
    { 
      title: 'Slither.io', 
      description: 'Grow your snake while avoiding others!', 
      url: 'https://slither.io/', 
      imageSrc: 'https://www.crazycraftz.com/wp-content/uploads/2019/05/wp3941276-slitherio-wallpapers-1568x882.jpg' 
    },
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {games.map((game, index) => (
        <GameItem
          key={index}
          title={game.title}
          description={game.description}
          url={game.url}
          imageSrc={game.imageSrc}
          onClick={() => onSelectGame(game.url)}
        />
      ))}
    </div>
  );
};

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

const Explore = () => {
  const [currentView, setCurrentView] = useState('main');
  const [selectedContent, setSelectedContent] = useState(null);
  const [gameUrl, setGameUrl] = useState('');

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
    if (item.title === 'Mindful Breathing') {
      setCurrentView('mindfulBreathing');
    } else if (item.title === 'Relaxation Games') {
      setCurrentView('relaxationGames');
    } else if (item.title === 'Micro Reads') {
      setCurrentView('microReads');
    } else if (item.title === 'Daily Affirmations') {
      setCurrentView('dailyAffirmations');
    } else if (item.title === 'Personalized Therapy') {
      setCurrentView('personalizedTherapy');
    }
  };

  const handleSelectGame = (url) => {
    setGameUrl(url);
    setCurrentView('game');
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
        ) : currentView === 'relaxationGames' ? (
          <>
            <div className="flex w-60 items-center mb-2">
              <ArrowLeft className="mr-2 text-white" onClick={() => setCurrentView('main')} />
              <h1 className="text-2xl font-semibold text-white">Relaxation Games</h1>
            </div>
            <RelaxationGames onSelectGame={handleSelectGame} />
          </>
        ) : currentView === 'microReads' ? (
          <>
            <div className="flex w-60 items-center mb-2">
              <ArrowLeft className="mr-2 text-white" onClick={() => setCurrentView('main')} />
              <h1 className="text-2xl font-semibold text-white">Micro Reads</h1>
            </div>
            <MicroReads />
          </>
        ) : currentView === 'dailyAffirmations' ? (
          <>
            <div className="flex w-60 items-center mb-2">
              <ArrowLeft className="mr-2 text-white" onClick={() => setCurrentView('main')} />
              <h1 className="text-2xl font-semibold text-white">Daily Affirmations</h1>
            </div>
            <DailyAffirmations />
          </>
        ) : currentView === 'personalizedTherapy' ? (
          <>
            <div className="flex w-60 items-center mb-2">
              <ArrowLeft className="mr-2 text-white" onClick={() => setCurrentView('main')} />
              <h1 className="text-2xl font-semibold text-white">Personalized Therapy</h1>
            </div>
            <PersonalizedTherapy />
          </>
        ) : currentView === 'game' ? (
          <>
            <div className="flex w-60 items-center mb-2">
              <ArrowLeft className="mr-2 text-white" onClick={() => setCurrentView('main')} />
              <h1 className="text-2xl font-semibold text-white">Game</h1>
            </div>
            <div className="w-full flex justify-center">
              <iframe
                src={gameUrl}
                className="w-3/4 h-96 rounded-lg border-2 border-white"
                title="Game"
                allowFullScreen
              ></iframe>
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
