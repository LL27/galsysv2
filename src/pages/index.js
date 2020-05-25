import React from 'react';

import Layout from '../components/Layout';
import PartnersSection from '../components/PartnersSection';

import GalsysBanner from '../components/GalsysBanner';

import SectionTitle from '../components/SectionTitle';
import SectionText from '../components/SectionText';

import mapping from '../assets/images/mapping.png';
import avionics from '../assets/images/avionics.png';
import microscopy from '../assets/images/microscopy.png';
import qualityControl from '../assets/images/quality-control.png';

import config from '../../config';
const IndexPage = () => (
  <Layout>

    <section id="wrapper">

    <GalsysBanner />


      <section id="mapping" className="wrapper spotlight style1">
        <div className="inner">
          <span className="image">
            <img src={mapping} alt="mapping" />
          </span>
          <div className="content">
            <SectionTitle title="mapping" />
            <SectionText text="mapping" />

            <p>
              <strong>
                GIS-compatible • Drones and drone controls • Automated 3D map
                data editing software • Data-collection tools
              </strong>
            </p>
          </div>
        </div>
      </section>

      <section id="avionics" className="wrapper spotlight style2">
        <div className="inner">
          <span className="image">
            <img src={avionics} alt="avionics" />
          </span>
          <div className="content">
            <SectionTitle title="avionics" />
            <SectionText text="avionics" />

            <p>
              <strong>
                Mode S and ADS-B rensponders • WAAS GPS Receivers and Antennas •
                Radios
              </strong>
            </p>
          </div>
        </div>
      </section>

      <section id="microscopy" className="wrapper spotlight style3">
        <div className="inner">
          <span className="image">
            <img src={microscopy} alt="microscopy" />
          </span>
          <div className="content">
            <SectionTitle title="microscopy" />
            <SectionText text="microscopy" />

            <p>
              <strong>
                Photonics • Ultrafast Spectoscopy • Semiconductor Technologies
              </strong>
            </p>
          </div>
        </div>
      </section>

      <section id="microscopy" className="wrapper spotlight style1">
        <div className="inner">
          <span className="image">
            <img src={qualityControl} alt="qualityControl" />
          </span>
          <div className="content">
            <SectionTitle title="qualityControl" />
            <SectionText text="qualityControl" />
            <p>
              <strong>
                Gauging, CMMs/XYZ • Multisensor Systems • Motion Controllers and
                Retrofits • DMIS Inspection Software • 2D Optical Systems
              </strong>
            </p>
          </div>
        </div>
      </section>

      <section id="partners" className="wrapper style2">
        <div className="inner">
          <PartnersSection />
        </div>
      </section>
    </section>
  </Layout>
);

export default IndexPage;
