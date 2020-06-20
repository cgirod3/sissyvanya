import React, { useState } from 'react';

import Icons from './Icons';
import MusicWindow from './MusicWindow';

import '../styles/components/Desktop.css';

const Desktop = () => {
  const [showMusic, setShowMusic] = useState(false);

  const renderMusicWindow = () => {
    if (!showMusic) return null;

    return (
      <MusicWindow
        handleClose={ () => setShowMusic(false) }
      />
    );
  };

  return (
    <div className='Desktop'>
      <Icons
        handleMusic={ () => setShowMusic(true) }
      />
      { renderMusicWindow() }
    </div>
  );
};

export default Desktop;
