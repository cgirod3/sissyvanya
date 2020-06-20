import React from 'react';

import BodyCssClass from '../components/BodyCssClass';
import Desktop from '../components/Desktop';

import '../styles/containers/Home.css';

const Home = () => {
  return (
    <div className='Home'>
      <BodyCssClass cssClass="Home-body"/>
      <Desktop />
    </div>
  );
};

export default Home;
