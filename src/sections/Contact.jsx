import React from 'react';
import ContactForm from '../components/Contact/ContactForm';

const Contact = () => {
  const handleFormSubmit = (formData) => {
    console.log(formData);
    // Handle form submission (e.g., send data to server)
  };

  return (
    <div className="mt-5">
      <section id="Contact" name="Contact Us" className="py-5">
        <div className="container">
          <div className="justify-content-center">
            <h4 className='mb-4 text-center text-md-start'>I'd love to here from you</h4>
              <ContactForm onSubmit={handleFormSubmit} />           
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
