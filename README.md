# [react-component-academic-reference](https://www.npmjs.com/package/react-component-academic-reference)

A react component library for using and displaying academic references.

[View on npmjs.org](https://www.npmjs.com/package/react-component-academic-reference)

:exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation:

:exclamation::exclamation::exclamation:THIS IS CURRENTLY A WORK IN PROGRESS :exclamation::exclamation::exclamation:

:exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation:

 [GET IN TOUCH](https://www.georgegillams.co.uk/contact/) if you're interested in this component :smile:
 
 ![https://raw.githubusercontent.com/georgegillams/react-component-academic-reference/master/example/screenshot.png](https://raw.githubusercontent.com/georgegillams/react-component-academic-reference/master/example/screenshot.png)


## Usage

```js
import {
  citation,
  References,
  REFERENCE_STYLES
} from "react-component-academic-reference";

const myReferences = [
  {
    citationKey: 'SAMPLE1',
    entryType: 'ARTICLE',
    entryTags: { title: 'sample title', author: 'sample author' },
  },
  {
    citationKey: 'SAMPLE2',
    entryType: 'ARTICLE',
    entryTags: { title: 'sample title', author: 'sample author' },
  },
  {
    citationKey: 'SAMPLE3',
    entryType: 'ARTICLE',
    entryTags: { title: 'sample title', author: 'sample author' },
  },
];


const Cite = citation(myReferences);

const Article = props => (
  <main>
    Lorem ipsem dolor sit <Cite identifier="SAMPLE1" />.
    <br />
    <References
      referenceStyle={REFERENCE_STYLES.harvard}
      references={myReferences}
    />
  </main>
);
```

As time goes on I hope I / the open-source community will add support for multiple reference and citation formats.

## Compatibility

This is compatible with [bibtex-parse-js](https://www.npmjs.com/package/bibtex-parse-js), which converts bibtex to a JSON object. Usage of this component with [bibtex-parse-js](https://www.npmjs.com/package/bibtex-parse-js) can be seen  in the example app code [here](https://github.com/georgegillams/react-component-academic-reference/blob/master/example/src/App.js).

## Contributing

If you're interested in this project, please [get in touch](https://www.georgegillams.co.uk/contact/).
I will add details on how to contribute directly once I have implemented the basic features.

## Future Work

- Fix reference style to match Harvard specification
- Add different styles for Citations (ie `CITATION_STYLES`) so that citations can appear in a different format to `[3]`.
- Anything else you can think of 😉
- Add support for multiple identifiers per citation (to output `Some cited text [14, 20].`)
- ~~Alphabetise references by first word in the identifier (usually the author's last name)~~