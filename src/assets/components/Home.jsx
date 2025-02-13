import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Journal from './Journal';
import Videobg from './Videobg';
import Therapy from './Therapy';
import Explore from './Explore';
import About from './About';
import Footer from './Footer';

const Home = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleJoinNow = () => {
        navigate('/signin');
    };

    const handleAICoach = () => {
        if (location.pathname === '/') {
            const element = document.getElementById('therapy-section');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            navigate('/');
            setTimeout(() => {
                const element = document.getElementById('therapy-section');
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    };

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
        exit: { opacity: 0, y: -50, transition: { duration: 0.5, ease: 'easeIn' } },
    };

    const buttonVariants = {
        hover: { scale: 1.05, transition: { duration: 0.2 } },
        tap: { scale: 0.95 },
    };

    return (
        <>
            <div className="h-screen text-white relative">
                <Videobg />
                <motion.div
                    className="absolute inset-0 flex items-center justify-center sm:pl-8 px-auto mx-12 md:px-24"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    <div className="container mx-auto">
                        <div className="flex flex-col lg:flex-row items-center justify-between">
                            <div className="lg:w-1/2 lg:text-left mb-8 lg:mb-0">
                                <motion.h1
                                    className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.8 } }}
                                >
                                    Empower Yourself with <span className="text-slate-100">Emotional Resilience</span>
                                </motion.h1>
                                <motion.p
                                    className="text-lg sm:text-xl mb-8 text-gray-300"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.8 } }}
                                >
                                    Learn strategies to manage stress, develop emotional strength, and build resilience.
                                </motion.p>
                                <motion.div
                                    className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0, transition: { delay: 0.7, duration: 0.8 } }}
                                >
                                    <motion.button
                                        onClick={handleAICoach}
                                        className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-full hover:bg-blue-100 transition duration-300 flex items-center justify-center shadow-lg hover:shadow-xl"
                                        variants={buttonVariants}
                                        whileHover="hover"
                                        whileTap="tap"
                                    >
                                        Start Now
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </motion.button>
                                    <motion.button
                                        onClick={handleJoinNow}
                                        className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-full hover:bg-white hover:text-blue-600 transition duration-300 shadow-lg hover:shadow-xl"
                                        variants={buttonVariants}
                                        whileHover="hover"
                                        whileTap="tap"
                                    >
                                        Join Now
                                    </motion.button>
                                </motion.div>
                            </div>

                            <div className="lg:w-1/2" />
                        </div>
                    </div>
                </motion.div>
            </div>

            <div id="explore-section">
                <Explore />
            </div>

            <div id="therapy-section">
                <Therapy />
            </div>

            <div id="journal-section">
                <Journal />
            </div>

            <div id="about-section">
                <About />
            </div>

            <Footer />
        </>
    );
};

export default Home;