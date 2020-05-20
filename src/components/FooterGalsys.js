import React from 'react';
import config from '../../config';
export default function Footer() {
  return (
    <section id="footer">
      <div className="inner">
        <h2 className="major">Get in touch</h2>

        <ul className="contact">
          <li className="fa-home">{config.address}</li>

          <li className="fa-phone">{config.phone}</li>
        </ul>
        <ul className="copyright">
          <li>&copy; Galsys Electronics Ltd. {`${new Date().getFullYear()}`}</li>
        </ul>
      </div>
    </section>
  );
}
