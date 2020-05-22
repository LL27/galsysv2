import React from "react";
const {PropTypes} = React;

const titles = {
  avionics: "Avionics",
  qualityControl: "Metal Industry Quality Control",
  mapping: "Mapping and Remote Sensing",
  microscopy: "e-Microscopy",
  contact: "Contact Us"
};



const SectionTitle  = (props) => {
  return (
      <h2 className="major">{titles[props.title]}</h2>
    );

};

export default SectionTitle;
/**
 * Created by litallevin on 30/09/16.
 */
