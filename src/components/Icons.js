import React from 'react';

import Icon from './Icon';
import musicImg from '../assets/head.png';

import '../styles/components/Icons.css';

const Icons = () => {
  return (
    <div className='Icons'>
      <Icon imgAlt='music icon' imgSrc={ musicImg } text='Music' />
      <Icon imgAlt='video icon' imgSrc={ musicImg } text='Video' />
      <Icon imgAlt='soundboard icon' imgSrc={ musicImg } isLast={ true } text='Soundboard' />
    </div>
  );
};

export default Icons;
