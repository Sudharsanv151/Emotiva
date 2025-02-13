import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './assets/components/Navbar';
import Explore from './assets/components/Explore';
import Therapy from './assets/components/Therapy';
import Journal from './assets/components/Journal';
import Home from './assets/components/Home';
import Signin from './assets/pages/Signin';
import Videobg from './assets/components/Videobg';
import Signup from './assets/pages/Signup';
import About from './assets/components/About';
import { AuthProvider } from './assets/context/AuthContext';
import Footer from './assets/components/Footer';
import Profile from './assets/components/Profile';

// Scroll to section helper
const ScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return null;
};

const AppContent = () => {
  const location = useLocation();
  const showNavbar = !['/signin', '/signup'].includes(location.pathname);

  return (
    <>
      {showNavbar && <Navbar />}
      <ScrollToSection />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/therapy" element={<Therapy />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      {showNavbar && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <div className="relative h-screen w-screen overflow-hidden">
          <Videobg />
          <div className="relative z-10 h-full w-full overflow-y-auto">
            <AppContent />
          </div>
        </div>
      </AuthProvider>
    </Router>
  );
};

export default App;