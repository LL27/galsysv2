import React from 'react';
import LargeIcon from "../components/LargeIcon";


const ServicesSection = () => {
  return (
    <div className="icons-container">
    <LargeIcon icon="sales" tagline="sales" className="large-icon"/>
    <LargeIcon icon="after_sales" tagline="after_sales" className="large-icon"/>
<LargeIcon icon="retrofitting" tagline="retrofitting" className="large-icon"/>
 <LargeIcon icon="consulting" tagline="consulting" className="large-icon"/>

    </div>
  )
}
export default ServicesSection
