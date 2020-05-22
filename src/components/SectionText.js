import React from "react";
const {PropTypes} = React;

const texts = {
  qualityControl: "Precision measurement machines and software from the world's leading metrology manufacturers.",
  avionics: "Innovative products for aircraft owners and operators.",
  mapping: "Photogrammetry for accurate mapping and 3D modelling.",
  microscopy: "Spectroscopy systems with integrated light and electron microscope."
};

const SectionText  = (props) => {
  return (
    <p className="section-text">{texts[props.text]}</p>
  );
};


export default SectionText;
