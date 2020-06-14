import React, { useState } from 'react';

import NavigationTab from './NavigationTab';

import '../styles/components/NavigationBar.css';

const NavigationBar = () => {
  const [hoverIndex, setHoverIndex] = useState(-1);

  return (
    <div className='NavigationBar'>
      <NavigationTab
        hovering={ hoverIndex >= 0 }
        isHoverTarget={ hoverIndex === 0 }
        onEnter={ () => setHoverIndex(0) }
        onExit={ () => setHoverIndex(-1) }
        text='Home'
      />
      <NavigationTab
        hovering={ hoverIndex >= 0 }
        isHoverTarget={ hoverIndex === 1 }
        isLast={ true }
        onEnter={ () => setHoverIndex(1) }
        onExit={ () => setHoverIndex(-1) }
        path='/about'
        text='About'
      />
    </div>
  );
};

export default NavigationBar;
