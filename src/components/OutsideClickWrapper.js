import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

// NOTE: Taken from https://stackoverflow.com/questions/32553158/detect-click-outside-react-component

const useOutsideAlerter = (ref, onOutsideClick) => {
  useEffect(() => {
    
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onOutsideClick();
      }
    };
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, onOutsideClick]);
};

/**
 * Component that alerts if you click outside of it
 */
const OutsideClickWrapper = (props) => {
  const { children, handleOutsideClick } = props;

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, handleOutsideClick);

  return (
    <div ref={ wrapperRef }>
      { children }
    </div>
  );
};

OutsideClickWrapper.propTypes = {
  children: PropTypes.element.isRequired,
  handleOutsideClick: PropTypes.func.isRequired
};

export default OutsideClickWrapper;
