import React from 'react';

const Modal = ({ description, show }) => {
  return (
    <div
      className={`content custom-modal ${show ? 'd-block' : 'd-none'}`}
      style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1050, padding: '20px' }}
    >
      <div className="modal-content">
        <div className="modal-body">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
