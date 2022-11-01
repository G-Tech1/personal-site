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
        Hi, I&apos;m Gilan. I am a full-stack software engineer continuing my
        learning of web development with Python and JavaScript via Hack
        Reactor’s software engineering boot camp. I have enjoyed working with
        other technologies such as Arduino, programmable logic controllers,
        Autodesk I have 3 years of work experience as an electrical engineer in
        the MEP industry, where I spent time creating designs for residential
        and commercial buildings, performing electrical and fire alarm
        inspections, and commissioning critical systems. I am now looking
        forward to continuing me career as a software engineer and an expert in
        Web 2.0 technology in order to segue into Web 3.0, where I believe
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
            <Link to="/about" className="button">
              About Me
            </Link>
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
