import React from 'react';

const About = () => {
  return (
    <div className="h-2/3  text-white px-8 py-16">
      {/* Header */}
      <div className="max-w-screen-lg mx-auto text-center">
        <h1 className="text-2xl font-bold mb-4">About EmotiVA</h1>
        <p className="text-lg text-white/80 text-left ">
          EmotiVA is a platform designed to enhance emotional well-being and mindfulness.
          We empower individuals to explore tools and practices for stress relief, personal growth, and inner peace.
        </p>
      </div>

      

      <div className="mt-20 max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-slate-800/60 p-5 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Guided Practices</h3>
          <p className="text-white/70">
            Explore various relaxation techniques, including mindful breathing and fun de-stress games, designed to support your mental well-being.
          </p>
        </div>

        <div className="bg-slate-800/60 p-5  rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Daily Affirmations</h3>
          <p className="text-white/70">
            Empower yourself with positive affirmations to reframe your mindset and develop healthy thought patterns.
          </p>
        </div>

        <div className="bg-slate-800/60 p-5  rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Personalized Therapy</h3>
          <p className="text-white/70">
            Book one-on-one therapy sessions tailored to your needs, guided by compassionate professionals.
          </p>
        </div>

        <div className="bg-slate-800/60 p-5  rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Journaling Tools</h3>
          <p className="text-white/70">
            Use our integrated journaling features to reflect on your thoughts, track your progress, and set goals for personal growth.
          </p>
        </div>
      </div>

      {/* Footer Section */}
      <div className="mt-20 text-center">
        <h2 className="text-xl font-semibold mb-2">Join the EmotiVA Community</h2>
        <p className="text-white/70">
          Embrace the journey to a better, more mindful version of yourself with EmotiVA.
        </p>
      </div>
    </div>
  );
};

export default About;
