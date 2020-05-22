import React from 'react';

import Layout from '../components/Layout';
import ServicesSection from '../components/ServicesSection';
import SectionTitle from '../components/SectionTitle';
import SectionText from '../components/SectionText';


import mapping from '../assets/images/mapping.png';
import avionics from '../assets/images/avionics.png';
import microscopy from '../assets/images/microscopy.png';
import qualityControl from '../assets/images/quality-control.png';
import pic5 from '../assets/images/pic05.jpg';
import pic6 from '../assets/images/pic06.jpg';
import pic7 from '../assets/images/pic07.jpg';

import config from '../../config';
const IndexPage = () => (
  <Layout>
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

    <section id="wrapper">

     <section id="mapping" className="wrapper spotlight style1">
        <div className="inner">
          <span  className="image">
            <img src={mapping} alt="mapping" />
          </span>
          <div className="content">
           <SectionTitle title="mapping" />
           <SectionText text="mapping" />

                <p>GIS-compatible  •  Drones and drone controls  •  Automated 3D map data editing software  •  Data-collection tools</p>

          </div>
        </div>
      </section>

     <section id="avionics" className="wrapper spotlight style1">
        <div className="inner">
          <span  className="image">
            <img src={avionics} alt="avionics" />
          </span>
          <div className="content">
           <SectionTitle title="avionics" />
           <SectionText text="avionics" />

            <p>Mode S and ADS-B rensponders  •  WAAS GPS Receivers and Antennas  •  Radios</p>

          </div>
        </div>
      </section>

     <section id="microscopy" className="wrapper spotlight style1">
        <div className="inner">
          <span  className="image">
            <img src={microscopy} alt="microscopy" />
          </span>
          <div className="content">
           <SectionTitle title="microscopy" />
           <SectionText text="microscopy" />

            <p>Photonics  •  Ultrafast Spectoscopy  •  Semiconductor Technologies</p>

          </div>
        </div>
      </section>

           <section id="microscopy" className="wrapper spotlight style1">
        <div className="inner">
          <span  className="image">
            <img src={qualityControl} alt="qualityControl" />
          </span>
          <div className="content">
           <SectionTitle title="qualityControl" />
           <SectionText text="qualityControl" />

            <p>Gauging, CMMs/XYZ   •  Multisensor Systems  •  Motion Controllers and Retrofits • DMIS Inspection Software • 2D Optical Systems</p>

          </div>
        </div>
      </section>

    </section>
  </Layout>
);

export default IndexPage;
