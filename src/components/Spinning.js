import PropTypes from 'prop-types';
import React from 'react';

import '../styles/components/Spinning.css';

const Spinning = (props) => {
  return (
    <div className='Spinning'>
      { props.children }
    </div>
  );
};

Spinning.propTypes = {
  children: PropTypes.element.isRequired
};

export default Spinning;
