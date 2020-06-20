import PropTypes from 'prop-types';
import React from 'react';

import Icon from './Icon';
import musicImg from '../assets/head.png';

import '../styles/components/Icons.css';

const Icons = (props) => {
  const { handleMusic } = props;

  return (
    <div className='Icons'>
      <Icon handleDoubleClick={ handleMusic } imgAlt='music icon' imgSrc={ musicImg } text='Music' />
      <Icon imgAlt='video icon' imgSrc={ musicImg } text='Video' />
      <Icon imgAlt='soundboard icon' imgSrc={ musicImg } isLast={ true } text='Soundboard' />
    </div>
  );
};

Icons.propTypes = {
  handleMusic: PropTypes.func
};

Icons.defaultProps = {
  handleMusic: () => {}
};

export default Icons;
