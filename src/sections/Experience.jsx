import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Card from '../components/Card';

const experienceData = [
  {
    title: 'Front End Developer Intern',
    subtitle: 'DataRace Wire',
    description: 'During my volunteer work at DataRace Wire as an intern Front End Developer, my main duties included coding and designing user interfaces for web applications. DataRace Wire is a tech startup focusing on creating applications for companies. I worked in cooperation with back-end developers to implement APIs and improve the user interface. My responsibilities included developing HTML, CSS, and JavaScript to build mobile-first and interactive web designs and engaging in code reviews to ensure code quality.',
    date: '2023 | Lilongwe, Malawi',
  }
];

const Experience = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  
  return (
    <section id="Experience" className="py-5">
      <div className="container">
        <h2 className="fs-5 mb-4 text-center text-md-start">Experience</h2>
        {experienceData.map((item, index) => (
          <div key={index} data-aos="fade-right">
            <Card
              title={item.title}
              subtitle={item.subtitle}
              description={item.description}
              date={item.date}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
