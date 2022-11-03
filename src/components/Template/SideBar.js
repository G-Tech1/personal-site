import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Gilan Serrant</h2>
        <p>
          <a href="mailto:gilserrant5@gmail.com">gilserrant5@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Gilan. I am a full-stack software engineer adept at
        building web applications using Django and React. I have enjoyed working
        with other technologies such as Arduino, programmable logic controllers,
        and Autodesk. I have 3 years of work experience as an electrical
        engineer in the MEP industry where I spent time performing electrical
        design, inspections, and commissioning critical systems. I have now
        pivoted into the world of software where I plan on continuing to build
        my skills in Web 2.0 and eventually segue into Web 3.0, where I believe
        cryptocurrencies, NFTs, and blockchain technology will drastically
        change the world as we know it.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            ''
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">Gilan Serrant</p>
    </section>
  </section>
);

export default SideBar;
