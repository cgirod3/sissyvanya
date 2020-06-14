import React, { useState } from 'react';

import Growing from './Growing';
import Panning from './Panning';
import Spinning from './Spinning';

import '../styles/components/SexyBanner.css';

const SEXY_STATES = {
  PANNING: 'PANNING',
  SPINNING: 'SPINNING',
  GROWING: 'GROWING'
}

const STATE_TO_TEXT = {
  [SEXY_STATES.PANNING]: 'Click for sexy time ;)',
  [SEXY_STATES.SPINNING]: 'Are you sureeee? ;)',
  [SEXY_STATES.GROWING]: 'Ok then come on already :)'
};

const STATE_TO_PARENT = {
  [SEXY_STATES.PANNING]: Panning,
  [SEXY_STATES.SPINNING]: Spinning,
  [SEXY_STATES.GROWING]: Growing
};

const SexyBanner = () => {
  const [sexyState, setSexyState] = useState(SEXY_STATES.PANNING);

  const handleClick = () => {
    if (sexyState === SEXY_STATES.PANNING) {
      return setSexyState(SEXY_STATES.SPINNING);
    }

    if (sexyState === SEXY_STATES.SPINNING) {
      return setSexyState(SEXY_STATES.GROWING);
    }

    if (sexyState === SEXY_STATES.GROWING) {
      return window.location = 'https://www.youtube.com/watch?v=r2PzGGMDzLA';
    }
  };

  const Parent = STATE_TO_PARENT[sexyState];
  const text = STATE_TO_TEXT[sexyState];
  return (
    <Parent>
      <div className='SexyBanner' onClick={ handleClick }>
        <p className='SexyBanner-text'>{ text }</p>
      </div>
    </Parent>
  );
};

export default SexyBanner;
