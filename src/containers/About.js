import React from 'react';

import BodyCssClass from '../components/BodyCssClass';
import NavigationBar from '../components/NavigationBar';

import '../styles/containers/About.css';

const About = () => {
  return (
    <div>
      <NavigationBar />
      <BodyCssClass cssClass="About-body"/>
    </div>
  );
};

export default About;
