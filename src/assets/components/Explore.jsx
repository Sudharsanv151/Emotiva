import React, { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

// Animation wrapper component
const AnimatedEntry = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`transform transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
      {children}
    </div>
  );
};

const DeepBreathing = () => (
  <div className="w-full h-full flex flex-col items-center justify-center p-2 md:p-4">
    <h2 className="text-lg md:text-xl text-white text-center mb-2 md:mb-4">Deep Breathing Exercise</h2>
    <iframe
      src="https://www.youtube.com/embed/tybOi4hjZFQ"
      className="w-full md:w-3/4 h-48 md:h-96 rounded-lg border-2 border-white"
      title="Deep Breathing"
      allowFullScreen
    ></iframe>
  </div>
);

const BoostYourMood = () => (
  <div className="w-full h-full flex flex-col items-center justify-center p-2 md:p-4">
    <h2 className="text-lg md:text-xl text-white text-center mb-2 md:mb-4">Boost Your Mood</h2>
    <iframe
      src="https://www.youtube.com/embed/1pJQjiVBO4U"
      className="w-full md:w-3/4 h-48 md:h-96 rounded-lg border-2 border-white"
      title="Boost Your Mood"
      allowFullScreen
    ></iframe>
  </div>
);

const MicroReads = () => (
  <div className="w-full h-full flex flex-col items-center justify-center p-2 md:p-4">
    <h2 className="text-lg md:text-xl text-white text-center mb-2 md:mb-4">Micro Reads</h2>
    <div className="bg-slate-800/60 border border-white rounded-lg p-3 md:p-4 w-full md:w-3/4">
      <p className="text-sm md:text-base text-white text-center mb-3">Short readings to expand your awareness.</p>
      <ul className="list-disc list-inside text-sm md:text-base">
        <li><a href="#micro-read-1" className="text-blue-500">The Power of Now</a></li>
        <li><a href="#micro-read-2" className="text-blue-500">Atomic Habits</a></li>
        <li><a href="#micro-read-3" className="text-blue-500">Mindfulness for Beginners</a></li>
      </ul>
    </div>
  </div>
);

const DailyAffirmations = () => (
  <div className="w-full h-full flex flex-col items-center justify-center p-2 md:p-4">
    <h2 className="text-lg md:text-xl text-white text-center mb-2 md:mb-4">Daily Affirmations</h2>
    <div className="bg-slate-800/60 border border-white rounded-lg p-3 md:p-4 w-full md:w-3/4">
      <p className="text-sm md:text-base text-white text-center mb-3">Positive affirmations to break negative thinking habits.</p>
      <ul className="list-disc list-inside mb-3 text-sm md:text-base">
        <li className="text-white">"I am capable of achieving my goals."</li>
        <li className="text-white">"I deserve happiness and success."</li>
        <li className="text-white">"I am enough just as I am."</li>
      </ul>
      <a href="#book-therapy" className="text-blue-500 underline text-sm md:text-base">Book a Session</a>
    </div>
  </div>
);

const PersonalizedTherapy = () => (
  <div className="w-full h-full flex flex-col items-center justify-center p-2 md:p-4">
    <h2 className="text-lg md:text-xl text-white text-center mb-2 md:mb-4">Personalized Therapy</h2>
    <div className="bg-slate-800/60 border border-white rounded-lg p-3 md:p-4 w-full md:w-3/4">
      <p className="text-sm md:text-base text-white text-center mb-3">Book private therapy sessions tailored to your needs.</p>
      <a href="#book-therapy" className="text-blue-500 underline text-sm md:text-base">Click here to book a session</a>
    </div>
  </div>
);

const GameItem = ({ title, description, url, imageSrc, onClick, delay }) => (
  <AnimatedEntry delay={delay}>
    <div
      onClick={onClick}
      className="w-full md:w-72 h-auto md:h-96 rounded-lg overflow-hidden bg-slate-800/60 border border-white shadow-lg mb-3 md:m-4 cursor-pointer hover:scale-105 duration-100"
    >
      <div className="w-full h-36 md:h-28 bg-gray-900">
        <img className="w-full h-36 md:h-56 object-cover" src={imageSrc} alt={title} />
      </div>
      <div className="flex flex-col items-center justify-center p-3 md:p-4">
        <h3 className="text-base md:text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-xs md:text-sm text-white/80 mb-3 text-center">{description}</p>
        <button className="bg-blue-500 text-white px-3 py-1 md:px-4 md:py-2 rounded text-sm">Play Now</button>
      </div>
    </div>
  </AnimatedEntry>
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
    <div className="flex flex-col md:flex-row md:flex-wrap justify-center px-3 md:px-0">
      {games.map((game, index) => (
        <GameItem
          key={index}
          title={game.title}
          description={game.description}
          url={game.url}
          imageSrc={game.imageSrc}
          onClick={() => onSelectGame(game.url)}
          delay={index * 100}
        />
      ))}
    </div>
  );
};

const ExploreItem = ({ title, description, imageSrc, onClick, delay }) => (
  <AnimatedEntry delay={delay}>
    <div
      onClick={onClick}
      className="w-72 m-auto  md:w-52 h-auto md:h-80 rounded-lg overflow-hidden bg-slate-800/60 border border-white shadow-lg mb-3 md:m-4 cursor-pointer hover:scale-105 duration-100"
    >
      <div className="w-full h-56  md:w-full md:h-48 bg-gray-900">
        <img className="w-full h-full object-cover" src={imageSrc} alt={title} />
      </div>
      <div className="px-3 py-2 md:px-4 md:py-2 h-auto md:h-32">
        <h3 className="text-base md:text-lg font-semibold text-white mb-1 md:mb-2">{title}</h3>
        <p className="text-xs md:text-sm text-white/80">{description}</p>
      </div>
    </div>
  </AnimatedEntry>
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
    <div className="z-10 mx-3 md:mx-20 justify-center items-center pt-12 md:pt-20">
      <AnimatedEntry>
        <h1 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 text-white text-center">Explore</h1>
      </AnimatedEntry>
      <div className="z-10 mx-auto w-full p-2 md:p-10">
        {currentView === 'main' ? (
          <div className="flex flex-wrap justify-center gap-4">
            {exploreItems.map((item, index) => (
              <div key={index} className="w-full sm:w-1/2 md:w-auto">
                <ExploreItem 
                  {...item} 
                  onClick={() => handleItemClick(item)}
                  delay={index * 100}
                />
              </div>
            ))}
          </div>
        ) : currentView === 'mindfulBreathing' && !selectedContent ? (
          <>
            <AnimatedEntry>
              <div className="flex w-full md:w-60 items-center mb-3 md:mb-4">
                <ArrowLeft className="mr-2 text-white cursor-pointer" onClick={() => setCurrentView('main')} />
                <h1 className="text-xl md:text-2xl font-semibold text-white">Mindful Breathing</h1>
              </div>
            </AnimatedEntry>
            <div className="flex flex-wrap justify-center gap-4">
              {mindfulBreathing.map((exercise, index) => (
                <div key={index} className="w-full sm:w-1/2 md:w-auto">
                  <ExploreItem
                    title={exercise.name}
                    description={`Practice ${exercise.name}`}
                    imageSrc={`/public/img/${exercise.name.toLowerCase().replace(' ', '')}.jpg`}
                    onClick={() => setSelectedContent(exercise.component)}
                    delay={index * 100}
                  />
                </div>
              ))}
            </div>
          </>
        ) : currentView === 'relaxationGames' ? (
          <>
            <AnimatedEntry>
              <div className="flex w-full md:w-60 items-center mb-3 md:mb-4">
                <ArrowLeft className="mr-2 text-white cursor-pointer" onClick={() => setCurrentView('main')} />
                <h1 className="text-xl md:text-2xl font-semibold text-white">Relaxation Games</h1>
              </div>
            </AnimatedEntry>
            <RelaxationGames onSelectGame={handleSelectGame} />
          </>
        ) : currentView === 'microReads' ? (
          <>
            <AnimatedEntry>
              <div className="flex w-full md:w-60 items-center mb-3 md:mb-4">
                <ArrowLeft className="mr-2 text-white cursor-pointer" onClick={() => setCurrentView('main')} />
                <h1 className="text-xl md:text-2xl font-semibold text-white">Micro Reads</h1>
              </div>
            </AnimatedEntry>
            <AnimatedEntry delay={100}>
              <MicroReads />
            </AnimatedEntry>
          </>
        ) : currentView === 'dailyAffirmations' ? (
          <>
            <AnimatedEntry>
              <div className="flex w-full md:w-60 items-center mb-3 md:mb-4">
                <ArrowLeft className="mr-2 text-white cursor-pointer" onClick={() => setCurrentView('main')} />
                <h1 className="text-xl md:text-2xl font-semibold text-white">Daily Affirmations</h1>
              </div>
            </AnimatedEntry>
            <AnimatedEntry delay={100}>
              <DailyAffirmations />
            </AnimatedEntry>
          </>
        ) : currentView === 'personalizedTherapy' ? (
          <>
            <AnimatedEntry>
              <div className="flex w-full md:w-60 items-center mb-3 md:mb-4">
                <ArrowLeft className="mr-2 text-white cursor-pointer" onClick={() => setCurrentView('main')} />
                <h1 className="text-xl md:text-2xl font-semibold text-white">Personalized Therapy</h1>
              </div>
            </AnimatedEntry>
            <AnimatedEntry delay={100}>
              <PersonalizedTherapy />
            </AnimatedEntry>
          </>
        ) : currentView === 'game' ? (
          <>
            <AnimatedEntry>
              <div className="flex w-full md:w-60 items-center mb-3 md:mb-4">
                <ArrowLeft className="mr-2 text-white cursor-pointer" onClick={() => setCurrentView('main')} />
                <h1 className="text-xl md:text-2xl font-semibold text-white">Game</h1>
              </div>
            </AnimatedEntry>
            <AnimatedEntry delay={100}>
              <div className="w-full flex justify-center">
                <iframe
                  src={gameUrl}
                  className="w-full md:w-3/4 h-48 md:h-96 rounded-lg border-2 border-white"
                  title="Game"
                  allowFullScreen
                ></iframe>
              </div>
            </AnimatedEntry>
          </>
        ) : selectedContent ? (
          <>
            <AnimatedEntry>
              <div className="flex w-full md:w-60 items-center mb-3 md:mb-4">
                <ArrowLeft className="mr-2 text-white cursor-pointer" onClick={() => setSelectedContent(null)} />
                <h1 className="text-xl md:text-2xl font-semibold text-white">Mindful Exercise</h1>
              </div>
            </AnimatedEntry>
            <AnimatedEntry delay={100}>
              {selectedContent}
            </AnimatedEntry>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Explore;