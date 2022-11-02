import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import Projects from '../components/Resume/PersonalProjects';
import Skills from '../components/Resume/Skills';
import References from '../components/Resume/References';

import degrees from '../data/resume/degrees';
import positions from '../data/resume/positions';
import projects from '../data/resume/projects';

const sections = [
  'Education',
  'Experience',
  'Personal Projects',
  'Skills',
  'References',
];

const Resume = () => (
  <Main title="Resume" description="Gilan Serrant's Resume.">
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2 data-testid="heading">
            <Link to="resume">Resume</Link>
          </h2>
          <div className="link-container">
            {sections.map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>
            ))}
          </div>
        </div>
      </header>
      <Education data={degrees} />
      <Experience data={positions} />
      <Projects data={projects} />
      <Skills />
      <References />
    </article>
  </Main>
);

export default Resume;
