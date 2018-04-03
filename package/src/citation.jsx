import React from "react";
import PropTypes from "prop-types";

export default function citation(references, onSelectionDefault) {
  const sortedReferences = references.sort(function(a, b) {
    return a.citationKey > b.citationKey
      ? 1
      : b.citationKey > a.citationKey ? -1 : 0;
  });

  class Citation extends React.Component {
    constructor(props) {
      super(props);

      this.state = {};
    }

    getIndexOfIdentifier = identifier => {
      for (let r = 0; r < sortedReferences.length; r += 1) {
        if (sortedReferences[r].citationKey === identifier) {
          return r;
        }
      }
      return -2;
    };

    handleClick = event => {
      if (this.props.onSelection) {
        this.props.onSelection(event, this.props.identifier);
      }
      if (onSelectionDefault) {
        onSelectionDefault(event, this.props.identifier);
      }
    };

    render() {
      const { identifier, onSelection, ...rest } = this.props;

      return (
        <span onClick={this.handleClick} {...rest}>
          {`[${this.getIndexOfIdentifier(identifier) + 1}]`}
        </span>
      );
    }
  }

  Citation.propTypes = {
    identifier: PropTypes.string.isRequired,
    onSelection: PropTypes.func
  };

  Citation.defaultProps = {
    onSelection: null
  };

  return Citation;
}
