import React from 'react';
import config from '../../config';
export default function Footer() {
  return (
    <section id="footer">
      <div id="contact" className="inner">
        <h2 className="major">Get in touch</h2>
                <ul className="contact">

          <li className="fa-envelope">
            <a className="contact-link"
               href="mailto:galsys@bezeqint.net">{config.email}
             </a>
          </li>

          <li className="fa-fax">
            <a className="contact-link"
               href="tel:+97297713960">{config.fax}
             </a>
          </li>

        </ul>
        <ul className="contact">
          <li className="fa-home">{config.address}</li>

          <li className="fa-phone">
            <a className="contact-link" href="tel:+972522451045">{config.phone}</a>
          </li>



        </ul>
        <ul className="copyright">
          <li>&copy; Galsys Electronics Ltd. {`${new Date().getFullYear()}`}</li>
        </ul>
      </div>
    </section>
  );
}

