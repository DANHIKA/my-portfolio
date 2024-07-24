import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Hero = () => {
  return (
    <div className="hero-section d-flex align-items-center justify-content-start text-left" style={{ height: '50vh' }}>
      <div className="row w-100">
        <div className='col-md-8 col-12'>
          <h1 className="display-1 fw-bold">Click. Clakk. Full Stack</h1>
          <a href="#Contact" className="btn btn-lg d-flex align-items-center">
            Contact me<span className="material-icons">south_east</span>
          </a>
        </div>
        <div className='col-md-4 col-12 d-flex align-items-end justify-content-end'>
          <div className="social-icons mt-3">
            <a href="https://web.facebook.com/hika.ntandiks/" target="_blank" rel="noopener noreferrer" className="text-decoration-none mx-2">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://github.com/DANHIKA/" target="_blank" rel="noopener noreferrer" className="text-decoration-none mx-2">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/hika-ntandika-34961b28a/" target="_blank" rel="noopener noreferrer" className="text-decoration-none mx-2">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
