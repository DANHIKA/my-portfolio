import React from 'react';
import nodeLogo from '../assets/Logos/nodejs-logo.svg'; 
import reactLogo from '../assets/Logos/react-logo.svg'; // Adjust the import path as needed
import mongoLogo from '../assets/Logos/mongodb-logo.svg'; // Adjust the import path as needed
import reduxLogo from '../assets/Logos/redux-logo.svg'; // Add Redux logo
import expressLogo from '../assets/Logos/express-logo.svg'; // Add Express.js logo
import expressLightLogo from '../assets/Logos/express-light-logo.svg'; // Add Express.js light logo
import bootstrapLogo from '../assets/Logos/bootstrap-logo.svg'; // Add Bootstrap logo
import tailwindLogo from '../assets/Logos/tailwind-logo.svg'; // Add Tailwind CSS logo
import graphqlLogo from '../assets/Logos/graphql-logo.svg'; // Add GraphQL logo
import typescriptLogo from '../assets/Logos/typescript-logo.svg'; // Add TypeScript logo
import jestLogo from '../assets/Logos/jest-logo.svg'; // Add Jest logo
import webpackLogo from '../assets/Logos/webpack-logo.svg'; // Add Webpack logo
import babelLogo from '../assets/Logos/babel-logo.svg'; // Add Babel logo
import dockerLogo from '../assets/Logos/docker-logo.svg'; // Add Docker logo
import awsLogo from '../assets/Logos/aws-logo.svg'; // Add AWS logo
import herokuLogo from '../assets/Logos/heroku-logo.svg'; // Add Heroku logo
import netlifyLogo from '../assets/Logos/netlify-logo.svg'; // Add Netlify logo
import firebaseLogo from '../assets/Logos/firebase-logo.svg'; // Add Firebase logo
import gitLogo from '../assets/Logos/git-logo.svg'; // Add Git logo
import githubLogo from '../assets/Logos/github-logo.svg'; // Add GitHub logo
import githubLightLogo from '../assets/Logos/github-light-logo.svg'; // Add GitHub light logo
import nginxLogo from '../assets/Logos/nginx-logo.svg';
import postmanLogo from '../assets/Logos/postman-logo.svg';
import { useTheme } from '../contexts/ThemeContext'; // Adjust the import path as needed

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

  return (
    <section id="Languages" className="container my-5">
      <div className="row text-center">
        <h2 className="fs-4 mb-4 text-md-start">Languages & Tools</h2>
        {languages.map((language, index) => (
          <div className="col-6 col-md-4 col-lg-3" key={index}>
            <img src={getLogo(language.name, theme)} alt={language.name} className="img-fluid" style={{ height: '100px' }} />
            <p className="mt-2">{language.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Languages;
