import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import SearchBar from '../components/SearchBar';

const projectsData = [
  {
    title: 'E-commerce',
    features: ['React', 'Bootstrap', 'API'],
    image: '',
  },
  {
    title: 'E-Learning',
    features: ['Node.js', 'Express', 'MongoDB'],
    image: '',
  },
  {
    title: 'Law Firm',
    features: ['React Native', 'Expo', 'Firebase'],
    image: '',
  },
  {
    title: 'Healthcare System',
    features: ['Angular', 'TypeScript', 'AWS'],
    image: '',
  },
  {
    title: 'Social Media App',
    features: ['Vue.js', 'Vuetify', 'Firebase'],
    image: '',
  },
  {
    title: 'Real Estate',
    features: ['Next.js', 'GraphQL', 'Tailwind CSS'],
    image: '',
  },
  {
    title: 'Fitness Tracker',
    features: ['React', 'Redux', 'Node.js'],
    image: '',
  },
  {
    title: 'Travel Blog',
    features: ['Gatsby', 'Contentful', 'Netlify'],
    image: '',
  },
];

const Projects = () => {
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [visibleProjects, setVisibleProjects] = useState(4);
  const [showMore, setShowMore] = useState(true);

  const handleSearch = (searchTerm) => {
    const filtered = projectsData.filter((project) =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProjects(filtered);
  };

  const toggleProjects = () => {
    if (showMore) {
      setVisibleProjects(filteredProjects.length);
    } else {
      setVisibleProjects(4);
    }
    setShowMore(!showMore);
  };

  return (
    <section id="Projects" className="py-5">
      <div className="container">
        <SearchBar onSearch={handleSearch} />
        <div className="row">
          {filteredProjects.slice(0, visibleProjects).map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              features={project.features}
              image={project.image}
            />
          ))}
        </div>
        <div className="text-center mt-4">
          <button className="btn" onClick={toggleProjects}>
            {showMore ? 'See more projects' : 'Show less projects'}{' '}
            <span className="material-icons">
              {showMore ? 'arrow_downward' : 'arrow_upward'}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
