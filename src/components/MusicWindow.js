import PropTypes from 'prop-types';
import React from 'react';

import Window from './Window';

// import '../styles/components/MusicWindow.css';

const MusicWindow = (props) => {
  const {
    handleClose,
    handleHeaderDown,
    left,
    top
  } = props;

  return (
    <Window
      handleClose={ handleClose }
      handleHeaderDown={ handleHeaderDown }
      left={ left }
      title='Music'
      top={ top }
    >
      <div>
        Music Window Body
      </div>
    </Window>
  );
};

MusicWindow.propTypes = {
  handleClose: PropTypes.func.isRequired,
  handleHeaderDown: PropTypes.func,
  left: PropTypes.number,
  top: PropTypes.number
};

export default MusicWindow;
