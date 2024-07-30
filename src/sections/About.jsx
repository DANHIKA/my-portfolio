import React from 'react';
import TwoColumn from '../components/TwoColumn'; // Adjust the import path as needed
import ProfilePic from '../assets/Images/profile.png'
const About = () => {
  const aboutMeDetails = {
    title: 'About Me',
    detail: `Hello! I'm a full stack developer with a passion for building responsive and user-friendly web applications. With expertise in various technologies including React, Node.js, and more, I enjoy creating projects that make a difference. I am always open to new opportunities and collaborations. Let's connect and create something amazing together!`,
    mediaUrl: ProfilePic, 
    mediaType: 'image',
  };

  return (
    <section id="About">
      <TwoColumn 
        title={aboutMeDetails.title} 
        detail={aboutMeDetails.detail} 
        mediaUrl={aboutMeDetails.mediaUrl} 
        mediaType={aboutMeDetails.mediaType} 
      />
    </section>
  );
};

export default About;
