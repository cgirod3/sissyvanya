import React from 'react';
import { shallow } from 'enzyme';

import About from '../../containers/About';

it('renders div and text', () => {
  const wrapper = shallow(<About />);
  expect(wrapper.find('div').length).toEqual(1);
  const div = wrapper.find('div').get(0);
  expect(div.props.children).toEqual('About');
});
