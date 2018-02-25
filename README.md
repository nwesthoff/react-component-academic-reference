# react-component-academic-reference
:exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation:

:exclamation::exclamation::exclamation:THIS IS CURRENTLY JUST AN IDEA. IF YOU WANT TO KNOW MORE, [GET IN TOUCH](https://www.georgegillams.co.uk/contact/) :exclamation::exclamation::exclamation:

:exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation::exclamation:

A react component library for using and displaying academic references.


This is a new project I have just started. I envisage that it will consist of a `citation` HOC and a `Reference` component, and that usage will go something along the lines of:

```js
import {citation, References, REFERENCE_TYPES} from 'react-component-academic-reference';

const myReferences = {
  ["watson:2009"]: {title: "asdf", type: "asdf", year: 2009 ...},
  ["li:2012"]: {title: "asdf", type: "asdf", year: 2012 ...},
  ["smith:2018"]: {title: "asdf", type: "asdf", year: 2018 ...},
  ...
}

const Cite = citation(myReferences);

...

return (
  ...
  
  some text blah blah watson said <Cite identifier="watson:2009" /> more text blah blah
  
  ...
  
  <References referenceClassName="..." className="..." style={REFERENCE_STYLES.HARVARD} references={myReferences} /> 
);
```

As time goes on I hope I / the open-source community will add support for multiple reference and citation formats.

## Contributing
If you're interested in this project, please [get in touch](https://www.georgegillams.co.uk/contact/).
I will add details on how to contribute directly once I have implemented the basic features.