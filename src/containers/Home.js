import React from 'react';

import BodyCssClass from '../components/BodyCssClass';
import NavigationBar from '../components/NavigationBar';

import '../styles/containers/Home.css';

const Home = () => {
  return (
    <div className='Home'>
      <NavigationBar />
      <BodyCssClass cssClass="Home-body"/>
    </div>
  );
};

export default Home;
