import React, { useState } from 'react';

import Icons from './Icons';
import MusicWindow from './MusicWindow';

import '../styles/components/Desktop.css';

// TODO: plan better scalability with these windows

const Desktop = () => {
  const [showMusic, setShowMusic] = useState(false);
  const [musicLeft, setMusicLeft] = useState(40);
  const [musicTop, setMusicTop] = useState(40);
  const [target, setTarget] = useState('');
  const [mouseDiffX, setMouseDiffX] = useState(0);
  const [mouseDiffY, setMouseDiffY] = useState(0);

  const handleMouseMove = (e) => {
    if (!target) return;
    setMusicLeft(e.pageX - mouseDiffX);
    setMusicTop(e.pageY - mouseDiffY);
  };

  const renderMusicWindow = () => {
    if (!showMusic) return null;

    const handleHeaderDown = (e) => {
      setMouseDiffX(e.pageX - musicLeft);
      setMouseDiffY(e.pageY - musicTop);
      setTarget('music');
    };

    return (
      <MusicWindow
        handleClose={ () => setShowMusic(false) }
        handleHeaderDown={ handleHeaderDown }
        left={ musicLeft }
        top={ musicTop }
      />
    );
  };

  return (
    <div
      className='Desktop'
      onMouseMove={ handleMouseMove }
      onMouseUp={ () => setTarget('') }
    >
      <Icons
        handleMusic={ () => setShowMusic(true) }
      />
      { renderMusicWindow() }
    </div>
  );
};

export default Desktop;
