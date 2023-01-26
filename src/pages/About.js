import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';

const IndexPage = ({ data }) => (
  <Layout fullMenu>
<section id="wrapper">
    <header>
      <div className="inner">
        <h2>About {data.site.siteMetadata.title} </h2>
      </div>
    </header>

      <div className="wrapper">
        <div className="inner">

          <section>

            <p>Coming soon...</p>

          </section>




        </div>
      </div>

  </section>

</Layout>
);

export default IndexPage;
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
