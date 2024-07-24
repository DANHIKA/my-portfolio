import React from 'react';
import Card from '../components/Card';

const educationData = [
  {
    title: 'Bsc(Hons) of Computing in Information Systems (First Class)',
    subtitle: 'University of Greenwich',
    description: 'Graduated with a First Class degree in Computing and Information Systems. The program covered a wide range of topics including advanced software development, database management, IT infrastructure, network security, and project management. The course included hands-on experience through projects and industry collaborations.',
    date: '2023 - 2024',
  },
  {
    title: 'Advanced Diploma in Computing',
    subtitle: 'NCC Education',
    description: 'Completed an Advanced Diploma in Computing with a focus on software engineering, system analysis, and design. This qualification provided a strong foundation in computing principles and practical skills necessary for IT industry roles.',
    date: '2021 - 2022',
  }
];

const Education = () => {
  return (
    <section id="Education" className="py-5">
      <div className="container">
        <h2 className="fs-5 mb-4 text-center text-md-start">Education and Qualifications</h2>
        {educationData.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            subtitle={item.subtitle}
            description={item.description}
            date={item.date}
          />
        ))}
      </div>
    </section>
  );
};

export default Education;
