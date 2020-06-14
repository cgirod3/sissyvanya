import PropTypes from 'prop-types';
import React from 'react';

import '../styles/components/Growing.css';

const Growing = (props) => {
  return (
    <div className='Growing'>
      { props.children }
    </div>
  );
};

Growing.propTypes = {
  children: PropTypes.element.isRequired
};

export default Growing;
