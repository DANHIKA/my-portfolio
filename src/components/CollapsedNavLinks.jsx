import React from 'react';

const CollapsedNavLinks = ({ isNavCollapsed }) => {
  return (
    <div className={`collapsed-nav ${isNavCollapsed ? 'show' : ''}`}>
      <ul className="nav-links">
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
  );
};

export default CollapsedNavLinks;
