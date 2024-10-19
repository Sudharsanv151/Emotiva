// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './assets/components/Navbar';
import Explore from './assets/components/Explore';
import Therapy from './assets/components/Therapy';
import Journal from './assets/components/Journal';
import Home from './assets/components/Home';
import Signin from './assets/pages/Signin';
import Videobg from './assets/components/Videobg';
import Signup from './assets/pages/Signup';
import About from './assets/components/About'

const App = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Video Background */}
      <Videobg />

      {/* Main Content */}
      <div className="relative z-10 h-full w-full overflow-y-auto">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/therapy" element={<Therapy />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/about" element={<About />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Signin />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default App;
