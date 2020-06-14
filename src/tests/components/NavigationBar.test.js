import React from 'react';
import { shallow } from 'enzyme';

import NavigationBar from '../../components/NavigationBar';
import NavigationTab from '../../components/NavigationTab';

it('renders div and tabs', () => {
  const wrapper = shallow(<NavigationBar />);
  expect(wrapper.find('div').length).toEqual(1);
  expect(wrapper.find(NavigationTab).length).toEqual(2);
});

it('renders tabs with correct props', () => {
  const wrapper = shallow(<NavigationBar />);
  const homeTab = wrapper.find(NavigationTab).get(0);
  const aboutTab = wrapper.find(NavigationTab).get(1);
  expect(homeTab.props.text).toEqual('Home');
  expect(aboutTab.props.text).toEqual('About');
  expect(aboutTab.props.path).toEqual('/about');
  expect(aboutTab.props.isLast).toEqual(true);
});

// TODO: add tests for hover states
