import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  citation,
  References,
  REFERENCE_STYLES
} from "react-component-academic-reference";
const bibtexParse = require("bibtex-parse-js");

const myReferences = bibtexParse.toJSON(`
  @book{wu2010master,
author = {Wu, Tim},
title = {{The Master Switch: The Rise and Fall of Information Empires}},
publisher = {Alfred A. Knopf},
year = {2010},
series = {Borzoi Books},
pmid = {2010004137},
isbn = {9780307269935},
rating = {0},
date-added = {2017-11-20T17:57:27GMT},
date-modified = {2017-11-21T11:18:46GMT},
url = {https://books.google.co.uk/books?id=tKr0QwAACAAJ},
uri = {url{papers3://publication/uuid/4AE35FBC-F32D-4073-ACBC-D2042A78A51A}}
}

@article{Wu:2006fm,
author = {Wu, Tim},
title = {{Network Neutrality: Competition, Innovation, and Nondiscriminatory Access}},
journal = {SSRN Electronic Journal},
year = {2006},
doi = {10.2139/ssrn.903118},
language = {English},
rating = {0},
date-added = {2017-11-20T17:26:30GMT},
date-modified = {2017-11-20T17:26:31GMT},
url = {http://www.ssrn.com/abstract=903118},
uri = {url{papers3://publication/doi/10.2139/ssrn.903118}}
}

@techreport{OECD:2016bt,
author = {{OECD}},
title = {{Economic and Social Benefits of Internet Openness}},
year = {2016},
month = jun,
publisher = {OECD Publishing},
doi = {10.1787/5jlwqf2r97g5-en},
issn = {2071-6826},
language = {English},
rating = {0},
date-added = {2017-11-14T10:00:07GMT},
date-modified = {2017-11-15T13:50:57GMT},
url = {http://www.oecd-ilibrary.org/science-and-technology/economic-and-social-benefits-of-internet-openness_5jlwqf2r97g5-en},
local-url = {file://localhost/Users/georgegillams/Dropbox/Library.papers3/Files/A0/A053FD2C-746D-4FEE-AB03-AB74B4763138.pdf},
file = {{A053FD2C-746D-4FEE-AB03-AB74B4763138.pdf:/Users/georgegillams/Dropbox/Library.papers3/Files/A0/A053FD2C-746D-4FEE-AB03-AB74B4763138.pdf:application/pdf;A053FD2C-746D-4FEE-AB03-AB74B4763138.pdf:/Users/georgegillams/Dropbox/Library.papers3/Files/A0/A053FD2C-746D-4FEE-AB03-AB74B4763138.pdf:application/pdf}},
uri = {url{papers3://publication/doi/10.1787/5jlwqf2r97g5-en}}
}

  `);
const Cite = citation(myReferences);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">
            A simple create-react-app that demonstrates my Academic References
            component
          </h1>
        </header>
        <p className="App-intro">
          Here is a load of text, with some citations{" "}
          <Cite identifier="wu2010master" />. Citations are proven to increase
          the likelihood that people believe the stuff you're spouting{" "}
          <Cite identifier="Wu:2006fm" />.
          <br />
          Let's make the internet a better, more accountable place{" "}
          <Cite identifier="OECD:2016bt" />!
          <br />
          <br />
          Daily Mail, take note 😆
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <References references={myReferences} />
        </p>
      </div>
    );
  }
}

export default App;
