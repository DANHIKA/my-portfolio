// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Hero from './sections/Hero';
import './main.css';
import About from './sections/About';
import Languages from './sections/Languages';
import Education from './sections/Education';
import Experience from './sections/Experience';

const App = () => {
  return (
    <div className='container '>
      <Header />
      <main className="mt-4">
        <Hero />
        <About />
        <Education />
        <Languages/>
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
