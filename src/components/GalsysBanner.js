import React from 'react';
import config from '../../config';
import ServicesSection from '../components/ServicesSection';

export default function GalsysBanner() {
  return (
        <section id="banner">
      <div className="inner">
        <div className="logo">
          <span className="icon">GSE</span>
        </div>
        <h2>{config.heading} <small className="subheading">{config.subHeading}</small></h2>

        <ServicesSection/>
          <a href="#contact" className="button primary">CONTACT</a>

      </div>
    </section>
  );
}
