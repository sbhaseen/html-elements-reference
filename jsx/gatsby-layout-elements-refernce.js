import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

export default function ElementsReference() {
  return (
    <Layout>
      <SEO title="Element Reference" />
      <>
        <section>
          <header className="align-center">
            <h1>Elements Reference (JSX Gatsby Layout)</h1>
          </header>

          <h2>Text</h2>
          <p>
            This is <b>bold</b> and this is <strong>strong</strong>.
          </p>
          <p>
            This is <i>italic</i> and this is <em>emphasized</em>.
          </p>
          <p>
            This is <sup>superscript</sup> text and this is <sub>subscript</sub>{" "}
            text.
          </p>
          <p>
            This is <u>underlined</u> and this is code:
            <code>for (foo in bar) {"{...}"}</code>.
          </p>
          <p>
            This is a <a href="/">link</a>.
          </p>

          <hr />
          <h1>Heading Level 1</h1>
          <h2>Heading Level 2</h2>
          <h3>Heading Level 3</h3>
          <h4>Heading Level 4</h4>
          <h5>Heading Level 5</h5>
          <h6>Heading Level 6</h6>
          <hr />
          <header>
            <h2>Heading with a Subtitle</h2>
            <p>Lorem ipsum dolor sit amet nullam id egestas urna aliquam</p>
          </header>
          <p>
            Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio
            porttitor sem non mi integer non faucibus ornare mi ut ante amet
            placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan
            varius montes viverra nibh in adipiscing blandit tempus accumsan.
          </p>
          <header>
            <h3>Heading with a Subtitle</h3>
            <p>Lorem ipsum dolor sit amet nullam id egestas urna aliquam</p>
          </header>
          <p>
            Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio
            porttitor sem non mi integer non faucibus ornare mi ut ante amet
            placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan
            varius montes viverra nibh in adipiscing blandit tempus accumsan.
          </p>
          <header>
            <h4>Heading with a Subtitle</h4>
            <p>Lorem ipsum dolor sit amet nullam id egestas urna aliquam</p>
          </header>
          <p>
            Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio
            porttitor sem non mi integer non faucibus ornare mi ut ante amet
            placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan
            varius montes viverra nibh in adipiscing blandit tempus accumsan.
          </p>

          <hr />

          <h2>Lists</h2>
          <div>
            <div>
              <h3>Unordered</h3>
              <ul>
                <li>Dolor pulvinar etiam.</li>
                <li>Sagittis lorem eleifend.</li>
                <li>Felis feugiat dolore viverra.</li>
                <li>Dolor pulvinar etiam.</li>
              </ul>

              <h3>Alternate</h3>
              <ul className="alt">
                <li>Dolor pulvinar etiam etiam.</li>
                <li>Sagittis adipiscing eleifend.</li>
                <li>Felis enim dolore viverra.</li>
                <li>Dolor pulvinar etiam etiam.</li>
              </ul>
            </div>
            <div>
              <h3>Ordered</h3>
              <ol>
                <li>Dolor pulvinar etiam.</li>
                <li>Etiam vel felis at viverra.</li>
                <li>Felis enim feugiat magna.</li>
                <li>Etiam vel felis nullam.</li>
                <li>Felis enim et tempus.</li>
              </ol>

              <h3>Icons</h3>
              <ul className="icons">
                <li>
                  <a href="/">
                    <span className="fab fa-twitter">Twitter</span>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span className="fab fa-facebook">Facebook</span>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span className="fab fa-instagram">Instagram</span>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span className="fab fa-github">Github</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <h3>Definition</h3>
          <dl>
            <dt>Item 1</dt>
            <dd>
              <p>
                Lorem ipsum dolor vestibulum ante ipsum primis in faucibus
                vestibulum. Blandit adipiscing eu felis iaculis volutpat ac
                adipiscing accumsan eu faucibus. Integer ac pellentesque
                praesent.
              </p>
            </dd>
            <dt>Item 2</dt>
            <dd>
              <p>
                Lorem ipsum dolor vestibulum ante ipsum primis in faucibus
                vestibulum. Blandit adipiscing eu felis iaculis volutpat ac
                adipiscing accumsan eu faucibus. Integer ac pellentesque
                praesent.
              </p>
            </dd>
            <dt>Item 3</dt>
            <dd>
              <p>
                Lorem ipsum dolor vestibulum ante ipsum primis in faucibus
                vestibulum. Blandit adipiscing eu felis iaculis volutpat ac
                adipiscing accumsan eu faucibus. Integer ac pellentesque
                praesent.
              </p>
            </dd>
          </dl>

          <hr />

          <h2>Blockquote</h2>
          <blockquote>
            Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis
            sagittis eget tempus euismod. Vestibulum ante ipsum primis in
            faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac
            adipiscing accumsan faucibus. Vestibulum ante ipsum primis in
            faucibus vestibulum. Blandit adipiscing eu felis.
          </blockquote>

          <hr />

          <h2>Table</h2>

          <h3>Default</h3>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Item 1</td>
                  <td>Ante turpis integer aliquet porttitor.</td>
                  <td>29.99</td>
                </tr>
                <tr>
                  <td>Item 2</td>
                  <td>Vis ac commodo adipiscing arcu aliquet.</td>
                  <td>19.99</td>
                </tr>
                <tr>
                  <td>Item 3</td>
                  <td>Morbi faucibus arcu accumsan lorem.</td>
                  <td>29.99</td>
                </tr>
                <tr>
                  <td>Item 4</td>
                  <td>Vitae integer tempus condimentum.</td>
                  <td>19.99</td>
                </tr>
                <tr>
                  <td>Item 5</td>
                  <td>Ante turpis integer aliquet porttitor.</td>
                  <td>29.99</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="2"></td>
                  <td>100.00</td>
                </tr>
              </tfoot>
            </table>
          </div>

          <h3>Alternate</h3>
          <div className="table-wrapper">
            <table className="alt">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Item 1</td>
                  <td>Ante turpis integer aliquet porttitor.</td>
                  <td>29.99</td>
                </tr>
                <tr>
                  <td>Item 2</td>
                  <td>Vis ac commodo adipiscing arcu aliquet.</td>
                  <td>19.99</td>
                </tr>
                <tr>
                  <td>Item 3</td>
                  <td>Morbi faucibus arcu accumsan lorem.</td>
                  <td>29.99</td>
                </tr>
                <tr>
                  <td>Item 4</td>
                  <td>Vitae integer tempus condimentum.</td>
                  <td>19.99</td>
                </tr>
                <tr>
                  <td>Item 5</td>
                  <td>Ante turpis integer aliquet porttitor.</td>
                  <td>29.99</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="2"></td>
                  <td>100.00</td>
                </tr>
              </tfoot>
            </table>
          </div>

          <hr />

          <h2>Buttons</h2>
          <ul>
            <li>
              <button className="button primary">Primary</button>{" "}
            </li>
            <li>
              <button className="button">Default</button>{" "}
            </li>
          </ul>
          <ul>
            <li>
              <button className="button primary large">Large</button>
            </li>
            <li>
              <button className="button">Default</button>
            </li>
            <li>
              <button className="button small">Small</button>
            </li>
          </ul>
          <ul>
            <li>
              <button className="button primary fit">Fit</button>
            </li>
            <li>
              <button className="button fit">Fit</button>
            </li>
          </ul>
          <ul>
            <li>
              <button className="button primary fit small">Fit + Small</button>
            </li>
            <li>
              <button className="button fit small">Fit + Small</button>
            </li>
          </ul>
          <ul>
            <li>
              <button className="button primary">
                <span className="icon fas fa-search"></span>Icon
              </button>
            </li>
            <li>
              <button className="button">
                <span className="icon fas fa-download"></span>Icon
              </button>
            </li>
            <li>
              <button className="button small">
                <span className="icon fas fa-download"></span>Icon Small
              </button>
            </li>
          </ul>
          <ul>
            <li>
              <span className="button primary disabled">Primary</span>
            </li>
            <li>
              <span className="button disabled">Default</span>
            </li>
          </ul>
          <ul>
            <li>
              <button className="button primary disabled">Primary</button>
            </li>
            <li>
              <button className="button disabled">Default</button>
            </li>
          </ul>

          <hr />

          <h2>Form</h2>

          <form method="post" action="#">
            <div>
              <div>
                <label htmlFor="demo-name">Name</label>
                <input
                  type="text"
                  name="demo-name"
                  id="demo-name"
                  value=""
                  placeholder="Name"
                />
              </div>
              <div>
                <label htmlFor="demo-email">Email</label>
                <input
                  type="email"
                  name="demo-email"
                  id="demo-email"
                  value=""
                  placeholder="Email"
                />
              </div>

              <div>
                <label htmlFor="demo-category">Category</label>
                <select
                  name="demo-category"
                  id="demo-category"
                  defaultValue="0"
                >
                  <option value="0" disabled>
                    - Category -
                  </option>
                  <option value="1">Carrots</option>
                  <option value="2">Apples</option>
                  <option value="3">Oranges</option>
                  <option value="4">Grapes</option>
                </select>
              </div>

              <div>
                <input
                  type="radio"
                  id="demo-priority-low"
                  name="demo-priority"
                  checked
                />
                <label htmlFor="demo-priority-low">Low</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="demo-priority-normal"
                  name="demo-priority"
                />
                <label htmlFor="demo-priority-normal">Normal</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="demo-priority-high"
                  name="demo-priority"
                />
                <label htmlFor="demo-priority-high">High</label>
              </div>

              <div>
                <input type="checkbox" id="demo-copy" name="demo-copy" />
                <label htmlFor="demo-copy">Email me a copy</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="demo-human"
                  name="demo-human"
                  checked
                />
                <label htmlFor="demo-human">I am a human</label>
              </div>

              <div>
                <textarea
                  name="demo-message"
                  id="demo-message"
                  placeholder="Enter your message"
                  rows="6"
                ></textarea>
              </div>

              <div>
                <ul className="actions">
                  <li>
                    <input
                      type="submit"
                      value="Send Message"
                      className="primary"
                    />
                  </li>
                  <li>
                    <input type="reset" value="Reset" />
                  </li>
                </ul>
              </div>
            </div>
          </form>

          <hr />

          <h2>Preformatted</h2>
          <pre>
            <code>
              {`
              x = 0; 
              while (!foo.isNotBar()) {
                print 'Baz ' + x;
                qux.corge();
                x++;
              }
            `}
            </code>
          </pre>
        </section>
      </>
    </Layout>
  );
}
