import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import OutsiteClickWrapper from './OutsideClickWrapper';

import '../styles/components/Icon.css';

const Icon = (props) => {
  const { handleDoubleClick, imgAlt, imgSrc, isLast, text } = props;

  const [isOn, setIsOn] = useState(false);

  const handleClick = () => {
    if (isOn) handleDoubleClick();
    setIsOn(!isOn);
  };

  return (
    <OutsiteClickWrapper handleOutsideClick={ () => setIsOn(false) }>
      <div
        className={
          classnames('Icon', {
            'Icon-off': !isOn,
            'Icon-on': isOn,
            'u-marginRight10': !isLast
          })
        }
        onMouseDown={ handleClick }
      >
        <img alt={ imgAlt } className='Icon-img' src={ imgSrc } />
        <span className={
          classnames('Icon-text', {
            'Icon-text-off': !isOn,
            'Icon-text-on': isOn
          })
        }>
          { text }
        </span>
      </div>
    </OutsiteClickWrapper>
  );
};

Icon.propTypes = {
  handleDoubleClick: PropTypes.func,
  imgAlt: PropTypes.string,
  imgSrc: PropTypes.string.isRequired,
  isLast: PropTypes.bool,
  text: PropTypes.string.isRequired
};

Icon.defaultProps = {
  handleDoubleClick: () => {},
  imgAlt: 'sissy vanya',
  isLast: false
};

export default Icon;
