// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Hero from './sections/Hero';
import './main.css';

const App = () => {
  return (
    <div>
      <Header />
      <main className="container mt-4">
        <Hero />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
