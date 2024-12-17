import React, { useState } from 'react';
import axios from 'axios';
import { FaChevronRight } from 'react-icons/fa';

const Therapy = () => {
    const emotions = ["happy", "neutral", "sad", "stressed", "anxious", "angry"];
    const socialInteractions = ["rarely", "occasionally", "frequently"];
    const productivities = ["yes", "no", "unsure"];
    const overwhelmed = ["yes", "no"];

    const [surveyData, setSurveyData] = useState({
        emotion: '',
        intensity: 0,
        socialInteraction: '',
        productivity: '',
        overwhelmed: '',
    });
    const [showRecommendations, setShowRecommendations] = useState(false);
    const [recommendations, setRecommendations] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSurveyData((prevData) => ({
            ...prevData,
            [name]: name === 'intensity' ? parseFloat(value) || 0 : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const recommendationsResponse = await axios.post('http://localhost:5000/recommend', surveyData);
            console.log("Response received:", recommendationsResponse.data);
            setRecommendations(recommendationsResponse.data.content);
            setShowRecommendations(true);
        } catch (err) {
            console.error("Error fetching recommendations:", err);
            setError("Failed to load recommendations.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen p-6 ">
            <div className="w-full max-w-xl bg-gray-800 p-8 rounded-lg shadow-xl">
                <h1 className="text-3xl font-bold text-center text-white mb-8">Therapy Session</h1>

                {!showRecommendations ? (
                    <form onSubmit={handleSubmit} className="space-y-6">

                        <div className="flex flex-col">
                            <label className="text-white text-lg mb-2 flex items-center">
                                <FaChevronRight className="mr-2" />
                                How do you feel emotionally?
                            </label>
                            <select
                                name="emotion"
                                value={surveyData.emotion}
                                onChange={handleChange}
                                className="w-full bg-gray-700 text-white p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">Select Emotion</option>
                                {emotions.map((emotion) => (
                                    <option key={emotion} value={emotion}>{emotion}</option>
                                ))}
                            </select>
                        </div>
                        <div className="flex flex-col">
                            <label className="text-white text-lg mb-2 flex items-center">
                                <FaChevronRight className="mr-2" />
                                How intense is this feeling?
                            </label>
                            <input
                                type="range"
                                name="intensity"
                                min="1"
                                max="10"
                                value={surveyData.intensity}
                                onChange={handleChange}
                                className="w-full bg-gray-700 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <div className="text-white text-center mt-2">{surveyData.intensity}</div>
                        </div>
                        <div className="flex flex-col">
                            <label className="text-white text-lg mb-2 flex items-center">
                                <FaChevronRight className="mr-2" />
                                How often do you interact socially?
                            </label>
                            <select
                                name="socialInteraction"
                                value={surveyData.socialInteraction}
                                onChange={handleChange}
                                className="w-full bg-gray-700 text-white p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">Select Frequency</option>
                                {socialInteractions.map((interaction) => (
                                    <option key={interaction} value={interaction}>{interaction}</option>
                                ))}
                            </select>
                        </div>
                        <div className="flex flex-col">
                            <label className="text-white text-lg mb-2 flex items-center">
                                <FaChevronRight className="mr-2" />
                                Are you being productive?
                            </label>
                            <select
                                name="productivity"
                                value={surveyData.productivity}
                                onChange={handleChange}
                                className="w-full bg-gray-700 text-white p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">Select</option>
                                {productivities.map((productivity) => (
                                    <option key={productivity} value={productivity}>{productivity}</option>
                                ))}
                            </select>
                        </div>
                        <div className="flex flex-col">
                            <label className="text-white text-lg mb-2 flex items-center">
                                <FaChevronRight className="mr-2" />
                                Do you feel overwhelmed?
                            </label>
                            <select
                                name="overwhelmed"
                                value={surveyData.overwhelmed}
                                onChange={handleChange}
                                className="w-full bg-gray-700 text-white p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                <option value="">Select</option>
                                {overwhelmed.map((value) => (
                                    <option key={value} value={value}>{value}</option>
                                ))}
                            </select>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
                        >
                            Submit
                        </button>
                    </form>
                ) : (
                    <div className="space-y-6 ">
                        {loading ? (
                            <p className="text-white text-center">Loading recommendations...</p>
                        ) : error ? (
                            <p className="text-red-500 text-center">{error}</p>
                        ) : (
                            recommendations.map((rec, index) => (
                                <div key={index} className="text-white mb-6 ">
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-lg font-semibold">Recommendation {index + 1}</span>
                                        {rec.url && (
                                            <a
                                                href={rec.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-blue-500 text-white py-2 px-4 rounded-lg text-sm hover:bg-blue-600 transition duration-300"
                                            >
                                                Open in Browser
                                            </a>
                                        )}
                                    </div>
                                    {rec.type === "iframe" && rec.url && (
                                        <iframe
                                            src={rec.url}
                                            title={`Recommendation ${index}`}
                                            height={400}
                                            className="w-full border-none rounded-lg shadow-lg"
                                        />
                                    )}
                                    {rec.type === "image" && rec.imageUrl && (
                                        <img
                                            src={rec.imageUrl}
                                            alt={rec.altText}
                                            height={400}
                                            className="w-full rounded-lg shadow-lg"
                                        />
                                    )}
                                    {rec.type === "spotify" && rec.url && (
                                        <div className="mb-6">
                                            <div className="flex justify-between items-center text-white mb-2">
                                                <span>Listen to this once!</span>
                                                
                                            </div>


                                            <div>
                                            <div dangerouslySetInnerHTML={{ __html: rec.content}} />
                                            </div>
                                        </div>
                                    )}

                                </div>
                            ))
                        )}
                        <button
                            onClick={() => {
                                setShowRecommendations(false);
                                setSurveyData({
                                    emotion: '',
                                    intensity: 0,
                                    socialInteraction: '',
                                    productivity: '',
                                    overwhelmed: '',
                                });
                                setRecommendations([]);
                            }}
                            className="mt-4 w-full bg-gray-600 text-white py-3 rounded-lg hover:bg-gray-700 transition duration-300"
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
