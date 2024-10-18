import React, { useState } from 'react';

const Therapy = () => {
  const [emotion, setEmotion] = useState('');
  const [patterns, setPatterns] = useState('');
  const [openToNewStrategies, setOpenToNewStrategies] = useState('');
  const [showRecommendations, setShowRecommendations] = useState(false);
  const [recommendations, setRecommendations] = useState([]);
  const [nlpFeedback, setNlpFeedback] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send patterns to Flask backend
      const response = await fetch('http://localhost:5000/api/recommendations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ patterns }),
      });

      const data = await response.json();

      if (response.ok) {
        setNlpFeedback(`Your patterns suggest a ${data.sentiment} sentiment.`);
        setRecommendations(data.recommendations);
        setShowRecommendations(true);
      } else {
        setNlpFeedback(`Error: ${data.error || 'Failed to analyze patterns.'}`);
      }
    } catch (error) {
      setNlpFeedback('Failed to connect to the server.');
      console.error(error);
    }
  };

  return (
    <div className="py-96">
      {!showRecommendations ? (
        <form onSubmit={handleSubmit} className="w-[70rem] shared-container mx-auto max-w-md border-2 border-slate-400 bg-slate-800/60 p-10">
          <h2 className="text-xl font-semibold text-white mb-4">How are you feeling today?</h2>
          <select value={emotion} onChange={(e) => setEmotion(e.target.value)} required className="input-field">
            <option value="" disabled>Select your emotion</option>
            <option value="happy">Happy</option>
            <option value="neutral">Neutral</option>
            <option value="sad">Sad</option>
            <option value="stressed">Stressed</option>
            <option value="anxious">Anxious</option>
            <option value="angry">Angry</option>
          </select>

          {emotion && (
            <>
              <h3 className="text-white mt-4">Any patterns you've noticed?</h3>
              <textarea 
                value={patterns} 
                onChange={(e) => setPatterns(e.target.value)} 
                className="input-field h-24" 
              />

              {nlpFeedback && <div className="text-white mt-2">{nlpFeedback}</div>}

              <h3 className="text-white mt-4">Open to trying new strategies?</h3>
              <select value={openToNewStrategies} onChange={(e) => setOpenToNewStrategies(e.target.value)} required className="input-field">
                <option value="" disabled>Select your response</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
                <option value="maybe">Maybe</option>
              </select>

              <button type="submit" className="w-full mt-4 bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-800 transition">
                Submit
              </button>
            </>
          )}
        </form>
      ) : (
        <div className="shared-container mx-auto w-full max-w-md bg-white/20 p-6 rounded-lg shadow-lg backdrop-blur-md">
          <h3 className="text-xl font-semibold text-white mb-4">Follow these recommendations:</h3>
          <div className="space-y-4">
            {recommendations.map((rec, index) => (
              <div key={index} className="bg-white/10 p-4 rounded-lg">
                {rec.type === 'meme' && <img src={rec.content} alt="Recommended meme" className="w-full rounded-lg" />}
                {rec.type === 'practice' && <p className="text-white font-semibold">{rec.content}</p>}
              </div>
            ))}
          </div>
          <button 
            onClick={() => setShowRecommendations(false)} 
            className="w-full mt-4 bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-800 transition"
          >
            Back to Therapy
          </button>
        </div>
      )}
    </div>
  );
};

export default Therapy;
