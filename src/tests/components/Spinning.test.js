import React from 'react';
import { shallow } from 'enzyme';

import Spinning from '../../components/Spinning';

it('renders div and children', () => {
  const wrapper = shallow(<Spinning><span>testing</span></Spinning>);
  expect(wrapper.find('div').length).toEqual(1);
  expect(wrapper.find('.Spinning').length).toEqual(1);
  expect(wrapper.find('span').length).toEqual(1);
  const span = wrapper.find('span').get(0);
  expect(span.props.children).toEqual('testing');
});
