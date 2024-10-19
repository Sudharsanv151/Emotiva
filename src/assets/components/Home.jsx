import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Journal from './Journal';
import Videobg from './Videobg'; 
import Therapy from './Therapy';
import Explore from './Explore'
import About from './About';


const Home = () => {
    const navigate = useNavigate();

    const handleJoinNow = () => {
        navigate('/login');
    };

    const handleAICoach = () => {
        navigate('/therapy');
    };

    return (
        <>
        <div className=" h-screen text-white ">
            
            <div className="p-7 ml-20 flex z-10  items-center">
                <div className="container mx-auto px-4 py-16 sm:py-24 lg:py-32">
                    <div className="flex flex-col lg:flex-row items-center justify-between">
                        {/* Left Text Section */}
                        <div className="lg:w-1/2 mb-8 lg:mb-0">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                                Empower Yourself with Emotional Resilience
                            </h1>
                            <p className="text-xl mb-8">
                                Learn strategies to manage stress, develop emotional strength, and build resilience.
                            </p>
                            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                                <button
                                    onClick={handleAICoach}
                                    className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-full hover:bg-blue-100 transition duration-300 flex items-center justify-center"
                                >
                                    Our coach
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </button>
                                <button
                                    onClick={handleJoinNow}
                                    className="bg-transparent border-2 border-white font-semibold py-3 px-6 rounded-full hover:bg-white hover:text-blue-600 transition duration-300"
                                >
                                    Join Now
                                </button>
                            </div>
                        </div>

                        <div className="lg:w-1/2" />
                    </div>
                </div>
            </div>
        </div>
          <Explore/>
          <Therapy/>
          <Journal/>
          <About/>
          </>
    );
};

export default Home;
