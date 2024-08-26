import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Card from '../components/Card';
import { useTheme } from '../contexts/ThemeContext'; // Adjust the path as necessary

// Import images from the assets folder
import qrDark from '../assets/Images/qr-dark.svg';
import qrLight from '../assets/Images/qr-light.svg';

const educationData = [
  {
    title: 'Bsc(Hons) of Computing in Information Systems (First Class)',
    subtitle: 'University of Greenwich',
    description: 'Graduated with a First Class degree in Computing and Information Systems. The program covered a wide range of topics including advanced software development, database management, IT infrastructure, network security, and project management. The course included hands-on experience through projects and industry collaborations.',
    date: '2023 - 2024',
    qrCodeDarkUrl: qrDark, // Use the imported QR code image
    qrCodeLightUrl: qrLight, // Use the imported QR code image
  }
];

const Education = () => {
  const { theme } = useTheme();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="Education" className="py-5">
      <div className="container">
        <h2 className="fs-5 mb-4 text-center text-md-start">Education and Qualifications</h2>
        {educationData.map((item, index) => (
          <div key={index} data-aos="fade-right">
            <Card
              title={item.title}
              subtitle={item.subtitle}
              description={item.description}
              date={item.date}
              qrCodeUrl={theme === 'dark' ? item.qrCodeDarkUrl : item.qrCodeLightUrl} // Pass the QR code URL based on the theme
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
