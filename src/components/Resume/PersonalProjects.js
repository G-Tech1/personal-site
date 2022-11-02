import React from 'react';
import PropTypes from 'prop-types';

import Work from './PersonalProjects/Work';

const Projects = ({ data }) => (
  <div className="experience">
    <div className="link-to" id="experience" />
    <div className="title">
      <h3>Personal Projects</h3>
    </div>
    {data.map((job) => (
      <Work data={job} key={job.company} />
    ))}
  </div>
);

Projects.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      company: PropTypes.string,
      position: PropTypes.string,
      link: PropTypes.string,
      daterange: PropTypes.string,
      points: PropTypes.arrayOf(PropTypes.string),
    }),
  ),
};

Projects.defaultProps = {
  data: [],
};

export default Projects;
