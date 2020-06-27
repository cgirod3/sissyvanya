import PropTypes from 'prop-types';
import React from 'react';

import Window from './Window';

// import '../styles/components/VideoWindow.css';

const VideoWindow = (props) => {
  const {
    handleClick,
    handleClose,
    handleHeaderDown,
    layer,
    left,
    top
  } = props;

  return (
    <Window
      handleClick={ handleClick }
      handleClose={ handleClose }
      handleHeaderDown={ handleHeaderDown }
      layer={ layer }
      left={ left }
      title='Video'
      top={ top }
    >
      <div>
        Video Window Body
      </div>
    </Window>
  );
};

VideoWindow.propTypes = {
  handleClick: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleHeaderDown: PropTypes.func,
  layer: PropTypes.number,
  left: PropTypes.number,
  top: PropTypes.number
};

VideoWindow.defaultProps = {
  handleHeaderDown: () => {},
  layer: -1,
  left: 80,
  top: 40
};

export default VideoWindow;
