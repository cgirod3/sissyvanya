import PropTypes from 'prop-types';
import React from 'react';

import Window from './Window';

// import '../styles/components/MusicWindow.css';

const MusicWindow = (props) => {
  const {
    handleClose,
    handleHeaderDown,
    layer,
    left,
    top
  } = props;

  return (
    <Window
      handleClose={ handleClose }
      handleHeaderDown={ handleHeaderDown }
      layer={ layer }
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
  layer: PropTypes.number,
  left: PropTypes.number,
  top: PropTypes.number
};

MusicWindow.defaultProps = {
  handleHeaderDown: () => {},
  layer: -1,
  left: 40,
  top: 40
};

export default MusicWindow;
