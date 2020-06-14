import React from 'react';

import BodyCssClass from '../components/BodyCssClass';
import NavigationBar from '../components/NavigationBar';
import SexyBanner from '../components/SexyBanner';

import '../styles/containers/Home.css';

const Home = () => {
  return (
    <div className='Home'>
      <BodyCssClass cssClass="Home-body"/>
      <NavigationBar />
      <SexyBanner />
    </div>
  );
};

export default Home;
