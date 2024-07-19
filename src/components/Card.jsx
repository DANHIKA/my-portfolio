import React, { useState } from 'react';
import Modal from './Modal';

const Card = ({ title, subtitle, description, date }) => {
  const [showModal, setShowModal] = useState(false);

  const handleMouseEnter = () => {
    setShowModal(true);
  };

  const handleMouseLeave = () => {
    setShowModal(false);
  };

  return (
    <div
      className="card content mb-3 w-100"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ position: 'relative' }}
    >
      <div className="card-body d-flex align-items-center justify-content-between">
        {date && <p className="card-text me-3"><small className="text-muted">{date}</small></p>}
        <h5 className="card-title me-3">{title}</h5>
        {subtitle && <h6 className="card-subtitle mb-2 text-muted me-3">{subtitle}</h6>}
      </div>
      {showModal && <Modal description={description} show={showModal} />}
    </div>
  );
};

export default Card;
