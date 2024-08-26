import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import nodeLogo from '../assets/Logos/nodejs-logo.svg'; 
import reactLogo from '../assets/Logos/react-logo.svg'; 
import mongoLogo from '../assets/Logos/mongodb-logo.svg'; 
import reduxLogo from '../assets/Logos/redux-logo.svg'; 
import expressLogo from '../assets/Logos/express-logo.svg'; 
import expressLightLogo from '../assets/Logos/express-light-logo.svg'; 
import bootstrapLogo from '../assets/Logos/bootstrap-logo.svg'; 
import tailwindLogo from '../assets/Logos/tailwind-logo.svg'; 
import graphqlLogo from '../assets/Logos/graphql-logo.svg'; 
import typescriptLogo from '../assets/Logos/typescript-logo.svg'; 
import jestLogo from '../assets/Logos/jest-logo.svg'; 
import webpackLogo from '../assets/Logos/webpack-logo.svg'; 
import babelLogo from '../assets/Logos/babel-logo.svg'; 
import dockerLogo from '../assets/Logos/docker-logo.svg'; 
import awsLogo from '../assets/Logos/aws-logo.svg'; 
import herokuLogo from '../assets/Logos/heroku-logo.svg'; 
import netlifyLogo from '../assets/Logos/netlify-logo.svg'; 
import firebaseLogo from '../assets/Logos/firebase-logo.svg'; 
import gitLogo from '../assets/Logos/git-logo.svg'; 
import githubLogo from '../assets/Logos/github-logo.svg'; 
import githubLightLogo from '../assets/Logos/github-light-logo.svg'; 
import nginxLogo from '../assets/Logos/nginx-logo.svg';
import postmanLogo from '../assets/Logos/postman-logo.svg';
import { useTheme } from '../contexts/ThemeContext'; 

const getLogo = (name, theme) => {
  switch (name) {
    case 'GitHub':
      return theme === 'dark' ? githubLightLogo : githubLogo;
    case 'Express.js':
      return theme === 'dark' ? expressLightLogo : expressLogo;
    default:
      return languages.find(lang => lang.name === name).logo;
  }
};

const languages = [
  { name: 'Node.js', logo: nodeLogo },
  { name: 'React', logo: reactLogo },
  { name: 'MongoDB', logo: mongoLogo },
  { name: 'Redux', logo: reduxLogo },
  { name: 'Bootstrap', logo: bootstrapLogo },
  { name: 'Tailwind CSS', logo: tailwindLogo },
  { name: 'GraphQL', logo: graphqlLogo },
  { name: 'Postman', logo: postmanLogo },
  { name: 'Jest', logo: jestLogo },
  { name: 'Webpack', logo: webpackLogo },
  { name: 'Babel', logo: babelLogo },
  { name: 'Docker', logo: dockerLogo },
  { name: 'AWS', logo: awsLogo },
  { name: 'Heroku', logo: herokuLogo },
  { name: 'Netlify', logo: netlifyLogo },
  { name: 'Firebase', logo: firebaseLogo },
  { name: 'Git', logo: gitLogo },
  { name: 'GitHub', logo: githubLogo },
  { name: 'ExpressJS', logo: expressLogo },
  { name: 'Nginx', logo: nginxLogo },
];

const Languages = () => {
  const { theme } = useTheme();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="Languages" className="container my-5">
      <div className="row text-center">
        <h2 className="fs-4 mb-4 text-md-start">Languages & Tools</h2>
        {languages.map((language, index) => (
          <div
            className="col-6 col-md-4 col-lg-3"
            key={index}
            data-aos="zoom-in"
          >
            <img
              src={getLogo(language.name, theme)}
              alt={language.name}
              className="img-fluid"
              style={{ height: '100px' }}
            />
            <p className="mt-2">{language.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Languages;
