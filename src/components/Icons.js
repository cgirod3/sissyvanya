import PropTypes from 'prop-types';
import React from 'react';

import Icon from './Icon';
import musicImg from '../assets/head.png';

import '../styles/components/Icons.css';

const Icons = (props) => {
  const { handleMusic, handleVideo } = props;

  return (
    <div className='Icons'>
      <Icon handleDoubleClick={ handleMusic } imgAlt='music icon' imgSrc={ musicImg } text='Music' />
      <Icon handleDoubleClick={ handleVideo } imgAlt='video icon' imgSrc={ musicImg } text='Video' />
      <Icon imgAlt='soundboard icon' imgSrc={ musicImg } isLast={ true } text='Soundboard' />
    </div>
  );
};

Icons.propTypes = {
  handleMusic: PropTypes.func,
  handleVideo: PropTypes.func
};

Icons.defaultProps = {
  handleMusic: () => {},
  handleVideo: () => {}
};

export default Icons;
