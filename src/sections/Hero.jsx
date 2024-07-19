import React from 'react';

const Hero = () => {
  return (
    <div className="hero-section d-flex align-items-center justify-content-start text-left" style={{ height: '50vh' }}>
      <div className="row">
        <div className='col-md-8 col-12'>
          <h1 className="display-1 fw-bold">Click. Clakk. Full Stack</h1>
          <a href="#Contact" className="btn btn-lg d-flex align-items-center">
            Contact me<span className="material-icons">south_east</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
