import PropTypes from 'prop-types';
import React from 'react';

import '../styles/components/Window.css';

const Window = (props) => {
  const {
    children,
    handleClick,
    handleClose,
    handleHeaderDown,
    layer,
    left,
    title,
    top
  } = props;

  return (
    <div
      className='Window'
      onMouseDown={ handleClick }
      style={ {
        left,
        position: 'absolute',
        top,
        zIndex: layer
      } }
    >
      <div className='Window-header' onMouseDown={ handleHeaderDown }>
        <i className='Window-header-icon fa fa-close' onClick={ handleClose } />
        <div className='Window-header-text'>{ title }</div>
      </div>
      <div className='Window-body'>
        { children }
      </div>
    </div>
  );
};

Window.propTypes = {
  children: PropTypes.element.isRequired,
  handleClick: PropTypes.func,
  handleClose: PropTypes.func,
  handleHeaderDown: PropTypes.func,
  layer: PropTypes.number,
  left: PropTypes.number,
  title: PropTypes.string.isRequired,
  top: PropTypes.number
};

Window.defaultProps = {
  handleClick: () => {},
  handleClose: () => {},
  layer: -1
};

export default Window;
