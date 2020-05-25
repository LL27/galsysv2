import React, { useState } from 'react';
import Nav from './Nav';
import { Link } from 'gatsby';
import galsysLogo from '../assets/images/galsys-logo-bw.png';

export default function SideBar({ fullMenu }) {
  const [headerOpen, toggleHeader] = useState(false);
  return (
    <>
      <header id="header" className={`${fullMenu ? '' : 'alt'}`}>
        <h1>
          <Link to="/">
            <div className="sidebar-logo">
              <img src={galsysLogo} alt="logo" />
            </div>
           </Link>
        </h1>

        <nav>
          <a
            href="#menu"
            onClick={e => {
              e.preventDefault();
              toggleHeader(!headerOpen);
            }}
            className="menuToggle"
          >
            <span>Menu</span>
          </a>
        </nav>
      </header>
      <div className={`${headerOpen ? 'is-menu-visible' : ' '}`}>
        <Nav onMenuToggle={() => toggleHeader(!headerOpen)} />
      </div>
    </>
  );
}
