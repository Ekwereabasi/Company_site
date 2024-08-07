
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Work from './components/Work';
import Tech from './components/Tech';
import Pricing from './components/Pricing';
import Podcast from './components/Podcast';
import Careers from './components/Careers';
import Blog from './components/Blog';
import BookACall from './components/BookACall';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/work" element={<Work />} />
        <Route path="/tech" element={<Tech />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/podcast" element={<Podcast />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/bookacall" element={<BookACall />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;
