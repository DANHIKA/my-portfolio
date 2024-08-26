import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import ProjectCard from '../components/ProjectCard';
import SearchBar from '../components/SearchBar';
import FilterDropdown from '../components/FilterDropdown';

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

const filterOptions = [
  { value: 'React', label: 'React' },
  { value: 'Node.js', label: 'Node.js' },
  { value: 'Vue.js', label: 'Vue.js' },
  { value: 'Angular', label: 'Angular' },
  { value: 'Bootstrap', label: 'Bootstrap' },
  { value: 'AWS', label: 'AWS' },
  { value: 'Firebase', label: 'Firebase' },
];

const Projects = () => {
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [visibleProjects, setVisibleProjects] = useState(4);
  const [showMore, setShowMore] = useState(true);
  const [selectedFilters, setSelectedFilters] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = projectsData.filter((project) =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProjects(filtered);
  };

  const handleFilterChange = (event) => {
    const value = event.target.value;
    const checked = event.target.checked;

    const newFilters = checked
      ? [...selectedFilters, value]
      : selectedFilters.filter((filter) => filter !== value);

    setSelectedFilters(newFilters);

    if (newFilters.length === 0) {
      setFilteredProjects(projectsData);
    } else {
      const filtered = projectsData.filter((project) =>
        newFilters.every((filter) => project.features.includes(filter))
      );
      setFilteredProjects(filtered);
    }
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
        <h2 className="fs-4 mb-4 text-center text-md-start" data-aos="fade-up">Projects</h2>
        <div className="row mb-3" data-aos="fade-up">
          <div className="col-md-10 col-12">
            <SearchBar onSearch={handleSearch} />
          </div>
          <div className="col-md-2 col-12 d-flex justify-content-md-end justify-content-start">
            <FilterDropdown filterOptions={filterOptions} handleFilterChange={handleFilterChange} />
          </div>
        </div>
        <div className="row">
  {filteredProjects.slice(0, visibleProjects).map((project, index) => (
    <div key={index} className="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay={`${index * 100}`}>
      <ProjectCard
        title={project.title}
        features={project.features}
        image={project.image}
      />
    </div>
  ))}
</div>

        <div className="text-center mt-4" data-aos="fade-up">
          <button className="btn d-flex align-items-center" onClick={toggleProjects}>
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
