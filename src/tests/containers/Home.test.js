import React from 'react';
import { shallow } from 'enzyme';

import BodyCssClass from '../../components/BodyCssClass';
import Home from '../../containers/Home';
import NavigationBar from '../../components/NavigationBar';

it('renders div, nav, and body', () => {
  const wrapper = shallow(<Home />);
  expect(wrapper.find('div').length).toEqual(1);
  expect(wrapper.find(NavigationBar).length).toEqual(1);
  expect(wrapper.find(BodyCssClass).length).toEqual(1);
  const body = wrapper.find(BodyCssClass).get(0);
  expect(body.props.cssClass).toEqual('Home-body');
});
