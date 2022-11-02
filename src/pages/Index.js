import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main description={"Gilan Serrant's personal website."}>
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading">
            <Link to="/">Software Engineer</Link>
          </h2>
          <p>Welcome to the world of Gilan Serrant.</p>
        </div>
      </header>
      <p>
        {' '}
        Welcome to my website. Please feel free to read more about me or you can
        check out my <Link to="/resume">resume</Link>,{' '}
        <Link to="/projects">projects</Link>, view{' '}
        <Link to="/stats">site statistics</Link>, or{' '}
        <Link to="/contact">contact</Link> me.
      </p>
    </article>
  </Main>
);

export default Index;
