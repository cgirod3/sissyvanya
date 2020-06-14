import PropTypes from 'prop-types';
import React from 'react';

import '../styles/components/Panning.css';

const Panning = (props) => {
  return (
    <div className='Panning'>
      { props.children }
    </div>
  );
};

Panning.propTypes = {
  children: PropTypes.element.isRequired
};

export default Panning;
