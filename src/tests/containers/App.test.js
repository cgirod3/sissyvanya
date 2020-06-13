import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import { shallow } from 'enzyme';

import About from '../../containers/About';
import App from '../../containers/App';
import Home from '../../containers/Home';

it('renders routes', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(BrowserRouter).length).toEqual(1);
  expect(wrapper.find(Switch).length).toEqual(1);
  expect(wrapper.find(Route).length).toEqual(2);
});

it('renders home route', () => {
  const wrapper = shallow(<App />);
  const homeRoute = wrapper.find(Route).get(0);
  expect(homeRoute.props.path).toEqual('/');
  expect(homeRoute.props.component).toEqual(Home);
});

it('renders about route', () => {
  const wrapper = shallow(<App />);
  const aboutRoute = wrapper.find(Route).get(1);
  expect(aboutRoute.props.path).toEqual('/about');
  expect(aboutRoute.props.component).toEqual(About);
});
