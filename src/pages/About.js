import React from 'react';

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
            <h4>Blockquote</h4>
            <blockquote>Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan faucibus. Vestibulum ante ipsum primis in faucibus lorem ipsum dolor sit amet nullam adipiscing eu felis.</blockquote>
            <h4>Preformatted</h4>
            <pre>
              <code>i = 0;

              while (!deck.isInOrder()) {`{
              print 'Iteration ' + i;
              deck.shuffle();
              i++;
              }`}

  print 'It took ' + i + ' iterations to sort the deck.';
              </code>
            </pre>
          </section>
    </section>
  </Layout>
);

export default IndexPage;
