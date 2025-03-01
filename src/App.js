// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import CaseStudy from './pages/CaseStudy/CaseStudy';
import Contact from './components/Contact';


const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/case-study" element={<CaseStudy />} />
          </Routes>
        </main>
        <Contact />
        <Footer />
      </div>
    </Router>
  );
};

export default App;

