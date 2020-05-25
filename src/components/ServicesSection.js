import React from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';

const ServicesSection = () => {
  return (
    <div className="services-section">
      <ul className="icons icons-container">
        <li>
          {' '}
          <span className="icon fa fa-bullseye"></span>
          <p>Sales</p>
        </li>
        <li>
          {' '}
          <span className="icon fa fa-certificate"></span>
          <p> After-Sales</p>
        </li>

        <li>
          {' '}
          <span className="icon fa fa-wrench"></span>
          <p>Retrofit</p>
        </li>
        <li>
          {' '}
          <span className="icon fa fa-compass"></span>
          <p>Consulting</p>
        </li>
      </ul>

      <div className="call-to-action">
        {' '}
        <button className="button primary fit" onClick={() => scrollTo('#contact')}>Contact</button>
      </div>
    </div>
  );
};
export default ServicesSection;
