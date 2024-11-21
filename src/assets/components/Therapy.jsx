import React, { useState } from 'react';
import { ExternalLink, Smile, Frown, Edit, Users, CheckCircle, Clock } from 'lucide-react';

const Therapy = () => {
  const [surveyData, setSurveyData] = useState({
    emotion: '',
    intensity: 0,
    socialInteraction: '',
    productivity: '',
    overwhelmed: '',
    recentThoughts: '',
    context: '',
    duration: '',
  });

  const [showRecommendations, setShowRecommendations] = useState(false);
  const [showFallbackAlert, setShowFallbackAlert] = useState(false);

  const staticRecommendations = [
    {
      id: 1,
      type: 'iframe',
      content: "Understanding Emotional Maturity",
      url: "https://positivepsychology.com/emotional-maturity/",
      height: "500"
    },
    {
      id: 2,
      type: 'image',
      content: "Motivational Quote",
      imageUrl: "https://www.careerexperts.co.uk/wp-content/uploads/2017/07/Motivational-quotes-for-work-3-min.jpg",
      altText: "Motivational quote: Believe you can and you're halfway there"
    },
    {
      id: 3,
      type: 'spotify',
      content: '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1pzvpQEmn2TDm65aaBfIdi?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>',
      url: 'https://open.spotify.com/track/1pzvpQEmn2TDm65aaBfIdi'
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSurveyData((prevData) => ({
      ...prevData,
      [name]: name === 'intensity' ? parseFloat(value) || 0 : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowRecommendations(true);
  };

  const handleIframeError = () => {
    setShowFallbackAlert(true);
  };

  const renderRecommendation = (rec, index) => {
    switch (rec.type) {
      case 'iframe':
        return (
          <div key={rec.id} className="mb-6">
            <div className="flex justify-between items-center text-white mb-2">
              <span>Read this!</span>
              <button
                onClick={() => window.open(rec.url, '_blank', 'noopener,noreferrer')}
                className="flex items-center gap-2 px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors"
              >
                Open Website <ExternalLink size={16} />
              </button>
            </div>
            <div className="relative">
              <iframe
                src={rec.url}
                className="w-full rounded-lg"
                height={rec.height}
                onError={handleIframeError}
                sandbox="allow-same-origin allow-scripts"
                loading="lazy"
              />
              {showFallbackAlert && (
                <div className="mt-4 p-4 rounded-lg bg-yellow-500/10 border border-yellow-500">
                  <p className="text-yellow-200">
                    Unable to load the content in iframe. Please{' '}
                    <a 
                      href={rec.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-yellow-100"
                    >
                      visit the website directly
                    </a>
                  </p>
                </div>
              )}
            </div>
          </div>
        );
      case 'image':
        return (
          <div key={rec.id} className="mb-6">
            <div className="text-white mb-2">Some Motivation for you!</div>
            <img 
              src={rec.imageUrl}
              alt={rec.altText}
              className="w-full rounded-lg"
            />
          </div>
        );
      case 'spotify':
        return (
          <div key={rec.id} className="mb-6">
            <div className="flex justify-between items-center text-white mb-2">
              <span>Listen to this once!</span>
              <button
                onClick={() => window.open(rec.url, '_blank', 'noopener,noreferrer')}
                className="flex items-center gap-2 px-4 py-2 bg-green-600 rounded-lg hover:bg-green-700 transition-colors"
              >
                Open in Spotify <ExternalLink size={16} />
              </button>
            </div>
            <div dangerouslySetInnerHTML={{ __html: rec.content }} />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-6">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl font-bold text-white text-center mb-6">Tell Us How You Feel</h1>

        {!showRecommendations ? (
          <form
            onSubmit={handleSubmit}
            className="bg-slate-800/40 ring-1 ring-slate-300 p-8 rounded-lg shadow-lg"
          >
            <div className="flex items-center gap-4 mb-6">
              <Smile size={24} className="text-white" />
              <h2 className="text-xl font-semibold text-white">How Are You Feeling?</h2>
            </div>
            <select
              name="emotion"
              value={surveyData.emotion}
              onChange={handleChange}
              required
              className="input-field w-full mb-4"
            >
              <option value="" disabled>Select your emotion</option>
              <option value="happy">Happy</option>
              <option value="neutral">Neutral</option>
              <option value="sad">Sad</option>
              <option value="stressed">Stressed</option>
              <option value="anxious">Anxious</option>
              <option value="angry">Angry</option>
            </select>

            <div className="flex items-center gap-4 mb-6">
              <Frown size={24} className="text-white" />
              <h3 className="text-white">How intense is your feeling?</h3>
            </div>
            <input
              type="range"
              name="intensity"
              min="0"
              max="10"
              value={surveyData.intensity}
              onChange={handleChange}
              className="w-full mb-4"
            />

            <div className="flex items-center gap-4 mb-6">
              <Users size={24} className="text-white" />
              <h3 className="text-white">Social Interaction Today</h3>
            </div>
            <select
              name="socialInteraction"
              value={surveyData.socialInteraction}
              onChange={handleChange}
              required
              className="input-field w-full mb-4"
            >
              <option value="" disabled>Select</option>
              <option value="rarely">Rarely</option>
              <option value="occasionally">Occasionally</option>
              <option value="frequently">Frequently</option>
            </select>

            <div className="flex items-center gap-4 mb-6">
              <CheckCircle size={24} className="text-white" />
              <h3 className="text-white">Were you productive today?</h3>
            </div>
            <select
              name="productivity"
              value={surveyData.productivity}
              onChange={handleChange}
              required
              className="input-field w-full mb-4"
            >
              <option value="" disabled>Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
              <option value="unsure">Unsure</option>
            </select>

            <div className="flex items-center gap-4 mb-6">
              <Edit size={24} className="text-white" />
              <h3 className="text-white">Do you feel overwhelmed?</h3>
            </div>
            <select
              name="overwhelmed"
              value={surveyData.overwhelmed}
              onChange={handleChange}
              required
              className="input-field w-full mb-4"
            >
              <option value="" disabled>Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>

            <div className="flex items-center gap-4 mb-6">
              <Clock size={24} className="text-white" />
              <h3 className="text-white">Recent Thoughts</h3>
            </div>
            <textarea
              name="recentThoughts"
              value={surveyData.recentThoughts}
              onChange={handleChange}
              placeholder="Describe your recent thoughts..."
              className="input-field w-full mb-4"
              rows="4"
            />

            <div className="flex items-center gap-4 mb-6">
              <Clock size={24} className="text-white" />
              <h3 className="text-white">Any Specific Context?</h3>
            </div>
            <textarea
              name="context"
              value={surveyData.context}
              onChange={handleChange}
              placeholder="Is there any context you'd like to mention?"
              className="input-field w-full mb-4"
              rows="4"
            />

            <div className="flex items-center gap-4 mb-6">
              <Clock size={24} className="text-white" />
              <h3 className="text-white">How long have you been feeling this way?</h3>
            </div>
            <input
              type="text"
              name="duration"
              value={surveyData.duration}
              onChange={handleChange}
              className="input-field w-full mb-4"
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded mt-6 hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
        ) : (
          <div>
            {staticRecommendations.map(renderRecommendation)}
            <button
              onClick={() => setShowRecommendations(false)}
              className="w-full bg-red-600 text-white py-2 px-4 rounded mt-6 hover:bg-red-700 transition"
            >
              Try Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Therapy;