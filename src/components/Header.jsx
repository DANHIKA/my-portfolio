import React, { useState, useEffect } from 'react';
import ThemeToggler from './ThemeToggler';
import CollapsedNavLinks from './CollapsedNavLinks';

const Header = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(false);

  const handleToggle = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  const handleScroll = () => {
    if (isNavCollapsed) {
      setIsNavCollapsed(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isNavCollapsed]);

  return (
    <header className="mb-4 text-center">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <div className="logo">
          <h4 className="fw-bold">Daniel Hika</h4>
        </div>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <button
              className="navbar-toggler border-0"
              type="button"
              onClick={handleToggle}
              aria-controls="navbarNav"
              aria-expanded={isNavCollapsed ? 'true' : 'false'}
              aria-label="Toggle navigation"
            >
              <i className={`${isNavCollapsed ? 'fa fa-times' : 'fa fa-bars'}`}></i>
            </button>
            <div className="collapse navbar-collapse d-none d-lg-flex" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#Projects">Projects</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Education">Education</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Experience">Experience</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Languages">Languages & Tools</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <ThemeToggler />
      </div>
      <CollapsedNavLinks isNavCollapsed={isNavCollapsed} />
    </header>
  );
};

export default Header;
