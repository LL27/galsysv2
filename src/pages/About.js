import React from 'react';
import galsysLogo from '../assets/images/galsys-logo-2.png';

import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>About Galsys Electronics</h2>
        </div>
      </header>
                <section className="wrapper spotlight">
            <h3 className="major">Text</h3>
            <p>This is <b>bold</b> and this is <strong>strong</strong>. This is <i>italic</i> and this is <em>emphasized</em>.
            This is <sup>superscript</sup> text and this is <sub>subscript</sub> text.
            This is <u>underlined</u> and this is code: <code>for (;;) { `{...}` }</code>. Finally, <a href="/#">this is a link</a>.</p>


          </section>
    </section>
  </Layout>
);

export default IndexPage;
