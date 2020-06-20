import PropTypes from 'prop-types';
import React, { useState } from 'react';

import '../styles/components/Window.css';

const Window = (props) => {
  const {
    children,
    handleClose,
    title
  } = props;

  const [top, setTop] = useState(40);
  const [left, setLeft] = useState(40);
  const [mouseDiffX, setMouseDiffX] = useState(0);
  const [mouseDiffY, setMouseDiffY] = useState(0);
  const [isTarget, setIsTarget] = useState(false);

  const handleMouseDown = (e) => {
    console.log('\n\nmouse down');
    setMouseDiffX(e.pageX - left);
    setMouseDiffY(e.pageY - top);
    setIsTarget(true);
  };

  const handleMouseMove = (e) => {
    console.log('\n\nmouse moving');
    if (!isTarget) return;
    console.log('target acquired');
    console.log(e.pageX);
    console.log(e.pageY);
    setTop(e.pageY - mouseDiffY);
    setLeft(e.pageX - mouseDiffX);
  }

  const handleMouseUp = () => {
    console.log('\n\nmouse up');
    setIsTarget(false)
  };

  return (
    <div
      className='Window'
      onMouseDown={ handleMouseDown }
      onMouseMove={ handleMouseMove }
      onMouseUp={ handleMouseUp }
      style={ {
        left,
        position: 'absolute',
        top
      } }
    >
      <div className='Window-header' onDrag={ (e) => console.log('\ne', e) }>
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
  handleClose: PropTypes.func,
  title: PropTypes.string.isRequired
};

Window.defaultProps = {
  handleClose: () => {}
};

export default Window;
