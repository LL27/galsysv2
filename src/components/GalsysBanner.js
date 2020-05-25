import React from 'react';
import config from '../../config';
import ServicesSection from '../components/ServicesSection';

import galsysLogo from '../assets/images/galsys-logo-bw.png';


export default function GalsysBanner() {
  return (
        <section id="banner">
      <div className="inner">
        <div className="logo">
          <img src={galsysLogo} alt="logo" />
        </div>
        <h2>{config.heading} <small className="subheading">{config.subHeading}</small></h2>

        <ServicesSection/>


      </div>
    </section>
  );
}
