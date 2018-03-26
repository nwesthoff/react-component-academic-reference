import React from "react";
import PropTypes from "prop-types";

export default function citation(references, onSelectionDefault) {
  class Citation extends React.Component {
    constructor(props) {
      super(props);

      this.state = {};
    }

    getIndexOfIdentifier = identifier => {
      for (let r = 0; r < references.length; r += 1) {
        if (references[r].citationKey === identifier) {
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
