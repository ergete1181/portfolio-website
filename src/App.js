// App.js
import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Certifications from './components/Certifications/Certifications';
import Experience from './components/Experience/Experience';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Certifications />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;