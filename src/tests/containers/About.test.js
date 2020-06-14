import React from 'react';
import { shallow } from 'enzyme';

import About from '../../containers/About';
import BodyCssClass from '../../components/BodyCssClass';
import NavigationBar from '../../components/NavigationBar';

it('renders div and text', () => {
  const wrapper = shallow(<About />);
  expect(wrapper.find('div').length).toEqual(1);
  expect(wrapper.find(NavigationBar).length).toEqual(1);
  expect(wrapper.find(BodyCssClass).length).toEqual(1);
  const body = wrapper.find(BodyCssClass).get(0);
  expect(body.props.cssClass).toEqual('About-body');
});
