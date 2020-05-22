import React from 'react';



class PartnersSection extends React.Component {
  render() {
    return (
<section className="partners-wrapper">

<h2 className="major black">Our Partners</h2>

    <section className="partners-section">
       <span className="company-logo">
         <img src={require('../assets/images/accurate-logo.png')} alt="Accurate" />
       </span>
       <span className="company-logo">
         <img src={require('../assets/images/attolight.png')} alt="Accurate" />
       </span>
       <span className="company-logo">
         <img src={require('../assets/images/aat3d-logo.png')} alt="Accurate" />
       </span>
       <span className="company-logo">
         <img src={require('../assets/images/klt.jpeg')} alt="Accurate" />
       </span>
       <span className="company-logo">
         <img src={require('../assets/images/metrostaff.png')} alt="Accurate" />
       </span>
       <span className="company-logo">
         <img src={require('../assets/images/micro-logo.png')} alt="Accurate" />
       </span>
       <span className="company-logo">
         <img src={require('../assets/images/pantec-logo.png')} alt="Accurate" />
       </span>
       <span className="company-logo">
         <img src={require('../assets/images/pix4d.png')} alt="Accurate" />
       </span>
       <span className="company-logo">
         <img src={require('../assets/images/renishaw-logo.png')} alt="Accurate" />
       </span>
       <span className="company-logo">
         <img src={require('../assets/images/sensefly.png')} alt="Accurate" />
       </span>
       <span className="company-logo">
         <img src={require('../assets/images/trig.png')} alt="Accurate" />
       </span>
    </section>

</section>



    )
  }
}
export default PartnersSection;
