import React from 'react';

const Card = ({ title, subtitle, description, date, qrCodeUrl }) => {
  return (
    <div className="card content mb-3 w-100">
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <div className='d-flex flex-wrap'>
            {date && <p className="card-text me-3"><small className="text-muted">{date}</small></p>}
            <h5 className="card-title me-3">{title}</h5>
          </div>
          {subtitle && <h6 className="card-subtitle mb-2 text-muted me-3">{subtitle}</h6>}
          <p className="card-text">{description}</p>
        </div>
        {qrCodeUrl && (
          <div className="text-center mt-3">
            <img
              src={qrCodeUrl}
              alt="Degree QR Code"
              style={{ maxWidth: '250px', height: 'auto' }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
