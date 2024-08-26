import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS library
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    phone: '',
  });

  const [wordCount, setWordCount] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));

    if (name === 'message') {
      const words = value.trim().split(/\s+/);
      setWordCount(words.length > 300 ? 300 : words.length);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);

    // Use EmailJS to send the form data
    emailjs
      .send(
        'service_94q8oii', // Replace with your EmailJS service ID
        'template_nj1fz7i', // Replace with your EmailJS template ID
        formData,
        '2oRUv8b0jI39NS2yy' // Replace with your EmailJS user ID
      )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((error) => {
        console.error('FAILED...', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="d-flex flex-column justify-content-center">
        <div className="row my-4">
          <div className="col-md-6 col-12 mb-4 mb-md-0" data-aos="fade-up">
            <div className="form-floating">
              <input
                type="text"
                className="form-control content"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <label htmlFor="firstName">First Name</label>
            </div>
          </div>
          <div className="col-md-6 col-12" data-aos="fade-up">
            <div className="form-floating">
              <input
                type="text"
                className="form-control content"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
              <label htmlFor="lastName">Last Name</label>
            </div>
          </div>
        </div>
      </div>

      <div className="form-floating mb-3" data-aos="fade-up">
        <input
          type="email"
          className="form-control content"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="email">Email</label>
      </div>

      <div className="form-floating mb-3" data-aos="fade-up">
        <input
          type="text"
          className="form-control content"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <label htmlFor="phone">Phone (Optional)</label>
      </div>

      <div className="form-floating mb-3" data-aos="fade-up">
        <textarea
          className="form-control content"
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="10"
          required
          maxLength="300"
          style={{ height: '200px', width: '100%' }}
        ></textarea>
        <label htmlFor="message">Message</label>
        <div className="form-text">{wordCount}/300 words</div>
      </div>

      <button type="submit" className="btn d-flex align-items-center" data-aos="fade">
        Submit <span className="material-icons ms-2">arrow_forward</span>
      </button>
    </form>
  );
};

export default ContactForm;
