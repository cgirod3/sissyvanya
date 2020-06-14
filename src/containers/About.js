import React from 'react';

import BodyCssClass from '../components/BodyCssClass';
import NavigationBar from '../components/NavigationBar';

import '../styles/containers/About.css';

const About = () => {
  return (
    <div>
      <BodyCssClass cssClass="About-body"/>
      <NavigationBar />
    </div>
  );
};

export default About;
