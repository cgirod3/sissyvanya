import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import '../styles/components/NavigationTab.css';

const NavigationTab = (props) => {
  const redirectToPage = () => {
    window.location = props.path;
  };

  return (
    <div
      className={
        classnames('NavigationTab', {
          'u-marginRight30': !props.isLast,
          'NavigationTab-noHover': !props.hovering,
          'NavigationTab-hoverTarget': props.hovering && props.isHoverTarget,
          'NavigationTab-hoverNeighbor': props.hovering && !props.isHoverTarget
        })
      }
      onClick={ redirectToPage }
      onMouseEnter={ props.onEnter }
      onMouseLeave={ props.onExit }
    >
      { props.text }
    </div>
  );
};

NavigationTab.propTypes = {
  hovering: PropTypes.bool,
  isHoverTarget: PropTypes.bool,
  isLast: PropTypes.bool,
  onEnter: PropTypes.func,
  onExit: PropTypes.func,
  path: PropTypes.string,
  text: PropTypes.string.isRequired
};

NavigationTab.defaultProps = {
  hovering: false,
  isHoverTarget: false,
  isLast: false,
  onEnter: () => {},
  onExit: () => {},
  path: '/'
};

export default NavigationTab;
