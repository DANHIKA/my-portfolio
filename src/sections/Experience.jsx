import React from 'react';
import Card from '../components/Card';

const experienceData = [
  {
    title: 'Software Developer Intern',
    subtitle: 'Octate Solutions',
    description: 'Worked on various web development projects using the MERN stack. Implemented features and fixed bugs in existing applications. Collaborated with the development team to design and develop new functionalities. Gained hands-on experience with front-end technologies like React, Redux, and Bootstrap, as well as back-end technologies like Node.js, Express, and MongoDB. Participated in code reviews and contributed to improving the overall code quality and performance.',
    date: 'June 2023 - Present',
  },
  {
    title: 'IT Support Technician',
    subtitle: 'Tech Corp',
    description: 'Provided IT support to clients, troubleshooting hardware and software issues, and ensuring network security. Assisted in setting up and configuring computer systems, printers, and network equipment. Responded to support requests and resolved technical issues in a timely manner. Conducted regular maintenance and updates to systems to ensure optimal performance and security. Offered training and guidance to clients on best practices for using technology efficiently.',
    date: 'June 2022 - May 2023',
  },
];

const Experience = () => {
  return (
    <section id="Experience" className="py-5">
      <div className="container">
        <h2 className="fs-5 mb-4 text-center text-md-start">Experience</h2>
        {experienceData.map((item, index) => (
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

export default Experience;
