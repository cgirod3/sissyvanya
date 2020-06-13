import { Component } from 'react';
import PropTypes from 'prop-types';
import withSideEffect from 'react-side-effect';

class BodyCssClass extends Component {
  render() {
    return this.props.children || null;
  }
}

BodyCssClass.propTypes = {
  cssClass: PropTypes.string.isRequired
};

// reducePropsToState is called with props of each mounted instance
const reducePropsToState = (propsList) => {
  let bodyCssClass = '';
  propsList.forEach(function (props) {
    bodyCssClass = props.cssClass;
  });
  return bodyCssClass;
};

const handleStateChangeOnClient = (className) => {
  document.body.className = className
};

export default withSideEffect(
  reducePropsToState,
  handleStateChangeOnClient
)(BodyCssClass);
