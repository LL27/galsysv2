import React from 'react';


const ServicesSection = () => {
  return (

    <div className="services-section">
      <ul className="icons icons-container"><li> <span className="icon fa fa-bullseye"></span><p>Sales</p></li>
        <li>     <span className="icon fa fa-certificate"></span><p> After-Sales</p>
</li>

      <li>      <span className="icon fa fa-wrench"></span><p>Retrofit</p>
</li>
<li>      <span className="icon fa fa-compass"></span><p>Consulting</p>
 </li>

      </ul>


        <div className="call-to-action">        <a href="#contact" className="button primary fit">CONTACT</a>
</div>


    </div>
  )
}
export default ServicesSection
