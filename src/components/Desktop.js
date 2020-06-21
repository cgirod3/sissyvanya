import React, { useState } from 'react';

import Icons from './Icons';
import MusicWindow from './MusicWindow';

import '../styles/components/Desktop.css';

const WINDOWS = {
  MUSIC: 'MUSIC',
  VIDEO: 'VIDEO'
};

const SUPPORTED_WINDOWS = [
  WINDOWS.MUSIC,
  WINDOWS.VIDEO
];

const WINDOW_COMPONENTS = {
  [WINDOWS.MUSIC]: MusicWindow,
  [WINDOWS.VIDEO]: MusicWindow
};

const updateLayers = (layers, w) => {
  layers = layers.filter(l => l !== w);
  layers.push(w);
  return layers;
};

const Desktop = () => {

  // Set window positions
  const [positions, setPositions] = useState(SUPPORTED_WINDOWS.reduce((acc, val) => {
    acc[val] = { left: 40, top: 40 };
    return acc;
  }, {}));

  // Set windows to hide by default
  const [on, setOn] = useState(SUPPORTED_WINDOWS.reduce((acc, val) => {
    acc[val] = false;
    return acc;
  }, {}));

  // Set the targeted window on mouse down
  const [target, setTarget] = useState('');

  // Set the mouse position and window position difference for dragging logic
  const [mouseDiffX, setMouseDiffX] = useState(0);
  const [mouseDiffY, setMouseDiffY] = useState(0);

  // Set initial layers for handling z-index of windows
  const [layers, setLayers] = useState([]);

  // Sets window target on mouse down of window header. Also moves window to highest z-index
  const handleHeaderDown = (e, w) => {
    setMouseDiffX(e.pageX - positions[w].left);
    setMouseDiffY(e.pageY - positions[w].top);
    setTarget(w);
  };

  // Render component for window (w) parameter
  const renderWindow = (w) => {
    if (!on[w]) return null;

    const WindowComponent = WINDOW_COMPONENTS[w];
    return (
      <WindowComponent
        handleClick={ () => setLayers(updateLayers(layers, w)) }
        handleClose={
          () => setOn({
            ...on,
            [w]: false
          })
        }
        handleHeaderDown={ (e) => handleHeaderDown(e, w) }
        layer={ layers.indexOf(w) + 1 }
        left={ positions[w].left }
        top={ positions[w].top }
      />
    );
  };

  // Handles setting targeted window position on drag
  const handleMouseMove = (e) => {
    if (!target) return;
    setPositions({
      ...positions,
      [target]: { left: e.pageX - mouseDiffX, top: e.pageY - mouseDiffY }
    })
  };

  // TODO: Handle scalability logic for Icons and windows

  return (
    <div
      className='Desktop'
      onMouseMove={ handleMouseMove }
      onMouseUp={ () => setTarget('') }
    >
      <Icons
        handleMusic={
          () => setOn({
            ...on,
            [WINDOWS.MUSIC]: true
          })
        }
        handleVideo={
          () => setOn({
            ...on,
            [WINDOWS.VIDEO]: true
          })
        }
      />
      { SUPPORTED_WINDOWS.map(w => renderWindow(w)) }
    </div>
  );
};

export default Desktop;
