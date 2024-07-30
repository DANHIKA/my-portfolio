import React from 'react';
import Placeholder from './Placeholder'; 

const TwoColumn = ({ title, detail, mediaUrl, mediaType }) => {
  return (
    <section className="container my-5">
      <div className="row content">
        <div className="col-md-6 my-auto px-0 px-sm-5">
          <div className="px-4 py-5">
            <h2 className='fs-5 mb-4 text-center text-md-start'>{title}</h2>
            <p>{detail}</p>
          </div>
        </div>
        <div className="col-md-6 px-0">
          <div>
            {mediaType === 'image' && (
              mediaUrl ? (
                <img src={mediaUrl} alt="About Me" className="img-fluid w-100" style={{height: '500px', objectFit: 'cover'}}/>
              ) : (
                <Placeholder height="500px" width="100%" text="Image Placeholder" />
              )
            )}
            {mediaType === 'video' && (
              mediaUrl ? (
                <video controls className="img-fluid rounded">
                  <source src={mediaUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <Placeholder height="500px" width="100%" text="Video Placeholder" />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TwoColumn;
