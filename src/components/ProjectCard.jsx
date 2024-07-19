// src/components/ProjectCard.jsx
import React from 'react';
import Placeholder from './Placeholder';

const ProjectCard = ({ title, features, image }) => {
  return (
    <div className="col-lg-6 col-md-6 mb-4">
      <div className="card content border-0 h-100">
        {image ? (
          <img src={image} alt={title} style={{ maxHeight: '350px', objectFit: 'cover' }} />
        ) : (
          <Placeholder height="350px" width="100%" text='Image not available'  />
        )}
        <div className="card-body d-flex flex-column">
          <h5 className="card-title fs-2">{title}</h5>
          <div className="mb-3">
            <div className="row row-cols-auto">
              {features.map((feature, index) => (
                <div key={index} className="col mb-2">
                  <div className="border p-2">{feature}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-auto">
            <a href="#" className="btn mt-3 d-flex align-items-center">
              See the case study <span className="material-icons ms-2">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
