import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Placeholder from './Placeholder';

const TwoColumn = ({ title, detail, mediaUrl, mediaType }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="container my-5">
      <div className="row content">
        <div className="col-md-6 my-auto px-0 px-sm-5">
          <div className="px-4 py-5" data-aos="fade-up">
            <h2 className="fs-5 mb-4 text-center text-md-start">{title}</h2>
            <p>{detail}</p>
          </div>
        </div>
        <div className="col-md-6 px-0">
          <div data-aos="fade">
            {mediaType === 'image' && (
              mediaUrl ? (
                <img
                  src={mediaUrl}
                  alt="About Me"
                  className="img-fluid w-100"
                  style={{ height: '500px', objectFit: 'cover' }}
                />
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
