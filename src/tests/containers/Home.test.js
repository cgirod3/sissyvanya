import React from 'react';
import { shallow } from 'enzyme';

import Home from '../../containers/Home';

it('renders div and text', () => {
  const wrapper = shallow(<Home />);
  expect(wrapper.find('div').length).toEqual(1);
  const div = wrapper.find('div').get(0);
  expect(div.props.children).toEqual('Home');
});
