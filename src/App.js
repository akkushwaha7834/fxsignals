import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import './assets/css/style.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Forex from './components/Forex';
import Stocks from './components/Stocks';
import Crypto from './components/Crypto';
import Economy from './components/Economy';
import Commodities from './components/Commodities';
import Footer from './components/Footer';


function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Duration of animation in milliseconds
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/forex" element={<Forex />} />
        <Route path="/stocks" element={<Stocks />} />
        <Route path="/stocks" element={<Stocks />} />
        <Route path="/crypto" element={<Crypto />} />
        <Route path="/economy" element={<Economy />} />
        <Route path="/commodities" element={<Commodities />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;