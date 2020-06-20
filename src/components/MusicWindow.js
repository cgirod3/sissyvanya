import PropTypes from 'prop-types';
import React from 'react';

import Window from './Window';

// import '../styles/components/MusicWindow.css';

const MusicWindow = (props) => {
  const { handleClose } = props;

  return (
    <Window
      handleClose={ handleClose }
      title='Music'
    >
      <div>
        Music Window Body
      </div>
    </Window>
  );
};

MusicWindow.propTypes = {
  handleClose: PropTypes.func.isRequired
};

export default MusicWindow;
